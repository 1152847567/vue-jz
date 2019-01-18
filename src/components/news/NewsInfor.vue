<template>
<!-- 子组件的模板 -->
  <div class="newsinfor">
    <div class="header">
      <h2>{{newsinfor.title}}</h2>
      <p>
        <span>发表时间：{{newsinfor.add_time}}</span>
        <i>发表量：{{newsinfor.click}}</i>
      </p>
      <p>{{newsinfor.content}}</p>
    </div>

    <comment :id="id"></comment>
  </div>
</template>
<script>
import comment from '../subcomponents/Comment.vue';
// es6 的暴露方式 类似于 module.export = {}
  export default {
    data: ()=>({
      id: '',
      newsinfor: {}
    }),
    methods: {
      async getinfor(){
        const {data: {status,message}} = await this.$http.get('api/getnew/'+this.id);
        if(status==0){
          this.newsinfor = message;
        }
        // console.log(this.newsinfor);
      }
    },
    created(){
      this.id = this.$route.params.id;
      this.getinfor();
    },
    components: {
      comment
    }
  }
</script>
<style lang="less">
/* 子组件的样式 */
.newsinfor {
  // background-color: pink;
  padding: 10px 10px 0 10px;
  .header {
    position: relative;
    h2 {
      margin: 0;
      font-size: 14px;
      // font-weight: 400;
    }
    p {
      font-size: 12px;
      i {
        position: absolute;
        top: 35px;
        right: 0;
        font-style: normal;
      }
    }
  }
}
</style>