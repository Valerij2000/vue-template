import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)


// Pages

import Home from '@/pages/Home.vue'
import NotFound from '@/pages/404.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
