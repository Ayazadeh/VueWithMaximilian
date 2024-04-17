import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-auth";
import globalAxios from "axios";
import router from "./router";

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
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
    },
  },
  actions: {
    setLogoutTimer({ dispatch }, expirationTime) {
      setTimeout(() => {
        dispatch("logout");
      }, expirationTime * 1000);
    },
    signup({ commit, dispatch }, userData) {
      axios
        .post("/accounts:signUp?key=AIzaSyCp3qvG-odvraBgm14HEsnPXJOL-KnRP50", {
          email: userData.email,
          password: userData.password,
          returnSecureToken: true,
        })
        .then((res) => {
          console.log("signup: ", res);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId,
          });
          dispatch("storeUser", userData);
          dispatch("setLogoutTimer", res.data.expiresIn);
        })
        .catch((error) => console.log(error));
    },
    login({ commit, dispatch }, authData) {
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
          dispatch("setLogoutTimer", res.data.expiresIn);
        })
        .catch((error) => console.log(error));
    },
    logout({ commit }) {
      commit("clearAuthData");
      router.replace("/signin");
    },
    storeUser({ commit, state }, userData) {
      if (!state.idToken) {
        return;
      }
      console.log("test ", state.idToken);
      globalAxios
        .post("/users.json" + "?auth=" + state.idToken, userData)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
    fetchUser({ commit, state }) {
      if (!state.idToken) {
        return;
      }
      globalAxios
        .get("/users.json" + "?auth=" + state.idToken)
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
    isAuthenticated(state) {
      return state.idToken !== null;
    },
  },
});
