import ContentSection from '@/components/ContentSection.vue'
import Actualite from '@/components/Actualite.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Images from '@/components/Images.vue'
import Structurel from '@/components/Structurel.vue'
import Enseignant from '@/components/Enseignant.vue'
import Academique from '@/components/Academique.vue'



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
    path: '/structurel',
    name: 'structurel',
    component: Structurel
  },
  
  
  
  {
    path: '/actualite',
    name: 'actualite',
    component: Actualite
  },

  {
    path: '/Enseignant',
    name: 'Enseignant',
    component: Enseignant
  },

  {
    path: '/Images',
    name: 'Images',
    component: Images
  },

{
    path: '/academique',
    name: 'academique',
    component: Academique
  },

  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },

  
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
