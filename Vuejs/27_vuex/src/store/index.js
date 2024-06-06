import { createStore } from 'vuex'

import productsModule from './modules/products'
import cartModule from './modules/cart'

const store = createStore({
    modules: {
        products: productsModule,
        cart: cartModule,
    },
})

export default store