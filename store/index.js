import Vue from 'vue'
Vue.use(require('vue-faker'))
const fakerSize = ['0-3 months', '3-6 months', '6-12 months', '12-15 month', '15-20 months']

export const state = () => ({
    products:[
        {
            id:Vue.faker().random.uuid(),
            name:Vue.faker().commerce.productName(),
            description:Vue.faker().lorem.paragraph(),
            attributes:{
                size:[
                    {id:Vue.faker().random.uuid(), size: Vue.faker().random.arrayElement(fakerSize), price:Vue.faker().commerce.price()}
                ],
            }
        }
    ]
})

export const mutations = {
    /* for ajax request for get products
    from the server. Here I have used
    another arg as null should be object
    contains logic for query
     */
    getProducts(state, arg=null){
        /* please start from axios.get()
        below lines are meant to be deleted unit axios.get
        */
        state.products = [
            {id:faker().random.uuid(), name:faker().commerce.name(), description:'hello world'}
        ]
        // axios.get()
    }
}