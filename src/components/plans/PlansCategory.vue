<template>
  <!-- 子组件的模板 -->
  <div class="category">
    <componentshead :title="titleMsg"></componentshead>
    
    <div class="content">
      <ul class="box">
        <li v-for="(item) in iconList" :key="item.id">
          <div class="icon" :data-id="item.id" @click="checked(item.id)">
            <input type="checkbox" :class="['checkAll',item.class]" :checked="item.checked" ><label :for="item.class"></label>
          </div>
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
    
    <router-link to="/home/PlansFinancial">
      <div class="button">
        <span ref="button_span">下一步</span>
        <p>请认真填写真实信息</p>
      </div>
    </router-link>
    
  </div>
</template>

<script>
// import { Toast } from "vant";
import componentshead from '../Childrens/componentsHead';
export default {
  data: () => ({
    titleMsg: '选择类别',
    iconList: [
      {id:1,title:'餐饮',class:'check1',checked:false},
      {id:2,title:'水果',class:'check2',checked:false},
      {id:3,title:'零食',class:'check3',checked:false},
      {id:4,title:'交通',class:'check4',checked:false},
      {id:5,title:'日用',class:'check5',checked:false},
      {id:6,title:'水电',class:'check6',checked:false},
      {id:7,title:'购物',class:'check1',checked:false},
      {id:8,title:'通讯',class:'check2',checked:false},
      {id:9,title:'学习',class:'check3',checked:false},
      {id:10,title:'房租',class:'check4',checked:false},
      {id:11,title:'社交',class:'check5',checked:false},
      {id:12,title:'服饰',class:'check6',checked:false},
      {id:13,title:'医疗',class:'check5',checked:false},
      {id:14,title:'健身',class:'check6',checked:false},
      {id:15,title:'美容',class:'check6',checked:false},
      {id:16,title:'数码',class:'check1',checked:false},
      {id:17,title:'宠物',class:'check2',checked:false},
      {id:18,title:'旅游',class:'check3',checked:false},
      {id:19,title:'娱乐',class:'check4',checked:false},
      {id:20,title:'游戏',class:'check5',checked:false},
      {id:21,title:'烟酒',class:'check6',checked:false},
      {id:22,title:'人情',class:'check1',checked:false},
      {id:23,title:'还债',class:'check2',checked:false},
      {id:24,title:'其它',class:'check3',checked:false}
    ]
  }),
  created() {

  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    checked(id){
      // console.log(id)
      this.iconList.some((item,i)=> {
        if(item.id == id) {
          item.checked = !item.checked;
        }
      })
      this.iconList.some((item,i)=> {
        if(item.checked == true) {
          this.$refs.button_span.innerHTML = '确认';
        }
      })
    }
  },
  components: {
    componentshead,
  }
};
</script>


<style lang="less">
@color_white: #fff;
@color_base: #3CB5FF;
.category {
  .content {
    padding: 0 15/50rem;
    .box {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20%;
        height: 60/50rem;
        margin-top: 25/50rem;
        .icon {
          position: relative;
          width: 32/50rem;
          height: 32/50rem;
          input {
            position: absolute;
            width: 32/50rem;
            height: 32/50rem;
            border-radius: 50%;
            visibility: hidden;
          }
          .checkAll+label {
            display: inline-block;
            position: absolute;
            top:0;
            left:0;
            width: 32/50rem;
            height: 32/50rem;
            border-radius: 50%;
            border: none;
          }
          .check1+label {
            background: url('../../../static/images/categoryIcon/img1.png') no-repeat;
            background-size: cover;
          }
          .check2+label {
            background: url('../../../static/images/categoryIcon/img1.png') no-repeat;
            background-size: cover;
          }
          .check3+label {
            background: url('../../../static/images/categoryIcon/img1.png') no-repeat;
            background-size: cover;
          }
          .check4+label {
            background: url('../../../static/images/categoryIcon/img1.png') no-repeat;
            background-size: cover;
          }
          .check5+label {
            background: url('../../../static/images/categoryIcon/img1.png') no-repeat;
            background-size: cover;
          }
          .check6+label {
            background: url('../../../static/images/categoryIcon/img1.png') no-repeat;
            background-size: cover;
          }
          .check1:checked+label {
            background: url('../../../static/images/categoryIcon/img1_2.png') no-repeat;
            background-size: cover;
          }
          .check2:checked+label {
            background: url('../../../static/images/categoryIcon/img1_2.png') no-repeat;
            background-size: cover;
          }
          .check3:checked+label {
            background: url('../../../static/images/categoryIcon/img1_2.png') no-repeat;
            background-size: cover;
          }
          .check4:checked+label {
            background: url('../../../static/images/categoryIcon/img1_2.png') no-repeat;
            background-size: cover;
          }
          .check5:checked+label {
            background: url('../../../static/images/categoryIcon/img1_2.png') no-repeat;
            background-size: cover;
          }
          .check6:checked:checked+label {
            background: url('../../../static/images/categoryIcon/img1_2.png') no-repeat;
            background-size: cover;
          }
        }
        p {
          padding: 5/50rem 0 0 0;
          margin: 0;
          font-size: 14/50rem;
          color: #333;
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