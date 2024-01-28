import * as types from "./types";

/**
 * Updates the value property in the state with the given payload.
 * This mutation should be committed in components to update the central store value.
 */
// export const updateValue = (state, payload) => {
//   state.value = payload;
// };

// using types
export default {
  [types.MUTATE_UPDATE_VALUE]: (state, payload) => {
    state.value = payload;
  },
};
