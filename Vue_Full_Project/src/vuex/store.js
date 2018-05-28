import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
// import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const state = {
  itemLists: [],
  membershipLists: [],
  memberCount: [],
  memberVisitCount: []
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
  // plugins: [createPersistedState()]
})
