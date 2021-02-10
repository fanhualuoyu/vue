import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://www.baidu.com',
    timeout: 5000
  })
  //axios的拦截器
  instance.interceptors.request.use(config => {
    //请求成功
    console.log(config)
    //1.config中的某些信息不符合要求
    //2.每次发送网络请求时，显示一个请求的图标
    //3.某些网络请求时必须携带一些特殊的信息
    return config
  },err => {
    //请求失败
    console.log(err)
  })

  instance.interceptors.response.use(res => {
    console.log(res)
    return res.data
  },err => {
    console.log(err)
  })

  return instance(config)
}

// export function request (config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://www.baidu.com',
//       timeout: 5000
//     })
//
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }


// export function request (config) {
//   //1.创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     })
//     .catch(err => {
//       config.failure(err)
//     })
// }
//
// export function request (config,success,failure) {
//   //1.创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
// }
