<template>
  <div class="cart">
    <ul class="cart-con">
      <li>
        <div class="left">
          <van-checkbox v-model="checkedGoods"></van-checkbox>
        </div>
        <div class="center">
          <img src="https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg" >
        </div>
        <div class="right">
          <h2>标题</h2>
          <p class="explain">说明</p>
          <p class="details">
            <span>￥99</span>
            <van-stepper
              v-model="value"
              integer
              :min="1"
              :max="40"
              :step="1"
            />
            <a href="javascript:;" class="del">删除</a>
          </p>
        </div>
      </li>
    </ul>


    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>
<script>
// es6 的暴露方式 类似于 module.export = {}
export default { 
  data() {
    return {
      value: 1,
      totalPrice: 40,
      checkedGoods: ['1', '2', '3'],
      goods: [{
        id: '1',
        title: '进口香蕉',
        desc: '约250g，2根',
        price: 200,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
      }]
    };
  },
  computed: {
    submitBarText(){

    }
  },
  methods: {
    onSubmit(){

    }
  }
};

</script>
<style lang="less">
.cart {
  width: 100%;
  background-color: #ddd;
  .cart-con {
    overflow: hidden;
    padding: 10px 10px 0 10px;
    li {
      height: 100px;
      display: flex;
      border: 1px solid #ccc;
      background-color: white;
      margin-bottom: 10px;
      .left {
        position: relative;
        flex: 1;
        .van-checkbox {   
          position: absolute;  
          top: 50%; 
          left: 50%;
          transform: translate(-50%,-50%);
        }
      }
      .center {
        flex: 2;
        text-align: center;
        padding-top: 12px;
        img {
          width: 100%;
        }
      }
      .right {
        flex: 7;
        padding-left: 10px;
        h2 {
          font-size: 16px;
          margin-bottom: 0;
        }
        .explain {          
          font-size: 12px;
          color: #ccc;
          margin: 0;
        }
        .details {
          display: flex;
          margin: 5px 0;
          font-size: 14px;
          line-height: 30px;
          span {
            color: red;
            margin-right: 15px;
          }
          .del {            
            margin-left: 15px;
            color: skyblue;
            &:hover {
              color: #ccc;
            }
          }
        }
      }
    }
  }
}
</style>