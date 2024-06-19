<script>
import {store} from '../store.js';
import MainFirstGear from './MainFirstGear.vue'

export default{
    components:{
        MainFirstGear,
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
    </main>
</template>

<style lang="scss" scoped>

</style>
