import * as types from "./types";

/**
 * Getter function that returns the state value.
 */
// export const value = (state) => {
//   return state.value;
// };

// using types
export default {
  [types.VALUE]: (state) => {
    return state.value;
  },
};
