<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" lg="6">
        <bar-top-half data-type="mileage-save" bg="bg-primary"></bar-top-half>
      </b-col>
      <b-col sm="6" lg="6">
        <bar-top-half data-type="mileage-use" bg="bg-info"></bar-top-half>
      </b-col>
    </b-row>
    <time-series data-type="mileage"></time-series>
  </div>
</template>
<style scoped>
</style>
<script>

import BarTopHalf from '../common/BarTopHalf'
import TimeSeries from '../common/TimeSeries'
import MainChartExample from '../common/charts/MainChartExample'
import DatePicker from '../../../node_modules/vue2-datepicker/index'
import AgeGenderChart from '../common/charts/AgeGenderChart'
import cTable from '../dashboard/Table.vue'

export default {
  name: 'memberStatistics',
  components: {
    BarTopHalf,
    TimeSeries,
    MainChartExample,
    DatePicker,
    cTable,
    AgeGenderChart
  },
  data () {
    return {
      getMemberCount: '/static/dummy/getMemberCount',
      getVisitCount: '/static/dummy/getMemberVisitCount',
      value3: new Date()
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
  .demo {
    margin:20px;
  }
  .label{
    display: inline-block;
    margin-right: 1em;
  }
  .pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
  }
  .example {
    padding: 45px;
    word-wrap: break-word;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .example > .demo {
    display: inline-block;
  }
  .tips {
    margin: 0;
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }
</style>
