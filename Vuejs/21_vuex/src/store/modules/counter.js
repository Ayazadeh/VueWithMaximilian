const state = {
  counter: 0,
};

const getters = {
  doubleCounter: (state) => state.counter * 2,
  stringCounter: (state) => state.counter + " Clicks",
};

const mutations = {
  increment: (state, payload) => (state.counter += payload),
  decrement: (state, payload) => (state.counter -= payload),
};

const actions = {
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};
