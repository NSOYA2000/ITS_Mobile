<template>
  <div id="app">
    <!-- <keep-alive>
      <router-view/>
    </keep-alive> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // 解决safari、微信浏览器下拉回弹效果
      this.fixAppScoll()
  },
  methods: {
    /**
     * 解决safari、微信浏览器下拉回弹效果
     */
    fixAppScoll() {
      console.log('解决safari、微信浏览器下拉回弹效果')
      let overscroll = function (el) {
        el.addEventListener('touchstart', function () {
          let top = el.scrollTop
          let totalScroll = el.scrollHeight
          let currentScroll = top + el.offsetHeight
          if (top === 0) {
            el.scrollTop = 1
          } else if (currentScroll === totalScroll) {
            el.scrollTop = top - 1
          }
        })

        el.addEventListener('touchmove', function (evt) {
          if (el.offsetHeight < el.scrollHeight) {
            evt._isScroller = true
          }
        })
      }
      overscroll(document.querySelector('#app'))
      document.body.addEventListener('touchmove', function (evt) {
        if (!evt._isScroller) {
          evt.preventDefault()
        }
      })
    }
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
@import 'assets/css/basic.less';
</style>
