<template>
  <b-card>
    <b-row>
      <b-col sm="5">
        <h4 id="traffic2" class="card-title mb-0">성연령 / Gender & Age</h4>
      </b-col>
      <b-col sm="2">
        <b-form-select v-model="membershipSelected" id="basicSelectLg" :options="timeSeries"/>
      </b-col>
      <b-col sm="2">
        <b-form-select id="basicSelectLg" :options="['일간','주간','월간']" value="일간"/>
      </b-col>
      <b-col sm="2">
        <date-picker v-model="value3" range lang="en" ></date-picker>
      </b-col>
      <b-col md="1">
        <i class="fa fa-refresh fa-2x mt-1" style="color: #3b5998"></i>
        <i class="fa fa-download fa-2x mt-1" style="color: #7ab800"></i>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" lg="8">
        <br>
        <div id="app">
          <div id="chartdiv" style="width: 100%; height: 400px;" ref="chartdiv"></div>
        </div>
      </b-col>
      <b-col sm="6" lg="4">
        <br><br>
        <member-gender-age-table small caption="<i class='fa fa-align-justify'></i> Condensed Table" ref="childTableComponent"></member-gender-age-table>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import AmchartExample from '../dashboard/AmchartExample'
import MemberGenderAgeTable from '../dashboard/MemberGenderAgeTable.vue'
import DatePicker from '../../../node_modules/vue2-datepicker/index'
import 'amcharts3'
import store from '../../vuex/store'

export default {
  name: 'MemberGenderAgeComponent',
  components: {
    MemberGenderAgeTable,
    AmchartExample,
    DatePicker
  },
  store,
  data () {
    return {
      membershipSelected: 'member',
      timeSeries: [{value: 'member', text: '멤버십 회원'},
        {value: 'visit', text: '멤버십 방문'}],
      value3: new Date()
    }
  },
  mounted () {
    this.getGenderAgeData('/static/dummy/getMemberGenderAge')
    this.getGenderAgeTableData('/static/dummy/getMemberGenderAgeTable')
  },
  updated () {
    var urlChartData = ''
    var urlTableData = ''

    if (this.membershipSelected === 'visit') {
      urlChartData = '/static/dummy/getMemberVisitGenderAge'
      urlTableData = '/static/dummy/getMemberVisitGenderAgeTable'
    } else {
      urlChartData = '/static/dummy/getMemberGenderAge'
      urlTableData = '/static/dummy/getMemberGenderAgeTable'
    }
    this.getGenderAgeData(urlChartData)
    this.getGenderAgeTableData(urlTableData)
  },
  methods: {
    getGenderAgeTableData (url) {
      fetch(url).then((resp) => resp.json()).then(response => {
        this.$refs.childTableComponent.items = response
      })
    },
    getGenderAgeData (url) {
      fetch(url).then((resp) => resp.json()).then(response => {
        this.drawAmchart(response)
      })
    },
    drawAmchart (configData) {
      var configs = {
        'type': 'serial',
        'theme': 'light',
        'rotate': true,
        'marginBottom': 50,
        'dataProvider': configData,
        'startDuration': 1,
        'graphs': [{
          'fillAlphas': 0.8,
          'lineAlpha': 0.2,
          'type': 'column',
          'valueField': 'male',
          'title': 'Male',
          'labelText': '[[value]]',
          'clustered': false,
          'labelFunction': function (item) {
            return Math.abs(item.values.value)
          },
          'balloonFunction': function (item) {
            return item.category + ': ' + Math.abs(item.values.value) + '%'
          }
        }, {
          'fillAlphas': 0.8,
          'lineAlpha': 0.2,
          'type': 'column',
          'valueField': 'female',
          'title': 'Female',
          'labelText': '[[value]]',
          'clustered': false,
          'labelFunction': function (item) {
            return Math.abs(item.values.value)
          },
          'balloonFunction': function (item) {
            return item.category + ': ' + Math.abs(item.values.value) + '%'
          }
        }],
        'categoryField': 'age',
        'categoryAxis': {
          'gridPosition': 'start',
          'gridAlpha': 0.2,
          'axisAlpha': 0
        },
        'valueAxes': [{
          'gridAlpha': 0,
          'ignoreAxisWidth': true,
          'labelFunction': function (value) {
            return Math.abs(value) + '%'
          },
          'guides': [{
            'value': 0,
            'lineAlpha': 0.2
          }]
        }],
        'balloon': {
          'fixedPosition': true
        },
        'chartCursor': {
          'valueBalloonsEnabled': false,
          'cursorAlpha': 0.05,
          'fullWidth': true
        },
        'allLabels': [{
          'text': 'Male',
          'x': '28%',
          'y': '97%',
          'bold': true,
          'align': 'middle'
        }, {
          'text': 'Female',
          'x': '75%',
          'y': '97%',
          'bold': true,
          'align': 'middle'
        }],
        'export': {
          'enabled': true
        }
      }
      window.AmCharts.makeChart(this.$refs.chartdiv, configs)
    }
  }
}
</script>

<style scoped>

</style>
