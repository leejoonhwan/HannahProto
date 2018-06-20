<template>
  <b-card>
    <b-row>
      <b-col sm="5">
        <h4 id="traffic" class="card-title mb-0">시계열 / Time Series</h4>
      </b-col>
      <b-col sm="2">
        <b-form-select v-model="membershipSelected" id="basicSelectLg" :options="timeSeries"/>
      </b-col>
      <b-col sm="2">
        <b-form-select v-model="rangeType" id="basicSelectLg" :options="['일간','주간','월간']"/>
      </b-col>
      <b-col sm="2">
        <date-range-picker :startDate="startDate" :endDate="endDate" @input="console.log(value)"/>
      </b-col>
      <b-col md="1">
        <i class="fa fa-refresh fa-2x mt-1" style="color: #3b5998" v-on:click = "reflesh"></i>
        &nbsp;&nbsp;&nbsp;
        <i class="fa fa-download fa-2x mt-1" style="color: #7ab800"></i>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="5">
      </b-col>
    </b-row>
    <main-chart-example class="chart-wrapper" style="height:300px;margin-top:40px;" height="300" :chart-data="dataCollection" :options="dataOptions"></main-chart-example>
  </b-card>
</template>
<script>
import MainChartExample from './charts/MainChartExample'
import RandomChart from '../dashboard/RandomChart'
import DateRangePicker from 'vue2-daterange-picker/src/components/DateRangePicker'
import store from '../../vuex/store'
const brandSuccess = '#4dbd74'
const brandInfo = '#63c2de'
const brandDanger = '#f86c6b'
export default {
  name: 'MemberTimeseriesComponent',
  components: {
    MainChartExample,
    RandomChart,
    DateRangePicker
  },
  store,
  data () {
    return {
      url: 'http://localhost:3000',
      subUrl: '/getTimeseriesData',
      dataTotal: [],
      dataPause: [],
      dataWithdraw: [],
      dataNew: [],
      dateList: [],
      dataOptions: null,
      dataCollection: null,
      rangeType: '주간',
      membershipSelected: 'member',
      timeSeries: [{value: 'member', text: '멤버십 회원'},
        {value: 'visit', text: '멤버십 방문'}],
      value3: new Date(),
      startDate: '2017-09-05',
      endDate: '2017-09-15'
    }
  },
  mounted () {
    var params = {}
    params.membership = this.membershipIndex
    params.apiName = this.componentName
    this.getTimeSeriesChartData(this.url + this.subUrl, params)
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
      params.apiName = this.componentName
      this.getTimeSeriesChartData(this.url + this.subUrl, params)
    }
  },
  methods: {
    reflesh () {
      var params = {}
      params.membership = this.membershipIndex
      params.apiName = this.membershipSelected
      params.rangeType = this.rangeType
      // this.getTimeSeriesChartData(this.url + this.subUrl, params)
    },
    getTimeSeriesChartData (url, params) {
      fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      }).then((res) => res.json())
        .then((response) => {
          this.initData()
          const size = response.data.length
          for (var i = 0; i < size; i++) {
            this.dataTotal.push(response.data[i].total)
            this.dataPause.push(response.data[i].pause)
            this.dataWithdraw.push(response.data[i].exit)
            this.dataNew.push(response.data[i].join)
            this.dateList.push(response.data[i].date)
          }
          this.makeDataCollection()
          this.makeOption()
        })
    },
    initData () {
      this.dataTotal = []
      this.dataPause = []
      this.dataWithdraw = []
      this.dataNew = []
      this.dateList = []
    },
    // 전달할 dataSet 구성
    makeDataCollection () {
      this.dataCollection = {
        labels: this.dateList,
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'transparent',
            borderColor: brandInfo,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: this.dataTotal
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'transparent',
            borderColor: brandSuccess,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: this.dataPause
          },
          {
            label: 'My Third dataset',
            backgroundColor: 'transparent',
            borderColor: brandDanger,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            borderDash: [2, 2],
            data: this.dataWithdraw
          },
          {
            label: 'My four dataset',
            backgroundColor: 'transparent',
            borderColor: brandDanger,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            borderDash: [2, 2],
            data: this.dataNew
          }
        ]
      }
    },
    makeOption () {
      this.dataOptions = {
        maintainAspectRatio: false,
        legend: {
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 100,
              stepSize: Math.ceil(2000 / 5),
              max: 2000
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      }
    }
  }
}
</script>

<style scoped>
  @import "https://cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css";
</style>
