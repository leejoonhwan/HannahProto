<script>
import { Bar } from 'vue-chartjs'
import store from '../../vuex/store'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MemberCardBarChart',
  data () {
    return {
      membershipStatus: ''
    }
  },
  extends: Bar,
  props: ['height'],
  store,
  computed: mapGetters({
    itemMember: 'getMembershipStatus'
  }),
  methods: {
    getBarChartData (url, dataset) {
      fetch(url).then(res => res.json()).then(response => {
        console.log(response)

        dataset.pop(0)
        dataset.push({
          label: 'My First dataset',
          backgroundColor: 'rgba(255,255,255,.3)',
          borderColor: 'transparent',
          data: response
        })
        this.drawChart(dataset)
      })
    },
    drawChart (pDataset) {
      this.renderChart({
        labels: ['5/15', '5/16', '5/17', '5/18', '5/19', '5/20', '5/21', '5/22', '5/23', '5/24', '5/25', '', '', '', '', ''],
        datasets: pDataset
      }, {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false,
            categoryPercentage: 1,
            barPercentage: 0.5
          }],
          yAxes: [{
            display: false
          }]
        }
      })
    },
    ...mapActions(['getMembershipStatus'])
  },
  mounted () {
  },
  created () {
    this.membershipStatus = this.$store.state.memberShipStatus
  },
  updated () {
  }
}
</script>
