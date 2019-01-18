<template>
<!-- 子组件的模板 -->
  <div class="newslist">
    <router-link v-for="item in newslist" :key="item.id" :to="'/home/newsinfor/'+item.id">
      <van-card class="van-card"  :price="item.add_time | dataFormat" :desc="'点击量：'+item.click" :title="item.title" :thumb="item.img_url" currency=""/>
    </router-link>
    
  </div>
</template>

<script>

// es6 的暴露方式 类似于 module.export = {}
  export default {
    data: ()=>({
      newslist: []
    }),
    methods: {
      async getnewslist(){
        const result = await this.$http.get('api/getnewslist');
        // console.log(result.body)
        const {message,status} = result.body;
        if(status==0){
          this.newslist = message;
        }else{
          Toast('获取数据失败')
        }
      }
      // console.log(this.id)
    },
    created(){
      this.getnewslist();
    }
  }
</script>
<style lang="less">
.newslist {
  .van-card {
    .van-card__content {
      height: 48px;
      .van-card__title {
        font-weight: 400;
      }
      .van-card__desc {
        position: absolute;
        right: 0;
        top: 28px;
      }
    }
    .van-card__thumb {
      height: 60px;
    }
    .van-card__price {
      color: #ccc;
    }
  }
}
</style>