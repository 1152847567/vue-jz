<template>
  <!-- 子组件的模板 -->
  <div class="mine">
    <!-- <swiper :lunbotuList="lunbotuList"></swiper> -->
    <!-- <van-swipe :autoplay="1500" indicator-color="pink" class="home-swipe">
      <van-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img">
      </van-swipe-item>
    </van-swipe> -->
    <!-- <div class="demo-icon">
      <div class="van-col van-col--6">
        <i class="van-icon ">
          <img src="../../static/images/menu1.png">
        </i>
        <span>新闻资讯</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon ">
          <img src="../../static/images/menu2.png">
        </i>
        <span>图片分享</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon ">
          <img src="../../static/images/menu3.png">
        </i>
        <span>商品购买</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon ">
          <img src="../../static/images/menu4.png">
        </i>
        <span>留言反馈</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon ">
          <img src="../../static/images/menu5.png">
        </i>
        <span>视频专区</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon ">
          <img src="../../static/images/menu6.png">
        </i>
        <span>联系我们</span>
      </div>
    </div> -->
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
// import { Toast } from "vant";
// import swiper from './homeChildrens/Swiper.vue'
// import demo from './homeChildrens/Demo.vue'
// es6 的暴露方式 类似于 module.export = {}
export default {
  data: () => ({
    src: [
        {title:'新闻资讯',url:'static/images/menu1.png',to:'/home/newslist'},
        {title:'图片分享',url:'static/images/menu2.png',to:'/home/photoslist'},
        {title:'商品购买',url:'static/images/menu3.png',to:'/home/goodslist'},
        {title:'留言反馈',url:'static/images/menu4.png',to:'/home/home4'},
        {title:'视频专区',url:'static/images/menu5.png',to:'/home/home5'},
        {title:'联系我们',url:'static/images/menu6.png',to:'/home/home6'}
      ]
  }),
  methods: {
    // async getlunbotu() {
    //   const result = await this.$http.get("api/getlunbo");
    //   // console.log(result.body)
    //   const { status, message } = result.body;
    //   if (status == 0) {
    //     this.lunbotuList = message; 
    //   } else {
    //     Toast("获取数据失败");
    //   } 
    // }
    
  },
  created() {
    // this.getlunbotu();
  },
  components: {
    // swiper,
    // demo
  }
};
</script>


<style lang="less">
@color: pink;
.home {
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