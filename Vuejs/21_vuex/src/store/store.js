import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  /* 
    getting the data from out store through these gettersmmakes sure that 
    there we don't have to rewrite the same code over and over again and with mapGetters,
    it's extremely easy to get easy access to our getters.
  */
  getters: {
    doubleCounter: (state) => state.counter * 2,
    stringCounter: (state) => state.counter + " Clicks",
  },
});
