<template>
  <div id="app">
    <!--replace控制能不能返回-->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" repalce>关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
<!--    <router-link to="/profile">档案</router-link>-->
    <router-link :to="{path: '/profile',query: {name: 'why',age: 18,height: 1.88}}">档案</router-link>
    <button @click="userClick">用户2</button>
    <button @click="profileClick">档案2</button>

    <!--显示的位置-->
    <!--<button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>-->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId: 'lisi'
    }
  },
  methods: {
    homeClick() {
      //通过代码的方式修改路由 vue-router
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    userClick() {
      this.$router.push('/user/'+this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'test',
          age: 18,
          height: 1.88
        }
      })
    }
  }
}
</script>

<style>
  .router-link-active {
    color: #ff0000;
  }
</style>
