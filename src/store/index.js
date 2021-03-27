import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Импортируем модуль

import module from './module'


export default new Vuex.Store({

  modules: {
    module
  },

  state: {
  },
  mutations: {
  },

  actions: {
  },
 
})
