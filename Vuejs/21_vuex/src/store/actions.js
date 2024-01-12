/**
 * Updates the store state value with the given payload.
 * Commits the 'updateValue' mutation.
 */
export const updateValue = ({ commit }, payload) => {
  commit("updateValue", payload);
};
