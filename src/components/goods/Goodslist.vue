<template>
<!-- 子组件的模板 -->
  <div class="goodslist">
    <ul>
      <li class="gooditem" v-for="item in goodlist" :key="item.id" @click="goGoodInfor(item.id)">
        <img :src="item.img_url">
        <div class="content">
          <h2>{{item.zhaiyao}}</h2>
          <p>
            <span class="new">￥{{item.sell_price}}</span>
            <del class="old">￥{{item.market_price}}</del>
          </p>
          <p>
            <span class="hot">热卖中</span>
            <i>剩{{item.stock_quantity}}件</i>
          </p>
        </div>
      </li>
    </ul>
    <van-button size="large" @click.prevent="getMove">点击加载更多</van-button>
  </div>
</template>
<script>
import {Toast} from 'vant';
// es6 的暴露方式 类似于 module.export = {}
  export default {
    data: ()=>({
      pageindex: 1,
      goodlist: []
    }),
    created(){
      this.getGoods();
    },
    methods: {
      async getGoods(){
        const result = await this.$http.get('api/getgoods?pageindex='+this.pageindex);
        // console.log(result.body)
        const {body:{message,status}} = result;
        if(status==0){
          this.goodlist = this.goodlist.concat(message);
        }else {
          Toast('获取数据失败');
        }
      },
      getMove(){
        this.number++;
        this.getGoods();  
      },
      goGoodInfor(id){
        // this.$router.push('/home/goodsInfor/'+id);
        this.$router.push({name:'goodsInfor',params: {id:id}})
      }
    }
  }
</script>
<style lang="less">
/* 子组件的样式 */
.goodslist {
  ul {
    width: 100%;
    margin-left: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    // box-sizing: border-box;
    .gooditem {
      width: 46%;
      height: 265px;
      border: 1px solid #ddd;
      margin: 0 10px 10px 0;
      padding: 8px;
      box-shadow: 1px 1px 1px 1px #eee;
      box-sizing: border-box;
      color: #666;
      img {
        width: 100%;
      }
      h2 {
        overflow: hidden;
        text-overflow: ellipsis;
        height: 32px;
        font-size: 12px;
      }
      p {
        margin: 0;
        font-size: 12px;
        .new {
          color: red;
          font-size: 14px;
        }
        .old {
          color: #ccc;
        }
        i {
          float: right;
          font-style: normal;
          color: #ccc;
        }
      }
    }
  }
  .van-button--large {
    width: 95%;
    height: 40px;
    line-height: 40px;
    margin: 10px 10px;
    box-sizing: border-box;
    .van-button__text {
      color: pink;
    }
  }
  .van-button--default {
    border: 1px solid pink;
  }
}
</style>