import { createStore } from "vuex";

import coachesModule from "./modules/coaches/index";
import requestsModule from "./modules/requests/index";

export default createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
  state: {
    userId: "c3",
  },
  getters: {
    userId: (state) => state.userId,
  },
  mutations: {},
  actions: {},
});
