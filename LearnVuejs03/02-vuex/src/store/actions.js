export default {
  //类似于mutations，这个是用来进行异步操作的
  aUpdateInfo(context,payload) {
    setTimeout(()=>{
      context.commit('addStudent')
      console.log(payload())
    },1000)
  }
}
