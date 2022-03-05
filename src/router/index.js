import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [{
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import( /* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
    path: '/equipos',
    name: 'equipos',
    component: () => import( /* webpackChunkName: "Equipos" */ '../views/Equipos.vue'),
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import( /* webpackChunkName: "CheckOut" */ '../views/CheckOut.vue'),
  },
    {
    path: '/confirmacion',
    name: 'confirmacion',
    component: () => import( /* webpackChunkName: "Confirmacion" */ '../views/Confirmacion.vue'),
  },
  {
    path: '*',
    name: 'not_found',
    component: () => import( /* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router