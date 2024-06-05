export default {
  increment(state) {
    state.counter++;
  },
  increase(state, payload) {
    state.counter += payload.value;
  },
};
