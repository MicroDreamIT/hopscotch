<template>
  <div>
    <headers></headers>
    <nuxt />
    <footers></footers>
  </div>
</template>
<script>
  import Headers from '~/components/front/headers.vue'
  import Footers from '~/components/front/footers.vue'
  export default{
      components:{Headers, Footers}
  }
</script>
