<template>
  <b-card>
    <h4 id="traffic" class="card-title mb-0 float-left">{{ this.config[dataType].title }}</h4>
    <i class="icon-cloud-download icons float-right p-2" style="color:green;"></i>
    <date-range-picker v-if="config[dataType].showDatePicker" class="float-right px-2 innerSelect" opens="left" :startDate="pickedDates.startDate" :endDate="pickedDates.endDate" @input="console.log(value)"/>
    <div v-for="item in config[dataType].selectForms" :key="item.id">
      <div class="float-right px-2" >
        <b-form-select class="innerSelect" :options="item.items" :value="item.default"/>
      </div>
    </div>
  </b-card>
</template>

<script>
// import DateRangePicker from 'vue2-daterange-picker'
import DateRangePicker from './datepicker/DateRangePicker'
export default {
  name: 'DownloadOnly',
  components: {
    DateRangePicker
  },
  props: ['dataType'],
  data () {
    return {
      pickedDates: { startDate: '2018-05-01', endDate: '2018-05-27' },
      startDate: '2018-05-01',
      endDate: '2018-05-28',
      config: {
        mileage_demography_timeseries: {
          title: '마일리지 이용 성연령 시계열 통계',
          showDatePicker: true,
          selectForms: [
            {
              id: 1,
              items: [
                { value: 'all', text: '멤버십 회원' },
                { value: 'family', text: 'Family 등급 회원' },
                { value: 'vip', text: 'VIP 등급 회원' }
              ],
              default: 'all'
            }, {
              id: 2,
              items: [
                { value: 'save', text: '적립 건수 기준' },
                { value: 'use', text: '사용 건수 기준' }
              ],
              default: 'save'
            }
          ]
        },
        membership_demography_timeseries: {
          title: '멤버십 회원 성연령별 시계열 통계',
          showDatePicker: true,
          selectForms: [
            {
              id: 1,
              items: [
                { value: 'accum_join', text: '누적 가입 회원' },
                { value: 'accum_dormant', text: '누적 휴면 회원' },
                { value: 'new_join', text: '신규 회원' },
                { value: 'dormant', text: '휴면 회원' },
                { value: 'leave', text: '탈퇴 회원' },
                { value: 'visit_count', text: '멤버십 방문 (건수)' },
                { value: 'visit_user', text: '멤버십 방문 (회원수)' }
              ],
              default: 'new_join'
            }, {
              id: 2,
              items: [
                { value: 'daily', text: '일간' },
                { value: 'weekly', text: '주간' },
                { value: 'monthly', text: '월간' }
              ],
              default: 'daily'
            }
          ]
        },
        membership_grade_timeseries: {
          title: '멤버십 등급 구성 시계열 통계',
          showDatePicker: true,
          selectForms: []
        },
        membership_grade_demography_timeseries: {
          title: '멤버십 회원 성연령별 시계열 통계',
          showDatePicker: true,
          selectForms: [
            {
              id: 1,
              items: [
                { value: 'family', text: 'Family 등급 회원' },
                { value: 'vip', text: 'VIP 등급 회원' }
              ],
              default: 'family'
            }
          ]
        }
      }
    }
  }
}
</script>

<style scoped>
.innerSelect {
  border: none;
  box-shadow: none;
  width: auto;
}
.icons {
  font-size: 18px;
  padding-right: 7px;
  font-weight: bold;
}
</style>
