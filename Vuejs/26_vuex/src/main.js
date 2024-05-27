import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increse(state, payload) {
      state.counter += payload.value;
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
});

const app = createApp(App);

app.use(store);

app.mount('#app');
