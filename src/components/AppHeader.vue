<script>

import {store} from '../store.js';
import HeaderJumboTron from './HeaderJumboTron.vue';

export default{
    components: {
        HeaderJumboTron,
    },

    data() {
        return{
            store,
        }
    }
}

</script>

<template>
    <h1>navbar</h1>
    <HeaderJumboTron/>
</template>

<style scoped>

</style>
