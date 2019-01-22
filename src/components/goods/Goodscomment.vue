<template>
<!-- 子组件的模板 -->
  <div class="goodscomment">
    <comment :id="id"></comment>
  </div>
</template>
<script>
import comment from '../subcomponents/Comment.vue';
// es6 的暴露方式 类似于 module.export = {}
  export default {
    data: ()=>({
      id: ''
    }),
    created(){
      this.id = this.$route.params.id;
    },
    component: {
      comment
    }
  }
</script>
<style>
/* 子组件的样式 */
</style>