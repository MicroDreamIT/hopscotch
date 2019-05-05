<template>
    <div>
      <mdb-container class="cart-details">
          <mdb-row class="mt-lg-5 mb-lg-5">
              <mdb-col md="2"></mdb-col>
              <mdb-col md="5">
                 <div class="cart-header">
                        <span class="title">Cart</span>
                        <span class="circle"> </span>
                        <span class="count">{{cartItem.length}} items</span>

                        <mdb-dropdown class="ow-dropdown ow-right">
                            <mdb-dropdown-toggle slot="toggle">Enter pincode for delivery </mdb-dropdown-toggle>
                            <mdb-dropdown-menu>
                                <mdb-dropdown-item @click.prevent>
                                    <label>Enter a pincode</label><br>
                                    <input type="text"><br>
                                    <mdb-btn  class="bg-primary" size="sm">Check</mdb-btn>

                                </mdb-dropdown-item>

                            </mdb-dropdown-menu>
                        </mdb-dropdown>
                 </div>
                  <hr>
                 <div class="cart-body">
                    <template v-for="(item,index) in cartItem">
                        <div class="row">

                                <mdb-col md="2">
                                <img :src="item.image">
                                <select class="browser-default custom-select" v-model="item.quantity">
                                    <option value="1">Qty 1</option>
                                    <option value="2">Qty 2</option>
                                    <option value="3">Qty 3</option>
                                </select>

                            </mdb-col>
                                <mdb-col md="10">
                                    <a href="">{{item.title}}</a> <span class="ow-right">Arrives 10 May</span>
                                    <p>by {{item.created_by}}</p>
                                    <p class="ow-opacity-6">Size: {{item.size}}</p>
                                    <p>₹ {{(parseFloat(item.orginal_price)*parseInt(item.quantity))-((parseInt(item.quantity)*
                                        parseFloat(item.orginal_price))*parseFloat(item.discount))/100}}
                                        <strike>₹ {{parseInt(item.quantity)*parseFloat(item.orginal_price)}}</strike>
                                        <span class="text-success">{{item.discount}}% off</span>

                                        <a href="" class="ow-right" @click.prevent="deleteItem(index)">
                                            <mdb-icon far icon="trash-alt" /></a>
                                    </p>

                                </mdb-col>


                        </div>
                        <hr>
                    </template>




                </div>

                  <div class="cart-bottom mt-lg-5">
                      <div>
                          <mdb-icon icon="shipping-fast" class="f25 d-flex justify-content-center pb-4 pt-4" />
                          <h6>Free Shipping*</h6>
                          <span> On orders of ₹500 and above.Details</span>
                      </div>
                      <div>
                          <mdb-icon  icon="reply-all"  class="f25 d-flex justify-content-center pb-4 pt-4"/>
                          <h6>Easy returns</h6>
                          <span>Send items back for free within 15 days</span>
                      </div>
                      <div>
                          <mdb-icon  icon="shield-alt" class="f25 d-flex justify-content-center pb-4 pt-4" />
                          <h6>Secure shopping</h6>
                          <span>Your payment details are fully encrypted</span>
                      </div>
                  </div>


              </mdb-col>
              <mdb-col md="3" class="cart-side-item">
                  <h4> Price Summary</h4>
                  <span class="includes">Includes GST and all government taxes</span>
                      <div >
                          <p>Total item Price <span class="ow-right">$ {{totalItemPrice[0]}}</span></p>

                          <p>Item Discount <span class="ow-right">$ {{totalItemPrice[1]}}</span></p>
                          <p>Shipping fee <span class="ow-right">Free</span></p>
                          <hr>
                          <h5> Total <span class="ow-right">$ {{totalItemPrice[0]-totalItemPrice[1]}}</span></h5>
                      </div>
                      <mdb-btn color="primary" class="mt-lg-5" block @click="proceedItem">Proceed to checkout</mdb-btn>

              </mdb-col>
              <mdb-col md="2"></mdb-col>
          </mdb-row>
      </mdb-container>
    
    </div>
</template>

<script>
    export default{
        data(){

            return{
                cartItem:[
                    {image:'/_nuxt/static/images/sim-1.jpg',
                        title:'Navy Fish Print Half Sleeves T-Shirt A',
                        size:'6-12 months',quantity:1,orginal_price:2500,
                        discount:10,created_by:'TGX',date:'2019-10-05'},
                    {image:'/_nuxt/static/images/sim-1.jpg',
                        title:'Navy Fish Print Half Sleeves T-Shirt A',
                        size:'6-12 months',quantity:3,orginal_price:1500,
                        discount:20,created_by:'GFE', date:'2019-10-05'},
                    {image:'/_nuxt/static/images/sim-1.jpg',
                        title:'Navy Fish Print Half Sleeves T-Shirt A',
                        size:'6-12 months',quantity:2,orginal_price:1800,
                        discount:10, created_by:'NEO Rin',date:'2019-10-05'},
                ]
            }
        
        },
        computed:{
            totalItemPrice(){
                let total=0
                let discount =0
               this.cartItem.forEach(data=>{
                   let discountAmount =((parseInt(data.quantity)*parseFloat(data.orginal_price))*
                       parseFloat(data.discount))/100
                   total += (parseFloat(data.orginal_price)*parseInt(data.quantity))
                   discount+=discountAmount
               })

                return [total,discount]
            },
        },
        methods:{
            deleteItem(index){
                if(confirm('Are you sure?')){
                    this.cartItem.splice(index,1)
                }

            },
            proceedItem(){
                alert('I am ready to proceed with amount $ ' + (this.totalItemPrice[0]-this.totalItemPrice[1]))
            }
        }
    }
</script>
<style lang="scss" scoped="">

    .cart-bottom{
        display: flex;
        div{
            color: rgba(0,0,0,.56);
            background-color: rgba(221, 222, 224, 0.72);
            padding: 20px;
            margin-right: 15px;
            @media (max-width: 425px) {
                margin-right: 0px;
                margin-bottom: 15px;

            }
            &:last-child{
                margin-right: 0;
            }
            h6{
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 0;
            }
            span{
                font-size: 12px;
                line-height: 16px;
                letter-spacing: .4px;
            }
        }
        @media (max-width: 425px) {
            flex-direction: column;

        }
    }
    .cart-side-item{
        padding:0 60px;
        .includes{
            opacity: .3;
            font-size: 12px;
        }
        p{
            font-size: 14px;
            opacity: .7;
        }
        button{
            background: #ED54A4!important;
        }
        @media (max-width: 1024px) {

            padding:20px 0px;
        }
    }
    .cart-body{
        img{
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            text-align: center;
            align-items: center;
        }
        select{
            font-size: 10px;
        }

        a{
            color: rgba(49, 49, 49, 0.71);
            font-weight: 300;
            &:hover{
                text-decoration: underline;
            }
        }
    }
    .cart-header{

        .ow-dropdown{
            position: relative;
            span{
                font-size: 14px!important;

            }
            button{
                max-width: 300px;
                box-shadow: none;
                text-transform: none;

            }
            .dropdown-menu{
                position: absolute;
                top: -15px;
                right: 0;
            }

        }
        .title{
            opacity: .8;
            font-size: 32px;
            font-weight: 700;
            line-height: 1.25;
            color: #000;
            display: inline-block;
        }
        .count{
            opacity: .36;
            font-size: 20px;
            font-weight: 400;
            line-height: 1.2;
            color: #000;
            display: inline-block;
        }
        .circle{
            width: 4px;
            height: 4px;
            opacity: .12;
            background-color: #000;
            top: -4px;
            display: inline-block;
            position: relative;
            margin: 0 12px;
            border-radius: 4px;
        }
    }
    @media (max-width: 768px) {
        .cart-details{
            .row{
                display: inline;
            }
        }
        .col-md-5{
            max-width: 100%;
        }
        .col-md-3{
            max-width: 100%;
        }

    }
    @media (max-width: 1024px) {

        .col-md-10,.col-md-2{
         padding-left: 0px!important;
        }

    }

</style>