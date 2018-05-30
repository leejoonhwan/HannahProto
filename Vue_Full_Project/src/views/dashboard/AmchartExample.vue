<template>
  <div id="app">
    <div id="chartdiv" style="width: 100%; height: 400px;" ref="chartdiv"></div>
  </div>
</template>

<script>
import 'amcharts3'
export default {
  name: 'AmchartExample',
  props: ['childSelected'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js + amCharts App'
    }
  },
  updated: function () {
  },
  mounted () {
    var configs = {
      'type': 'serial',
      'theme': 'light',
      'rotate': true,
      'marginBottom': 50,
      'dataProvider': this.childSelected,
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
</script>

<style scoped>
</style>
