export default {
  incrementAsync(context) {
    setTimeout(() => {
      context.commit('increment');
    }, 2000);
  },
  increaseAsync(context, payload) {
    setTimeout(() => {
      context.commit('increase', payload);
    }, 1000);
  },
};
