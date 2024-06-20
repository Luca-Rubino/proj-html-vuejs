<script>
import {store} from '../store.js';
import MainSixthArticle from './MainSixthArticle.vue'; 
import MainFirstGear from './MainFirstGear.vue'
import MainThirdCard from './MainThirdCard.vue'
import MainForth from './MainForth.vue';

export default{
    components:{
        MainFirstGear,
        MainThirdCard,
        MainSixthArticle,
        MainForth,
    },
    data() {
        return{
            store,
        }
    }
}

</script>

<template>
    <main>
        <MainFirstGear/>
        <MainThirdCard/>
        <MainSixthArticle/>
        <MainForth />
    </main>
</template>

<style lang="scss" scoped>

</style>