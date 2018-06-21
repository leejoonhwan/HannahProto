<template>
  <b-card>
    <b-row>
      <b-col>
        <h4 id="traffic" class="card-title mb-0 float-left">멤버십 등급 구성 통계</h4>
        <i class="fa fa-download fa-2x mt-1 float-right px-2" style="color: #7ab800" ></i>
        <!--<date-range-picker v-if="config[dataType].showDatePicker" class="float-right px-2" opens="left" :startDate="pickedDates.startDate" :endDate="pickedDates.endDate" @input="console.log(value)"/>-->
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">
        <b-row><pie-chart></pie-chart></b-row>
        <b-row>[등급 산정 기간] 2018/01/01 ~ 2018/03/31</b-row>
        <b-row>[등급 적용 기간] 2018/04/01 ~ 2018/06/30</b-row>
        <b-row>멤버십 등급 산정 기준 조회</b-row>
      </b-col>
      <b-col>
        <age-chart></age-chart>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker'
import AgeChart from '../common/charts/AgeChart'
import PieChart from '../common/charts/PieChart'

export default {
  name: 'GradeDemography',
  components: {
    DateRangePicker,
    AgeChart,
    PieChart
  }
}
</script>

<style scoped>

</style>
