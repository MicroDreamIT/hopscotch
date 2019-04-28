<template>
    <mdb-container class="mt-5">
        <mdb-row class="search-item on-sm-device">
            <div>Sort by:</div>
            <div>Popular</div>
            <div>Lowest Price</div>
            <div>Highest Price</div>


        </mdb-row>
        <mdb-row>
            <div class="d-flex flex-row p-2 product-item">
                <mdb-card  v-for="(item,index) in product" :key="index">
                    <div @mouseover="showItem('item'+index)" @mouseleave="hideItem('item'+index)">
                        <nuxt-link :to="{name:'product-show', params:{show:item.id}}">
                            <img src="../../../static/images/product-image2.PNG" alt="" >
                            <!--<img :src="item.images[0].path" alt="Card image cap"/>-->
                        </nuxt-link>

                        <!--<img :src="item.images[0].path"-->
                             <!--alt="Card image cap">-->
                        <!--<img src="../../../static/images/product-image2.PNG" alt="" >-->
                        <!--{{product[0].images[0].path}}-->
                        <div class="bottom-text">
                            <mdb-card-text>{{item.name}}</mdb-card-text>
                            <mdb-card-text>
                                {{'$ '}}{{item.price-(item.price*item.discount/100)}} <strike>{{'$ '}}{{item.price}}</strike>
                                <span class="discount">{{'('+item.discount+' % off)'}} </span>
                            </mdb-card-text>
                        </div>
                        <div :ref="'item'+index" class="item-hover">
                            <mdb-card>
                                <mdb-card-header class="cardHeader">
                                    <span class="text-center">Get it in 1-2 weeks</span>
                                </mdb-card-header>
                                <mdb-card-body>
                                    <div class="productAttributes">
                                        <span>Size</span>
                                        <span>View size chart</span>
                                    </div>
                                    <div class="d-flex flex-wrap pt-2">
                                        <mdb-btn rounded class="customBtnProduct" @click="cart">6-12
                                            month
                                        </mdb-btn>
                                        <mdb-btn rounded class="customBtnProduct" @click="cart">1-2
                                            years
                                        </mdb-btn>
                                        <mdb-btn rounded class="customBtnProduct" @click="cart">2-3
                                            years
                                        </mdb-btn>
                                        <mdb-btn rounded class="customBtnProduct" @click="cart">3-4
                                            years
                                        </mdb-btn>
                                    </div>

                                </mdb-card-body>
                                <mdb-card-footer class="productFooter">
                                    <div>
                                        <button class="addToCart" v-if="cartButton">Select a Size</button>
                                        <button class="addToCart" v-else>Add To Cart
                                        </button>
                                    </div>
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
        data() {
            return {
                product: [],
                cartButton: true,

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
                this.cartButton=true
                let itemElement=this.$refs[item][0].classList
                itemElement.remove('hover-item')
            },
            cart()
            {
                this.cartButton?this.cartButton=false:null
            }
        }
    }
</script>

<style scoped lang="scss">
    .card {
        border: 1px solid White;
        box-shadow: none;
    }
    .bottom-text .card-text{
        padding: 0;
        font-size: 13px;
    }
    .bottom-text .card-text .discount{
        color:green;
        font-weight: bold;
    }
    .bottom-text{
     padding: 12px 15px;
    }
    .addToCart{
        padding: 8px 0;
        color: #eae5e5;
        text-align: center;
        background: #ed54a4;
        width: 100%;
        display: block;
        font-size: 13px;
        outline:0;
    }
    .productFooter{
        padding: 0;
    }
    
    .customBtnProduct{
        background: none !important;
        padding: 6px 9px;
        color: #707070;
        font-size: 11px;
        box-shadow: none;
        border: 1px solid #707070a3;
        border-radius: 15px;
    }
    .customBtnProduct{
      &:hover{
          border:1px solid transparent;
          box-shadow: 0px 4px 15px #00000029;
          color:#ED54AC;
      }
    }
    .productAttributes{
        display: flex;
        justify-content: space-between;
    }
    .productAttributes span:first-child{
        color:black;
        font-size: 14px;
        font-weight: bold;
    }
    .productAttributes span:last-child{
        color:#ED54A4;
        font-size: 14px;
        font-weight: bold;
    }
    .cardHeader{
        padding: 2px 0;
        font-size: 12px;
        text-align: center;
        background: rgb(112, 112, 112);
        color: #fff;
    }
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
   
    p {
        margin: 0;
    }
    .item-hover {
        position: absolute;
        right: 0;
        bottom:60px;
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
