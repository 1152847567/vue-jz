import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './components/Home.vue'
import cart from './components/Cart.vue'
import member from './components/Member.vue'
import search from './components/Search.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/',redirect: '/home'},
    {path: '/home',component: home},
    {path: '/cart',component: cart},
    {path: '/member',component: member},
    {path: '/search',component: search}
  ]
})