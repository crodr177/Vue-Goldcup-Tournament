import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Home from '@/components/Home'
import Tables from '@/components/Tables'
import Brackets from '@/components/Brackets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/tables',
      name: 'Tables',
      component: Tables
    },
    {
      path: '/brackets',
      name: 'Brackets',
      component: Brackets
    }
  ]
})
