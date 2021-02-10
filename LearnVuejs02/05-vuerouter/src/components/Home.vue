<template>
  <div>
    <h2>HOME..............</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        path: '/home/news'
      }
    },
    created () {
      console.log('homeCreated.......')
    },
    destroyed () {
      console.log('homeDestroyed....')
    },
    activated () {
      this.$router.push(this.path)
    },
    beforeRouteLeave(to,from,next) {
      this.path = this.$route.path
      next()
    }
  }
</script>

<style scoped>

</style>
