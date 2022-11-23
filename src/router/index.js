import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/contacts',
      name: 'contscts',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/ResourceView.vue')
    },
    {
      path: '/csr',
      name: 'csr',
      component: () => import('../views/CSRView.vue')
    },
    {
      path: '/contacts',
      name: 'contscts',
      component: () => import('../views/ContactView.vue')
    },
  ]
})

export default router
