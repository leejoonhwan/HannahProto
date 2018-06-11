<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

const brandSuccess = '#4dbd74'
const brandInfo = '#63c2de'
const brandDanger = '#f86c6b'

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['chartData', 'height'],
  data () {
    return {
      chartDataList: {},
      chartOption: {},
      urlSet: {
        'levis': {
          'timeSeriesVisitUrl': '/static/dummy/getLevisTimeSeriesVisit',
          'timeSeriesMemberUrl': '/static/dummy/getLevisTimeSeriesMember'
        },
        'happyCharge': {
          'timeSeriesVisitUrl': '/static/dummy/getHappyChargeTimeSeriesVisit',
          'timeSeriesMemberUrl': '/static/dummy/getHappyChargeTimeSeriesMember'
        }
      },
      dataTotlal: [],
      dataPause: [],
      dataWithdraw: [],
      dataNew: [],
      dateList: []
    }
  },
  mounted () {
    // If you want to pass options please create a local options object
    // this.chartData is created in the mixin.
    console.log(this.chartData)
    this.makeOptionSet()
    this.getTimeSeriesData('/static/dummy/getTimeSeriesMember')
  },
  update () {
    console.log('update   ' + this.chartOption)
  },
  updated () {
    console.log('updated   ' + this.chartOption)
  },
  methods: {
    makeDataSet () {
      this.chartDataList = {
        labels: this.computeItem,
        datasets: [
          {
            label: this.message,
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
            borderWidth: 1,
            borderDash: [2, 2],
            data: this.dataWithdraw
          },
          {
            label: 'My four dataset',
            backgroundColor: 'transparent',
            borderColor: brandDanger,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 1,
            borderDash: [2, 2],
            data: this.dataNew
          }
        ]
      }
    },
    makeOptionSet () {
      this.chartOption = {
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
    },
    getTimeSeriesData (url) {
      fetch(url).then((resp) => resp.json()).then(response => {
        const size = response.data.length
        console.log('시계열 데이터 Draw')
        console.log('시계열 데이터 출력 : ' + size)
        for (var i = 0; i < size; i++) {
          this.dataTotlal.push(response.data[i].total)
          this.dataPause.push(response.data[i].pause)
          this.dataWithdraw.push(response.data[i].withdraw)
          this.dataNew.push(response.data[i].new)
          this.dateList.push(response.data[i].date)

          this.makeDataSet()
          this.renderChart(this.chartDataList, this.chartOption)
        }
      })
    }
  }
}
</script>
