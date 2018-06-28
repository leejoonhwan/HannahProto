<template>
  <b-card>
    <b-row>
      <b-col>
        <h4 id="traffic" class="card-title mb-0">{{this.config[this.dataType].title }}</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="p-2 px-2 align-content-center">
        <div class="float-left">
          <b-form-select id="basicSelectLg" class="innerSelect" v-model="perPage" :options="perPageOption"/>
        </div>
        <download :downloadUrl="downloadUrl" class="float-right px-3"></download>
        <b-form-input class="float-right p-1 px-2 col-3" v-model="searchWord" type="text" placeholder="검색어를 입력하세요"></b-form-input>
        <date-range-picker v-if="config[dataType].showDatePicker" class="float-right px-2 innerSelect" opens="left" :startDate="pickedDates.startDate" :endDate="pickedDates.endDate" @input="console.log(value)"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <b-table :filter="searchWord" :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="rows" :fields="config[dataType].fields" :current-page="currentPage" :per-page="perPage" @filtered="onFiltered">
          <template slot="actions" slot-scope="data">
            <download :downloadUrl="downloadUrl"></download>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">
        <h6 class="card-title mb-0">{{totalRows}}개 중 {{firstItem}}-{{lastItem}}번 표시</h6>
      </b-col>
      <b-col sm="8">
        <b-pagination size="sm" align="right" :total-rows="totalRows" :per-page="perPage" v-model="currentPage" prev-text="이전" next-text="다음" hide-goto-end-buttons/>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>

// import moment from 'moment'
import numeral from 'numeral'
// import DateRangePicker from 'vue2-daterange-picker'
import DateRangePicker from './datepicker/DateRangePicker'
import Download from './button/Download'

export default {
  name: 'TableCard',
  components: {
    DateRangePicker,
    Download
  },
  props: {
    dataType: '',
    caption: {
      type: String,
      default: 'Table'
    },
    hover: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: true
    },
    small: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      currentPage: 1,
      perPage: 10,
      perPageOption: [
        {value: 10, text: '10개씩 보기'},
        {value: 25, text: '25개씩 보기'},
        {value: 50, text: '50개씩 보기'}
      ],
      totalRows: 0,
      searchWord: null,
      pickedDates: { startDate: '2018-05-01', endDate: '2018-05-27' },
      startDate: '2018-05-01',
      endDate: '2018-05-28',
      rows: [],
      config: {
        'prefer_shop': {
          title: '선호 매장 설정 회원',
          showDatePicker: false,
          selectForms: [],
          api: 'static/dummy/preferShop'
        },
        'mileage_used_shop': {
          title: '마일리지 이용 매장 통계',
          showDatePicker: true,
          selectForms: [],
          fields: [
            { key: 'merchantId', label: '매장ID', sortable: true, tdClass: 'text-center', thClass: ['table-active', 'text-center'] },
            { key: 'merchantName', label: '매장명', sortable: true, tdClass: 'text-center', thClass: ['table-active', 'text-center'] },
            { key: 'address', label: '주소', sortable: true, tdClass: 'px-2', thClass: ['table-active', 'text-center'] },
            { key: 'savingPt', label: '적립 포인트', sortable: true, formatter: 'numberFormat', tdClass: 'text-center', thClass: ['table-active', 'text-center'] },
            { key: 'usedPt', label: '사용 포인트', sortable: true, formatter: 'numberFormat', tdClass: 'text-center', thClass: ['table-active', 'text-center'] },
            { key: 'actions', label: 'Excel', tdClass: 'text-center', thClass: ['table-active', 'text-center'] }
          ],
          api: process.env.API_PREFIX + '/mileage/usedShop'
        }
      },
      rowSizeTemp: ''
    }
  },
  methods: {
    getTableData (membershipId) {
      console.log(this.config[this.dataType].api)
      fetch(this.config[this.dataType].api + '_' + membershipId)
        .then(res => res.json())
        .then(response => {
          this.rows = response.data
          this.totalRows = this.rows.length
        })
    },
    numberFormat (val) {
      return numeral(val).format('0,0')
    },
    onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },
  created () {
    this.getTableData(this.membershipId)
  },
  computed: {
    membershipId () {
      return this.$store.state.memberShipStatus
    },
    downloadUrl () {
      return this.config[this.dataType].api + 'Excel'
    },
    firstItem () {
      return (this.perPage * (this.currentPage - 1)) + 1
    },
    lastItem () {
      return (this.totalRows >= this.perPage * this.currentPage) ? this.perPage * this.currentPage : this.totalRows
    }
  },
  watch: {
    membershipId (val) {
      this.getTableData(val)
      this.searchWord = ''
    }
  }
}
</script>

<style scoped>
  .innerSelect {
    border: none;
    box-shadow: none;
    width: auto;
  }
</style>
