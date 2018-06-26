<template>
  <b-card>
    <b-row>
      <b-col>
        <h4 id="traffic" class="card-title mb-0">{{this.config[this.dataType].title }}</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="float-left px-2">
          <b-form-select id="basicSelectLg" class="innerSelect" v-model="rowSizeSelected" :options="rowSizeItems"/>
        </div>
        <download :downloadUrl="downloadUrl" class="float-right"></download>
        <div class="float-right px-2 col-2">검색 <i></i></div>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="rows" :fields="config[dataType].fields" :current-page="currentPage" :per-page="rowSizeSelected">
          <template slot="actions" slot-scope="data">
            <!--<i class="icon-cloud-download icons px-2" style="color:green;" v-on:click = "downloadExcel(data.item.merchantId)" v-html="data.value"></i>-->
            <download :downloadUrl="downloadUrl"></download>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">
        <nav>
          <h6 class="card-title mb-0">{{totalCount}}개 중 {{firstItem}}-{{lastItem}}번 표시</h6>
        </nav>
      </b-col>
      <b-col sm="8">
        <nav>
          <b-pagination size="sm" align="right" :total-rows="totalCount" :per-page="rowSizeSelected" v-model="currentPage" prev-text="이전" next-text="다음" hide-goto-end-buttons/>
        </nav>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>

// import moment from 'moment'
import numeral from 'numeral'
import Download from './button/Download'

export default {
  name: 'TableCard',
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
  components: {
    Download
  },
  data: () => {
    return {
      currentPage: 1,
      rowSizeSelected: 10,
      rowSizeItems: [
        {value: 10, text: '10개씩 보기'},
        {value: 25, text: '25개씩 보기'},
        {value: 50, text: '50개씩 보기'}
      ],
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
          api: 'static/dummy/mileageUsedShop'
        }
      },
      rowSizeTemp: ''
    }
  },
  methods: {
    getTableData (membershipId) {
      fetch(this.config[this.dataType].api + '_' + membershipId)
        .then(res => res.json())
        .then(response => {
          this.rows = response.data
        })
    },
    numberFormat (val) {
      return numeral(val).format('0,0')
    }
  },
  created () {
    this.getTableData(this.membershipId)
  },
  computed: {
    membershipId () {
      return this.$store.state.memberShipStatus
    },
    totalCount () {
      return this.rows.length
    },
    downloadUrl () {
      return this.config[this.dataType].api + 'Excel'
    },
    firstItem () {
      return (this.rowSizeSelected * (this.currentPage - 1)) + 1
    },
    lastItem () {
      return (this.totalCount >= this.rowSizeSelected * this.currentPage) ? this.rowSizeSelected * this.currentPage : this.totalCount
    }
  },
  watch: {
    membershipId (val) {
      this.getTableData(val)
    }
  }
}
</script>

<style scoped>
  .icons {
    font-size: 18px;
    padding-right: 7px;
    font-weight: bold;
  }
  .innerSelect {
    border: none;
    box-shadow: none;
    width: auto;
  }
</style>
