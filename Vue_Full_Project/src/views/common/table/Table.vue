<template>
  <b-card>
    <b-row>
      <b-col sm="5">
        <h4 id="traffic" class="card-title mb-0">{{ this.config[this.dataType].title }}</h4>
      </b-col>
    </b-row>
    &nbsp;&nbsp;&nbsp;
    <b-row>
      <b-col sm="2">
        <b-form-select id="basicSelectLg" v-model="rowSizeSelect" :options="rowSizeSelectedItem"/>
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
          <h6 class="card-title mb-0">{{totalCount}}개 중 1-{{perPage}}번 표시</h6>
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
import moment from 'moment'
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
    dataType: ''
  },
  data: () => {
    return {
      currentPage: 1,
      config: {
        'prefer-merchant': {
          rowSizeSelected: 10,
          rowSizeSelectItem: [
            {value: 10, text: '10개씩 보기'},
            {value: 25, text: '25개씩 보기'},
            {value: 50, text: '50개씩 보기'}
          ],
          title: '선호 매장 설정 회원 (' + moment().format('M/D') + ')  기준',
          perPage: 10
        }
      },
      rowSizeTemp: ''
    }
  },
  computed: {
    totalCount () {
      return this.items.length
    },
    perPage: {
      get: function () {
        return this.config[this.dataType].perPage
      },
      set: function (newValue) {
        this.config[this.dataType].perPage = newValue
      }
    },
    rowSizeSelectedItem () {
      return this.config[this.dataType].rowSizeSelectItem
    },
    rowSizeSelect: {
      get: function () {
        return this.config[this.dataType].rowSizeSelected
      },
      set: function (newValue) {
        this.config[this.dataType].rowSizeSelected = newValue
      }
    }
  },
  mounted () {
    this.rowSizeTemp = this.rowSizeSelect
  },
  updated () {
    if (this.rowSizeSelect !== this.rowSizeTemp) {
      this.rowSizeTemp = this.rowSizeSelect
      this.perPage = this.rowSizeSelect
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
