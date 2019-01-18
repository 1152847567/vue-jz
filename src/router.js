import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './components/Home.vue'
import cart from './components/Cart.vue'
import member from './components/Member.vue'
import search from './components/Search.vue'
import newslist from './components/news/Newslist.vue'
import newsinfor from './components/news/Newsinfor.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/',redirect: '/home/newslist'},
    {path: '/home',component: home},
    {path: '/home/newslist',component: newslist},
    {path: '/home/newsinfor/:id',component: newsinfor},
    {path: '/cart',component: cart},
    {path: '/member',component: member},
    {path: '/search',component: search}
  ]
})