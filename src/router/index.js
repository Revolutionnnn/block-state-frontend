import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/mint',
    name: 'mint',
    component: () => import('../views/MintNFT.vue'),
    props: true
  },
  {
    path: '/market',
    name: 'market',
    component: () => import('../views/MarketView.vue')
  },
  {
    path: '/nft/:id',
    name: 'nftDetails',
    component: () => import('../views/NftDetailsView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
