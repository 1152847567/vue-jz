import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './components/Home.vue'
import budget from './components/Budget.vue'
import bookkeeping from './components/Bookkeeping.vue'
import deposit from './components/Deposit.vue'
import mine from './components/Mine.vue'
import plansNumber from './components/plans/plansNumber.vue'
import plansCategory from './components/plans/plansCategory.vue'
import PlansFinancial from './components/plans/PlansFinancial.vue'
import PlansHome from './components/plans/PlansHome.vue'

Vue.use(VueRouter) 

export default new VueRouter({
  routes: [ 
    {path: '/',redirect: '/budget'},
    {path: '/home',component: home},
    {path: '/home/plansNumber',component: plansNumber},
    {path: '/home/plansCategory',component: plansCategory},
    {path: '/home/PlansFinancial',component: PlansFinancial},
    {path: '/home/PlansHome',component: PlansHome}, // 主页
    {path: '/budget',component: budget}, // 预算
    {path: '/bookkeeping',component: bookkeeping},
    {path: '/deposit',component: deposit},
    {path: '/mine',component: mine}
  ]
})