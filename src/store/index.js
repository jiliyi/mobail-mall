import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import api from '@/api/index';
export default new Vuex.Store({
  state: {
    sideArr : []
  },
  mutations: {
    setSideArr(state,payLoad){
      state.sideArr = payLoad
    }
  },
  actions: {
    async getSideArr({commit},type){
       const res =  await  api.getSidebar(type)
       console.log(res)
       commit('setSideArr',res)
     
       
       
    }
  },
  modules: {
  }
})
