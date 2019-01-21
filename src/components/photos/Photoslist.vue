<template>
<!-- 子组件的模板 -->
  <div class="photoslist">
    <van-tabs @click="getImagesList">
      <van-tab v-for="item in category" :key="item.id" :title="item.title">
      </van-tab>
    </van-tabs>
    <router-link v-for="item in imagesList" :key="item.id" :to="'/home/photosInfor/'+item.id">
      <img :title="item.title" :src="item.img_url" v-for="img in [item.img_url]" :key="img" v-lazy="img"/>
    </router-link>
  </div>
</template>
<script>
import {Toast} from 'vant';
// es6 的暴露方式 类似于 module.export = {}
  export default {
    data: ()=>({
      id: '',
      category: [],
      imagesList: [],
      num: 1
    }),
    methods: {
      async getAllCategory(){
        const result = await this.$http.get('api/getimgcategory');
          // console.log(result.body)
          const {message,status} = result.body;
          if(status==0){
            this.category = message;
            this.category.unshift({title:'全部',id:0});
            // console.log(this.category)
          }else {
            Toast('获取分类信息失败');
          }        
      },
      async getImagesList(index){
        if(index==0){
          index = 1;
        }
        const result = await this.$http.get('api/getimages/'+index);
        // console.log(result.body)
        if(result.length==0){
          return Toast('系统没有数据啦!');
        }
        const {message,status} = result.body;
        if(status==0){
          this.imagesList = message;
          // console.log(this.imagesList)
        }else {
          Toast('获取分类信息失败');
        }
      }
    },
    created(){
      this.getAllCategory();
      this.getImagesList(this.num);
    }
  }
</script>
<style lang="less">
/* 子组件的样式 */
.photoslist {
  img {
    width: 100%;
    // vertical-align: top;
  }
}
</style>