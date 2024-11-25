import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'


import Visual from '../views/Visual.vue'
import BajaVision from '../views/BajaVision.vue'
import Auditivo from '../views/Auditivo.vue'

import Cognitivo from '../views/Cognitivo.vue'
import Motriz from '../views/Motriz.vue'







Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/visual',
    name: 'Visual',
    component: Visual
  },
  {
    path: '/bajavision',
    name: 'BajaVision',
    component: BajaVision
  },
  {
    path: '/auditivo',
    name: 'Auditivo',
    component: Auditivo
  },
  {
    path: '/motriz',
    name: 'motriz',
    component: Motriz
  },
  {
    path: '/cognitivo',
    name: 'cognitivo',
    component: Cognitivo
  }
]

const router = new VueRouter({
  mode: "history",
  base: '/arteempatizar/',
  routes
})

export default router
