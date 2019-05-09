<template>
  <!-- 子组件的模板 -->
  <div class="plansNumber">
    <componentshead :title="titleMsg"></componentshead>

    <div class="box">
      <div class="item">
        <label>
          <p><span>每月生活费金额</span></p>
          <input type="number" placeholder="请填写当月生活费金额" v-model="num1" focus="focus"/>
        </label>
      </div>
      <div class="item">
        <label>
          <p><span>当前剩余金额</span></p>
          <input type="number" placeholder="请填写当前剩余金额" v-model="num2"/>
        </label>
      </div>
       <div class="item">
        <label>
          <p><span>每月发放生活费日期</span></p>
          <input type="number" placeholder="每月发放生活费日期" v-model="date" @click="onChangeDate" />
          <van-popup v-model="showDate" position="bottom">
            <van-picker
            show-toolbar
            :columns="columnsDate"
            @confirm="onConfirmDate"
            />
          </van-popup>
        </label>
      </div>
      <div class="item">
        <label>
          <p><span>学校所在地</span></p>
          <v-distpicker :province="province" :city="city" :area="area"></v-distpicker>
        </label>
      </div>
      <div class="box_item">
        <div class="item">
          <label>
            <p>年级</p>
            <input type="text" placeholder="请选择年级" v-model="grade" @click="onChangeGrade" />
            <van-popup v-model="showGrade" position="bottom">
              <van-picker
              show-toolbar
              :columns="columnsGrade"
              @confirm="onConfirmGrade"
              />
            </van-popup>
          </label>
        </div>
        <div class="item">
          <label>
            <p>性别</p>
            <input type="text" placeholder="请选择性别" v-model="gender" @click="onChangeGender" />
            <van-popup v-model="showGender" position="bottom">
              <van-picker
              show-toolbar
              :columns="columnsGender"
              @confirm="onConfirmGender"
              />
            </van-popup>
          </label>
        </div>
      </div>
    </div>
    <router-link to="/home/plansCategory">
      <div class="button">
        <span>下一步</span>
        <p>请认真填写真实信息</p>
      </div>
    </router-link>
    
    
  </div>
</template>

<script>
import { Toast } from "vant";
import componentshead from '../Childrens/componentsHead';
import VDistpicker from 'v-distpicker'
export default {
  data: () => ({
    titleMsg: '填写资料',
    num1: '', // 参数 num1
    num2: '', // 参数 num2
    date: '', // 参数 date
    address: '', // 参数 address
    value: '', // 参数 value
    province: "广东省", // 参数 province
    city: "广州市", // 参数 city
    area: "海珠区", // 参数 area
    grade: '', // 参数 grade
    gender: '女', // 参数 gender
    showDate: false, // 标记
    showAddress: false, // 标记
    showGrade: false, // 标记
    showGender: false, // 标记
    columnsDate: ['1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12', '13', '14', '15','16', '17', '18', '19', '20','21', '22', '23', '24', '25','26', '27', '28', '29', '30','31'],
    columnsGrade: ['大一','大二','大三','大四','其他'],
    columnsGender: ['男','女']
  }),
  created() {

  },
  methods: {
    onChangeDate() { // 选择日期
      this.showDate = !this.showDate;
    },
    onConfirmDate(value, index) { // 确认日期
      this.date = this.columnsDate[index];
    },
    onChangeGrade() { // 选择年级
      this.showGrade = !this.showGrade;
    },
    onConfirmGrade(value, index) { // 确认年级
      this.grade = value;
    },
    onChangeGender() { // 选择性别
      this.showGender = !this.showGender;
    },
    onConfirmGender(value, index) { // 确认性别
      this.gender = value;
    }
  },
  components: {
    componentshead,
    VDistpicker
  }
};
</script>


<style lang="less">
@color_white: #fff;
@color_base: #3CB5FF;
.plansNumber {
  .box {
    width: 100%;
    padding: 0 15/50rem;
    box-sizing: border-box;
    .box_item {
      display: flex;
      .item {
        width: 49%;
        &:nth-child(2) {
          margin-left: 2%;
        }
      }
    }
    .item {
      label {
        display: flex;
        flex-direction: column;
      }
      p {
        display: flex;
        // height: 20/50rem;
        margin: 0;
        padding: 15/50rem 0 0 0;
        font-size: 14/50rem;
        span {
          position: relative;
          // display: inline-block;
          color:#333;   
          font-size: 14/50rem;
          &::before {
            content: '*';
            position: absolute;
            top: 4/50rem;
            right: -10/50rem;
            // font-size: 14/50rem;
            color: #f44;
          }
        }    
      }
      input {
        width: 100%;
        height:40/50rem;
        line-height:40/50rem;
        margin: 8/50rem 0 0 0;
        padding-left: 15/50rem;
        border:1/50rem solid #ddd;
        border-radius:8/50rem;
        color:#666;
        font-size: 14/50rem;
        box-sizing: border-box;
        &::placeholder {         
          color:#ddd;
        }
      }
      .distpicker-address-wrapper {
        display: flex;
        margin-top: 8/50rem;
        height: 40/50rem ;
        select {
          width: 33%;
          height: 40/50rem ;
          padding: 0 0 0 10/50rem;
          font-size: 14/50rem;
          // border: none;
          color: #999;
        }
      }
    }
  }
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20/50rem;
    span {
      width: 180/50rem;
      height: 40/50rem;
      line-height: 40/50rem;
      background-image: linear-gradient(90deg,#3CB5FF 0%,#65A4FF 100%);
      border-radius: 20/50rem;
      color: @color_white;
      text-align: center;
      font-size: 16/50rem;
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