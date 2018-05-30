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
  name: 'memberGenderAgeTable',
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
        {rank: 1, age: '여자 30~39', percent: '19%'},
        {rank: 2, age: '여자 30~39', percent: '17%'},
        {rank: 3, age: '여자 30~39', percent: '14%'},
        {rank: 4, age: '남자 30~39', percent: '10%'},
        {rank: 5, age: '남자 30~39', percent: '10%'},
        {rank: 6, age: '남자 30~39', percent: '6%'}
      ],
      fields: [
        {key: 'rank'},
        {key: 'age'},
        {key: 'percent'}
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
