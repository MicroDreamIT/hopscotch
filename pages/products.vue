<template>
    <div>
        <mdb-container>
            <mdb-row>
                <mdb-col class="col-lg-2 col-md-12 col-xs-12 on-sm-device">
                    <sidebar :ages="ages" class="on-sm-device"></sidebar>
                </mdb-col>
                <mdb-col class="col-lg-10 col-md-12 col-xs-12 contentArea ">
                        <mdb-col class="col-md-12 " >
                           <div class="d-flex mt-5 flex-wrap search-item-top on-sm-device">
                               <strong>Showing 78 Results for  </strong>
                               <div> 0-3 Months <span>X</span></div>
                               <div> 0-3 Months <span>X</span></div>
                               <div> 0-3 Months <span>X</span></div>
                               <!--<mdb-btn color="none" size="sm" rounded>Danger rounded </mdb-btn>-->
                               <!--<mdb-btn color="none" size="sm" rounded>Danger rounded </mdb-btn>-->
                               <!--<mdb-btn color="none" size="sm" rounded>Danger rounded </mdb-btn>-->
                               <!--<mdb-btn color="none" size="sm" rounded>Danger rounded </mdb-btn>-->
                               <!--<mdb-btn color="none" size="sm" rounded>Danger rounded </mdb-btn>-->
                           </div>
                            <div class="d-flex flex-wrap on-sm-device">
                                <mdb-btn color="pink" size="sm" rounded @click="triggerFilter(name)" v-for="name in ages" :key="name">
                                    {{name}}
                                </mdb-btn>
                            </div>
                            <!--<mdb-list-group horizontal>-->
                            <!--<mdb-list-group-item v-for="name in ages" :key="name" class="top-filter">-->
                                <!--<mdb-btn color="danger" size="sm" rounded @click="triggerFilter(name)">-->
                                    <!--{{name}}-->
                                <!--</mdb-btn>-->
                            <!--</mdb-list-group-item>-->
                        <!--</mdb-list-group>-->
                            <product-list></product-list>

                        </mdb-col>
                  
                   
                </mdb-col>
            </mdb-row>
        </mdb-container>
    </div>
</template>

<script>
    import Sidebar from '~/components/front/product/sidebar.vue'
    import ProductList from '~/components/front/product/productList.vue'
    export default {
        name: "products",
        components:{
            Sidebar,ProductList
        },
        data(){
            return {
            }
        },
        created() {
            if(!this.$store.state.products.length){
                this.$store.dispatch('getProducts')
            }
        },
        computed:{
            ages(){
                return this.$store.getters.sizesName
            }
        },
        methods:{
            triggerFilter(name){
                alert(name)
            }
        }
    }
</script>

<style scoped lang="scss">
    .top-filter{
        border: none !important;
    }

        .container {
            max-width: 1400px!important;
        }


</style>
