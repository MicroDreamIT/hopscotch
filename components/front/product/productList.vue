<template>
    <mdb-container class="mt-5">
        <mdb-row>
            <div class="d-flex flex-row p-2 product-item">
                <mdb-card class="pr-1">
                    <div @mouseover="showItem('item1')" @mouseleave="hideItem('item1')">
                        <img src="../../../static/images/product-image.PNG"
                             alt="Card image cap">
                        <mdb-card-text>Cap Sleeves Top with Shorts and Headband ...</mdb-card-text>
                        <mdb-card-text>₹337 ₹529 (36% off)</mdb-card-text>
                        <div ref="item1" class="item-hover">
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
                <mdb-card class="pr-1">
                    <div>
                        <img src="../../../static/images/product-image2.PNG"
                             alt="Card image cap">
                        <mdb-card-text>Cap Sleeves Top with Shorts and Headband ...</mdb-card-text>
                        <mdb-card-text>₹337 ₹529 (36% off)</mdb-card-text>
                        <div ref="item2" class="item-hover">
                            <mdb-card >
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
                <mdb-card class="pr-1">
                    <img src="../../../static/images/product-image.PNG"
                         alt="Card image cap">
                    <mdb-card-text>Cap Sleeves Top with Shorts and Headband ...</mdb-card-text>
                    <mdb-card-text>₹337 ₹529 (36% off)</mdb-card-text>
                    <div class="item-hover">
                        <mdb-card ref="item3">
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
                </mdb-card>

                <mdb-card class="pr-1">

                    <img src="../../../static/images/product-image2.PNG"
                         alt="Card image cap">
                    <mdb-card-text>Cap Sleeves Top with Shorts and Headband ...</mdb-card-text>
                    <mdb-card-text>₹337 ₹529 (36% off)</mdb-card-text>
                </mdb-card>
                <mdb-card class="pr-1">
                    <img src="../../../static/images/product-image.PNG"
                         alt="Card image cap">
                    <mdb-card-text>Cap Sleeves Top with Shorts and Headband ...</mdb-card-text>
                    <mdb-card-text>₹337 ₹529 (36% off)</mdb-card-text>
                </mdb-card>
                <mdb-card class="pr-1">
                    <img src="../../../static/images/product-image2.PNG"
                         alt="Card image cap">
                    <mdb-card-text>Cap Sleeves Top with Shorts and Headband ...</mdb-card-text>
                    <mdb-card-text>₹337 ₹529 (36% off)</mdb-card-text>
                </mdb-card>
                <mdb-card class="pr-1">
                    <img src="../../../static/images/product-image.PNG"
                         alt="Card image cap">
                    <mdb-card-text>Cap Sleeves Top with Shorts and Headband ...</mdb-card-text>
                    <mdb-card-text>₹337 ₹529 (36% off)</mdb-card-text>
                </mdb-card>
                <mdb-card class="pr-1" style="flex-wrap: wrap;">

                    <img src="../../../static/images/product-image.PNG"
                         alt="Card image cap">
                    <mdb-card-text>Cap Sleeves Top with Shorts and Headband ...</mdb-card-text>
                    <mdb-card-text>₹337 ₹529 (36% off)</mdb-card-text>
                </mdb-card>
                <mdb-card class="pr-1">
                    <img src="../../../static/images/product-image2.PNG"
                         alt="Card image cap">
                    <mdb-card-text>Cap Sleeves Top with Shorts and Headband ...</mdb-card-text>
                    <mdb-card-text>₹337 ₹529 (36% off)</mdb-card-text>
                </mdb-card>
                <mdb-card class="pr-1">
                    <img src="../../../static/images/product-image.PNG"
                         alt="Card image cap">
                    <mdb-card-text>Cap Sleeves Top with Shorts and Headband ...</mdb-card-text>
                    <mdb-card-text>₹337 ₹529 (36% off)</mdb-card-text>
                </mdb-card>

                <mdb-card class="pr-1">

                    <img src="../../../static/images/product-image2.PNG"
                         alt="Card image cap">
                    <mdb-card-text>Cap Sleeves Top with Shorts and Headband ...</mdb-card-text>
                    <mdb-card-text>₹337 ₹529 (36% off)</mdb-card-text>
                </mdb-card>
                <mdb-card class="pr-1">
                    <img src="../../../static/images/product-image.PNG"
                         alt="Card image cap">
                    <mdb-card-text>Cap Sleeves Top with Shorts and Headband ...</mdb-card-text>
                    <mdb-card-text>₹337 ₹529 (36% off)</mdb-card-text>
                </mdb-card>
                <mdb-card class="pr-1">
                    <img src="../../../static/images/product-image2.PNG"
                         alt="Card image cap">
                    <mdb-card-text>Cap Sleeves Top with Shorts and Headband ...</mdb-card-text>
                    <mdb-card-text>₹337 ₹529 (36% off)</mdb-card-text>
                </mdb-card>
                <mdb-card class="pr-1">
                    <img src="../../../static/images/product-image.PNG"
                         alt="Card image cap">
                    <mdb-card-text>Cap Sleeves Top with Shorts and Headband ...</mdb-card-text>
                    <mdb-card-text>₹337 ₹529 (36% off)</mdb-card-text>
                </mdb-card>
            </div>


        </mdb-row>
    </mdb-container>
</template>

<script>
    export default {
        name: "productList",
        methods: {
            showItem(item) {
                let itemElement=this.$refs[item].classList
              itemElement.add('hover-item')
            },
            hideItem(item){
                let itemElement=this.$refs[item].classList
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
</style>