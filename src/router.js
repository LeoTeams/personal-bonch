import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Auth from '@/components/Auth.vue'

Vue.use(Router)

const authPath = '/auth'
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: authPath,
      name: 'auth',
      component: Auth
    }
  ]
})

const isAuth = () => !!window.localStorage.token || !!window.sessionStorage.token
router.beforeEach((to, from, next) => {
  if (isAuth()) {
    to.path !== authPath ? next() : next({ path: '/' })
    return
  }
  to.path !== authPath ? next({ path: authPath }) : next()
})

export default router
