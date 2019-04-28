<template>
    <div>
        <mdb-container class="mt-5">
            <mdb-row bg-white>
                <mdb-col col="7">
                    asdfdsaf
                </mdb-col>
                <mdb-col col="5">
                    <p>{{product.name}}</p>
                    <div v-if="selectedSize.hasOwnProperty('id')">
                        <strong class="text-danger ">
                            {{withoutDiscountPrice}}</strong> <strike>{{withDiscountPrice}}</strike> <strong>{{selectedSize.discount? selectedSize.discount+'% off':''}}</strong>
                    </div>

                    <div class="form-group">
                        <div class="d-flex justify-content-between">
                            <strong>Size</strong>
                            <a href="#" class="pink-text">VIEW SIZE CHART</a>
                        </div>
                        <select class="form-control" v-model="selectedSize">
                            <option v-for="size in product.attributes.size" :key="size.id" :value="size">{{size.name}}</option>
                        </select>
                        <br>
                        <mdb-btn color="pink lighten-2" block>ADD TO CART</mdb-btn>
                    </div>

                    <div>

                    </div>
                </mdb-col>
            </mdb-row>
        </mdb-container>

    </div>
</template>

<script>
    export default{
        data(){
            return{
                product: this.$store.state.products[0],
                selectedSize:{}
            }
        },
        created(){
            this.selectedSize = this.getDefaultSize(this.product.attributes.size)
        },
        computed:{
            withoutDiscountPrice(){
                return this.selectedSize.price
            },
            withDiscountPrice(){
                let discount = parseFloat(this.selectedSize.discount)
                let price = parseFloat(this.selectedSize.price)

                return price - (price*discount/100).toFixed(2)
            }

        },
        methods:{
            getDefaultSize(size){
                return size.filter(val=>val.default)[0]
            },
        }
    }
</script>