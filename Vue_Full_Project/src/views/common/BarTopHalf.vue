<template>
  <b-card no-body :class="bg">
    <b-card-body class="pb-2">
      <h4 class="mb-1">{{ this.config[dataType].title }}</h4>
      <h6 class="mb-0">{{ this.config[dataType].desc }}</h6>
      <h6 class="mb-2">4/29 기준</h6>
    </b-card-body>
    <bar-top-half-chart class="chart-wrapper px-3" style="height:140px;" :chartData='chartData' />
  </b-card>
</template>

<script>
import BarTopHalfChart from './charts/BarTopHalfChart'

export default {
  name: 'BarTopHalf',
  components: {
    BarTopHalfChart
  },
  props: ['data-type', 'bg'],
  data () {
    return {
      fetchedData: {},
      config: {
        'member-count': {
          title: '멤버십 회원 / Members',
          desc: '누적 %s명 (%s명)',
          api: '/static/dummy/getMemberCount'
        },
        'visit-count': {
          title: '멤버십 방문 / Visits',
          desc: '당일 345건 (+34 명)',
          api: '/static/dummy/getMemberVisitCount'
        }
      },
      chartData: {}
    }
  },
  methods: {
    makeChartData (rawJson) {
      let result = {
        labels: [],
        datasets: [
          {
            label: '',
            backgroundColor: [],
            borderColor: 'transparent',
            yAxisID: 'left-y-axis',
            data: []
          }, {
            label: '',
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.5)',
            yAxisID: 'right-y-axis',
            type: 'line',
            data: []
          }]
      }
      for (let d of rawJson.data) {
        result.labels.push(d.date)
        result.datasets[0].data.push(d.new)
        result.datasets[1].data.push(d.accum)
        result.datasets[0].backgroundColor.push(d.wday.startsWith('S') ? 'rgba(255,55,55,.3)' : 'rgba(255,255,255,.3)')
      }
      console.log(result)
      return result
    }
  },
  computed: {
    // chartData () {
    // return {
    //   labels: ['5/15', '5/16', '5/17', '5/18', '5/19', '5/20', '5/21', '5/22', '5/23', '5/24', '5/25', '', '', ''],
    //   datasets: [{
    //     label: 'Data11',
    //     backgroundColor: ['rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,55,55,.3)', 'rgba(255,55,55,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,55,55,.3)', 'rgba(255,55,55,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)'],
    //     borderColor: 'transparent',
    //     yAxisID: 'left-y-axis',
    //     data: [30, 22, 24, 35, 30, 34, 56, 74, 22, 17, 32, 58, 54, 62]
    //   },
    //   {
    //     label: 'Data12',
    //     backgroundColor: 'transparent', // 'rgba(255,255,255,.3)',
    //     borderColor: 'rgba(255,255,255,.5)',
    //     yAxisID: 'right-y-axis',
    //     type: 'line',
    //     data: [1130, 1122, 1214, 1315, 1350, 1374, 1416, 1514, 1622, 1617, 1732, 1758, 1854, 1862]
    //   }]
    // }
    // }
  },
  created () {
    fetch(this.config[this.dataType].api)
      .then(res => res.json())
      .then(response => {
        // this.fetchedData = response
        this.chartData = this.makeChartData(response)
      })
  }
}
</script>

<style scoped>

</style>
