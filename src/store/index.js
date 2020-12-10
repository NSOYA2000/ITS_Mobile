import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'

Vue.use(Vuex)

// 使用频率高，赋给全局变量
for (let item of ['mapState', 'mapGetters', 'mapMutations', 'mapActions']) {
  window[item] = Vuex[item]
}

// 注册到 vm，可以通过 this.$vuex 调用
// Vue.prototype.$vuex = Vuex

export default new Vuex.Store({
  modules: {
    common
  }
})
