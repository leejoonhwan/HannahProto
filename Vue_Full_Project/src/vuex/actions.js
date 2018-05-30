import * as types from './mutation_types'
import api from '../api'

export default {
  fetchItemLists: ({ commit }) => {
    api.fetchItemLists().then((response) => {
      commit(types.POPULATE_ITEM_LISTS, response.data)
    })
  },
  updateLoginInfo: (store, newItem) => {
    api.updateLoginInfo(newItem)
  },
  getMembershipLists: ({ commit }) => {
    api.getMembershipLists().then((response) => {
      commit(types.MEMBERSHIP_ITEM_LISTS, response.data)
    })
  },
  getMemberCount: ({ commit }) => {
    api.getMemberCount().then((response) => {
      commit(types.MEMBERCOUNT_ITEM_LISTS, response.data)
    })
  },
  getMemberVisitCount: ({ commit }) => {
    api.getMemberVisitCount().then((response) => {
      commit(types.MEMBERVISITCOUNT_ITEM_LISTS, response.data)
    })
  },
  updateMembershipStatus: (store, newItem) => {
    api.updateMembershipStatus(newItem)
  },
  getMembershipStatus: ({ commit }) => {
    api.getMembershipStatus().then((response) => {
      commit(types.MEMBERSHIP_STATUS, response.data)
    })
  }
}
