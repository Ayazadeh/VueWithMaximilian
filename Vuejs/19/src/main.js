import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// we can use below code to define main URL globally, then all requests will be sent to this URL 
// Vue.http.options.root = "/";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
