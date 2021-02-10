import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations-types'

//1.安装插件
Vue.use(Vuex)

//2.创建
const moduleA = {
  state: {
    name: 'zh'
  },
  mutations: {
    updateName(state,payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(()=>{
        context.commit('updateName','li')
      },1000)
    }
  },
  getters: {
    fullname(state) {
      return state.name + '1111'
    },
    fullname2(state,getters) {
      return getters.fullname + '2222'
    },
    fullname3(state,getters,rootState) {
      return getters.fullname2 + rootState.counter
    }
  }
}

const store = new Vuex.Store({
  state: {
    counter: 10,
    students: [
      {id:1,name:'w',age:18},
      {id:2,name:'h',age:19},
      {id:3,name:'y',age:20}
    ]
  },
  mutations: {
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state,count/*payload*/) {
      state.counter += count
      //state.counter += payload.count
    },
    addStudent(state,stu) {
      state.students.push(stu)
    }
  },
  actions: {
    //类似于mutations，这个是用来进行异步操作的
    aUpdateInfo(context,payload) {
      setTimeout(()=>{
        context.commit('addStudent')
        console.log(payload())
      },1000)
    }
  },
  getters: {
    //类似于计算属性
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age >= 20)
    },
    more20stuLen(state,getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return function (age) {
        return state.students.filter(s => s.age>age)
      }
    }
  },
  modules: {
    a: moduleA
  }
})

//3.导出
export default store
