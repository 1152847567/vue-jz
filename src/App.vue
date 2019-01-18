<template>
<!-- 子组件的模板 -->
  <div class="app">
    <van-nav-bar
      title="前端13期vue项目"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    
    
    <transition>
      <router-view></router-view>
    </transition>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/member">会员</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" info="5" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
// es6 的暴露方式 类似于 module.export = {}
  export default {
    data: ()=>({
      active: 0
    }),
    methods: {
      onClickLeft(){
        console.log(1)
      }
    }
  }

  function getFileByPath(fPath){
    return new Promise()
  }
  // es7语法
  async function getData(){
    const data1 = await getFileByPath('./files/1.txt');
    const data2 = await getFileByPath('./files/2.txt');
    const data3 = await getFileByPath('./files/3.txt');
    console.log(data1)
    console.log(data2)
    console.log(data3)
  }
</script>


<style lang="less" scoped>
/* 子组件的样式 */
.app {
  overflow-x: hidden;
  margin-bottom: 50px;
}
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
</style>