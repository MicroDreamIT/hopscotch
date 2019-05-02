<template>

    <mdb-container>

      <mdb-row class="mt-5">
        <mdb-col md="4">
          <img src="https://static.hopscotch.in/fstatic/product/201904/ad2797ef-f844-430f-93d1-ba494b48630a_full.jpg?version=1556644603090"
               alt="" class="rounded-lg hv-slide-top lg:hover:shadow">

          <br>


        </mdb-col>
        <mdb-col md="4">
          <div class="group hv-slide-top lg:hover:shadow">
            <img src="https://static.hopscotch.in/fstatic/product/201904/d2984b4f-5a7b-4504-a6a0-e5a76111e4f4_full.jpg?version=1555478694854"
                 class="rounded-lg">
            <img src="https://static.hopscotch.in/fstatic/product/201904/a2032859-47cd-4563-b17c-621156f77a74_full.jpg?version=1555478701743"
                 class="rounded-lg">
            <img src="https://static.hopscotch.in/fstatic/product/201904/34a7ca88-64e7-4413-afde-dd3876a104ae_full.jpg?version=1555479220515"
                 class="rounded-lg">
          </div>
        </mdb-col>
        <mdb-col md="4">
          <div class="bg-hop-grey rounded-lg group hv-slide-top lg:hover:shadow">
            <h5 class="pt-4 pl-3">Deals of the Day</h5>
              <img src="https://static.hopscotch.in/fstatic/product/201905/90c6329d-239a-4d1e-9bcd-a4599fa473ae_full.jpg?version=1556771272968"
                   alt="">
            <img src="https://static.hopscotch.in/fstatic/product/201905/90c6329d-239a-4d1e-9bcd-a4599fa473ae_full.jpg?version=1556771272968"
                   alt="">
            <img src="https://static.hopscotch.in/fstatic/product/201905/90c6329d-239a-4d1e-9bcd-a4599fa473ae_full.jpg?version=1556771272968"
                   alt="">
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>

</template>

<script>
import Logo from '~/components/Logo.vue'
import ProductList from '~/components/front/product/productList.vue'
export default {
  components: {
    Logo,ProductList
  }
}
</script>

<style lang="scss" scoped>
  .hv-slide-top{
    &:hover{
      transform: translateY(-3px);
      transition: transform .2s ease-in;
    }
  }
</style>


