<script>
import {store} from '../store.js';
import MainFirstGear from './MainFirstGear.vue'
import MainThirdCard from './MainThirdCard.vue'

export default{
    components:{
        MainFirstGear,
        MainThirdCard,
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
    </main>
</template>

<style lang="scss" scoped>

</style>
