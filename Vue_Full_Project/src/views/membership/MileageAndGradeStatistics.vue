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
    <b-row>
      <b-col sm="12" lg="12"><time-series data-type="mileage"></time-series></b-col>
    </b-row>
    <b-row>
      <b-col sm="12" lg="12"><download-only data-type="mileage_demography_timeseries"></download-only></b-col>
    </b-row>
    <b-row>
      <b-col sm="12" lg="12"><grade-demography></grade-demography></b-col>
    </b-row>
    <b-row>
      <b-col sm="12" lg="12"><download-only data-type="membership_grade_timeseries"></download-only></b-col>
    </b-row>
    <b-row>
      <b-col sm="12" lg="12"><download-only data-type="membership_grade_demography_timeseries"></download-only></b-col>
    </b-row>
  </div>
</template>
<style scoped>
</style>
<script>

import BarTopHalf from '../common/BarTopHalf'
import TimeSeries from '../common/TimeSeries'
import GradeDemography from '../common/GradeDemography'
import DownloadOnly from '../common/DownloadOnly'
import cTable from '../dashboard/Table.vue'

export default {
  name: 'memberStatistics',
  components: {
    BarTopHalf,
    TimeSeries,
    cTable,
    GradeDemography,
    DownloadOnly
  },
  data () {
    return {
      getMemberCount: '/static/dummy/getMemberCount',
      getVisitCount: '/static/dummy/getMemberVisitCount'
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
