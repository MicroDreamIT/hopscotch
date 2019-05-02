<template>
  <div>
    <vue-content-loading :width="300" :height="100">
      <circle cx="30" cy="30" r="30" />
      <rect x="75" y="13" rx="4" ry="4" width="100" height="15" />
      <rect x="75" y="37" rx="4" ry="4" width="50" height="10" />
    </vue-content-loading>
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
