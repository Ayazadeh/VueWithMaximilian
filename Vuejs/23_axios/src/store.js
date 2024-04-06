import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-auth";
import globalAxios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, userData) {
      state.user = userData;
    },
  },
  actions: {
    signup({ commit, dispatch }, authData) {
      axios
        .post("/accounts:signUp?key=AIzaSyCp3qvG-odvraBgm14HEsnPXJOL-KnRP50", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((res) => {
          console.log("signup: ", res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId,
          });
          dispatch("storeUser", userData);
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
          console.log("login: ", res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId,
          });
        })
        .catch((error) => console.log(error));
    },
    storeUser({ commit }, userData) {
      globalAxios
        .post("/users.json", userData)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
    fetchUser({ commit }) {
      globalAxios
        .get("/users.json")
        .then((res) => {
          console.log("dashboard response: ", res);
          const data = res.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          console.log("dashboard users: ", users);
          commit("storeUser", users[0]);
        })
        .catch((error) => console.log("dashboard error: ", error));
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
});
