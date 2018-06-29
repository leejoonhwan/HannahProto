<template>
  <b-card>
    <b-row>
      <b-col>
        <h4 class="card-title mb-0 float-left">{{ this.config[this.dataType].title }}</h4>
        <i id="download" class="icon-cloud-download icons float-right p-2" style="color:green;"></i>
        <i id="refresh" class="icon-reload icons float-right p-2" style="color:mediumblue;"></i>
        <date-range-picker class="float-right px-2 innerSelect" opens="left"
                           :startDate="pickedDates.startDate" :endDate="pickedDates.endDate"
                           @update="dateRangePicked"/>
        <div v-if="config[dataType].periodUnits" class="float-right px-2" >
          <b-form-select class="innerSelect"
                         v-model="config[dataType].periodUnits.selected"
                         :options="config[dataType].periodUnits.items"
                         :value="config[dataType].periodUnits.selected"
                         @change="getChartData"/>
        </div>
        <div v-if="config[dataType].dataGroups" class="float-right px-2">
          <b-form-select class="innerSelect"
                         v-model="config[dataType].dataGroups.selected"
                         :options="config[dataType].dataGroups.items"
                         :value="config[dataType].dataGroups.selected"
                         @change="getChartData"/>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="5">
      </b-col>
    </b-row>
    <time-series-chart class="chart-wrapper" style="height:300px;margin-top:10px;" height="300"
                       :chartData='chartData'></time-series-chart>
  </b-card>
</template>

<script>
import moment from 'moment'
import DhUtil from '../../utillib/util'
import TimeSeriesChart from './charts/TimeSeriesChart'
// import DateRangePicker from 'vue2-daterange-picker'
import DateRangePicker from './datepicker/DateRangePicker'

const brandSuccess = '#4dbd74'
const brandInfo = '#63c2de'
const brandDanger = '#f86c6b'
const brandWarning = '#e8d22f'

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
          api: '/membership/timeseries',
          dataGroups: {
            items: [
              { value: 'newJoin', text: '멤버십 회원 가입' },
              { value: 'visit', text: '멤버십 카드 방문' }
            ],
            selected: 'newJoin'
          },
          periodUnits: {
            items: [
              { value: 'D', text: '일간' },
              { value: 'W', text: '주간' },
              { value: 'M', text: '월간' }
            ],
            selected: 'D'
          },
          legends: {
            accmUser: '누적 가입 회원수',
            newUser: '신규 회원수',
            dormantUser: '휴면 회원수',
            withdrawUser: '탈퇴 회원수',
            visitUserRatio: '방문 회원수 비율',
            visitUser: '방문 회원수',
            visitCnt: '방문 건수'
          }
        },
        'mileage': {
          title: '마일리지 이용 시계열 통계',
          dataGroups: null,
          periodUnits: null,
          api: '/mileage/timeseries',
          legends: {
            user: '마일리지 이용 회원수(명)',
            savePt: '마일리지 적립 포인트(PT)',
            usedPt: '마일리지 사용 포인트(PT)'
          }
        }
      },
      chartData: {}
    }
  },
  methods: {
    getChartData () {
      fetch(DhUtil.makeApiUrl(this.config[this.dataType].api) + '_' + this.selectedMembershipId)
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
          }, {
            label: '',
            backgroundColor: 'transparent',
            borderColor: brandWarning,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            AxisID: 'left-y-axis',
            data: []
          }]
      }
      for (let d of rawJson.dataSet) {
        result.labels.push(moment(d.date, 'YYYYMMDD').format('M/D'))
        if (this.dataType === 'membership') {
          if (this.config[this.dataType].dataGroups.selected === 'newJoin') {
            result.datasets[0].label = this.config[this.dataType].legends['accmUser']
            result.datasets[0].data.push(d.accmUser)
            result.datasets[1].label = this.config[this.dataType].legends['newUser']
            result.datasets[1].data.push(d.newUser)
            result.datasets[2].label = this.config[this.dataType].legends['dormantUser']
            result.datasets[2].data.push(d.dormantUser)
            result.datasets[3].label = this.config[this.dataType].legends['withdrawUser']
            result.datasets[3].data.push(d.withdrawUser)
          } else {
            result.datasets[0].label = this.config[this.dataType].legends['visitUserRatio']
            result.datasets[0].data.push(d.visitUserRatio)
            result.datasets[1].label = this.config[this.dataType].legends['visitUser']
            result.datasets[1].data.push(d.visitUser)
            result.datasets[2].label = this.config[this.dataType].legends['visitCnt']
            result.datasets[2].data.push(d.visitCnt)
            result.datasets = result.datasets.slice(0, 3)
          }
        } else if (this.dataType === 'mileage') {
          result.datasets[0].label = this.config[this.dataType].legends['user']
          result.datasets[0].data.push(d.user)
          result.datasets[1].label = this.config[this.dataType].legends['savePt']
          result.datasets[1].data.push(d.savePt)
          result.datasets[2].label = this.config[this.dataType].legends['usedPt']
          result.datasets[2].data.push(d.usedPt)
          result.datasets = result.datasets.slice(0, 3)
        }
      }
      return result
    },
    dateRangePicked (event) {
      this.pickedDates.startDate = event.startDate
      this.pickedDates.endDate = event.endDate
      this.getChartData()
    }
  },
  created () {
    this.getChartData()
  },
  computed: {
    selectedMembershipId () {
      return this.$store.state.memberShipStatus
    }
  },
  watch: {
    selectedMembershipId (val) {
      this.getChartData()
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
    box-shadow: none;
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
