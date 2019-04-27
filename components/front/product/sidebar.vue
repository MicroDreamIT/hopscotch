<template>
    <div class="sidebar">
        Filters
        <badger-accordion>
            <badger-accordion-item>
                <template slot="header">Ages</template>
                <template slot="content">
                    <mdb-list-group>
                        <mdb-list-group-item v-for="age in ages" :key="age">
                            <input type="checkbox" v-model="filterItems" :value="age">{{age}}
                        </mdb-list-group-item>
                    </mdb-list-group>
                </template>
            </badger-accordion-item>
        </badger-accordion>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
        props:['ages'],
        data(){
            return {
                filterItems:[]
            }
        },
        watch:{
            filterItems(val){
                // emit value from here

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>