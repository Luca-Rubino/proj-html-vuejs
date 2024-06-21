<script>

import AppMain from '../src/components/AppMain.vue';
import AppHeader from '../src/components/AppHeader.vue';
import AppFooter from '../src/components/AppFooter.vue';
import KinetComponent from './components/KinetComponent.vue';

export default{
    components:{
      AppMain,
      AppHeader,
      AppFooter,
      KinetComponent
    },
      data() {
          return{
          }
      }
}

</script>

<template>
<KinetComponent/>
<AppHeader/>
<AppMain/>
<AppFooter/>

</template>

<style lang="scss">

@use './styles/general.scss';


</style>
