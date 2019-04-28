<template>
    <mdb-container class="mt-5">
        <mdb-row class="search-item">
            <div>Sort by:</div>
            <div>Popular</div>
            <div>Lowest Price</div>
            <div>Highest Price</div>


        </mdb-row>
        <mdb-row>
            <div class="d-flex flex-row p-2 product-item">
                <mdb-card class="pr-1" v-for="(item,index) in product" :key="index">

                    <nuxt-link :to="{name:'product-show', params:{show:item.id}}">click</nuxt-link>


                    <div @mouseover="showItem('item'+index)" @mouseleave="hideItem('item'+index)">
                        <img :src="item.images[0].path"
                             alt="Card image cap">
                        <!--{{product[0].images[0].path}}-->
                        <mdb-card-text>{{item.name}}</mdb-card-text>
                        <mdb-card-text>{{item.price-item.discount}} {{item.price}} {{item.discount}}</mdb-card-text>
                        <div :ref="'item'+index" class="item-hover">
                            <mdb-card>
                                <mdb-card-header>
                                    Get it in 1-2 weeks
                                </mdb-card-header>
                                <mdb-card-body>
                                    <mdb-card-text>Some quick example text to build on the cd's content.</mdb-card-text>
                                </mdb-card-body>
                                <mdb-card-footer>
                                    Select a Size
                                </mdb-card-footer>
                            </mdb-card>
                        </div>
                    </div>

                </mdb-card>
            </div>


        </mdb-row>
    </mdb-container>
</template>

<script>
    export default {
        name: "productList",
        data(){
            return{
                product:[]

        }
        },
        created(){
          this.product=this.$store.state.products;
        },
        methods: {
            showItem(item) {
                let itemElement=this.$refs[item][0].classList
                itemElement.add('hover-item')
            },
            hideItem(item){
                let itemElement=this.$refs[item][0].classList
                itemElement.remove('hover-item')
            }
        }
    }
</script>

<style scoped>
    .product-item {
        flex-wrap: wrap;
    }
    .product-item img {
        max-width: 100%;
        max-height: 100%;
    }
    .product-item p {
        padding: 5px 15px;
        font-size: 14px;
    }
    .product-item div {
        flex: 0 0 33.3333%;
    }
    p {
        margin: 0;
    }
    .item-hover {
        position: absolute;
        right: 0;
        bottom: 0;
        display: none;
    }
    .hover-item {
        display: block;
    }
    .search-item{
        display: flex;
        justify-content: flex-end;
    }
    .search-item div{
      padding-left: 10px;
        font-weight: 400;
        font-size: 14px;


    }
    .search-item div:last-child{
        padding-right: 35px;
    }
    .search-item ul{
        flex: 1;
        display: flex;
    }
    .search-item ul li{
        flex: 1;
        list-style: none;
    }
</style>