<template>
  <div class="budget">
    <!-- budget预算 -->
    <componentshead :title="titleMsg"></componentshead>
    <van-tabs v-model="active">
      <van-tab title="日常必要">
        <div class="tab_tit">
          <span v-for="(item,index) in taggleList" :key="index" :class="{active:index == tabNum}"
          @click="checkType(index)">{{item.title}}</span>
        </div>
        <div class="tab_body">
          <ul>
            <li v-for="(item) in categoryList" :key="item.id">
              <div class="item_title">
                <div class="category">
                  {{item.title}}
                </div>
                <div class="number">
                  <span>￥{{item.amountAll}}</span>/￥{{item.amount}}
                </div>
              </div>
              <div class="item_content">
                <van-progress :percentage="50" pivot-text="" color="linear-gradient(to right, #3CB5FF, #65A4FF)"/>
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="偶然必要">
        <div class="tab_tit">
          <span v-for="(item,index) in taggleList" :key="index" :class="{active:index == tabNum}"
          @click="checkType(index)">{{item.title}}</span>
        </div>
        <div class="tab_body">
          <ul>
            <li v-for="(item) in categoryList" :key="item.id">
              <div class="item_title">
                <div class="category">
                  {{item.title}}
                </div>
                <div class="number">
                  <span>￥{{item.amountAll}}</span>/￥{{item.amount}}
                </div>
              </div>
              <div class="item_content">
                <van-progress :percentage="50" pivot-text="" color="linear-gradient(to right, #65A4FF, #67E1EC)"/>
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="非必要">
        <div class="tab_tit">
          <span v-for="(item,index) in taggleList" :key="index" :class="{active:index == tabNum}"
          @click="checkType(index)">{{item.title}}</span>
        </div>
        <div class="tab_body">
          <ul>
            <li v-for="(item) in categoryList" :key="item.id">
              <div class="item_title">
                <div class="category">
                  {{item.title}}
                </div>
                <div class="number">
                  <span>￥{{item.amountAll}}</span>/￥{{item.amount}}
                </div>
              </div>
              <div class="item_content">
                <van-progress :percentage="50" pivot-text="" color="linear-gradient(to right, #FFC526, #FFDE41)"/>
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>

  </div>
</template>
<script>
import componentshead from './Childrens/componentsHead';
// es6 的暴露方式 类似于 module.export = {}
export default { 
  data() {
    return {
      titleMsg: '预算',
      active: 0,
      tabNum: 1,
      taggleList: [{id:1,title:'本月'},{id:2,title:'今日'}],
      categoryList: [
        {id:1,title:'吃饭',amountAll:'200.00',amount:'60.00',},
        {id:2,title:'睡觉',amountAll:'200.00',amount:'60.00',},
        {id:3,title:'打豆豆',amountAll:'200.00',amount:'60.00',}
      ]
    };
  },
  methods: {
    checkType(index){
      this.tabNum = index;
    }
  },
  computed: {
    
  },
  components: {
    componentshead
  }
};

</script>
<style lang="less">
@color_white: #fff;
@color_base: #3CB5FF;
@color_base2: #65A4FF;
.budget {
  width: 100%;
  [class*=van-hairline]::after {
    border: none;
  }
  .van-tabs {
      border: none;
    .van-tabs__wrap {
      // height: 80/50rem;
      // background-color: @color_base2;
      .van-tabs__line {
        background-color: @color_white;
      }
      .van-tab {
        font-size: 14px;
        color: @color_white;
        background-color: @color_base2;
      }
      .van-tab--active {
        font-size: 16px;
      }
      .van-tabs__nav--line {
        padding-bottom: 10/50rem;
      }

    }
    .van-hairline--top-bottom::after {
      border: none;
    }
    .van-tabs__content {
      padding: 0 15/50rem;
      .tab_tit {
        display: flex;
        justify-content: center;
        // height: 30/50rem;
        font-weight: 600;
        span {
          width: 80/50rem;
          height: 30/50rem;
          line-height: 30/50rem;
          background-color: #fff;
          border: 1/50rem solid @color_base;
          // border-radius: 5/50rem;
          font-size: 14/50rem;
          color: @color_base;
          text-align: center;
          &:nth-child(1) {
            border-radius: 5/50rem 0 0 5/50rem;
          }
          &:nth-child(2) {
            // background-color: @color_base;
            // color: #fff;
            border-radius: 0 5/50rem  5/50rem 0;
          }
          &.active {
            background-color: @color_base;
            color: #fff;

          }
        }
      }
      .tab_body {
        ul {
          li {
            padding: 20/50rem 0 0 0;
            .item_title {
              display: flex;
              justify-content: space-between;
              .category {
                font-size: 14/50rem;
                color: #333;
              }
              .number {
                font-size: 14/50rem;
                color: #333;
                span {
                  color: #ddd;
                }
              }
            }
            .item_content {
              padding: 10/50rem 0 0 0;
              .van-progress {
                height: 20/50rem;
                border-radius: 10/50rem; 
                background: #eee;
              }
            }
          }
        }
      }
    }
  }
  .van-tabs--line {
    padding-top: 70px;
    border: none;
    // background-color: pink;
  }
  
}
</style>