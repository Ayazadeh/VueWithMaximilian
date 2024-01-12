/* 
  getting the data from out store through these getters makes sure that 
  there we don't have to rewrite the same code over and over again and with mapGetters,
  it's extremely easy to get easy access to our getters.
*/
import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";
// import value from "./modules/value";

import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0,
  },
  getters,
  mutations,
  actions,
  modules: {
    counter,
    // value,
  },
});
