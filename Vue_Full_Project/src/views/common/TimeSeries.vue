<template>
  <b-card>
    <b-row>
      <b-col>
        <h4 id="traffic" class="card-title mb-0 float-left">{{ this.config[this.dataType].title }}</h4>
        <i id="download" class="icon-cloud-download icons float-right p-2" style="color:green;"></i>
        <i id="refresh" class="icon-reload icons float-right p-2" style="color:mediumblue;"></i>
        <date-range-picker v-if="config[dataType].showDatePicker" class="float-right px-2 innerSelect" opens="left" :startDate="pickedDates.startDate" :endDate="pickedDates.endDate" @input="console.log(value)"/>
        <div v-if="config[dataType].showUnitSelector" class="float-right px-2" >
          <b-form-select class="innerSelect" :options="['일간','주간','월간']" value="일간"/>
        </div>
        <div v-if="config[dataType].showDataSelector" class="float-right px-2">
          <b-form-select class="innerSelect" :options="['멤버십 회원']" value="멤버십 회원"/>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="5">
      </b-col>
    </b-row>
    <time-series-chart class="chart-wrapper" style="height:300px;margin-top:10px;" height="300" :chartData='chartData'></time-series-chart>
  </b-card>
</template>

<script>
import moment from 'moment'
import TimeSeriesChart from './charts/TimeSeriesChart'
import DateRangePicker from 'vue2-daterange-picker/src/components/DateRangePicker'

const brandSuccess = '#4dbd74'
const brandInfo = '#63c2de'
const brandDanger = '#f86c6b'

export default {
  name: 'TimeSeries',
  components: {
    TimeSeriesChart,
    DateRangePicker
  },
  props: ['data-type'],
  data () {
    return {
      pickedDates: {
        startDate: '2018-06-01',
        endDate: '2018-06-15'
      },
      config: {
        'membership': {
          title: '멤버십 가입/방문 시계열 통계',
          showDataSelector: true,
          showUnitSelector: true,
          showDatePicker: true,
          api: '/static/dummy/getTimeSeries_membership',
          legends: {
            accum: '누적 가입 회원수',
            join: '신규 회원수',
            dormant: '휴면 회원수',
            leave: '탈퇴 회원수',
            visitRatio: '방문 회원수 비율',
            visitCount: '방문 건수',
            visitMember: '방문 회원수'
          }
        },
        'mileage': {
          title: '마일리지 이용 시계열 통계',
          showDataSelector: false,
          showUnitSelector: true,
          showDatePicker: true,
          api: '/static/dummy/getTimeSeries_mileage',
          legends: {
            user: '마일리지 이용 회원수(명)',
            save_pt: '마일리지 적립 포인트(PT)',
            used_pt: '마일리지 사용 포인트(PT)'
          }
        }
      },
      chartData: {}
    }
  },
  methods: {
    getChartData (selectedMembershipId) {
      fetch(this.config[this.dataType].api + '_' + selectedMembershipId)
        .then(res => res.json())
        .then(response => {
          this.chartData = this.makeChartData(response)
        })
    },
    makeChartData (rawJson) {
      let result = {
        labels: [],
        datasets: [
          {
            label: '',
            backgroundColor: 'transparent',
            borderColor: brandInfo,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 3,
            borderDash: [5, 2],
            yAxisID: 'right-y-axis',
            data: []
          }, {
            label: '',
            backgroundColor: 'transparent',
            borderColor: brandSuccess,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            AxisID: 'left-y-axis',
            data: []
          }, {
            label: '',
            backgroundColor: 'transparent',
            borderColor: brandDanger,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            AxisID: 'left-y-axis',
            data: []
          }]
      }
      for (let d of rawJson.data) {
        result.labels.push(moment(d.date, 'YYYY-MM-DD').format('M/D'))
        result.datasets[0].label = this.config[this.dataType].legends['user']
        result.datasets[0].data.push(d.user)
        result.datasets[1].label = this.config[this.dataType].legends['save_pt']
        result.datasets[1].data.push(d.save_pt)
        result.datasets[2].label = this.config[this.dataType].legends['used_pt']
        result.datasets[2].data.push(d.used_pt)
      }
      console.log(result)
      return result
    }
  },
  created () {
    this.getChartData(this.selectedMembershipId)
  },
  computed: {
    selectedMembershipId () {
      return this.$store.state.memberShipStatus
    }
  },
  watch: {
    selectedMembershipId (val) {
      this.getChartData(val)
    }
  }
}
</script>

<style scoped>
  /*@import '@/assets/styles/date_range_picker.css';*/
  @import "https://cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css";
  /*@import "../../../node_modules/vue2-daterange-picker/dist/docs/css/vue-daterange-picker.e98ed5d6eab031414deb18d55f767b9a.css";*/
  /*@import "../../../node_modules/vue2-daterange-picker/dist/docs/css/docs.d8d8151b0ce6e516533cc0e79ff22172.css";*/
  .innerSelect {
    border: none;
    width: auto;
  }
  .reportrange-text {
    border: none !important;
  }
  .icons {
    font-size: 18px;
    padding-right: 7px;
    font-weight: bold;
  }
</style>
