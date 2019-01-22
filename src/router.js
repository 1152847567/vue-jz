import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './components/Home.vue'
import cart from './components/Cart.vue'
import member from './components/Member.vue'
import search from './components/Search.vue'
import newslist from './components/news/Newslist.vue'
import newsinfor from './components/news/Newsinfor.vue'
import photoslist from './components/photos/Photoslist.vue'
import photosInfor from './components/photos/PhotosInfor.vue'
import goodslist from './components/goods/Goodslist.vue'
import goodsInfor from './components/goods/GoodsInfor.vue'
import goodsdesc from './components/goods/Goodsdesc.vue'
import goodscomment from './components/goods/Goodscomment.vue'


Vue.use(VueRouter) 

export default new VueRouter({
  routes: [ 
    {path: '/',redirect: '/home/goodslist'},
    {path: '/home',component: home},
    {path: '/home/newslist',component: newslist},
    {path: '/home/newsinfor/:id',component: newsinfor},
    {path: '/home/photoslist',component: photoslist},
    {path: '/home/photosInfor/:id',component: photosInfor},
    {path: '/home/goodslist',component: goodslist},
    {path: '/home/goodsInfor/:id',component: goodsInfor,name:"goodsInfor"},
    {path: '/home/goodsdesc/:id',component: goodsdesc,name:"goodsdesc"},
    {path: '/home/goodscomment/:id',component: goodscomment,name:"goodscomment"},
    {path: '/cart',component: cart},
    {path: '/member',component: member},
    {path: '/search',component: search}
  ]
})