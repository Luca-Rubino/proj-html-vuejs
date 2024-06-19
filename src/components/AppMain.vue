<script>
import {store} from '../store.js';
import MainSixthArticle from './MainSixthArticle.vue';

export default{
    components: {
        MainSixthArticle,
    },
    data() {
        return{
            store,
        }
    }
}
</script>

<template>
    <h1>main</h1>
    <MainSixthArticle />
</template>

<style scoped>
</style>
