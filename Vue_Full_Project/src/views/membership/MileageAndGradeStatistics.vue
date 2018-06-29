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
      <b-col sm="12" lg="12"><table-card dataType="mileage_used_shop"></table-card></b-col>
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
import TableCard from '../common/TableCard'

export default {
  name: 'memberStatistics',
  components: {
    BarTopHalf,
    TimeSeries,
    TableCard,
    GradeDemography,
    DownloadOnly
  }
}
</script>

<style scoped>

</style>
