<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" lg="6">
        <bar-top-half data-type="member-count" bg="bg-primary"></bar-top-half>
      </b-col>
      <b-col sm="6" lg="6">
        <bar-top-half data-type="visit-count" bg="bg-info"></bar-top-half>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12" lg="12"><time-series data-type="membership"></time-series></b-col>
    </b-row>
    <b-row>
      <b-col sm="12" lg="12"><membership-demography></membership-demography></b-col>
    </b-row>
    <download-only data-type="membership_demography_timeseries"></download-only>
    <b-row>
      <b-col sm="12" lg="12"><table-card dataType="prefer_shop"></table-card></b-col>
    </b-row>
  </div>
</template>

<script>
import BarTopHalf from '../common/BarTopHalf'
import TimeSeries from '../common/TimeSeries'
import TableCard from '../common/TableCard'
import MembershipDemography from '../common/MembershipDemography'
import DownloadOnly from '../common/DownloadOnly'

export default {
  name: 'memberStatistics',
  components: {
    BarTopHalf,
    TimeSeries,
    TableCard,
    MembershipDemography,
    DownloadOnly
  }
}
</script>

<style scoped>

</style>
