<template>
<!-- 子组件的模板 -->
  <div class="app">
    <van-nav-bar
      title="前端13期vue项目"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    
    
    <transition>
      <router-view></router-view>
    </transition>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/member">会员</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :info="$store.state.count" to="/cart" id="car">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
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


<style lang="less" scoped>
.app {
  overflow-x: hidden;
  margin-bottom: 50px;
  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to {
    // opacity: 0;
    transform: translateX(-200%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }
}

</style>