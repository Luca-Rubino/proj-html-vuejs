<script>
import { store } from '../store.js';

export default {

    name: 'HeaderNavBar',
    data() {
        return {
            store,
            isShow: false,
        };
    },
    computed: {
        headerLogo() {
            console.log(this.store.header.logo);
            return this.store.headerLogo;
        },
        headerLinks() {
            console.log(this.store.header.links);
            return this.store.headerLinks;
        },
        headerDropDownTrainings(){
        console.log(this.store.headerDropDownTrainings);
        return this.store.headerDropDownTrainings;
    }
    },
    methods: {
        toggleDropdown(){
            this.showDropDown = !this.showDropdown;
            
        },
        showSideBar(){
            this.isShow = !this.isShow;
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
                    <a :href="link.url" @mouseover="link.text === 'trainings' && toggleDropdown()" @mouseleave="link.text === 'trainings' && toggleDropdown()"> {{ link.text }}</a>
                    <ul v-if="link.text === `trainings`" class="dropdown" v-show="showDropdown">
                        <li v-for="subLink in headerDropDownTrainings">
                            <a :href="subLink.url">{{ subLink.text }}</a>
                        </li>
                    </ul>
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
                    <p>Upcoming Events -></p>
                </button>
            </div>
        </div>
        
    </section>
    <section class="sideBar" :class="(isShow)? '' : 'sideHide'">
        <article class="prova">
            <div>

                <p>
                    gigi
                </p>
            </div>

        </article>
    </section>
</header>

</template>

<style lang="scss" scoped>
.sideBar{
    height: 200vh;
    width: 400px;
    position: absolute;
    background-color: black;
    left: 0;
    animation: prova 1s linear;
}




.sideHide{
    display: none;
}

.prova{
    position: relative;
    height: 100%;
    div{
        position: absolute;
        top: 50%;
        right: 60%;
        animation: prova2 .5s linear;
        p{
            color: white;
            font-size: 5rem;
        }

    }
}
@keyframes prova {
    0%{
        width: 0;
    }
    100%{
        width: 400px;
    }
    
}
@keyframes prova2 {
    0%{
        right: 100%;
    }
    100%{
        right: 60%;
    }
}


header{
    background-color: white;
    height: 95px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
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

            .dropdown {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                background: white;
                list-style: none;
                padding: 1rem;
                margin: 0;
                min-width: 100px;
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
    }

        img.helmet{
            height: 50px;
            filter: invert(1);
            margin-right: 1.5rem;
    }
    }
    

</style>