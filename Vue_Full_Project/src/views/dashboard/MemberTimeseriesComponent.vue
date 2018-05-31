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
    <main-chart-example class="chart-wrapper" style="height:300px;margin-top:40px;" height="300" ref="childTimeSeriesComponent"></main-chart-example>
  </b-card>
</template>
<script>
import MainChartExample from '../dashboard/MainChartExample'
import DatePicker from '../../../node_modules/vue2-datepicker/index'
import action from '../../api/index'
export default {
  name: 'MemberTimeseriesComponent',
  action,
  components: {
    MainChartExample,
    DatePicker
  },
  data () {
    return {
      membershipSelected: 'member',
      timeSeries: [{value: 'member', text: '멤버십 회원'},
        {value: 'visit', text: '멤버십 방문'}],
      value3: new Date()
    }
  },
  mounted () {
    this.getTimeSeriesData('/static/dummy/getTimeSeriesMember')
  },
  updated () {
    var urlChartData = ''

    if (this.membershipSelected === 'visit') {
      urlChartData = '/static/dummy/getTimeSeriesVisit'
    } else {
      urlChartData = '/static/dummy/getTimeSeriesMember'
    }
    this.getTimeSeriesData(urlChartData)
  },
  methods: {
    getTimeSeriesData (url) {
      fetch(url).then((resp) => resp.json()).then(response => {
        console.log(response)

        const size = response.data.length

        var dataTotlal = []
        var dataPause = []
        var dataWithdraw = []
        var dataNew = []
        var dateList = []
        console.log(size)
        for (var i = 0; i < size; i++) {
          dataTotlal.push(response.data[i].total)
          dataPause.push(response.data[i].pause)
          dataWithdraw.push(response.data[i].withdraw)
          dataNew.push(response.data[i].new)
          dateList.push(response.data[i].date)
        }
        this.$refs.childTimeSeriesComponent.dataTotal = dataTotlal
        this.$refs.childTimeSeriesComponent.dateList = dateList
        this.$refs.childTimeSeriesComponent.dataPause = dataPause
        this.$refs.childTimeSeriesComponent.dataWithdraw = dataWithdraw
        this.$refs.childTimeSeriesComponent.dataNew = dataNew
        this.$refs.childTimeSeriesComponent.drawChart()
      })
    }
  }
}
</script>

<style scoped>

</style>
