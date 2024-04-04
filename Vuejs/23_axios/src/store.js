import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
  },
  actions: {
    signup({ commit }, authData) {
      axios
        .post("/accounts:signUp?key=AIzaSyCp3qvG-odvraBgm14HEsnPXJOL-KnRP50", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((res) => {
          console.log('signup: ', res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId,
          });
        })
        .catch((error) => console.log(error));
    },
    login({ commit }, authData) {
      axios
        .post(
          "/accounts:signInWithPassword?key=AIzaSyCp3qvG-odvraBgm14HEsnPXJOL-KnRP50",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((res) => {
          console.log('login: ', res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId,
          });
        })
        .catch((error) => console.log(error));
    },
  },
  getters: {},
});
