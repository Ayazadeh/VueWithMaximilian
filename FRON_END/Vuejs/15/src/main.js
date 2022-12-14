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
Vue.directive("highlight", {
  /* 
    Directive have a 5 hook method => 
      1- bind(el, binding, vnode),
      2- inserted(el, binding, vnode), 
      3- update(el, binding, vnode, oldVnode),
      4- componentUpdated(el, binding, vnode, oldVnode),
      5- unbind(el, binding, vnode)
      the ( el ) argument refers to the element the directive sits on.
      the ( binding ) argument refers to the way this directive is set up so which argument
      we may pass in, which modify as you may pass to it.
      the ( vnode ) refers to the node in the virtual Dom.
      binding and vnode should be treated as read only, don't change anything there
      inside of your directive because that really are things controlled by the Vuejs.
      bind hook: occurs once the directive is attached to the element
      inserted hook: thereafter bind hook we get it.
  */

  bind(el, binding, vnode) {
    // el.style.backgroundColor = "green";
    el.style.backgroundColor = binding.value;
  },
});

/*
using: v-highlight
*/

new Vue({
  render: (h) => h(App),
}).$mount("#app");
