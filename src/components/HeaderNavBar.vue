<script>
import { store } from '../store.js';

export default {

    name: 'HeaderNavBar',
    data() {
        return {
            store
        };
    },
    computed: {
        headerLogo() {
            return this.store.headerLogo;
        },
        headerLinks() {
            return this.store.headerLinks;
        }
    }
};
</script>

<template>
    <section class="navBar">
        <div class="logo">
            <img :src="store.headerLogo" alt="Logo">
        </div>
        <nav class="navLinks">
            <ul>
                <li v-for="link in headerLinks" :key="link.text">
                    <a :href="link.url"> {{ link.text }}</a>
                </li>
            </ul>

        </nav>
        <div class="hamburger-menu" @click="toggleMobileMenu">
                <i class="fa-solid fa-bars"></i>
        </div>
        <div class="button">
            <button class="ucEvents">
                <img class="helmet" :src="store.headerButtonLogo" alt="helmet">
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