<template>
  <div id="header">
    <div class="pos-header">
      <div v-if="!isBlackLogo">
        <div class="logo"><img src="../assets/img/LOGO@3x.png" alt=""></div>
        <div class="navigation" @click="showBigMenu"><img src="../assets/img/navigation@3x.png" alt=""></div>
      </div>
      <div v-else>
        <a class="logo" href="/"><img src="../assets/img/BLOGO@3x.png" alt=""></a>
        <div class="navigation" @click="showBigMenu"><img src="../assets/img/Bnavigation@3x.png" alt=""></div>
      </div>
    </div>
    <div class="menu" v-show="bigMenu">
        <div class="menu-left" @click="closeMenu"></div>
        <div class="menu-content">
            <div class="close" @click="closeMenu"><img src="../assets/img/close.png" alt=""></div>
            <div class="menu-model">
                <div class="menu-item">
                    <p class="menu-item-p" @click="goHome()">HOME</p>
                </div>
                <div class="menu-item">
                    <p class="menu-item-p" @click="showMenu">PRODUCTION</p>
                    <div class="menu-child" v-show="menuflag">
                        <p class="menu-child-p" @click="goDetail(0)">影视广告</p>
                        <p class="menu-child-p" @click="goDetail(1)">商业摄影</p>
                        <p class="menu-child-p" @click="goDetail(2)">品牌视觉</p>
                        <p class="menu-child-p" @click="goDetail(3)">信息平台</p>
                    </div>
                </div>
                <div class="menu-item">
                    <p class="menu-item-p" @click="goAbout()">ABOUT</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import { mapMutations, mapGetters } from 'vuex'
  export default {
    props: {
      isBlackLogo: {
        type: Boolean,
        default: ""
      },
      commonSwiper: {
        type: Object,
        default: function() {

        }
      }
    },
    data () {
      return {
        menuflag: false,
        bigMenu: false
      }
    },
    methods: {
    ...mapMutations([
        'updateSwiperIndex'
      ]),
      showMenu () {
        this.menuflag = !this.menuflag
      },
      showBigMenu () {
        this.bigMenu = true
      },
      closeMenu () {
        this.bigMenu = false
      },
      // 跳转到详情页
      goDetail (opt) {
        this.updateSwiperIndex(opt)
        this.$router.push({
            path: '/detail'
        })
        this.closeMenu()
      },
      // 返回首页
      goHome () {
        this.updateSwiperIndex(0)
        this.$router.push({
              path: '/'
        })
        this.closeMenu()
      },
      //跳转到关于页
      goAbout (opt) {
        // opt.slideTo(4, 1000, false);
        this.updateSwiperIndex(4)
        this.$router.push({
              path: '/'
        })
        this.closeMenu()
      }
    }
  }
</script>
<style lang="less" scoped>
#header {
  // width: 100%;
  // height: 100%;
  // position: relative;
  .pos-header {
      z-index: 1000;
      position: absolute;
      top: 0;
      width: 100%;
      // padding: .2rem .15rem;
      padding: .2rem 0;
      .logo {
          width: 1.2rem;
          height: .3rem;
          float: left;
          margin-left: .15rem;
          img {
              width: 100%;
          }
      }
      .navigation {
          width: .24rem;
          height: .18rem;
          float: right;
          margin-right: .2rem;
          margin-top: .1rem;
          img {
              width: 100%;
          }
      }
  }
  .menu {
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1000;
    .menu-left {
      width: calc(~ "100% - 3.22rem");
      height: 100%;
      float: left;
    }
    .menu-content {
        display: block;
        width: 3rem;
        height: 100%;
        background: rgba(34,40,49,0.9);
        float: right;
        padding: 0rem .22rem 0 0;
        .close {
            position: absolute;
            right: .22rem;
            top: .3rem;
            width: .2rem;
            height: .2rem;
            // float: right;
            // display: block;
            img {
                display: block;
                width: 100%;
            }
        }
        .menu-model {
            // width: 100%;
            width: 1rem;
            display: block;
            float: right;
            margin-top: .75rem;
            .menu-item {
                position: relative;
                padding: .15rem 0;
                &:nth-child(1) {
                    &::before {
                        content: '';
                        position: absolute;
                        width: .3rem;
                        height: .01rem;
                        background: #fff;
                        bottom: 0;
                        right: 0;
                    }
                }
                &:nth-child(2) {
                    &::before {
                        content: '';
                        position: absolute;
                        width: .3rem;
                        height: .01rem;
                        background: #fff;
                        bottom: 0;
                        right: 0;
                    }
                }
                .menu-item-p {
                    font-size: .16rem;
                    color: #fff;
                    text-align: right;
                }
            }
            .menu-child {
                .menu-child-p {
                    font-size: .12rem;
                    color: rgba(255, 255, 255, 0.5);
                    margin-top: .15rem;
                    text-align: right;
                }
            }
        }
    }
  }
}
</style>
