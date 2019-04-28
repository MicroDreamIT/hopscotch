<template>
    <div>
        <mdb-container>
            <mdb-row>
                <mdb-col md="8">
                    testing
                </mdb-col>
                <mdb-col md="4">
                    <p>{{product.name}}</p>

                    <p>price detail</p>


                </mdb-col>
            </mdb-row>
        </mdb-container>
    </div>
</template>

<script>
    export default {
        name: "productShow",
        data(){
            return{
                product: this.$store.state.products[0]
            }
        },
        created(){

        }
    }
</script>

<style scoped>

</style>