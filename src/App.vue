<template>
<!-- 子组件的模板 -->
  <div class="app">
    <transition>
      <router-view></router-view>
    </transition>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="balance-list-o" to="/budget">预算</van-tabbar-item>
      <!-- <van-tabbar-item icon="add" to="/bookkeeping">记账</van-tabbar-item>
      <van-tabbar-item icon="balance-o" to="/deposit">存钱</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine">我的</van-tabbar-item> -->
    </van-tabbar>
  </div>
</template>
<script>
// es6 的暴露方式 类似于 module.export = {}
  export default {
    data: ()=>({
      active: 0,
    }),
    methods: {
      goBack(){
        this.$router.go(-1);
      } 
    }
  }

  
</script>


<style lang="less">
.app {
  // overflow-x: hidden;
  margin-bottom: 50px;
  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to {
    transform: translateX(-200%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }
  .van-tabbar-item:nth-child(3) {
    .van-tabbar-item__icon {
      width: 44px;
      height: 44px;
      margin: -25px 0 5px 7px;
      color: #3CB5FF;
      z-index: 9999;
      i {
        font-size: 44px;
      }
    }
  }
  .van-tabbar-item--active {
    color: #3CB5FF;
  }
}

</style>