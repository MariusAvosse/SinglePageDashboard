import ContentSection from '@/components/ContentSection.vue'
import HelloWorld from '@/components/HelloWorld.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/generalites',
    name: 'generalites',
    component: ContentSection
  },

  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
