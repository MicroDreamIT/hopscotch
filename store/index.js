import Vue from 'vue'
Vue.use(require('vue-faker'))
const fakerSize = ['0-3 months', '3-6 months', '6-12 months', '12-15 month', '15-20 months']

export const state = () => ({
    products:[]
})
export const actions = {
    /* for ajax request for get products
    from the server. Here I have used
    another arg as null should be object
    contains logic for query
     */
    getProducts({commit}, arg=null){
        /* please start from axios.get()
        below lines are meant to be deleted unit axios.get
        */
        let products = [
            {
                id:Vue.faker().random.uuid(),
                name:Vue.faker().commerce.productName(),
                description:Vue.faker().lorem.paragraph(),
                price: Vue.faker().commerce.price(),
                discount:Vue.faker().random.number(),
                attributes:{
                    size:[
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:Vue.faker().random.number()
                        }
                    ],
                }
            },
            {
                id:Vue.faker().random.uuid(),
                name:Vue.faker().commerce.productName(),
                description:Vue.faker().lorem.paragraph(),
                price: Vue.faker().commerce.price(),
                discount:Vue.faker().random.number(),
                attributes:{
                    size:[
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:Vue.faker().random.number()
                        }
                    ],
                }
            },
            {
                id:Vue.faker().random.uuid(),
                name:Vue.faker().commerce.productName(),
                description:Vue.faker().lorem.paragraph(),
                price: Vue.faker().commerce.price(),
                discount:Vue.faker().random.number(),
                attributes:{
                    size:[
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:Vue.faker().random.number()
                        }
                    ],
                }
            },
            {
                id:Vue.faker().random.uuid(),
                name:Vue.faker().commerce.productName(),
                description:Vue.faker().lorem.paragraph(),
                price: Vue.faker().commerce.price(),
                discount:Vue.faker().random.number(),
                attributes:{
                    size:[
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:Vue.faker().random.number()
                        }
                    ],
                }
            },
            {
                id:Vue.faker().random.uuid(),
                name:Vue.faker().commerce.productName(),
                description:Vue.faker().lorem.paragraph(),
                price: Vue.faker().commerce.price(),
                discount:Vue.faker().random.number(),
                attributes:{
                    size:[
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:Vue.faker().random.number()
                        }
                    ],
                }
            },
        ]
        commit('productsList', products, arg)
        // axios.get()
    }
}

export const mutations = {
    productsList(state, arr, arg=null){
        state.products = arr
    }
}