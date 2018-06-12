import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const state = {
  membershipLists: [
    { value: 'happyCharge', text: '행복충전' },
    { value: 'levis', text: '리바이스' }],
  memberShipStatus: 'happyCharge',
  id: 'niip00ng@daum.net',
  name: '이준환'
}

export default new Vuex.Store({
  state
})
