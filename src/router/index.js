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
      name: 'contacts',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/why-us',
      name: 'Whyus',
      component: () => import('../views/Whyus.vue')
    },
    {
      path: '/contacts',
      name: 'contscts',
      component: () => import('../views/ContactView.vue')
    },
  ]
})

export default router
