import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";

Vue.config.productionTip = false;

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

router.beforeEach((to, from, next) => {
  // this is how we can check if a user allowed to visit a certain page.
  console.log("global beforeEach");

  next(); 
  // next(false); // request abort
  // next('path'); // redirect to path
  // next({ path: '/login' }); // redirect to /login
  // next(); // let the request continue its journey
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
