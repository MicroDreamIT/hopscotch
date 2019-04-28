<template>
    <div>
        <mdb-container>
            <mdb-row>
                <mdb-col md="3">
                    <sidebar :ages="ages"></sidebar>
                </mdb-col>
                <mdb-col md="9">
                    <mdb-row>
                        <mdb-col md="12">
                            <mdb-list-group horizontal>
                            <mdb-list-group-item v-for="name in ages" :key="name" class="top-filter">
                                <mdb-btn color="danger" size="sm" rounded @click="triggerFilter(name)">
                                    {{name}}
                                </mdb-btn>
                            </mdb-list-group-item>
                        </mdb-list-group>

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
            ages(){
                return this.$store.getters.sizesName
            }
        },
        methods:{
            triggerFilter(name){
                alert(name)
            }
        }
    }
</script>

<style scoped lang="scss">
    .top-filter{
        border: none !important;
    }

        .container {
            max-width: 1400px!important;
        }


</style>