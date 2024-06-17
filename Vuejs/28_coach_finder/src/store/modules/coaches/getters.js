export default {
  coaches: (state) => state.coaches,
  hasCoaches: (state) => state.coaches && state.coaches.length > 0,
  isCoach: (state, getters, rootState, rootGetters) => {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some((coach) => coach.id === userId);
  },
};
