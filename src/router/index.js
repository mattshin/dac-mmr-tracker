import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Secret from '@/components/Secret'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/secret',
      name: 'Secret',
      component: Secret
    }
  ]
})
