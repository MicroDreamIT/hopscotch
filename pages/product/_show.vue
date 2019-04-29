<template>
    <div>
        <mdb-container class="mt-5">
            <mdb-row class="bg-white pt-3 pb-3">
                <mdb-col col="7">
                    asdfdsaf
                </mdb-col>
                <mdb-col col="5">
                    <p>{{product.name}}</p>
                    <div v-if="selectedSize.hasOwnProperty('id')">
                        <strong class="text-danger ">${{withoutDiscountPrice}}</strong>
                        <strike>${{withDiscountPrice}}</strike>
                        <strong>{{selectedSize.discount? selectedSize.discount+'% off':''}}</strong>
                    </div>

                    <div class="form-group">
                        <div class="d-flex justify-content-between">
                            <strong>Size</strong>
                            <a href="#" class="pink-text">VIEW SIZE CHART</a>
                        </div>
                        <select class="form-control" v-model="selectedSize">
                            <option
                                    v-for="size in product.attributes.size"
                                    :key="size.id" :value="size"
                            >
                                {{size.name}}
                            </option>
                        </select>
                        <br>
                        <mdb-btn color="pink lighten-2" block>ADD TO CART</mdb-btn>
                    </div>

                    <div class="bg-grey-light p-3">
                        <div class="d-flex justify-between">
                            <strong>delivery to 769002</strong>
                            <a href="#" class="pink-text">EDIT PINCODE</a>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item bg-transparent">Get it by
                                <span class="badge badge-secondary">Secondary</span>
                            </li>
                            <li class="list-group-item bg-transparent">Cash on delivery</li>
                            <li class="list-group-item bg-transparent">15 days return</li>
                        </ul>
                    </div>
                    <badger-accordion>
                        <badger-accordion-item>
                            <template slot="header">Items details</template>
                            <template slot="content">
                                <div class="custom-control custom-checkbox">
                                    <strong>FEATURES</strong>
                                    <ul>
                                        <li>Fabric : 100% Cotton</li>
                                        <li>
                                            The actual product may differ slightly in color from
                                            the one illustrated in the images.
                                        </li>
                                    </ul>
                                    <strong>WHAT'S INCLUDED:</strong>
                                    <ul>
                                        <li>1 Top , 1 Skirt</li>
                                    </ul>
                                    <strong>CARE:</strong>
                                    <ul>
                                        <li>Gentle wash</li>
                                    </ul>
                                    <strong>Suitable For</strong>
                                    <ul>
                                        <li>Girls</li>
                                    </ul>
                                    <strong>Colour</strong>
                                    <ul>
                                        <li>Navy</li>
                                    </ul>
                                </div>
                            </template>
                        </badger-accordion-item>
                    </badger-accordion>

                    <badger-accordion>
                        <badger-accordion-item>
                            <template slot="header">By brand {{product.brand.name}}</template>
                            <!--<template slot="content">-->
                                <!--asdf-->
                            <!--</template>-->
                        </badger-accordion-item>
                    </badger-accordion>
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