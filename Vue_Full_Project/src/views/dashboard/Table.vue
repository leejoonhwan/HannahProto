<template>
    <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
      <template slot="status" slot-scope="data">
        <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
      </template>
    </b-table>
</template>

<script>
/**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */

export default {
  name: 'c-table',
  props: {
    caption: {
      type: String,
      default: 'Table'
    },
    hover: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      items: [
        {username: 1, registered: '여자 30~39', role: '19%'},
        {username: 2, registered: '여자 30~39', role: '17%'},
        {username: 3, registered: '여자 30~39', role: '14%'},
        {username: 4, registered: '남자 30~39', role: '10%'},
        {username: 5, registered: '남자 30~39', role: '10%'},
        {username: 6, registered: '남자 30~39', role: '6%'}
      ],
      fields: [
        {key: 'username'},
        {key: 'registered'},
        {key: 'role'}
      ],
      currentPage: 1,
      perPage: 6,
      totalRows: 0
    }
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    getRowCount (items) {
      return items.length
    }
  }
}
</script>
