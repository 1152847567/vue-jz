<template>
  <!-- 子组件的模板 -->
  <div class="home">
    <van-swipe :autoplay="1500" indicator-color="pink" class="home-swipe">
      <van-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img">
      </van-swipe-item>
    </van-swipe>
    <div class="demo-icon">
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
        <span>location-o</span>
      </div>
    </div>
    
  </div>
</template>

<script>
import { Toast } from "vant";
// es6 的暴露方式 类似于 module.export = {}
export default {
  data: () => ({
    lunbotuList: []
  }),
  methods: {
    getlunbotu() {
      this.$http.get("http://localhost:5000/api/getlunbo").then(result => {
        // console.log(result.body)
        const { status, message } = result.body;
        if (status == 0) {
          this.lunbotuList = message;
          
        } else {
          Toast("获取数据失败");
        }
      });
    }
  },
  created() {
    this.getlunbotu();
  }
};
</script>


<style lang="less" scoped>
//  设置less属性开启
/* 子组件的样式 */
@color: pink;
.home {
  .home-swipe {
    height: 210px;
    img {
      width: 100%;
    }
  }
}
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
    height: 100px;
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
</style>