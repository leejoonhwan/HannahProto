import * as types from './mutation_types'

export default {
  [types.POPULATE_ITEM_LISTS] (state, lists) {
    state.itemLists = lists
  },
  [types.MEMBERSHIP_ITEM_LISTS] (state, lists) {
    state.membershipLists = lists
  },
  [types.MEMBERCOUNT_ITEM_LISTS] (state, lists) {
    state.memberCount = lists
  },
  [types.MEMBERVISITCOUNT_ITEM_LISTS] (state, lists) {
    state.memberVisitCount = lists
  }
}
