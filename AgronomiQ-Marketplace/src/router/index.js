import { createRouter, createWebHistory } from 'vue-router'
import Marketplace from '@/components/Marketplace.vue'
import ProductDetails from '@/components/ProductDetails.vue'

const routes = [
  { path: '/', name: 'Home', component: Marketplace },
  { path: '/product/:id', name: 'ProductDetails', component: ProductDetails, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
