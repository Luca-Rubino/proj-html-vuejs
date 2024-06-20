<script>
import {store} from '../store.js';
import MainSixthArticle from './MainSixthArticle.vue'; 
import MainFirstGear from './MainFirstGear.vue'
import MainThirdCard from './MainThirdCard.vue';
import MainSpecialPacks from './MainSpecialPacks.vue';

export default{
    components:{
        MainFirstGear,
        MainThirdCard,
        MainSixthArticle,
        MainSpecialPacks,
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
        <MainSpecialPacks/>
    </main>
</template>

<style lang="scss" scoped>

</style>