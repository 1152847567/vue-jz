<template>
  <!-- 子组件的模板 -->
  <div class="plansHome">
    <van-nav-bar
      title="首页"
      left-text=""
      left-arrow
    />
    <div class="header">
      <img src="static/images/home_1_1.png" />
    </div>
    <div class="content">
      <div class="box_left">
        <div class="text">剩余天数</div>
        <div class="time">10天</div>
        <van-circle
        v-model="currentRate1"
        color="#4AAEFF"
        fill="#fff"
        :size="size1"
        layer-color="#DEF2FF"
        :text="text"
        :rate="rate1"
        :speed="50"
        :clockwise="true"
        :stroke-width="40"
      />
      </div>
      <div class="box_center">
        <div class="text">本月剩余<br><span>￥100.00</span></div>
        <van-circle
        v-model="currentRate2"
        color="#4AAEFF"
        fill="#fff"
        :size="size2"
        layer-color="#DEF2FF"
        :text="text2"
        :rate="rate2"
        :speed="50" 
        :clockwise="true"
        :stroke-width="60" Circle-Slot="abc"
      />
      </div>
      <div class="box_right">
        <div class="text">今日预算</div>
        <div class="money">￥100.00</div>
        <van-circle
        v-model="currentRate3"
        color="#4AAEFF"
        fill="#fff"
        :size="size1"
        layer-color="#DEF2FF"
        :text="text3"
        :rate="rate3"
        :speed="50"
        :clockwise="true"
        :stroke-width="40"
      />
      </div>
    </div>
    <div class="money">
      <div class="income"><span>收入</span><span class="font_weight">￥1500.00</span></div>
      <div class="pay"><span>支出</span><span class="font_weight">￥1500.00</span></div>
    </div>
    <div class="tool">
      <div class="setting">
        <img src="../../../static/images/categoryIcon/img1.png" alt="图标">
        <div class="text">设置</div>
      </div>
      <div class="share">
        <img src="../../../static/images/categoryIcon/img1.png" alt="图标">
        <div class="text">分享</div>
      </div>
    </div>


  </div>
</template>

<script>
// import { Toast } from "vant";
// es6 的暴露方式 类似于 module.export = {}
export default {
  data: () => ({
    currentRate1: 0, // 参数 currentRate1 
    currentRate2: 0, // 参数 currentRate2
    currentRate3: 0, // 参数 currentRate3
    size1: '', // 参数 size1 圆环直径
    size2: '', // 参数 size2 圆环直径
    rate1: 30, // 参数 rate1
    rate2: 30, // 参数 rate2
    rate3: 30, // 参数 rate3
  }),
  created() {
    // this.getlunbotu();
    // console.log(window.screen.width)
    let width = window.screen.width; // 获取设备屏幕宽度
    this.size1 =width*80/375 + 'px';
    this.size2 =width*170/375 + 'px';
  },
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
    // getEchart(){
    //   let chart_1 = this.$echarts.init(this.$refs.box,'light');
    //   chart_1.setOption(this.option1);
    // },
  },
  computed: {
    text() {
      //this.currentRate1.toFixed(0) + '%'
      // return 10 + '天';
    },
    text2() {
      // return '本月剩余' + '800.00';
    },
    text3() {
      // return '￥' + '200.00';
    }
  },
  mounted(){
    // this.getEchart();
  },
  components: {
    
  }
};
</script>


<style lang="less">
@color_white: #fff;
@color_base: #3CB5FF;
.plansHome {
  [class*=van-hairline]::after {
    border: none;
  }
  .van-nav-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    border: none;
    .van-icon {
      color: @color_white;
    }
    .van-nav-bar__title {
      color: @color_white;
      font-weight: 580;
    }
  }
  .header {
    width: 100%;
    img {
      width: 100%;
      background-size: cover;
      vertical-align: top;
    }
  }
  .content {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    height: 200/50rem;
    background-color: #fff;
    padding: 0 10/50rem;
    .box_left {
      flex:3;
      align-items: center;
      position: relative;
      .text {
        height: 28/50rem;
        font-size: 14/50rem;
        color: #333;
        text-align: center;
      }
      .time {
        position: absolute;
        top: 60/50rem;
        left: 26/50rem;
        font-size: 12/50rem;
        font-weight: 600;
        color: #333;
        z-index: 99;

      }
    }
    .box_center {
      position: relative;
      flex:5;
      // justify-content: center;
      // align-items: center;
      .text {
        position: absolute;
        top: 32%;
        left: 50%;
        transform: translate(-50%,-50%);
        height: 40/50rem;
        line-height: 40/50rem;
        font-size: 16/50rem;
        color: #333;
        text-align: center;
        z-index: 99;
        span {
          font-size: 18/50rem;
          font-weight: 650;
          color: #333;
        }
      }
    }
    .box_right {
      flex:3;
      align-items: center;
      position: relative;
      .text {
        height: 28/50rem;
        font-size: 14/50rem;
        color: #333;
        text-align: center;
      }
      .money {
        position: absolute;
        top: 28/50rem;
        left: 2/50rem;
        font-size: 12/50rem;
        font-weight: 600;
        color: #333;
        z-index: 99;

      }
    }
  }
  .money {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 30/50rem 10/50rem 0;
    .income,
    .pay {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 45%;
      height: 80/50rem;
      span {
        height: 50%;
        line-height: 50/50rem;
        color: #fff;
        font-size: 14/50rem;
      }
      .font_weight {
        line-height: 20/50rem;
        font-weight: 700;
        font-size: 16/50rem;
      }
    }
    .income {
      background: url('../../../static/images/plansHome.png') no-repeat no-repeat;
      background-size: cover;
    }
    .pay {
      background: url('../../../static/images/plansHome.png') no-repeat no-repeat;
      background-size: cover;
    }
  }
  .tool {
    display: flex;
    flex-direction: row;
    align-items: center;
    .setting,
    .share {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 100/50rem;
      img {
        width: 30/50rem;
        background-size: cover;
      }
      .text {
        color: #333;
        font-size: 14/50rem;
        margin-left: 10/50rem;
      }
    }
  }

  
}
</style>