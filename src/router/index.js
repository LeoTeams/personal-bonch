import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Auth from '@/components/Auth.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/authorization',
      name: 'auth',
      component: Auth
    }
  ]
})
