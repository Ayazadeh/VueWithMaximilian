import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import router from "./router";
import store from "./store";

// global config for axios
axios.defaults.baseURL =
  "https://vue-backend-48df1-default-rtdb.firebaseio.com/";
// axios.defaults.headers.common['Authorization'] = 'Bearer <KEY>'
axios.defaults.headers.get["Accepts"] = "application/json";

// interceptors
axios.interceptors.request.use((config) => {
  console.log("Request Interceptor: ", config);

  // you at least have to return this configuration otherwise you will block the request
  return config;
});
axios.interceptors.response.use((res) => {
  console.log("Response Interceptor: ", res);

  // I will also need to return a response otherwise other code in my application which wait for it will never receive it
  return res;
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
