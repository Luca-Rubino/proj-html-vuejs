<script>
import { store } from '../store.js';

export default {

    name: 'HeaderNavBar',
    data() {
        return {
            store,
            showDropdown: false
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
        }
    }
};
</script>

<template>
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
        <div class="hamburger-menu">
                <i class="fa-solid fa-bars"></i>
        </div>
        <div class="button">
            <button class="ucEvents">
                <img class="helmet" :src="store.header.buttonLogo" alt="helmet">
                <p>Upcoming Events -></p>
            </button>
        </div>
    </section>

</template>

<style lang="scss" scoped>
    .navBar {
    background: white;
    color: black;
    padding: 1rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;

    .logo img {
        height: 85px;
    }

    .navLinks ul {
        list-style: none;
        display: flex;
        gap: 1rem;
        position: relative;

        .nav-item{
            position: relative;

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

                li {
                    padding: 0.5rem 1rem;

                    a{
                        color: black;
                        text-decoration: none;
                        display: block;
                    }

                    a:hover {
                        background-color: #b8b8b8;
                    }
                }
            }
        }

        &:hover .dropdown {
            display: block;
        }

        a {
            color: black;
            text-decoration: none;
            font-weight: 800;
            font-size: 1.2rem;
        }
    }
    
    button.ucEvents{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        color: white;
        height: 90px;
        width: 350px;
        font-weight: 1000;
        font-size: 1.2rem;
    }

    img.helmet{
        height: 50px;
        filter: invert(1);
        margin-right: 1.5rem;
    }
}
</style>