<script>
import { Line } from 'vue-chartjs'
import store from '../../vuex/store'
import { mapGetters, mapActions } from 'vuex'

const brandPrimary = '#20a8d8'
var datasets = [
  {
    label: 'My First dataset',
    backgroundColor: brandPrimary,
    borderColor: 'rgba(255,255,255,.55)',
    data: [4, 59, 84, 84, 51, 55, 40]
  }
]

export default {
  extends: Line,
  props: ['height'],
  store,
  computed: mapGetters({
    itemLists: 'getMemberCount'
  }),
  methods: {
    ...mapActions(['getMemberCount'])
  },
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: datasets
    }, {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent'
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            display: false,
            min: Math.min.apply(Math, datasets[0].data) - 5,
            max: Math.max.apply(Math, datasets[0].data) + 5
          }
        }]
      },
      elements: {
        line: {
          borderWidth: 1
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    })
  }
}
</script>
