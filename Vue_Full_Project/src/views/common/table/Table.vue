<template>
  <b-card>
    <b-row>
      <b-col sm="5">
        <h4 id="traffic" class="card-title mb-0">{{titleName}}</h4>
      </b-col>
    </b-row>
    &nbsp;&nbsp;&nbsp;
    <b-row>
      <b-col sm="2">
        <b-form-select id="basicSelectLg" :options="['10개씩 보기','25개씩 보기','50개씩 보기']"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
          <template slot="status" slot-scope="data">
            <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">
        <nav>
          <h6 class="card-title mb-0">118개 중 1-10번 표시</h6>
        </nav>
      </b-col>
      <b-col sm="8">
        <nav>
          <b-pagination align="right" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
        </nav>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
/**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */

export default {
  name: 'TableComponent',
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
    },
    items: {},
    fields: {},
    titleName: '',
    perPage: 0
  },
  data: () => {
    return {
      currentPage: 1,
      totalRows: 0
    }
  },
  updated () {
    console.log(123123123)
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
