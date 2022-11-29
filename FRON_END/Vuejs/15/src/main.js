import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

/* 
by -- Mohammad Ayazadeh --
Create Global Directive

Vue.directive(
   the selector ( the name of the directive),
   the Object configuring the Directive
   )
*/
Vue.directive('highlight', {
  
});

/*
using: v-highlight
*/

new Vue({
  render: (h) => h(App),
}).$mount("#app");
