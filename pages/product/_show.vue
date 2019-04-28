<template>
    <div>
        <mdb-container class="mt-5">
            <mdb-row class="search-item">
                <mdb-col col="7">
                    asdfdsaf
                </mdb-col>
                <mdb-col col="5">
                    <p>White Stylish Half Sleeves Shirt And Suspender Style Shorts Sets</p>
                    <h5>$999 - $1,216</h5>

                    <div class="form-group">
                        <label>Default input</label>
                        <select class="form-control">
                            <option value="" disabled selected>Select a size</option>
                            <option>6-12 months</option>
                            <option>1-2 years</option>
                            <option>2-3 years</option>
                            <option>3-4 years</option>
                        </select>
                        <br>
                        <mdb-btn color="pink" block>ADD TO CART</mdb-btn>
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
            console.log(this.product.attributes.size)
            this.selectedSize = this.getDefaultSize(this.product.attributes.size)
        },
        methods:{
            getDefaultSize(size){
                return size.filter(val=>val.default)[0]
            },
        }
    }
</script>