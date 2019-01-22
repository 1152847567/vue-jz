// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
// 引入vant UI
import { NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Card, Button, Tab, Tabs,Lazyload,Stepper   } from 'vant';
Vue.use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Card).use(Button).use(Tab).use(Tabs).use(Lazyload).use(Stepper);

// 引入vuex
import store from './store'


// 引入vue-resource 发送ajax
import VueResource from 'vue-resource';
Vue.use(VueResource);
// 配置全局的跟路径
Vue.http.options.root = 'http://localhost:5000/'
Vue.http.options.emulateJSON = true;

// 定义全局时间过滤器
import moment from 'moment'
Vue.filter('dataFormat', function (datastr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(datastr).format(pattern);
})

// vue底层的性能优化
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: c => c(App)
})
