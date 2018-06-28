<template>
  <b-card no-body :class="bg">
    <b-card-body class="pb-0">
      <h5 class="mb-1">{{ this.titleString }}</h5>
      <h4 class="mb-0">{{ this.descString }}</h4>
    </b-card-body>
    <bar-top-half-chart class="chart-wrapper px-3" style="height:120px;" :chartData='chartData' />
  </b-card>
</template>

<script>
import moment from 'moment'
import numeral from 'numeral'
import BarTopHalfChart from './charts/BarTopHalfChart'
import DhUtil from '../../utillib/util'

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
          title: '멤버십 회원 가입 ({{lastDate}} 기준)',
          desc: '누적 {{lastAccm}} 명 (신규 {{lastDaily}} 명)',
          api: '/membership/twoWeekSummary',
          fields: ['newUserCnt', 'accmUserCnt']
        },
        'visit-count': {
          title: '멤버십 카드 방문 ({{lastDate}} 기준)',
          desc: '당일 {{lastAccm}} 명 ({{lastDaily}} 건)',
          api: '/membership/twoWeekSummary',
          fields: ['visitUserCnt', 'visitCnt']
        },
        'mileage-save': {
          title: '마일리지 적립 ({{lastDate}} 기준)',
          desc: '당월 누적 {{lastAccm}} PT (당일 {{lastDaily}} PT)',
          api: '/mileage/twoWeekSummary',
          fields: ['savingPt', 'savingAccmPt']
        },
        'mileage-use': {
          title: '마일리지 사용 ({{lastDate}} 기준)',
          desc: '당월 누적 {{lastAccm}} PT (당일 {{lastDaily}} PT)',
          api: '/mileage/twoWeekSummary',
          fields: ['usedPt', 'usedAccmPt']
        }
      },
      titleString: null,
      descString: null,
      chartData: {}
    }
  },
  methods: {
    getChartData (selectedMembershipId) {
      fetch(DhUtil.makeApiUrl(this.config[this.dataType].api) + '_' + selectedMembershipId)
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
      for (let d of rawJson.dataSet) {
        result.labels.push(moment(d.date, 'YYYYMMDD').format('M/D'))
        result.datasets[0].data.push(d[this.config[this.dataType].fields[0]])
        result.datasets[1].data.push(d[this.config[this.dataType].fields[1]])
        result.datasets[0].backgroundColor.push([0, 6].includes(moment(d.date, 'YYYYMMDD').day()) ? 'rgba(255,55,55,.3)' : 'rgba(255,255,255,.3)')
      }
      this.titleString = this.config[this.dataType].title.replace('{{lastDate}}', result.labels.slice(-1)[0])
      this.descString = this.config[this.dataType].desc
        .replace('{{lastDaily}}', numeral(result.datasets[0].data.slice(-1)[0]).format('0,0'))
        .replace('{{lastAccm}}', numeral(result.datasets[1].data.slice(-1)[0]).format('0,0'))
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

</style>
