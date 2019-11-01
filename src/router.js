import Vue from 'vue'
import Router from 'vue-router'

const Index = ()=> import('./views/Index.vue')
const Proyects = ()=> import('./views/Proyects.vue')

import MainNavbar from './layout/MainNavbar.vue'
import ProyectNavbar from './layout/ProyectNavbar'

import MainFooter from './layout/MainFooter.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index.html',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      alias: '/'
    },
    {
      path: '/proyects',
      name: 'proyects',
      components: { default: Proyects, header: ProyectNavbar, footer: MainFooter },
      props: {
        footer: { backgroundColor: 'black' }
      },
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
})
