<template>
  <div id="content">
    <!-- <my-header :isBlackLogo="true"></my-header> -->
    <div class="back">
      <img src="../assets/img/back.png" @click="goBack()" alt="">
    </div>
    <div class="content">
      <!-- <button @click="goBack()">返回</button> -->
      <div class="content-item">
        <p class="p-title">{{contentList.name}}</p>
        <p class="p-content">
          <span class="left">{{contentList.content}}</span>
          <span class="right">{{contentList.time}}</span>
        </p>
        <div class="img-list" v-for="(opt, $index) in contentList.file" :key="$index">
          <img v-lazy="githubUrl + opt.url + '?raw=true'" alt="" class="comtent-img">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import config from '../config/index.js'
  import myHeader from '../common/my-header.vue'
  import { mapGetters } from 'vuex';
  export default {
    components: {
      myHeader
    },
    data () {
      return {
        contentList: [],
        githubUrl: config.githubImgUrl
      }
    },
    computed: {
      ...mapGetters([
        'getDetailArr'
      ])
    },
    created() {
      this.contentList = this.getDetailArr
    },
    methods: {
      goBack () {
        this.$router.back()
      }
    },
    mounted () {
     
    }
  }
</script>
<style lang="less" scoped>
img[lazy=error] {
  display: block !important;
  width: 70px!important;
  height: 70px!important;
  margin: 60px auto !important;
}
img[lazy=loading] {
  display: block !important;
  width: 70px!important;
  height: 70px!important;
  margin: 60px auto !important;
}
#content {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  .back {
    height: .2rem;
    margin: .2rem 0;
    padding: 0 .1rem;
    img {
      width: .2rem;
    }
  }
  .content {
    flex: 1;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    overflow: auto;
    flex-direction: column;
    -webkit-flex-direction: column;
    -webkit-overflow-scrolling: touch;
    height: calc(~'100% - 77px');
    padding: 0 .13rem;
    .content-item {
      overflow: hidden;
      margin-bottom: .2rem;
      .comtent-img {
        display: block;
        width: 100%;
        margin: .2rem auto;
      }
      .p-title {
        font-size: .16rem;
        color: #555;
        padding: .1rem 0;
      }
      .p-content {
        font-size: .14rem;
        color: #7E7E7E;
        .left {
          float: left;
        }
        .right {
          float: right;
        }
      }
      .img-list {
        width: 100%;
        overflow: hidden;
      }
    }
  }
}
</style>
