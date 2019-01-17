// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
// 引入vant UI
import { NavBar,Tabbar, TabbarItem,Swipe, SwipeItem } from 'vant';
Vue.use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem);

import VueResource from 'vue-resource';
Vue.use(VueResource);

// import 'animate.css/animate.css'
// vue底层的性能优化
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c=>c(App)
})
