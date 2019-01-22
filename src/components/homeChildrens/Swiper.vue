<template>
<!-- 子组件的模板 -->
  <div class="swiper">
    <van-swipe :autoplay="1500" indicator-color="pink" class="swipe">
      <van-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img || item.src">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
// es6 的暴露方式 类似于 module.export = {}
  export default {
    data: ()=>({
    }),
    props: ['lunbotuList'],
    methods: {      
    }
  }
</script>
<style lang="less">
.swiper {
  .swipe {
    height: 210px;
    img {
      width: 100%;
    }
  }
}
</style>