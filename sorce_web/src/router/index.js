import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from './home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children : homeRouter
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/Admin.vue'),
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
