<template>
<!-- 子组件的模板 -->
  <div class="goodsInfor"> 
    <transition  @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <span class="ball" ref="ball" v-show="flag"></span>
    </transition>
    <!-- 轮波图 -->
    <swiper :lunbotuList="lunbotuList"></swiper>
    
    <div class="price">
      <h2>{{details.title}}</h2>
      <p class="price-num">
        <span>￥{{details.sell_price}}</span>
        <del>￥{{details.market_price}}</del>
      </p>
      
      <p class="num">
        <span>购买件数：</span>
        <van-stepper
          v-model="value"
          integer
          :min="1"
          :max="details.stock_quantity"
          :step="1"
        />
      </p>
      <P class="shop">
        <van-button round type="primary">点击购买</van-button>
        <van-button round type="danger" :disabled="buttonflag" @click="addShopcar">加入购物车</van-button>
      </P>
    </div>
    <div class="details">
      <h3>商品参数</h3>
      <p>商品货号：{{details.goods_no}}</p>
      <p>库存：{{details.stock_quantity}}</p>
      <p>上架时间：{{details.add_time}}</p>
    </div>
    <div class="foot">
      <van-button size="large" @click.prevent="getMove">图文介绍</van-button>
      <van-button size="large" @click.prevent="getComment">商品评论</van-button>
    </div>
  </div>
</template>
<script>
import {Toast} from 'vant'
import swiper from '../homeChildrens/Swiper.vue' 

  export default {
    data: ()=>({
      id: '',
      value: 1,
      lunbotuList: [],
      details: {},
      flag: false,
      buttonflag: false
    }),
    created() {
      this.id = this.$route.params.id;
      this.getImages();
      this.getGoodsInfor();
    },
    methods: {
      async getImages(){
        const result = await this.$http.get('api/getthumimages/'+(this.id+100));
        // console.log(result.body)
        const {body: {message,status}} = result;
        if(status==0){
          this.lunbotuList = message;
        }else {
          Toast('获取数据失败');
        }
      },
      async getGoodsInfor(){
        const result = await this.$http.get('api/goods/getinfo/'+this.id);
        // console.log(result.body)
        const {body: {message,status}} = result;
        if(status==0){
          this.details = message;
        }else {
          Toast('获取数据失败');
        }
      },
      addShopcar(){
        this.flag = !this.flag;
        this.buttonflag = !this.buttonflag;
        setTimeout(()=>{
          this.buttonflag = !this.buttonflag;
        },700)
        // 将商品信息加入到car中
        var goodsInfor = {
          id: this.id,
          count: this.value,
          price: this.details.sell_price,
          selected: true
        };
        this.$store.commit('addTocar',goodsInfor);

      },
      getMove(){
        this.$router.push('/home/goodsdesc/'+this.id);
      },
      getComment(){
        this.$router.push('/home/goodscomment/'+this.id);
      },
      beforeEnter(el){
        el.style.transform = 'translate(0,0)';
      },
      enter(el,done){
        const ballPosition = this.$refs.ball.getBoundingClientRect();
        const badgePosition = document.querySelector('#car .van-info')
        .getBoundingClientRect();
        let xDist = badgePosition.left - ballPosition.left;
        let yDist = badgePosition.top - ballPosition.top;
        el.offsetWidth;
        el.style.transform = `translate(${xDist}px, ${yDist}px)`;
        el.style.transition = 'all 0.6s cubic-bezier(.17,.67,.65,.99)';
        done();
      },
      afterEnter(el){
        this.flag = !this.flag;
      },
    },
    components: {
      swiper
    }
  }
</script>
<style lang="less">
.goodsInfor {
  padding: 0 10px;
  position: relative;
  .ball {
    position: absolute;
    top: 350px;
    left: 150px;
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    z-index: 99;
  }
  .swiper {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px 1px #ccc;
    margin-bottom: 20px;
  }
  .price {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px 1px #ccc;
    margin-bottom: 20px;
    padding: 5px;
    h2 {
      font-size: 16px;
      font-weight: 400;
    }
    .price-num {
      span {
        color: red;
      }
      del {
        font-size: 12px;
        color: #ccc;
      }
    }
    .num {
      display: flex;
      span {
        font-size: 14px;
      }
    }
    .shop {
      text-align: center;
    }
  }
  .details {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px 1px #ccc;
    margin-bottom: 20px;
    padding: 5px;
    h3 {
      font-size: 14px;
      color: #666;
    }
    p {
      font-size: 12px;
      color: #ccc;
    }
  }
  .foot {   
    .van-button--large {
      height: 40px;
      line-height: 40px;
      margin: 10px 0;
      .van-button__text {
        color: pink;
      }
    }
    .van-button--default {
      border: 1px solid pink;
    }
  }
}
</style>

