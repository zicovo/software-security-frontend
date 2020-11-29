import Vue from 'vue';
import Vuex from 'vuex'; 
import * as Products from '@/store/modules/Products.js'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Products
  }
});
