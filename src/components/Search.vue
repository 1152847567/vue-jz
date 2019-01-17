<template>
<!-- 子组件的模板 -->
  <div class="register">
    this is register component 
    
  </div>
</template>
<script>
// es6 的暴露方式 类似于 module.export = {}
  export default {
    data: ()=>({
    })
  }
</script>
<style lang="less" scoped>
/* 子组件的样式 */
@color: pink;
.register {
  color: @color;
  font-size: 32px;
}
</style>