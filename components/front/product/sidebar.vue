<template>
	<div class="sidebar bg-white">
		<div class="d-flex justify-content-between p-3 border mt-4">
			<b>Filter</b>
			<b>Clear All</b>
		</div>
		
		<badger-accordion>
			<badger-accordion-item>
				<template slot="header">Shop For</template>
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

			<badger-accordion-item>
				<template slot="header">Ages</template>
				<template slot="content">
					<div class="custom-control custom-checkbox" v-for="(age,index) in ages" :key="index">
						<input type="checkbox" v-model="filterItems" :value="age" class="custom-control-input"
						       :id="'ages'+index" multiple>
						<label class="custom-control-label" :for="'ages'+index">{{age}}</label>
					</div>
				</template>
			</badger-accordion-item>

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

			<badger-accordion-item>
				<template slot="header">Delivery Time</template>
				<template slot="content">
					<mdb-list-group>
						<div class="custom-control custom-radio">
							<input type="radio" class="custom-control-input" name="deleveryTime" id="weekOne">
							<label class="custom-control-label" for="weekOne">In a Week 1</label>
						</div>
						<div class="custom-control custom-radio">
							<input type="radio" class="custom-control-input" name="deleveryTime" id="weekTwo">
							<label class="custom-control-label" for="weekTwo">In a Week 2</label>
						</div>
					</mdb-list-group>
				</template>
			</badger-accordion-item>

			<badger-accordion-item>
				<template slot="header">Colour</template>
				<template slot="content">
					<div class="custom-control custom-checkbox">
						<input type="checkbox" class="custom-control-input selectColor" id="red" multiple>
						<label class="custom-control-label colorLabel" for="red">red</label>
					</div>
				</template>
			</badger-accordion-item>

			<badger-accordion-item>
				<template slot="header">Price</template>
				<template slot="content">
					<div class="custom-control custom-checkbox" v-for="(price,index) in prices" :key="index">
						<input type="checkbox" v-model="filterItems" :value="price" class="custom-control-input"
						       :id="'price'+index" multiple>
						<label class="custom-control-label" :for="'price'+index">{{price}}</label>
					</div>
				</template>
			</badger-accordion-item>

			<badger-accordion-item>
				<template slot="header">Discount</template>
				<template slot="content">
					<mdb-list-group>
						<div class="custom-control custom-radio" v-for="(discount,index) in discounts" :key="index">
							<input type="radio" class="custom-control-input" name="discount" :id="'discountss'+index">
							<label class="custom-control-label" :for="'discountss'+index">{{discount}}</label>
						</div>
					</mdb-list-group>
				</template>
			</badger-accordion-item>

			<badger-accordion-item>
				<template slot="header">Brands</template>
				<template slot="content">
					<div class="custom-control custom-checkbox" v-for="(age,index) in ages" :key="index">
						<input type="checkbox" v-model="filterItems" :value="age" class="custom-control-input"
						       :id="'ages'+index" multiple>
						<label class="custom-control-label" :for="'ages'+index">{{age}}</label>
					</div>
				</template>
			</badger-accordion-item>
		</badger-accordion>
	
	
	</div>
</template>

<script>
    export default {
        name: "sidebar",
        props: ['ages'],
        data() {
            return {
                prices: [
                    'Below 200',
                    '200-300',
                    '300-400',
                    '400-600',
                    'Above 600',
                ],
                discounts: [
                    '10% and above',
                    '20% and above',
                    '30% and above',
                    '40% and above',
                    '50% and above',
                ],
	            Brands:[
	            'AA','BB','CC','DD','EE','FF','GG'
	            ],
                filterItems: [],
            }
        },
        watch: {
            filterItems(val) {
                // emit value from here

            }
        }
    }
</script>

<style lang="scss" scoped>
	
	.component-badger-accordion.badger-accordion--initialized {
		padding: 6px 13px;
		display: block;
		border: 1px solid #dee2e6;
		margin-top: -1px;
		margin-bottom: 0 !important;
		
	}


</style>
