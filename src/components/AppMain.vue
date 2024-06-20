<script>
import {store} from '../store.js';

import MainSixthArticle from './MainSixthArticle.vue'; 
import MainFirstGear from './MainFirstGear.vue'
import MainThirdCard from './MainThirdCard.vue';
import MainSpecialPacks from './MainSpecialPacks.vue';
import MainForth from './MainForth.vue';
import MainCardsSlider from './MainCardsSlider.vue';


export default{
    components:{
        MainFirstGear,
        MainThirdCard,
        MainSixthArticle,
        MainSpecialPacks,
        MainForth,
        MainCardsSlider,
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
        <MainCardsSlider />
        <MainThirdCard/>
        <MainForth/>
        <MainSpecialPacks/>
        <MainSixthArticle/>

    </main>
</template>

<style lang="scss" scoped>

</style>