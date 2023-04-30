import { createRouter, createWebHistory } from 'vue-router'
import Shop from '../views/ShopView.vue'
import About from '../views/AboutVie.vue'

const routes = [
  {
    path: '/',
    name: 'shop',
    component: Shop
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
