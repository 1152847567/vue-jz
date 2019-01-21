<template>
  <!-- 子组件的模板 -->
  <div class="photosinfor">
    <div class="header">
      <h2>{{list.title}}</h2>
      <p>
        <span>发表时间：{{list.add_time}}</span>
        <i>浏览量：{{list.click}}</i>
      </p>
    </div>
    <hr>
    <div class="prev">
      <img v-for="(item,index) in imglist" :key="item.id" :src="item.src" @click="handleImage(index)">
    </div>

    <div class="content">{{list.content}}</div>

    <comment></comment>
  </div>
</template>
<script>
import { Toast } from "vant";
import comment from "../subcomponents/Comment.vue";
import { ImagePreview } from "vant";
// es6 的暴露方式 类似于 module.export = {}
export default {
  data: () => ({
    id: "",
    list: [],
    imglist: []
  }),
  created() {
    this.id = this.$route.params.id;
    this.getPhotoInfor();
    this.getThumimages();
  },
  methods: {
    async getPhotoInfor() {
      const result = await this.$http.get("api/getimageInfo/" + this.id);
      // console.log(result.body);
      const { message, status } = result.body;
      if (status == 0) {
        this.list = message;
      } else {
        Toast("获取分类信息失败");
      }
    },
    async getThumimages() {
      const result = await this.$http.get("api/getthumimages/" + this.id);
      // console.log(result.body);
      const { message, status } = result.body;
      if (status == 0) {
        this.imglist = message;
      } else {
        Toast("获取分类信息失败");
      }
    },
    // 点击图片实现预览
    handleImage(startPosition) {
      let images = [];
      this.imglist.forEach(item => {
        if (item.src != null) {
          images.push(item.src);
        }
      });
      ImagePreview({
        images,
        // startPosition
      });
    }
  },
  components: {
    comment
  }
};
</script>
<style lang="less">
/* 子组件的样式 */
.photosinfor {
  // background-color: pink;
  padding: 10px 10px 0 10px;
  .header {
    position: relative;
    h2 {
      margin: 0;
      font-size: 14px;
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
  .prev {
    display: flex;
    justify-content: space-around;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>