<template>
<!-- 子组件的模板 -->
  <div class="demo">
    <div class="demo-icon">
      <router-link class="van-col van-col--6" v-for="item in src" :key="item.url" :to="item.to" tag="div">
        <i class="van-icon ">
          <img :src="item.url">
        </i>
        <span>{{item.title}}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
// es6 的暴露方式 类似于 module.export = {}
  export default {
    data: ()=>({
      src: [
        {title:'新闻资讯',url:'static/images/menu1.png',to:'/home/newslist'},
        {title:'图片分享',url:'static/images/menu2.png',to:'/home/photoslist'},
        {title:'商品购买',url:'static/images/menu3.png',to:'/home/goodslist'},
        {title:'留言反馈',url:'static/images/menu4.png',to:'/home/home4'},
        {title:'视频专区',url:'static/images/menu5.png',to:'/home/home5'},
        {title:'联系我们',url:'static/images/menu6.png',to:'/home/home6'}
      ]
    })
  }
</script>
<style lang="less" scoped>
/* 子组件的样式 */
.demo {
  .demo-icon {
    font-size: 0;
    .demo-icon-list {
      padding-top: 10px;
      box-sizing: border-box;
      min-height: calc(100vh - 65px);
    }
    .van-col {
      float: none;
      text-align: center;
      width: 33.33%;
      // height: 100px;
      display: inline-block;
      vertical-align: middle;
      span {
        display: block;
        padding: 0 5px;
        font-size: 12px;
        line-height: 14px;
      }
    }
    .van-icon {
      font-size: 32px;
      margin: 15px 0;
      color: #455a64;
      img {
        width: 60px;
        height: 60px;
      }
    }
  }

  
}

</style>