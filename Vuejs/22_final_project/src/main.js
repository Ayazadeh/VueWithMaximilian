import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import store from "./store/store";

Vue.config.productionTip = false;

Vue.filter("currency", (value) => {
  return "$" + value.toLocaleString();
});

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history", // for the hash mode, use -> mode: 'hash' -> /#/ in url
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
