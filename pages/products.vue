<template>
    <div class="product-list">
        <div class="filter-bar">
            <div class="items" @click="filterArea =! filterArea">
                <mdb-icon icon="filter"/>
                filter
            </div>
            <div class="items">1045 items</div>
            <div class="items">
                <mdb-icon icon="sort-alpha-up"/>
                sort
            </div>
        </div>
        <div v-if="filterArea" class="filterArea">
            <div class="items">
                <div @click="filterArea = false">x</div>
                <div>Filter</div>
                <div>Clear all</div>
            </div>
            <div class="items">
                <div class="tab">
                    <button class="tablinks" @click="openFilter('Shop')" id="defaultOpen">Shop for</button>
                    <button class="tablinks" @click="openFilter('Age')">Age</button>
                    <!--<button class="tablinks" @click="openFilter('Category')">Category</button>-->
                    <!--<button class="tablinks" @click="openFilter('Delivery')">Delivery</button>-->
                    <!--<button class="tablinks" @click="openFilter('Colour')">Coluor</button>-->
                    <!--<button class="tablinks" @click="openFilter('Price')">Price</button>-->
                    <!--<button class="tablinks" @click="openFilter('Discount')">Discount</button>-->
                </div>

                <div id="shop" class="tabcontent">
                    <h3>shop</h3>
                    <p>shop goes here</p>
                </div>
                <div id="Age" class="tabcontent">
                    <h3>Age</h3>
                    <p>Age goes here</p>
                </div>
	            <!--<div id="Category" class="tabcontent">-->
		            <!--<h3>Age</h3>-->
		            <!--<p>Age goes here</p>-->
	            <!--</div>-->

                <!--<div id="Delivery" class="tabcontent">-->
                    <!--<h3>Delivery</h3>-->
                    <!--<p>Delivery goes here</p>-->
                <!--</div>-->
                <!--<div id="Colour" class="tabcontent">-->
                    <!--<h3>Colour</h3>-->
                    <!--<p>Colour goes here</p>-->
                <!--</div>-->
                <!--<div id="Price" class="tabcontent">-->
                    <!--<h3>Price</h3>-->
                    <!--<p>Price goes here</p>-->
                <!--</div>-->

                <!--<div id="Discount" class="tabcontent">-->
                    <!--<h3>Discount</h3>-->
                    <!--<p>Discount goes here</p>-->
                <!--</div>-->
                



            </div>
            <div class="items">
                <mdb-btn block color="pink">Block level button</mdb-btn>
            </div>
        </div>
        <mdb-container>
            <mdb-row>
                <mdb-col class="col-lg-2 col-md-12 col-xs-12 on-sm-device">
                    <sidebar :ages="ages" class="on-sm-device"></sidebar>
                </mdb-col>
                <mdb-col class="col-lg-10 col-md-12 col-xs-12 contentArea ">
                    <mdb-col class="col-md-12 ">
                        <div class="d-flex mt-5 flex-wrap search-item-top on-sm-device">
                            <span>Showing <strong>78</strong> Results for  </span>
                            <div> 0-3 Months <span>X</span></div>
                            <div> 0-3 Months <span>X</span></div>
                            <div> 0-3 Months <span>X</span></div>

                        </div>
                        <div class="product-top-slide">
                            <carousel
                                    :navText="['','']"
                                    class="sort-item"
                                    :nav="true"
                                    :dots="false"
                                    :autoWidth="true"
                            >
                                <mdb-btn
                                        color="pink"
                                        size="sm"
                                        class="cust-btn"
                                        rounded
                                        @click="triggerFilter(name)"
                                        v-for="name in ages"
                                        :key="name"
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
        computed: {
            ages() {
                return this.$store.getters.sizesName
            }
        },
        updated(){
            document.getElementById("defaultOpen").click();
        },
        methods:{
            triggerFilter(name){
                alert(name)
            },
            openFilter(filterName){

                    var i, tabcontent, tablinks;
                    tabcontent = document.getElementsByClassName("tabcontent");
                    for (i = 0; i < tabcontent.length; i++) {
                        tabcontent[i].style.display = "none";
                    }
                    tablinks = document.getElementsByClassName("tablinks");
                    for (i = 0; i < tablinks.length; i++) {
                        tablinks[i].className = tablinks[i].className.replace(" active", "");
                    }
                    document.getElementById(filterName).style.display = "block";
                     event.currentTarget.className += " active";
            }

        }
    }

</script>


<style scoped lang="scss">
    .top-filter {
        border: none !important;
    }


    .tab {
        float: left;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
        width: 30%;
        height: 300px;
    }
    .tab button {
        display: block;
        background-color: inherit;
        color: black;
        padding: 22px 16px;
        width: 100%;
        border: none;
        outline: none;
        text-align: left;
        cursor: pointer;
        transition: 0.3s;
        font-size: 17px;
    }

    .tab button:hover {
        background-color: #ddd;
    }
    .tab button.active {
        background-color: #ccc;
    }
    .tabcontent {
        float: left;
        padding: 0px 12px;
        border: 1px solid #ccc;
        width: 70%;
        border-left: none;
        height: 300px;
    }

</style>
