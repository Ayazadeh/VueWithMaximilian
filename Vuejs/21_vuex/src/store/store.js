import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  /* 
    getting the data from out store through these getters makes sure that 
    there we don't have to rewrite the same code over and over again and with mapGetters,
    it's extremely easy to get easy access to our getters.
  */
  getters: {
    doubleCounter: (state) => state.counter * 2,
    stringCounter: (state) => state.counter + " Clicks",
  },
  mutations: {
    increment: (state, payload) => state.counter += payload,
    decrement: (state, payload) => state.counter -= payload,
  },
  actions: {
    increment: ({ commit }, payload) => commit("increment", payload), // add second argument as payload and use it in mutation
    decrement: ({ commit }, payload) => commit("decrement", payload),
    asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit("increment", payload.by);
      }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit("decrement", payload.by);
      }, payload.duration);
    },
  },
});
