import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueResource);

// we can use below code to define main URL globally, then all requests will be sent to this URL
// Vue.http.options.root = "/";

// Intercepting Requests
/* Vue.http.interceptors.push((request, next) => {
  console.log("request ", request);
  if (request.method == "POST") {
    request.method = "PUT";
  }
  next((response) => {
    response.json = () => {return {messages: response.body }} // Intercepting Responses
  });
}); */

new Vue({
  render: (h) => h(App),
}).$mount("#app");
