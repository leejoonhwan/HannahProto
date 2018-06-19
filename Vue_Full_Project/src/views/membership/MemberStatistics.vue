<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" lg="6">
        <CardChartComponent componentName="memberCount"></CardChartComponent>
      </b-col>
      <b-col sm="6" lg="6">
        <CardChartComponent componentName="memberVisit"></CardChartComponent>
      </b-col>
    </b-row>
    <member-timeseries-component></member-timeseries-component>
    <member-gender-age-component></member-gender-age-component>
  </div>
</template>
<style scoped>
</style>
<script>
import MemberTimeseriesComponent from '../common/MemberTimeseriesComponent'
import MemberGenderAgeComponent from '../dashboard/MemberGenderAgeComponent'
import CardChartComponent from '../common/CardChartComponent'
import MemberVisitCardBarChart from '../dashboard/MemberVisitCardBarChart'
import CardLine1ChartExample from '../dashboard/CardLine1ChartExample'
import CardLine2ChartExample from '../dashboard/CardLine2ChartExample'
import CardLine3ChartExample from '../dashboard/CardLine3ChartExample'
import CardBarChartExample from '../dashboard/CardBarChartExample'
import SocialBoxChartExample from '../dashboard/SocialBoxChartExample'
import CalloutChartExample from '../dashboard/CalloutChartExample'
import { Callout } from '../../components/'
import DatePicker from '../../../node_modules/vue2-datepicker/index'
import AmchartExample from '../dashboard/AmchartExample'
import cTable from '../dashboard/Table.vue'
import store from '../../vuex/store'

export default {
  name: 'memberStatistics',
  components: {
    Callout,
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample,
    SocialBoxChartExample,
    CalloutChartExample,
    DatePicker,
    cTable,
    AmchartExample,
    CardChartComponent,
    MemberVisitCardBarChart,
    MemberGenderAgeComponent,
    MemberTimeseriesComponent
  },
  store,
  data () {
    return {
      membershipSelected: '',
      timeSeries: [{value: '멤버십 회원', text: '멤버십 회원'},
        {value: '멤버십 방문', text: '멤버십 방문'}],
      value3: new Date(),
      membershipStatusIndex: ''
    }
  },
  created () {

  },
  mounted () {
  },
  updated () {
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
