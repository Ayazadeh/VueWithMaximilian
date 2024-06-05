import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const countedStore = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter += payload.value;
    },
  },
  actions: {
    incrementAsync(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    increaseAsync(context, payload) {
      setTimeout(() => {
        context.commit('increase', payload);
      }, 1000);
    },
  },
  getters: {
    finalCounter: (state) => state.counter * 3,
    normalizedCounter: (state, getters) => {
      if (getters.finalCounter < 0) {
        return 0;
      } else if (getters.finalCounter > 100) {
        return 100;
      }
      return getters.finalCounter;
    },
  },
};

const store = createStore({
  modules:{
    number: countedStore
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    userIsAuthenticated: (state) => state.isLoggedIn,
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
