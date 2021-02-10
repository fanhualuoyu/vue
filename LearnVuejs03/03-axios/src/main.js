import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

//1.
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   //专门针对get请求的参数拼接
//   param: {
//     type: 'pop',
//     page: 1
//   }
// }).then( result => {
//   console.log(result)
// })


//2.axios发送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   param: {
//     type: 'sell',
//     page: 2
//   }
// })]).then(result => {
//   console.log(result)
// })


//3.使用全局配置在进行访问时
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000     //单位是毫秒
//
// axios.all([axios({
//   url: '/home/multidata'
// }),axios({
//   url: '/home/data',
//   param: {
//     type: 'sell',
//     page: 2
//   }
// })]).then(axios.spread(res1,res2 => {
//   console.log(res1)
//   console.log(res2)
// }))


//4.创建axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
//
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// })
//
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })
//
// const instance2 = axios.create({
//   baseURL: 'http://111.222.32.32:8000',
//   timeout: 4000
// })


//5.封装request模块
import {request} from './network/request'

request({
  url: '/home'
}).then(res => {

}).catch(err => {

})


// request({
//   url:'/home/multidata'
// },success => {
//   console.log(success)
// },failure => {
//   console.log(failure)
// })
//
// request({
//   baseConfig: {
//
//   },
//   success: function (result) {
//
//   },
//   failure: function (error) {
//
//   }
// })
