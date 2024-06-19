<script>

import AppMain from '../src/components/AppMain.vue';
import AppHeader from '../src/components/AppHeader.vue';
import AppFooter from '../src/components/AppFooter.vue';

export default{
    components:{
      AppMain,
      AppHeader,
      AppFooter
    },
      data() {
          return{
          }
      }
}

</script>

<template>

<AppHeader/>
<AppMain/>
<AppFooter/>

</template>

<style lang="scss">

@use './styles/general.scss';

</style>
