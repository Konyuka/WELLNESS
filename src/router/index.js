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
      path: '/servcies/ads',
      name: 'servcies_ads',
      component: () => import('../views/services/Ads.vue')
    },
    {
      path: '/servcies/adverts',
      name: 'servcies_adverts',
      component: () => import('../views/services/Adverts.vue')
    },
    {
      path: '/servcies/branding',
      name: 'servcies_branding',
      component: () => import('../views/services/Branding.vue')
    },
    {
      path: '/servcies/content',
      name: 'servcies_content',
      component: () => import('../views/services/Content.vue')
    },
    {
      path: '/servcies/digital',
      name: 'servcies_digital',
      component: () => import('../views/services/Digital.vue')
    },
    {
      path: '/servcies/media',
      name: 'servcies_media',
      component: () => import('../views/services/Media.vue')
    },
    {
      path: '/servcies/seo',
      name: 'servcies_seo',
      component: () => import('../views/services/Seo.vue')
    },
    {
      path: '/servcies/website',
      name: 'servcies_website',
      component: () => import('../views/services/Website.vue')
    },
    
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
