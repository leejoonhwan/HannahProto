<template>
  <b-card no-body class="bg-primary">
    <b-card-body class="pb-2">
      <h4 class="mb-1">멤버십 회원 / Members</h4>
      <h6 class="mb-0">누적 13,333명 (+134 명)</h6>
      <h6 class="mb-2">4/29 기준</h6>
    </b-card-body>
    <bar-top-half-chart class="chart-wrapper px-3" style="height:140px;" :apiUrl='getMemberCount' />
  </b-card>
</template>

<script>
import BarTopHalfChart from './charts/BarTopHalfChart'

export default {
  name: 'BarTopHalf',
  components: {
    BarTopHalfChart
  },
  data () {
    return {
      getMemberCount: '/static/dummy/getMemberCount'
    }
  }
}
</script>

<style scoped>

</style>
