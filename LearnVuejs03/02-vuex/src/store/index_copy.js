import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

const state = {
  counter: 10,
  students: [
    {id:1,name:'w',age:18},
    {id:2,name:'h',age:19},
    {id:3,name:'y',age:20}
  ]
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

//3.导出
export default store
