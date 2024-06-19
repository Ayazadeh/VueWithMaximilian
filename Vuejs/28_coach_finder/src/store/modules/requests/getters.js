export default {
  requests: (state, getters, rootState, rootGetters) =>
    state.requests.filter((req) => req.coachId === rootGetters.userId),

  hasRequests: (state, getters) =>
    getters.requests && getters.requests.length > 0,
};
