<template>
<!-- 子组件的模板 -->
  <div class="comment">
    <h2>发表评论</h2>
    <hr>
    <textarea placeholder="请输入内容,最多120个字"></textarea>
    <van-button size="large">点击评论</van-button> 
    <ul class="comment-con">
      <li v-for="(item,index) in list" :key="item.id">
        <p>
          <span>第{{index+1}}楼</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>用户：{{item.user_name}}</span>
          <em>发表时间：{{item.add_time}}</em>
        </p>
        <p>{{item.content}}</p>
      </li>
    </ul>
    
    <van-button size="large" @click.prevent="getMove">点击加载更多</van-button>

  </div>
</template>
<script>
// es6 的暴露方式 类似于 module.export = {}
  export default {
    data: ()=>({
      list: [],
      pageindex: 1
    }),
    props: ['id'],
    created() {
      this.getcomment();
    },
    methods: {
      async getcomment(){ //api/getcomments/:artid?pageindex=1
        // console.log(this.id)
        const result = await this.$http.get(`api/getcomments/${this.id}?pageindex=${this.pageindex}`);
        // console.log(result.body)
        const {message,status} = result.body;
        if(status==0) {
          this.list = this.list.concat(message);
        }else {
          Toast('获取数据失败');
        }
      },
      getMove(){
        this.pageindex++;
        this.getcomment();
      }
    }
  }
</script>
<style lang="less">
.comment {
  h2 {
    font-size: 14px;
    margin: 0;
  }
  textarea {
    width: 98%;
    height: 60px;
    outline: none;
    font-size: 12px;
  }
  .van-button--large {
    height: 40px;
    line-height: 40px;
    margin: 10px 0;
    .van-button__text {
      color: pink;
    }
  }
  .van-button--default {
    border: 1px solid pink;
  }
  .comment-con {
    li {
      font-size: 12px;
      p {
        height: 35px;
        line-height: 35px;
        margin: 0;
        &:nth-child(1) {
          background-color: #f7f7f7;
        }&:nth-child(2) {
          text-indent: 2em;
        }
        em {
          position: absolute;
          right: 20px;
          font-style: normal;
        }
      }
    }
  }
}
</style>