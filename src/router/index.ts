import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/Error.vue'
import Welcome from '@/views/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Welcome',
    component: Welcome
  }
]

const router = createRouter({
  history: createWebHistory('/vite-deploy-demo/'),
  routes
})

export default router
