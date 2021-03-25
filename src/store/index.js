import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

import productModule from './modules/product/index.js';

import rootGetters from './getters';
import rooMutations from './mutations'
import rootActions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
      spinnerFlag:false,
      imageBaseUrl:"http://localhost:3000/"
  },
  getters:rootGetters,
  mutations:rooMutations,
  actions:rootActions,
  modules: {
      product:productModule
  }
})
