<template>
    <div>
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
                <!-- Nav tabs -->
                <ul class="nav nav-tabs md-tabs nav-justified primary-color" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#panel555" role="tab">
                            <i class="fas fa-user pr-2"></i>Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#panel666" role="tab">
                            <i class="fas fa-heart pr-2"></i>Follow</a>
                    </li>
                </ul>
                <!-- Nav tabs -->
    
                <!-- Tab panels -->
                <div class="tab-content">
        
                    <!-- Panel 1 -->
                    <div class="tab-pane fade in show active" id="panel555" role="tabpanel">
            
                        <!-- Nav tabs -->
                        <div class="row">
                            <div class="col-md-3">
                                <ul class="nav md-pills pills-primary flex-column" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#panel21" role="tab">Downloads
                                            <i class="fas fa-download ml-2"></i>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#panel22" role="tab">Orders & invoices
                                            <i class="fas fa-file-alt ml-2"></i>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#panel23" role="tab">Billing details
                                            <i class="fas fa-address-card ml-2"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-9">
                                <!-- Tab panels -->
                                <div class="tab-content vertical">
                                    <!-- Panel 1 -->
                                    <div class="tab-pane fade in show active" id="panel21" role="tabpanel">
                                        <h5 class="my-2 h5">Panel 1</h5>
                                    </div>
                                    <!-- Panel 1 -->
                                    <!-- Panel 2 -->
                                    <div class="tab-pane fade" id="panel22" role="tabpanel">
                                        <h5 class="my-2 h5">Panel 2</h5>
                                    </div>
                                    <!-- Panel 2 -->
                                    <!-- Panel 3 -->
                                    <div class="tab-pane fade" id="panel23" role="tabpanel">
                                        <h5 class="my-2 h5">Panel 3</h5>
                                    </div>
                                    <!-- Panel 3 -->
                                </div>
                            </div>
                        </div>
                        <!-- Nav tabs -->
        
                    </div>
                    <!-- Panel 1 -->
        
                    <!-- Panel 2 -->
                    <div class="tab-pane fade" id="panel666" role="tabpanel">
            
                        <p class="pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta
                            doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat
                            ratione porro voluptate odit minima.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                            reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                            porro voluptate odit minima.</p>
        
                    </div>
                    <!-- Panel 2 -->
    
                </div>
                <!-- Tab panels -->
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
