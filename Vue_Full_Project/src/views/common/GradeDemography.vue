<template>
  <b-card>
    <b-row>
      <b-col>
        <h4 id="traffic" class="card-title mb-0 float-left">멤버십 등급 구성 통계</h4>
        <i class="icon-cloud-download icons float-right p-2" style="color:green;"></i>
        <date-range-picker class="float-right px-2" opens="left" singleDatePicker :startDate="pickedDate" :endDate="pickedDate" @input="console.log(value)"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4" lg="4">
        <b-row>
          <pie-chart class="chart-wrapper" style="height:250px;margin-top:40px;"></pie-chart>
        </b-row>
        <b-row class="px-4">[등급 산정 기간] 2018/01/01 ~ 2018/03/31</b-row>
        <b-row class="px-4">[등급 적용 기간] 2018/04/01 ~ 2018/06/30</b-row>
        <b-row class="px-4 ">멤버십 등급 산정 기준 조회</b-row>
      </b-col>
      <b-col sm="8" lg="8">
        <age-chart class="chart-wrapper" style="height:320px;margin-top:40px;"></age-chart>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
// import DateRangePicker from 'vue2-daterange-picker'
import DateRangePicker from './datepicker/DateRangePicker'
import DatePicker from 'vue2-datepicker'
import AgeChart from '../common/charts/AgeChart'
import PieChart from '../common/charts/PieChart'

export default {
  name: 'GradeDemography',
  components: {
    DateRangePicker,
    DatePicker,
    AgeChart,
    PieChart
  },
  data () {
    return {
      pickedDate: '2018-06-26'
    }
  }
}
</script>

<style scoped>
  .icons {
    font-size: 18px;
    padding-right: 7px;
    font-weight: bold;
  }
</style>
