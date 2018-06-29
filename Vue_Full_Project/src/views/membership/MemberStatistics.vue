<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" lg="6">
        <bar-top-half data-type="member-count" bg="bg-primary"></bar-top-half>
      </b-col>
      <b-col sm="6" lg="6">
        <bar-top-half data-type="visit-count" bg="bg-info"></bar-top-half>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12" lg="12"><time-series data-type="membership"></time-series></b-col>
    </b-row>
    <member-gender-age-component></member-gender-age-component>
    <download-only data-type="membership_demography_timeseries"></download-only>
    <table-component bordered :items="tableData" :fields="fieldData" dataType="prefer-merchant"></table-component>
  </div>
</template>

<script>
import BarTopHalf from '../common/BarTopHalf'
import TimeSeries from '../common/TimeSeries'
import MemberGenderAgeComponent from '../dashboard/MemberGenderAgeComponent'
import DownloadOnly from '../common/DownloadOnly'
import AmchartExample from '../dashboard/AmchartExample'
import TableComponent from '../common/table/Table.vue'
import store from '../../vuex/store'

export default {
  name: 'memberStatistics',
  components: {
    BarTopHalf,
    TimeSeries,
    AmchartExample,
    DownloadOnly,
    MemberGenderAgeComponent,
    TableComponent
  },
  store,
  data () {
    return {
      url: 'http://localhost:3000',
      subUrl: '/getPreferMerchantUser',
      membershipSelected: '',
      timeSeries: [{value: '멤버십 회원', text: '멤버십 회원'},
        {value: '멤버십 방문', text: '멤버십 방문'}],
      value3: new Date(),
      membershipStatusIndex: '',
      fieldData: [{}],
      tableData: [{}]
    }
  },
  created () {
    var params = {}
    params.membership = this.membershipIndex
    this.getPreferMerchantData(this.url + this.subUrl, params)
  },
  mounted () {

  },
  updated () {
  },
  computed: {
    membershipIndex () {
      return this.$store.state.memberShipStatus
    }
  },
  watch: {
    membershipIndex (val) {
      var params = {}
      params.membership = val
      this.getPreferMerchantData(this.url + this.subUrl, params)
    }
  },
  methods: {
    getPreferMerchantData (url, params) {
      fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      }).then((res) => res.json())
        .then((response) => {
          this.fieldData = []
          this.tableData = []
          const size = response.data.length
          for (var i = 0; i < size; i++) {
            var dataSet = response.data[i]

            this.tableData.push(dataSet)
            if (i === 0) {
              for (var k in Object.keys(dataSet)) {
                var rowObj = {}
                if (Object.keys(dataSet)[k] === 'merchantId') rowObj.label = '매장ID'
                else if (Object.keys(dataSet)[k] === 'merchantName') rowObj.label = '매장명'
                else if (Object.keys(dataSet)[k] === 'address') rowObj.label = '주소'
                else if (Object.keys(dataSet)[k] === 'memberCount') rowObj.label = '회원수'
                rowObj.key = Object.keys(dataSet)[k]
                rowObj.sortable = true
                this.fieldData.push(rowObj)
              }
              this.fieldData.push({
                key: 'actions'
              })
            }
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
