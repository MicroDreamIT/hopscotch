<template>
    <div>
        <mdb-container>
            <mdb-row>
                <mdb-col md="3">
                    <sidebar></sidebar>
                </mdb-col>
                <mdb-col md="9">
                    <mdb-row>
                        <mdb-col md="12">
                            <ul>
                                <li v-for="name in filterList">
                                    {{name}}
                                </li>
                            </ul>
                        </mdb-col>
                    </mdb-row>
                    <product-list></product-list>
                </mdb-col>
            </mdb-row>
        </mdb-container>
    </div>
</template>

<script>
    import Sidebar from '~/components/front/product/sidebar.vue'
    import ProductList from '~/components/front/product/productList.vue'
    export default {
        name: "products",
        components:{
            Sidebar,ProductList
        },
        data(){
            return {
            }
        },
        created() {
            if(!this.$store.state.products.length){
                this.$store.dispatch('getProducts')
            }
        },
        computed:{
            filterList(){
                return this.$store.getters.sizesName
            }
        },
    }
</script>

<style scoped>
    .container{
        max-width: 1400px!important;
        margin: 0 auto!important;
    }
</style>