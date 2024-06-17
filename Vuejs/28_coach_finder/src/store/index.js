import { createStore } from "vuex";

import coachesModule from "./modules/coaches/index";

export default createStore({
  state: {
    userId: "c3",
  },
  getters: {
    userId: (state) => state.userId,
  },
  mutations: {},
  actions: {},
  modules: {
    coaches: coachesModule,
  },
});
