<template>
    <div class="sidebar">
        <div class="d-flex justify-content-between p-3 border mt-4">
            <b>Filter</b>
            <b>Clear All</b>
        </div>

        <badger-accordion>
                <badger-accordion-item>
                    <template slot="header">Shop For </template>
                    <template slot="content">
                        <mdb-list-group>
                            <div class="custom-control custom-radio">
                                <input type="radio" class="custom-control-input" name="radio1" id="boys">
                                <label class="custom-control-label" for="boys">Boys</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" class="custom-control-input" name="radio1" id="girls">
                                <label class="custom-control-label" for="girls">Girls</label>
                            </div>
                        </mdb-list-group>
                    </template>
                </badger-accordion-item>
            </badger-accordion>

        <badger-accordion>
            <badger-accordion-item>
                <template slot="header">Ages</template>
                <template slot="content">
                    <div class="custom-control custom-checkbox" v-for="(age,index) in ages" :key="index">
                        <input type="checkbox" v-model="filterItems" :value="age" class="custom-control-input" :id="'ages'+index" multiple>
                        <label class="custom-control-label" :for="'ages'+index">{{age}}</label>
                    </div>
                </template>
            </badger-accordion-item>
        </badger-accordion>


        <badger-accordion>
            <badger-accordion-item>
                <template slot="header">Categories</template>
                <template slot="content">
                    <div class="form-group d-flex flex-column">
                        <label class="pt-1">Categories 1</label>
                        <label>Categories 1</label>
                        <label>Categories 1</label>
                        <label>Categories 1</label>
                        <label>Categories 1</label>

                    </div>
                </template>
            </badger-accordion-item>
        </badger-accordion>

        <badger-accordion>
            <badger-accordion-item>
                <template slot="header">Delivery Time  </template>
                <template slot="content">
                    <mdb-list-group>
                        <div class="custom-control custom-radio">
                            <input type="radio" class="custom-control-input" name="deleveryTime" id="weekOne">
                            <label class="custom-control-label" for="weekOne">In a Week 1</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input type="radio" class="custom-control-input" name="deleveryTime" id="weekTwo" >
                            <label class="custom-control-label" for="weekTwo">In a Week 2</label>
                        </div>
                    </mdb-list-group>
                </template>
            </badger-accordion-item>
        </badger-accordion>

        <badger-accordion>
            <badger-accordion-item>
                <template slot="header">Colour</template>
                <template slot="content">
                    <div class="custom-control custom-checkbox"  >
                        <input type="checkbox"  class="custom-control-input selectColor" id="red" multiple>
                        <label class="custom-control-label colorLabel" for="red">red</label>
                    </div>
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
                filterItems:[],
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

.component-badger-accordion.badger-accordion--initialized{
    padding: 6px 13px;
    display: block;
    border: 1px solid #dee2e6;
    margin-top: -1px;
    margin-bottom: 0!important;

}
</style>