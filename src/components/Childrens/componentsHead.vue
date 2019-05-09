<template>
<!-- 子组件的模板 -->
  <div class="header">
    <van-nav-bar
      :title="title"
      left-text=""
      left-arrow
      @click-left="goBack"
    />

  </div>
</template>
<script>
  export default {
    data: ()=>({
      
    }),
    created() {
      // console.log(this.title)
    },
    methods: {
      goBack(){
        this.$router.go(-1);
      },
    },
    props: ['title'],
  }
</script>
<style lang="less">
@color_white: #fff;
@color_base: #3CB5FF;
.header {
  .van-nav-bar {  
    height: 64/50rem; 
    background-image: linear-gradient(180deg,#3CB5FF 0%,#65A4FF 100%);
    .van-icon {
      color: @color_white;
    }
    .van-nav-bar__title {
      line-height: 84/50rem;
      color: @color_white;
      font-weight: 580;
    }
  }
}
</style>