<template>
  <div id="detail">
    <my-header :isBlackLogo="true"></my-header>
    <div class="content">
      <!-- 影视广告 -->
      <div class="content-box" v-if="getSwiperIndex == 0">
        <no-data></no-data>
      </div>
      <!-- 商业摄影 -->
      <div class="content-box" v-if="getSwiperIndex == 1">
        <div class="content-item" v-for="(item, $index) in advertising" :key="$index" @click="goContent(item)">
          <img class="comtent-img" v-lazy="githubUrl + item.file[0].url + '?raw=true'" key="0" alt="">
          <p class="p-title">{{item.name}}</p>
          <p class="p-content">
            <span class="left">{{item.content}}</span>
            <span class="right">{{item.time}}</span>
          </p>
        </div>
      </div>
      <!-- 品牌视觉 -->
      <div class="content-box" v-if="getSwiperIndex == 2">
        <div class="content-item" v-for="(item, $index) in brand" :key="$index" @click="goContent(item)">
          <img class="comtent-img" v-lazy="githubUrl + item.file[0].url + '?raw=true'" key="1" alt="">
          <p class="p-title">{{item.name}}</p>
          <p class="p-content">
            <span class="left">{{item.content}}</span>
            <span class="right">{{item.time}}</span>
          </p>
        </div>
      </div>
      <!-- 网站搭建 -->
      <div class="content-box" v-if="getSwiperIndex == 3">
        <no-data></no-data>
      </div>
      <!-- <no-data></no-data> -->
    </div> 
  </div>
</template>
<script>
  import config from '../config/index.js'
  import myHeader from '../common/my-header.vue'
  import noData from '../common/nodata.vue'
  import { mapMutations, mapGetters } from 'vuex'
  export default {
    components: {
      myHeader,
      noData
    },
    data () {
      return {
        url: './static/data.json',
        bigMenu: false,
        commonData: [],
        advertising: [],
        brand: [],
        githubUrl: config.githubImgUrl
      }
    },
    methods: {
      ...mapMutations([
        'updateDetailArr'
      ]),
      showBigMenu () {
          this.bigMenu = true
      },
      getData () {
        console.warn(config)
        this.$http.get(this.url).then(res => {
          this.advertising = res.data.advertising
          this.brand = res.data.brand
        })
      },
      goContent (item) {
        this.updateDetailArr(item)
        this.$router.push({
          path: '/content'
        })
      }
    },
    computed: {
      ...mapGetters([
        'getSwiperIndex'
      ])
    },
    mounted () {
      this.getData()
    },
    watch: {
      getSwiperIndex (val) {

      }
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
#detail {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .content {
    flex: 1;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    overflow: auto;
    flex-direction: column;
    -webkit-flex-direction: column;
    -webkit-overflow-scrolling: touch;
    height: calc(~'100% - 77px');
    margin-top: 77px;
    padding: 0 .13rem;
    .content-item {
      overflow: hidden;
      margin-bottom: .2rem;
      .comtent-img {
        display: block;
        width: 100%;
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
    }
  }
}

</style>
