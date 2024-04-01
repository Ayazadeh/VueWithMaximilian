import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

// global config for axios
axios.defaults.baseURL = 'https://vue-backend-48df1-default-rtdb.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'Bearer <KEY>'
axios.defaults.headers.get['Accepts'] = 'application/json'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
