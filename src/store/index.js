import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]');

export default new Vuex.Store({
  state: {  // this.$store.state.***
    car: car
  },
  mutations: {  // this.$store.commit('方法名称',参数)
    addTocar(state,goodsInfor){ 
      var flag = true;
      // 在加入之前循环每一项  有相同的只需要更新数量
      state.car.some(item=>{
        if(item.id == goodsInfor.id){
          item.count += parseInt(goodsInfor.count);
          flag = !flag;
          return true;
        }
      });
      if(flag){
        state.car.push(goodsInfor);
      }
      localStorage.setItem('car',JSON.stringify(state.car));
    }
  },
  getters: { // this.$store.getters.***
    getAllCount(state){
      var num = 0;
      state.car.forEach(item=>{
        num += item.count;
      })
      return num;
    }
  }
})