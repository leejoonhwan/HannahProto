<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" lg="6">
        <b-card no-body class="bg-primary">
          <b-card-body class="pb-2">
            <h4 class="mb-1">멤버십 회원 / Members</h4>
            <h6 class="mb-0">누적 13,333명 (+134 명)</h6>
            <h6 class="mb-2">4/29 기준</h6>
          </b-card-body>
          <bar-top-half class="chart-wrapper px-3" style="height:140px;" :apiUrl='getMemberCount' />
        </b-card>
      </b-col>
      <b-col sm="6" lg="6">
        <b-card no-body class="bg-info">
          <b-card-body class="pb-2">
            <h4 class="mb-1">멤버십 방문 / Visits</h4>
            <h6 class="mb-0">당일 345건 (+34 명)</h6>
            <h6 class="mb-2">4/29 기준</h6>
          </b-card-body>
          <bar-top-half class="chart-wrapper px-3" style="height:140px;" :apiUrl='getVisitCount' />
        </b-card>
      </b-col>
    </b-row>
    <b-card>
      <b-row>
        <b-col sm="7">
          <h4 id="traffic" class="card-title mb-0">시계열 / Time Series</h4>
        </b-col>
        <b-col sm="1">
            <b-form-select id="basicSelectLg" :options="['멤버십 회원']" value="멤버십 회원"/>
        </b-col>
        <b-col sm="1">
            <b-form-select id="basicSelectLg" :options="['일간','주간','월간']" value="일간"/>
        </b-col>
        <b-col sm="2">
          <date-picker v-model="value3" range lang="en"></date-picker>
        </b-col>
        <b-col >
          <i class="fa fa-refresh fa-2x mt-1" style="color: #3b5998"></i>
        </b-col>
        <b-col >
          <i class="fa fa-download fa-2x mt-1" style="color: #7ab800" ></i>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="5">
        </b-col>
      </b-row>
      <main-chart-example class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></main-chart-example>
    </b-card>
    <b-card>

      <b-row>
        <b-col sm="7">
          <h4 id="traffic2" class="card-title mb-0">성연령 / Gender & Age</h4>
        </b-col>
        <b-col sm="1">
          <b-form-select id="basicSelectLg" :options="['멤버십 회원']" value="멤버십 회원"/>
        </b-col>
        <b-col sm="1">
          <b-form-select id="basicSelectLg" :options="['일간','주간','월간']" value="일간"/>
        </b-col>
        <b-col sm="2">
          <date-picker v-model="value3" range lang="en"></date-picker>
        </b-col>
        <b-col >
          <i class="fa fa-refresh fa-2x mt-1" style="color: #3b5998"></i>
        </b-col>
        <b-col >
          <i class="fa fa-download fa-2x mt-1" style="color: #7ab800"></i>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="6" lg="8">
          <br>
          <AgeGenderChart></AgeGenderChart>
        </b-col>
        <b-col sm="6" lg="4">
          <br><br>
          <c-table small caption="<i class='fa fa-align-justify'></i> Condensed Table"></c-table>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<style scoped>
</style>
<script>
import CardLine1ChartExample from '../dashboard/CardLine1ChartExample'
import CardLine2ChartExample from '../dashboard/CardLine2ChartExample'
import CardLine3ChartExample from '../dashboard/CardLine3ChartExample'
import BarTopHalf from '../dashboard/BarTopHalf'
import MainChartExample from '../dashboard/MainChartExample'
import SocialBoxChartExample from '../dashboard/SocialBoxChartExample'
import CalloutChartExample from '../dashboard/CalloutChartExample'
import { Callout } from '../../components/'
import DatePicker from '../../../node_modules/vue2-datepicker/index'
import AgeGenderChart from '../dashboard/AgeGenderChart'
import cTable from '../dashboard/Table.vue'
// import axios from 'axios'

export default {
  name: 'memberStatistics',
  components: {
    Callout,
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    BarTopHalf,
    MainChartExample,
    SocialBoxChartExample,
    CalloutChartExample,
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
