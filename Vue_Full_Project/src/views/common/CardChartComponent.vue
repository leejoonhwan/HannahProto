<template>
  <b-card no-body class="bg-primary">
    <b-card-body class="pb-2">
      <h4 class="mb-1">{{cardChartTitle}}</h4>
      <h6 class="mb-0">{{totalLable}} {{mainCount}}{{unitName}} (+{{subCount}}{{unitName}} )</h6>
      <h6 class="mb-2">{{date}}</h6>
    </b-card-body>
    <CardMixChart class="chart-wrapper px-3" style="height:70px;" height="70" :chart-data="dataCollection" :options="dataOptions"/>
  </b-card>
</template>

<script>
import CardMixChart from './charts/CardMixChart'

export default {
  name: 'CardChartComponent',
  components: {
    CardMixChart
  },
  props: ['componentName'],
  data () {
    return {
      url: 'http://localhost:3000',
      subUrl: '/getCardMixChartData',
      dataOptions: null,
      dataCollection: null,
      date: '',
      mainCount: 0,
      subCount: 0
    }
  },
  computed: {
    membershipIndex () {
      return this.$store.state.memberShipStatus
    },
    cardChartTitle () {
      var title = ''
      if (this.componentName === 'memberCount') title = '멤버십 회원 / Members'
      else if (this.componentName === 'memberVisit') title = '멤버십 방문 / Visits'
      return title
    },
    totalLable () {
      var label = ''
      if (this.componentName === 'memberCount') label = '누적'
      else if (this.componentName === 'memberVisit') label = '당일'
      return label
    },
    unitName () {
      var name = ''
      if (this.componentName === 'memberCount') name = '명'
      else if (this.componentName === 'memberVisit') name = '건'
      return name
    }
  },
  watch: {
    membershipIndex (val) {
      var params = {}
      params.membership = val
      params.apiName = this.componentName
      this.getCardMixChartData(this.url + this.subUrl, params)
    }
  },
  mounted () {
    // this.getMemberCountData(this.url)
    var params = {}
    params.membership = this.membershipIndex
    params.apiName = this.componentName
    this.getCardMixChartData(this.url + this.subUrl, params)
  },
  methods: {
    getCardMixChartData (url, params) {
      fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      }).then((res) => res.json())
        .then((response) => {
          var size = response.data.length
          var labels = []
          var data = []
          for (var i = 0; i < size; i++) {
            labels.push(response.data[i].date)
            data.push(response.data[i].cnt)
          }
          this.mainCount = response.total
          this.subCount = response.data[size - 1].cnt
          this.date = response.data[size - 1].date
          // 넘길 데이터 만들기
          this.makeMixChartData(labels, data)
          // 넘길 옵션 만들기
          this.makeMixChartOption()
        })
    },
    makeMixChartData (labels, data) {
      this.dataCollection = {
        labels: labels,
        datasets: [{
          label: 'Data11',
          backgroundColor: ['rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,55,55,.3)', 'rgba(255,55,55,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,55,55,.3)', 'rgba(255,55,55,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)'],
          borderColor: ['transparent', 'rgba(105,205,205,.9)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
          yAxisID: 'left-y-axis',
          data: data
        },
        {
          label: 'Data12',
          backgroundColor: 'transparent', // 'rgba(255,255,255,.3)',
          borderColor: 'rgba(255,255,255,.5)',
          yAxisID: 'right-y-axis',
          type: 'line',
          data: data
        }]
      }
    },
    makeMixChartOption () {
      this.dataOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false,
            categoryPercentage: 1,
            barPercentage: 0.5
          }],
          yAxes: [{
            id: 'left-y-axis',
            display: false
          }, {
            id: 'right-y-axis',
            display: false,
            ticks: {
              min: 0
            }
          }]
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
