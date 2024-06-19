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
            <img :src="headerLogo" alt="Logo">
        </div>
        <nav class="navLinks">
            <ul>    
                <li v-for="link in headerLinks" :key="link.text">
                    <a :href="link.url"> {{ link.text }}</a>
                </li>
            </ul>

        </nav>
        <div class="menu">

        </div>
    </section >

</template >

<style lang="scss" scoped>
.navBar {
    background: white;
    color: black;
    padding: 1rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

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
    }
  }


}
</style>

    