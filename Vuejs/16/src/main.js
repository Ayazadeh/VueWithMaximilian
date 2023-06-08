import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("toLowercase", function (value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    // execution order: Global Mixin > Local Mixin > component
    // use Global Mixin with caution, it really affects everything
    console.log("Global Mixin - Created Hook");
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
