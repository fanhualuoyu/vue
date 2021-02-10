export default {
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
