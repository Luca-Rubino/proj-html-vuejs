<script>
import {store} from '../store.js';
import MainCardsSlider from './MainCardsSlider.vue';


export default{

    components:{
        MainCardsSlider,
    },

    data(){

        return{
            store,
        }
    }
}

</script>

<template>
    <main>
        <h1>main</h1>
        <MainCardsSlider />
    </main>
</template>

<style lang="scss" scoped>

</style>
