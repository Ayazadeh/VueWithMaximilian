import * as types from "../types";

const state = {
  counter: 0,
};

const getters = {
  // doubleCounter: (state) => state.counter * 2,
  // stringCounter: (state) => state.counter + " Clicks",

  // using types.DOUBLE_COUNTER as a key, we can access the DOUBLE_COUNTER
  // this will in the end be a string name here, we just use the square brackets to do that dynamically
  [types.DOUBLE_COUNTER]: (state) => state.counter * 2,
  [types.CLICK_COUNTER]: (state) => state.counter + " Clicks",
};

const mutations = {
  [types.MUTATE_INCREMENT_COUNTER]: (state, payload) =>
    (state.counter += payload),
  [types.MUTATE_DECREMENT_COUNTER]: (state, payload) =>
    (state.counter -= payload),
};

const actions = {
  [types.COUNTER_INCREMENT]: ({ commit }, payload) =>
    commit(types.MUTATE_INCREMENT_COUNTER, payload), // add second argument as payload and use it in mutation

  [types.COUNTER_DECREMENT]: ({ commit }, payload) =>
    commit(types.MUTATE_DECREMENT_COUNTER, payload),

  [types.COUNTER_INCREMENT_ASYNC]: ({ commit }, payload) => {
    setTimeout(() => {
      commit(types.MUTATE_INCREMENT_COUNTER, payload.by);
    }, payload.duration);
  },

  [types.COUNTER_DECREMENT_ASYNC]: ({ commit }, payload) => {
    setTimeout(() => {
      commit(types.MUTATE_DECREMENT_COUNTER, payload.by);
    }, payload.duration);
  },
};

/**
 * Exports the Vuex store configuration for the counter module.
 *
 * Contains the state, getters, mutations and actions for
 * managing a counter value in the store.
 */
export default {
  state,
  getters,
  mutations,
  actions,
};
