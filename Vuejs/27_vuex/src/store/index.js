import { createStore } from 'vuex';

import productsModule from './modules/products';
import cartModule from './modules/cart';

const store = createStore({
  modules: {
    products: productsModule,
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations:{
    login(state){
      state.isLoggedIn = true;
    },
    logout(state){
      state.isLoggedIn = false;
    }
  },
  actions: {
    loginAction(context){
      context.commit('login');
    },
    logoutAction(context){
      context.commit('logout');
    },
  },
  getters:{
    isAuthenticated: (state) => state.isLoggedIn,
  }
});

export default store;
