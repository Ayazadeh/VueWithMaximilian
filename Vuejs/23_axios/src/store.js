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
      }, expirationTime * 10);
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
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + res.data.expiresIn * 1000
          );
          localStorage.setItem("expirationDate", expirationDate);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("token", res.data.idToken);
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
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + res.data.expiresIn * 1000
          );
          localStorage.setItem("expirationDate", expirationDate);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("token", res.data.idToken);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId,
          });
          dispatch("setLogoutTimer", res.data.expiresIn);
        })
        .catch((error) => console.log(error));
    },
    tryAutoLogin({ commit, dispatch }) {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const expirationDate = localStorage.getItem("expirationDate");
      const now = new Date();
      if (now >= expirationDate) {
        return;
      }
      const userId = localStorage.getItem('userId');
      commit("authUser", {
        token: token,
        userId: userId,
      });
      const expiration = (new Date(expirationDate).getTime() - now.getTime()) / 1000;
      dispatch("setLogoutTimer", expiration);
    },
    logout({ commit }) {
      commit("clearAuthData");
      localStorage.removeItem("expirationDate");
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
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
