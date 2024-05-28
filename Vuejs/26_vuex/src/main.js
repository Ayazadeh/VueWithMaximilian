import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increse(state, payload) {
      state.counter += payload.value;
    },
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },
  actions: {
    incrementAsync(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    increseAsync(context, payload) {
      setTimeout(() => {
        context.commit('increse', payload);
      }, 1000);
    },
    login(context){
      context.commit('setAuth', {isAuth: true})
    },
    logout(context){
      context.commit('setAuth', {isAuth: false})
    }
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
    userIsAuthenticated: state => state.isLoggedIn,
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
