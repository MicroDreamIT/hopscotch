<template>
  <div>
    <headers></headers>
    <div class="flex h-full justify-center mt-xl-5" v-if="!$store.state.products.length">
      <vcl-facebook
              :width="600"
              :height="200"
      ></vcl-facebook>
    </div>
    <nuxt/>
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
