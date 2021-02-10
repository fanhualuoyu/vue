//配置路由相关信息
import VuerRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

//1.通过Vue.use(插件)，安装插件
Vue.use(VuerRouter)

//2.创建路由对象
const routes = [
  {
    path: '',
    //redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: 'User'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: 'Profile'
    }
  }
]
const router = new VuerRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode: 'history'//hash模式改为history模式
})

//前置钩子
router.beforeEach(function (to,from,next) {
  //从from跳转到to
  document.title = to.matched[0].meta.title
  next()
})

//后置钩子
router.afterEach((to,from) => {
  // console.log('后置钩子.............')
})

//3.将router对线传入到vue实例中
export default router
