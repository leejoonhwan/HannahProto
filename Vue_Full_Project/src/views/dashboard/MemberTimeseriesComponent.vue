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
        <b-form-select id="basicSelectLg" :options="['일간','주간','월간']" value="일간"/>
      </b-col>
      <b-col sm="2">
        <date-picker v-model="value3" range lang="en"></date-picker>
      </b-col>
      <b-col md="1">
        <i class="fa fa-refresh fa-2x mt-1" style="color: #3b5998"></i>
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
import MainChartExample from '../dashboard/MainChartExample'
import RandomChart from '../dashboard/RandomChart'
import DatePicker from '../../../node_modules/vue2-datepicker/index'
import action from '../../api/index'
import store from '../../vuex/store'
const brandSuccess = '#4dbd74'
const brandInfo = '#63c2de'
const brandDanger = '#f86c6b'
export default {
  name: 'MemberTimeseriesComponent',
  action,
  components: {
    MainChartExample,
    DatePicker,
    RandomChart
  },
  store,
  data () {
    return {
      dataUrl: '',
      dataTotal: [],
      dataPause: [],
      dataWithdraw: [],
      dataNew: [],
      dateList: [],
      dataOptions: null,
      dataCollection: null,
      membershipSelected: 'member',
      timeSeries: [{value: 'member', text: '멤버십 회원'},
        {value: 'visit', text: '멤버십 방문'}],
      value3: new Date(),
      urlSet: {
        'levis': {
          'timeSeriesVisitUrl': '/static/dummy/getLevisTimeSeriesVisit',
          'timeSeriesMemberUrl': '/static/dummy/getLevisTimeSeriesMember'
        },
        'happyCharge': {
          'timeSeriesVisitUrl': '/static/dummy/getHappyChargeTimeSeriesVisit',
          'timeSeriesMemberUrl': '/static/dummy/getHappyChargeTimeSeriesMember'
        }
      }
    }
  },
  created () {
    console.log('MemberTimeseriesComponent created')
    this.getTimeSeriesData('/static/dummy/getHappyChargeTimeSeriesMember')
  },
  mounted () {
    console.log('MemberTimeseriesComponent mounted')
    this.getTimeSeriesData('/static/dummy/getHappyChargeTimeSeriesMember')
  },
  updated () {
    console.log('updated')
  },
  computed: {
    membershipIndex () {
      return this.$store.state.memberShipStatus
    }
  },
  watch: {
    membershipIndex (val) {
      console.log('watched: ', val)
      this.getDataUrl()
      this.getTimeSeriesData(this.dataUrl)
    }
  },
  methods: {
    getDataUrl () {
      this.dataUrl = this.urlSet
      if (this.$store.state.memberShipStatus === 'levis') this.dataUrl = this.dataUrl.levis
      else if (this.$store.state.memberShipStatus === 'happyCharge') this.dataUrl = this.dataUrl.happyCharge
      if (this.membershipSelected === 'visit') {
        this.dataUrl = this.dataUrl.timeSeriesVisitUrl
      } else {
        this.dataUrl = this.dataUrl.timeSeriesMemberUrl
      }
      console.log(this.$store.state.memberShipStatus + ' : ' + this.dataUrl)
    },
    initData () {
      this.dataTotal = []
      this.dataPause = []
      this.dataWithdraw = []
      this.dataNew = []
      this.dateList = []
    },
    getTimeSeriesData (url) {
      fetch(url).then((resp) => resp.json()).then(response => {
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
</style>
