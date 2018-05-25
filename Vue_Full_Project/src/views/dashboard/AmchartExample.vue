<template>
  <div id="app">
    <div id="chartdiv" style="width: 100%; height: 400px;" ref="chartdiv"></div>
  </div>
</template>

<script>
import 'amcharts3'
export default {
  name: 'AmchartExample',
  data () {
    return {
      msg: 'Welcome to Your Vue.js + amCharts App'
    }
  },
  mounted () {
    var configs = {
      'type': 'serial',
      'theme': 'light',
      'rotate': true,
      'marginBottom': 50,
      'dataProvider': [{
        'age': '60~+',
        'male': -3.0,
        'female': 4.0
      }, {
        'age': '50-59',
        'male': -4.0,
        'female': 10.0
      }, {
        'age': '40-49',
        'male': -6.5,
        'female': 17.3
      }, {
        'age': '30-39',
        'male': -9.8,
        'female': 19.2
      }, {
        'age': '20-29',
        'male': -5.8,
        'female': 16.0
      }, {
        'age': '10-19',
        'male': -3.1,
        'female': 5.3
      }],
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
    AmCharts.makeChart(this.$refs.chartdiv, configs)
  }
}
</script>

<style scoped>
</style>
