<template>
  <div id="app">
    <router-view></router-view>
    <TarBar>
      <TabBarItem path="/home" active-color="deepPink">
        <img src="~assets/img/tabbar/oa-t-house.png" alt="" slot="icon">
        <img src="~assets/img/tabbar/oa-t-house-active.png" alt="" slot="iconActive">
        <div slot="text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="deepPink">
        <img src="./assets/img/tabbar/oa-t-list.png" alt="" slot="icon">
        <img src="./assets/img/tabbar/oa-t-list-active.png" alt="" slot="iconActive">
        <div slot="text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart" activeColor="deepPink">
        <img src="./assets/img/tabbar/oa-shop.png" alt="" slot="icon">
        <img src="./assets/img/tabbar/oa-shop-active.png" alt="" slot="iconActive">
        <div slot="text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="deepPink">
        <img src="./assets/img/tabbar/oa-person.png" alt="" slot="icon">
        <img src="./assets/img/tabbar/oa-person-active.png" alt="" slot="iconActive">
        <div slot="text">我的</div>
      </TabBarItem>
    </TarBar>
  </div>
</template>

<script>
  import TarBar from './components/tabbar/TabBar'
  import TabBarItem from './components/tabbar/TabBarItem'

  export default {
    name: 'App',
    components: {
      TarBar,
      TabBarItem
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
