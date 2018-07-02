<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" lg="6">
        <bar-top-half data-type="member-count" bg="bg-primary"></bar-top-half>
      </b-col>
      <b-col sm="6" lg="6">
        <bar-top-half data-type="visit-count" bg="bg-info"></bar-top-half>
      </b-col>
      <b-col sm="6" lg="6">
        <bar-top-half data-type="mileage-save" bg="bg-warning"></bar-top-half>
      </b-col>
      <b-col sm="6" lg="6">
        <bar-top-half data-type="mileage-use" bg="bg-danger"></bar-top-half>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12" lg="12"><time-series data-type="membership"></time-series></b-col>
    </b-row>
    <b-row>
      <b-col sm="12" lg="12"><membership-demography></membership-demography></b-col>
    </b-row>
    <b-row>
      <b-col sm="12" lg="12"><grade-demography></grade-demography></b-col>
    </b-row>
  </div>
</template>

<script>
import BarTopHalf from './common/BarTopHalf'
import TimeSeries from './common/TimeSeries'
import MembershipDemography from './common/MembershipDemography'
import GradeDemography from './common/GradeDemography'

export default {
  name: 'dashboard',
  components: {
    BarTopHalf,
    TimeSeries,
    MembershipDemography,
    GradeDemography
  }
}
</script>
