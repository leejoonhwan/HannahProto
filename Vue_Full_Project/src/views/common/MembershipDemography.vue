<template>
  <b-card>
    <b-row>
      <b-col>
        <h4 id="traffic" class="card-title mb-0 float-left">멤버십 회원 성연령 통계</h4>
        <i class="icon-cloud-download icons float-right p-2" style="color:green;"></i>
        <date-range-picker class="float-right px-2" opens="left" singleDatePicker
                           :startDate="pickedDate" :endDate="pickedDate"
                           @update="updateDate"
        />
        <div class="float-right px-2" >
          <b-form-select class="innerSelect"
                         v-model="pickedType"
                         :options="[ { value: 'joinAccm', text: '누적 가입 회원' }, { value: 'dormantAccm', text: '누적 휴면 회원' } ]"
                         :value="pickedType"
                         @change="reloadChart"
          />
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="8" lg="8">
        <age-chart class="chart-wrapper" style="height:320px;margin-top:40px;"></age-chart>
      </b-col>
      <b-col sm="4" lg="4" class="p-4">
        <b-table hover responsive="sm" :items="tableRows" :fields="tableFields"></b-table>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
// import DateRangePicker from 'vue2-daterange-picker'
import DateRangePicker from './datepicker/DateRangePicker'
import DatePicker from 'vue2-datepicker'
import AgeChart from '../common/charts/AgeChart'

export default {
  name: 'GradeDemography',
  components: {
    DateRangePicker,
    DatePicker,
    AgeChart
  },
  data () {
    return {
      pickedDate: '2018-06-26',
      pickedType: 'joinAccm',
      tableRows: [
        { rank: 1, ageGender: '여자 30-39세', ratio: '19%' },
        { rank: 2, ageGender: '여자 20-29세', ratio: '17%' },
        { rank: 3, ageGender: '남자 30-39세', ratio: '14%' },
        { rank: 4, ageGender: '여자 40-49세', ratio: '11%' },
        { rank: 5, ageGender: '남자 30-39세', ratio: '10%' },
        { rank: 6, ageGender: '여자 50-59세', ratio: '9%' }
      ],
      tableFields: [
        { key: 'rank', label: '순서', tdClass: 'text-center', thClass: ['table-active', 'text-center'] },
        { key: 'ageGender', label: '성연령', tdClass: 'text-center', thClass: ['table-active', 'text-center'] },
        { key: 'ratio', label: '비율', tdClass: 'px-2', thClass: ['table-active', 'text-center'] }
      ]
    }
  },
  methods: {
    updateDate (event) {
      this.pickedDate = event.startDate
    },
    reloadChart () {
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
  .innerSelect {
    border: none;
    width: auto;
    box-shadow: none;
  }
</style>
