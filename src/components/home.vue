<template>
    <div id="home">
        <my-header :isBlackLogo="false" :commonSwiper="commonSwiper"></my-header>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, $index) in bgList" :key="$index" @click="goDetail($index)">
                    <img :src="item.url" class="bg1">
                    <div class="swiper-content">
                        <img :src="item.texturl" alt="">
                    </div>
                    <div class="next-item"><img src="../assets/img/down.png" alt=""></div>
                </div>
                <div class="swiper-slide bg5">
                    <div class="text">IDEATALKS STUDIO 2016年成立于北京， 集影视广告、商业摄影、 品牌视觉及网站搭建的品牌营销设计团队。 致力于帮助品牌完善企业形象，提升品牌价值， 增进产品体验。</div>
                    <div class="info">
                        <p class="info-p">Email:</p>
                        <p class="info-p">ITS@ideatalks.cn</p>
                        <p class="info-p">TEL:</p>
                        <p class="info-p">185 0062 7629</p>
                    </div> 
                    <div class="ewm">
                        <img src="../assets/img/ewm.png" alt="">
                        <p>企业公众号</p>
                    </div>
                    <div class="foot-ba">京ICP备18011936号 2018 IDEATALKS STUDIO 版权所有</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import myHeader from '../common/my-header.vue'
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'home',
  components: {
    myHeader  
  },
  data () {
    return {
        commonSwiper: {},
        bgList: [
            {
                url: require('../assets/img/bg1@3x.png'),
                texturl: require('../assets/img/wa1@3x.png')
            },
            {
                url: require('../assets/img/bg2@3x.png'),
                texturl: require('../assets/img/wa2@3x.png')
            },
            {
                url: require('../assets/img/bg3@3x.png'),
                texturl: require('../assets/img/wa3@3x.png')
            },
            {
                url: require('../assets/img/bg4@3x.png'),
                texturl: require('../assets/img/wa4@3x.png')
            }
        ]
    }
  },
  methods: {
      ...mapMutations([
        'updateSwiperIndex'
      ]),
      //跳转到关于页
      goAbout (opt) {
        opt.slideTo(4, 1000, false);
      },
      // 跳转到详情页
      goDetail (opt) {
        this.updateSwiperIndex(opt)
        this.$router.push({
            path: '/detail'
        })
        // this.closeMenu()
      }
  },
  mounted(){
     this.commonSwiper = new Swiper ('.swiper-container', {
        loop: false,
        effect : 'fade',
        direction: 'vertical',
        speed: 500,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar'
    })       
  },
  computed: {
      ...mapGetters([
        'getSwiperIndex'
      ]),
      activeIndex: function() {
          return this.commonSwiper.activeIndex
      }
  },
  watch: {
      activeIndex (val) {
          this.updateSwiperIndex(val)
      },
      getSwiperIndex (val) {
        //   console.warn(val)
        switch (val) {
            case 0:
                this.commonSwiper.slideTo(0, 1000, false);
                break
            case 4:
                this.commonSwiper.slideTo(4, 1000, false);
                break
        }
      }
  }
}
</script>
<style lang="less" scoped>
#home {
width: 100%;
height: 100%;
position: relative;
.swiper-container {
    width: 100%;
    height: 100%;
    background: #333;
    .swiper-slide {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        .text {
            font-size: .14rem;
            color: rgba(255,255,255,0.6);
            width: 2.94rem;
            margin: 1rem auto 0.5rem auto;
            line-height: .3rem;
        }
        .info {
            width: 2.94rem;
            margin: 0 auto;
            .info-p {
                font-size: .24rem;
                color: #fff;
                line-height: .4rem;
            }
        }
        .ewm {
            width: .8rem;
            height: 1.3rem;
            margin-top: .25rem;
            margin-left: .4rem;
            img {
                width: 100%;
            }
            p {
                font-size: .12rem;
                color: #fff;
                text-align: center;
                line-height: .25rem;
            }
        }
        .foot-ba {
            width: 100%;
            font-size: .12rem;
            color: rgba(255,255,255,0.6);
            text-align: center;
            position: absolute;
            bottom: .17rem;
        }
        .swiper-content {
            position: absolute;
            top: 40%;
            left: 0;
            right: 0;
            margin: 0 auto;
            height: .77rem;
            img {
                display: block;
                // width: 100%;
                height: 100%;
                margin: 0 auto;
            }
        }
        .next-item {
            width: .1rem;
            height: .34rem;
            position: absolute;
            bottom: .25rem;
            left: 0;
            right: 0;
            margin: 0 auto;
            img {
                display: block;
                width: 100%;
            }
        }
    }
    .bg1 {
        width: 100%;
        height: 100%;
        display: block;
    }
    .bg2 {
        background: url('../assets/img/bg2@3x.png') no-repeat;
        background-size: 100% 100%;
    }
    .bg3 {
        background: url('../assets/img/bg3@3x.png') no-repeat;
        background-size: 100% 100%;
    }
    .bg4 {
        background: url('../assets/img/bg4@3x.png') no-repeat;
        background-size: 100% 100%;
    }
    .bg5 {
        background: url('../assets/img/bg5@3x.png') no-repeat;
        background-size: 100% 100%;
    }
}
} 
</style>

