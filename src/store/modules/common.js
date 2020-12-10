const _state = {
  detailArr: [],
  swiperIndex: -1
}
const mutations = {
  updateDetailArr (state, detailArr) {
    state.detailArr = detailArr
  },
  updateSwiperIndex (state, swiperIndex) {
    state.swiperIndex = swiperIndex
  }
}
const getters = {
  getDetailArr(state) {
    return state.detailArr
  },
  getSwiperIndex(state) {
    return state.swiperIndex
  }
}
const actions = {
  changeDetailArr(context, detailArr) {
    context.commit('updateDetailArr', detailArr)
  },
  changeSwiperIndex(context, swiperIndex) {
    context.commit('updateSwiperIndex', swiperIndex)
  }
}

export default {
  state: _state,
  getters,
  mutations,
  actions
}
