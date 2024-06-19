<script>

import {store} from '../store.js';
import HeaderJumboTron from './HeaderJumboTron.vue';
import HeaderNavBar from './HeaderNavBar.vue';
export default{
    name: 'AppHeader',
    components: {
        HeaderNavBar,
        HeaderJumboTron,

    },

    data() {
        return{
            store,
        };
    }
};

</script>

<template>
    <HeaderNavBar/>
    <HeaderJumboTron/>
</template>

<style scoped>

</style>
