import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import detail from '@/components/detail'
import content from '@/components/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/content',
      name: 'content',
      component: content
    }
  ]
})
