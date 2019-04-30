<template>
  <div>
    <!--<mdb-container>-->
      <!--<vcl-facebook></vcl-facebook>-->
    <!--</mdb-container>-->
    <headers></headers>
    <nuxt />
    <footers></footers>
  </div>
</template>
<script>
  import Headers from '~/components/front/headers.vue'
  import Footers from '~/components/front/footers.vue'
  export default{
      components:{Headers, Footers},

  }
</script>

<style lang="scss">
    @import "./scss/app.scss";
    @font-face { font-family: averta; src: url(../assets/fonts/AvertaDemoRegular.otf); }
</style>
