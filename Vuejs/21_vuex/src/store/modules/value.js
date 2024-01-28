import * as types from "../types";

const state = {
  value: 0,
};

const getters = {
  [types.VALUE]: (state) => state.value,
};

const mutations = {
  [types.MUTATE_UPDATE_VALUE]: (state, payload) => (state.value = payload),
};

const actions = {
  [types.UPDATE_VALUE]: ({ commit }, payload) =>
    commit([types.MUTATE_UPDATE_VALUE], payload),
};

export default {
  state,
  getters,
  mutations,
  actions,
};
