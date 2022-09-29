import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateSupport from '../views/CreateSupport.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/createSupport',
    name: 'CreateSupport',
    component: CreateSupport,
  }, {
    // use catchAll to determine whether the URL exists to catch all 404
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router