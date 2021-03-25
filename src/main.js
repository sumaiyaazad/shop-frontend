// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import App from './App'
import router from './router'
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
axios.defaults.baseURL = 'http://localhost:3000/api/v1';
// import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: { App },
  template: '<App/>'
})
