// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
// 引入vant UI
import {NavBar,Tabbar,TabbarItem,Icon,Picker,Popup,Toast,Area,Circle,Tab,Tabs,Progress   } from 'vant';
Vue.use(NavBar).use(Tabbar).use(TabbarItem).use(Icon).use(Picker).use(Popup).use(Toast).use(Area).use(Circle).use(Tab).use(Tabs).use(Progress);
// import 'vant/lib/icon/local.css';

// 引入store
import store from './store'

// 引入 rem.js
import './../dist/rem.js'

// 引入vue-resource 发送ajax
import VueResource from 'vue-resource';
Vue.use(VueResource);
// 配置全局的跟路径
Vue.http.options.root = 'http://192.168.0.140:8088/'
Vue.http.options.emulateJSON = true;

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
// 引入地址三级联动插件
import Distpicker from 'v-distpicker'
Vue.component('v-distpicker', Distpicker)


// 定义全局时间过滤器
// import moment from 'moment'
// Vue.filter('dataFormat', function (datastr, pattern = "YYYY-MM-DD HH:mm:ss") {
//   return moment(datastr).format(pattern);
// })

// vue底层的性能优化
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: c => c(App)
})
