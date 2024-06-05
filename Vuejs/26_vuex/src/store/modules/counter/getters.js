export default {
  finalCounter: (state) => state.counter * 3,
  normalizedCounter: (state, getters) => {
    if (getters.finalCounter < 0) {
      return 0;
    } else if (getters.finalCounter > 100) {
      return 100;
    }
    return getters.finalCounter;
  },
};
