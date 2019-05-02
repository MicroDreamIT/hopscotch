<template>
    <div class="product-list">
        <div class="filter-bar">
            <div class="items" @click="filterArea =! filterArea"><mdb-icon  icon="filter" /> filter</div>
            <div class="items">1045 items</div>
            <div class="items"><mdb-icon  icon="sort-alpha-up" /> sort </div>
        </div>
        <div v-if="filterArea" class="filterArea">
            <div class="items">
                <div @click="filterArea = false">x</div>
                <div>Filter</div>
                <div>Clear all</div>
            </div>
            <div class="items">
                dfsdfdsf
            </div>
            <div class="items">
                <mdb-btn block color="pink">Block level button</mdb-btn>
            </div>
        </div>
        <mdb-container>
            <mdb-row>
                <mdb-col class="col-lg-2 col-md-12 col-xs-12 on-sm-device">
                    <sidebar :ages="ages" class="on-sm-device" ></sidebar>
                </mdb-col>
                <mdb-col class="col-lg-10 col-md-12 col-xs-12 contentArea ">
                        <mdb-col class="col-md-12 " >
                           <div class="d-flex mt-5 flex-wrap search-item-top on-sm-device">
                               <span>Showing <strong>78</strong> Results for  </span>
                               <div> 0-3 Months <span>X</span></div>
                               <div> 0-3 Months <span>X</span></div>
                               <div> 0-3 Months <span>X</span></div>

                           </div>
                            <div class="product-top-slide">
                                <carousel :navText = "['','']" class="sort-item" :nav="true" :dots="false" :autoWidth="true">
                                    <mdb-btn
                                            color="pink"
                                            size="sm"
                                            class="cust-btn"
                                            rounded
                                            @click="triggerFilter(name)"
                                            v-for="name in ages" :key="name"
                                    >
                                        {{name}}
                                    </mdb-btn>
                                </carousel>
                            </div>
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
    import carousel from 'vue-owl-carousel'
    
    
    export default {
        name: "products",
        components:{
            Sidebar,ProductList,carousel
        },
        data(){
            return {
                filterArea:false,
                
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
            },
            
           
        }
    }
</script>


<style scoped lang="scss">
    .top-filter{
        border: none !important;
    }




</style>
