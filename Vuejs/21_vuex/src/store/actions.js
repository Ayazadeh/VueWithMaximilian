import * as types from "./types";

/**
 * Updates the store state value with the given payload.
 * Commits the 'updateValue' mutation.
 */

// export const updateValue = ({ commit }, payload) => {
//   commit("updateValue", payload);
// };

// using types
export default {
  [types.UPDATE_VALUE]: ({ commit }, payload) => {
    commit(types.MUTATE_UPDATE_VALUE, payload);
  },
};
