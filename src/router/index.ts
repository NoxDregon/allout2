import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import lots from '../components/lots.vue'
import createLot from '../components/CreateLot.vue'
import Profile from '../components/Profile.vue'
import lot from '../components/lot.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Header from '../components/header.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/header',
    name: 'header',
    component: Header
  },
  {
    path: '/',
    name: 'lots',
    component: lots
  },
  {
    path: '/create',
    name: 'createLot',
    component: createLot
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/lot',
    name: 'lot',
    component: lot
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
