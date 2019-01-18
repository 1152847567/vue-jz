<template>
  <!-- 子组件的模板 -->
  <div class="home">
    <van-swipe :autoplay="1500" indicator-color="pink" class="home-swipe">
      <van-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img">
      </van-swipe-item>
    </van-swipe>
    <!-- <div class="demo-icon">
      <div class="van-col van-col--6">
        <i class="van-icon ">
          <img src="../assets/images/menu1.png">
        </i>
        <span>新闻资讯</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon ">
          <img src="../assets/images/menu2.png">
        </i>
        <span>图片分享</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon ">
          <img src="../assets/images/menu3.png">
        </i>
        <span>商品购买</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon ">
          <img src="../assets/images/menu4.png">
        </i>
        <span>留言反馈</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon ">
          <img src="../assets/images/menu5.png">
        </i>
        <span>视频专区</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon ">
          <img src="../assets/images/menu6.png">
        </i>
        <span>联系我们</span>
      </div>
    </div> -->
    <demo></demo>
  </div>
</template>

<script>
import { Toast } from "vant";
import demo from './homeChildrens/Demo.vue'
// es6 的暴露方式 类似于 module.export = {}
export default {
  data: () => ({
    lunbotuList: []
  }),
  methods: {
    async getlunbotu() {
      const result = await this.$http.get("api/getlunbo");
      // console.log(result.body)
      const { status, message } = result.body;
      if (status == 0) {
        this.lunbotuList = message; 
      } else {
        Toast("获取数据失败");
      } 
    }
    
  },
  created() {
    this.getlunbotu();
  },
  components: {
    demo
  }
};
</script>


<style lang="less" scoped>
@color: pink;
.home {
  .home-swipe {
    // overflow-x: hidden;
    height: 210px;
    img {
      width: 100%;
    }
  }
}
  

</style>