import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import api from '@/api/index';
export default new Vuex.Store({
  state: {
    sideArr : [],
    show:false,
    goodsList : []
  },
  mutations: {
    setSideArr(state,payLoad){
      state.sideArr = payLoad
    },
    setShow(state,bool){
      state.show = bool
    },
    setGoodsList(state,list){
      state.goodsList = [...state.goodsList,...list]
    }
  },
  actions: {
    async getSideArr({commit},type){
      commit('setShow',true)
       const res =  await  api.getSidebar(type)
      //  console.log(res)
       commit('setSideArr',res)
       commit('setShow',false)  
    },
    async getGoodsList({commit},options){
      const {type,page,size,sort} = options
      let goodsList =  await api.getGoodsList(type,page,size,sort)
      let {list} =  goodsList;
      commit("setGoodsList",list)
      console.log(this.state.goodsList)
       return  this.state.goodsList;
    }
  },
  modules: {
  }
})
