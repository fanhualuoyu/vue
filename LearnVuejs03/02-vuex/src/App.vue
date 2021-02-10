<template>
  <div id="app">
    <h2>--------APP内容-----------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>---------Hello Vuex内容------</h2>
    <hello-vuex></hello-vuex>

    <h2>App内容：getters相关信息</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLen}}</h2>
    <h2>{{$store.getters.moreAgeStu(18)}}</h2>

    <h2>App内容：modules中的内容</h2>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="updateName">修改名字</button>
    <button @click="asyncUpdateName">异步修改名字</button>
  </div>
</template>

<script>

  import HelloVuex from './components/HelloVuex'
  import {INCREMENT} from './store/mutations-types'

  export default {
    name: 'App',
    data() {
      return {
        message: 'vuex'
      }
    },
    components: {
      HelloVuex
    },
    methods: {
      addition() {
        this.$store.commit(INCREMENT)
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(count) {
        //payload:负载
        //1.普通提交风格
        this.$store.commit('incrementCount',count)


        //2.特殊的提交封装
        // this.$store.commit({
        //   type: 'incrementCount',
        //   count
        // })
      },
      addStudent() {
        const stu = {id:4,name:'why',age:21}
        //this.$store.commit('addStudent',stu)
        this.$store.dispatch('aUpdateInfo',()=>{
          console.log('里边已经完成了')
        })
      },
      updateName(){
        this.$store.commit('updateName','ang')
      },
      asyncUpdateName() {
        this.$store.dispatch('aUpdateName')
      }
    }
  }
</script>

<style>

</style>
