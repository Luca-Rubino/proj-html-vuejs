<script>
import { store } from '../store.js';

export default {

    name: 'HeaderNavBar',
    data() {
        return {
            store,
            isShow: false,
            isShowDrop: false,
        };
    },
    computed: {
        headerLogo() {
            // console.log(this.store.header.logo);
            return this.store.headerLogo;
        },
        headerLinks() {
            // console.log(this.store.header.links);
            return this.store.headerLinks;
        },
        headerDropDownTrainings(){
        // console.log(this.store.headerDropDownTrainings);
        return this.store.headerDropDownTrainings;
    }
    },
    methods: {
        toggleDropdown(){
            this.showDropDown = !this.showDropdown;
            
        },
        showSideBar(){
            this.isShow = !this.isShow;
        },
        showDropMenu(){
            this.isShowDrop = !this.isShowDrop;
        }
    }
};
</script>

<template>
    <header> 
        <section class="navBar">
            <div class="logo">
                <img :src="store.header.logo" alt="Logo">
            </div>
            <nav class="navLinks">
                <ul>
                    <li v-for="link in store.header.links">
                        <div :class="(link.text === 'Trainings') ? 'myPosition' : ''">
                            <a :href="link.url">{{ link.text }}</a>
                            <ul v-if="link.text == 'Trainings'" id="dropdown">
                                <li v-for="subLink in headerDropDownTrainings">
                                    <a :href="subLink.url">{{subLink.text}}</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        <div class="buttons">
            <div class="hamburger-menu">
                <i class="fa-solid fa-bars" @click="showSideBar"></i>
            </div>
            <div class="button">
                <button class="ucEvents">
                    <img class="helmet" :src="store.header.buttonLogo" alt="helmet">
                    <p>Upcoming Events <i class="fa-solid fa-arrow-right"></i></p>
                </button>
            </div>
        </div>
        
    </section>
    <section class="sideBar" :class="(isShow)? '' : 'sideHide'">
        <article class="container">
            <div class="sideLogo">
                <img :src="store.header.onlyLogo" alt="logo">
            </div> 
            <div class="contacts">
                <h1>
                Contact Information
                </h1>
                <span class="icon">
                    <i class="fa-solid fa-phone-volume"></i>
                </span>
                <p>+1 (234) 567 89 10</p>
                <span class="icon">
                    <i class="fa-regular fa-envelope"></i>
                </span>
                <p>example@example.com</p>
                <span class="icon">
                    <i class="fa-solid fa-map-location-dot"></i>
                </span>
                <p>New Jersey, USA</p>
            </div>
            <div class="socialIcons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>    
            
            <div class="credits">
                <p>&#169 2022 - Gobike</p>
            </div>
        </article>
    </section>
</header>

</template>

<style lang="scss" scoped>
        #dropdown {
            display: none;
            position: absolute;
            top: 100%;
            left: 33%;
            background: white;
            list-style: none;
            padding: 1rem;
            margin-top:.3rem;
            min-width: 100px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

                li{
                    margin-bottom: .5rem;
                    
                }
        }
    .myPosotion{
        position: relative;
    }

    .myPosition:hover #dropdown {
        display: block;
    }



.sideBar{
    height: 200vh;
    width: 400px;
    position: absolute;
    background-color: white;
    box-shadow: 0 15px 15px;
    left: 0;
    animation: slide .5s ease-in;
    color: black;
}


.sideHide{
    display: none;
}

.container{
    position: relative;
    height: 100%;
    div{
        position: absolute;
        top: 50%;
        right: 30%;
        animation: slide2 .8s ease-in;
        img{
            height: 150px;
            width: 160px;        
        }
    }
}

.contacts{
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    margin-top: 150px;
    margin-left: 50px;
    margin-right: -50px;
    h1{
        font-size: 1.8rem;
        margin-top: 3rem;
        font-weight: 700;
    }
    p{
        font-size: 1.2rem;
    }
    i{
        font-size: 3rem;
        background-color: black;
        border-radius: 5px;
        color: white;
        padding: 1rem;
    }
}

.socialIcons{
    display: flex;
    margin-top: 710px;
    margin-right: 25px;
    i{
        font-size: 2rem;
        margin-right: .8rem
    }
}

.credits{
    margin-top: 800px;
    margin-right: 35px;
}

@keyframes slide {
    0%{
        width: 0;
    }
    100%{
        width: 400px;
    }
    
}
@keyframes slide2 {
    0%{
        right: 100%;
    }
    100%{
        right: 30%;
    }
}


header{
    background-color: white;
    height: 95px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 6;
    display: flex;
    align-items: center;
    justify-content: center;
}
    .navBar {
        position: relative;
        color: black;
        padding: 1rem 0;
        height: 95px;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;

    i {
        color: rgb(97, 97, 97);
        cursor: pointer;
        font-size: 1.5rem;
    }


        .logo img {
            height: 80px;
            margin-left: 2rem;
        }

        .navLinks ul {
            list-style: none;
            display: flex;
            gap: 2rem;
            position: relative;

            .nav-item{
                position: relative;
            }

                    li:after {
                        content: "";
                        position: absolute;
                        width: 0%;
                        height: 3px;
                        display: block;
                        transition: all 0.3s ease;
                        top: 1.3rem;
                        border-radius: 15px;
                    }

                    li:hover:after {
                        width: 40px;
                        height: 3px;
                        background-color: black;
                    }

                    a{
                        color: black;
                        text-decoration: none;
                        display: block;
                    }

                }
            }
        a {
            color: black;
            text-decoration: none;
            font-weight: 700;
            font-size: 1rem;
            
        }

    div.buttons{
        display: flex;
        align-items: center;
        gap: 2rem;


        button.ucEvents{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
            color: white;
            height: 75px;
            width: 300px;
            font-weight: 1000;
            font-size: 1.2rem;
            border-radius: 5px;
            cursor: pointer;
            border: transparent;

            i{
                color: white;
            }
    }

        img.helmet{
            height: 50px;
            filter: invert(1);
            margin-right: 1.5rem;
    }
    }
    

</style>