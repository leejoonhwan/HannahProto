<template>
  <b-card no-body :class="bg">
    <b-card-body class="pb-0">
      <h4 class="mb-1">{{ this.config[dataType].title }}</h4>
      <h6 class="mb-0">{{ this.config[dataType].desc }}</h6>
      <h6 class="mb-0">4/29 기준</h6>
    </b-card-body>
    <bar-top-half-chart class="chart-wrapper px-3" style="height:120px;" :chartData='chartData' />
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
        },
        'mileage-save': {
          title: '마일리지 적립',
          desc: '당월 누적 1,553,322 PT (당일 225,423 PT)',
          api: '/static/dummy/getMemberCount'
        },
        'mileage-use': {
          title: '마일리지 사용',
          desc: '당월 누적 1,000,123 PT (당일 100,235 PT)',
          api: '/static/dummy/getMemberVisitCount'
        }
      },
      chartData: {}
    }
  },
  computed: {
    selectedMembershipId () {
      return this.$store.state.memberShipStatus
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
  created () {
    this.getChartData(this.selectedMembershipId)
  },
  watch: {
    selectedMembershipId (val) {
      this.getChartData(val)
    }
  }
}
</script>

<style scoped>

</style>
