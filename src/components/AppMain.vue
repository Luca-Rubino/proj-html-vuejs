<script>
import {store} from '../store.js';
import MainSixthArticle from './MainSixthArticle.vue'; 
import MainFirstGear from './MainFirstGear.vue'
import MainThirdCard from './MainThirdCard.vue'

export default{
    components:{
        MainFirstGear,
        MainThirdCard,
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
    <main>
        <MainFirstGear/>
        <MainThirdCard/>
        <MainSixthArticle/>
    </main>
</template>

<style lang="scss" scoped>

</style>