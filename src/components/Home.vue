<template>
  <!-- 子组件的模板 -->
  <div class="home">
    <van-nav-bar
      title="关于有余"
      left-text=""
      left-arrow
    />
    <div class="header">
      <img src="static/images/home_1_1.png" />
    </div>
    <div class="box" ref="box"></div>
    <router-link to="/home/plansNumber">
      <div class="button">
        <span>制作规划</span>
        <p>只需3步，生成你的专属生活费管理规划</p>
      </div>
    </router-link>
  </div>
</template>

<script>
// import { Toast } from "vant";
// es6 的暴露方式 类似于 module.export = {}
export default {
  data: () => ({
    option1: {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      // legend: {
      //   // y: 'bottom'
      // },
      series: [{
        name:'行为检测',
        type:'pie',
        radius: ['48%', '65%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '14',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: true
          }
        },
        data:[
          {value:335, name:'借贷'},
          {value:310, name:'保险'},
          {value:234, name:'银行'},
          {value:135, name:'其他'}
        ]
      }]
    },
  }),
  created() {
    // this.getlunbotu();
 
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
    getEchart(){
      let chart_1 = this.$echarts.init(this.$refs.box,'light');
      chart_1.setOption(this.option1);
    },
  },
  mounted(){
    this.getEchart();
  },
  components: {
    // swiper,
    // demo
  }
};
</script>


<style lang="less">
@color_white: #fff;
@color_base: #3CB5FF;
.home {
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
    // opacity: 1;
    // z-index: 99; 
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
  .box {
    width: 100%;
    height: 200/50rem;
  }
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      width: 240/50rem;
      height: 50/50rem;
      line-height: 50/50rem;
      background-image: linear-gradient(90deg,#3CB5FF 0%,#65A4FF 100%);
      border-radius: 25/50rem;
      color: @color_white;
      text-align: center;
      font-size: 18/50rem;
      font-weight: 600;
      box-shadow: 0/50rem 4/50rem 8/50rem 0/50rem #ccc;
    }
    p {
      margin-top: 20/50rem;
      font-size: 14/50rem;
      color: #999;
    }
  }

  
}
</style>