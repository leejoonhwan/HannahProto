<script>
import VueCharts from 'vue-chartjs'

export default {
  // mixins: [VueCharts.mixins.reactiveProp],
  extends: VueCharts.Bar,
  props: ['chartData'],
  data () {
    return {
      options: {
        // responsive: true,
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
      }
    }
  },
  methods: {

  },
  mounted () {
    console.log('barchart parents chartData')
    console.log(this.chartData)
    this.renderChart(this.chartData, this.options)
  }
}
</script>
