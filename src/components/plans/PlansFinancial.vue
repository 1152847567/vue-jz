<template>
  <!-- 子组件的模板 -->
  <div class="financial">
    <van-nav-bar
      title="财务规划"
      left-text=""
      left-arrow
    />
    <div class="header">
      <img src="static/images/home_1_1.png" />
    </div>
    <div class="echart" ref="echart"></div>
    <div class="content">
      <div class="item_box">
        <div class="item_title"><i></i><span>日常必要开支</span></div>
        <div class="item_sub_tit">
          <div class="left">建议预算￥900.00</div>
          <div class="right">当前预算￥600.00</div>
        </div>
        <div class="item_body">
          <ul>
            <li>
              <div class="item_body_left">
                <img src="../../../static/images/categoryIcon/img1_2.png" alt="图标">
                <div class="text">餐饮</div>
              </div>
              <div class="item_body_center">预算&nbsp;<span>￥500.00</span></div>
              <div class="item_body_right"></div>
            </li>
            <li>
              <div class="item_body_left">
                <img src="../../../static/images/categoryIcon/img1_2.png" alt="图标">
                <div class="text">餐饮</div>
              </div>
              <div class="item_body_center">预算&nbsp;<span>￥100.00</span></div>
              <div class="item_body_right"></div>
            </li>
            <li>
              <div class="item_body_left">
                <img src="../../../static/images/categoryIcon/img1_2.png" alt="图标">
                <div class="text">餐饮</div>
              </div>
              <div class="item_body_center">预算&nbsp;<span>￥600.00</span></div>
              <div class="item_body_right"></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="item_box">
        <div class="item_title"><i class="color_FFDE42"></i><span>偶然必要开支</span></div>
        <div class="item_sub_tit">
          <div class="left">建议预算￥900.00</div>
          <div class="right">当前预算￥600.00</div>
        </div>
        <div class="item_body">
          <ul>
            <li>
              <div class="item_body_left">
                <img src="../../../static/images/categoryIcon/img1_2.png" alt="图标">
                <div class="text">餐饮</div>
              </div>
              <div class="item_body_center">预算&nbsp;<span>￥500.00</span></div>
              <div class="item_body_right"></div>
            </li>
            <li>
              <div class="item_body_left">
                <img src="../../../static/images/categoryIcon/img1_2.png" alt="图标">
                <div class="text">餐饮</div>
              </div>
              <div class="item_body_center">预算&nbsp;<span>￥600.00</span></div>
              <div class="item_body_right"></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="item_box">
        <div class="item_title"><i class="color_F95C53"></i><span>存钱计划</span></div>
        <div class="item_sub_tit">
          <div class="left">建议预算￥900.00</div>
          <div class="right">当前预算￥600.00</div>
        </div>
        <div class="item_body">
          <ul>
            <li>
              <div class="item_body_left">
                <img src="../../../static/images/categoryIcon/img1_2.png" alt="图标">
                <div class="text">存钱</div>
              </div>
              <div class="item_body_center">预算&nbsp;<span>￥500.00</span></div>
              <div class="item_body_right"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <router-link to="/home/PlansHome">
      <div class="button">
        <span ref="button_span">确认</span>
      </div>
    </router-link>

  </div>
</template>

<script>
// import { Toast } from "vant";
export default {
  data: () => ({
    option1: {
      tooltip: {
        trigger: 'item', // trigger 设置触发类型，默认数据触发，可选值：'item' 'axis'
        showDelay: 20,   // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
        hideDelay: 20,   // 隐藏延迟，单位ms
        // backgroundColor: 'rgba(255,0,0,0.7)',  // 提示框背景颜色
        textStyle: {
          fontSize: '16px',
          color: '#000'  // 设置文本颜色 默认#FFF
        },
        // formatter设置提示框显示内容
        // {a}指series.name  {b}指series.data的name
        // {c}指series.data的value  {d}%指这一部分占总数的百分比
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical', // 设置布局方式 默认水平方向
        x: 'left', // 设置水平安放位置 默认全屏居中
        y: 'center',
        left: '60%',
        itemGap: 20, // 图例每项之间的间隔
        // backgroundColor: '#eee' // 设置整个图例区域背景颜色
      },
      series: [{
        name:'生活费规划',
        type:'pie',
        radius: ['55%', '75%'],  // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
        center: ['30%', '50%'],  // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
        avoidLabelOverlap: false,
        label: { // 设置值域的标签
          normal: {
            show: false,
            position: 'center', // 设置标签位置，默认在饼状图外 可选值：'outer' 'inner（饼状图上）'
            formatter: '{c} ({d}%)' // 设置标签显示内容 ，默认显示{b}
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '14',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {  // 设置值域的那指向线
          normal: {
            show: true  // show设置线是否显示，默认为true，可选值：true  false
          }
        },
        data:[
          {value:335, name:'日常必要开支'},
          {value:310, name:'偶然必要开支'},
          {value:234, name:'非必要开支'},
          {value:135, name:'存钱计划'}
        ]
      }]
    },
  }),
  created() {

  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    getEchart(){
      let chart_1 = this.$echarts.init(this.$refs.echart,'light');
      chart_1.setOption(this.option1);
    },
  },
  mounted(){
    this.getEchart();
  },
  components: {
    
  }
};
</script>


<style lang="less">
@color_white: #fff;
@color_base: #3CB5FF;
@color_bgc: #FBF8FB;
@color_font_333: #333;
@color_font_666: #666;
@color_font_999: #999;
.color_FFDE42 {
  background-color: #FFDE42 !important;
}
.color_F95C53 {
  background-color: #F95C53 !important;
}
.financial {
  padding-top: 296/50rem;
  [class*=van-hairline]::after {
    border: none;
  }
  .van-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    border: none;
    z-index: 9999 !important;
    .van-icon {
      color: @color_white;
    }
    .van-nav-bar__title {
      color: @color_white;
      font-weight: 580;
    }
  }
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    img {
      width: 100%;
      background-size: cover;
      vertical-align: top;
    }
  }
  .echart {
    width: 100%;
    height: 200px;
  }
  .content {
    background-color: @color_bgc;
    .item_box {
      padding-top: 8px;
      .item_title {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: @color_white;
        padding: 10px 15px 0;
        i {
          width: 5px;
          height: 20px;
          background-color: @color_base;
        }
        span {
          position: relative;
          display: block;
          height: 45px;
          line-height: 45px;
          margin-left: 10px;
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }
      }
      .item_sub_tit {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 30px;
        padding: 0 25px;
        font-size: 12px;
        color: #999;
      }
      .item_body {
        padding: 0 15px;
        background-color: @color_white;
        ul {
          li {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            height: 75px;           
            border-bottom: 1px solid #eee;
            &:nth-last-child(1) {
              border-bottom: none;
            }
            .item_body_left {
              display: flex;
              flex-direction: row;
              align-items: center;
                img {
                  width: 40px;
                  background-color: cover;
                }
                .text {
                  margin-left: 8px;
                  font-size: 14px;
                  color: @color_font_333;
                }
            }
            .item_body_center {
              font-size: 14/50rem;
              color: #ddd;
              span {
                color: @color_font_333;
              }
            }
            .item_body_right {
              width: 30px;
              height: 30px;
              background: url('../../../static/images/categoryIcon/img1.png') no-repeat no-repeat;
              background-size: cover;
            }
          }
        }
      }

    }
  }
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    padding-bottom: 30px;
    span {
      width: 180px;
      height: 40px;
      line-height: 40px;
      background-image: linear-gradient(90deg,#3CB5FF 0%,#65A4FF 100%);
      border-radius: 20px;
      color: @color_white;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      box-shadow: 0px 4px 8px 0px #ccc;
    }
  }
  
}
</style>