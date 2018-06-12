<script>
import VueCharts from 'vue-chartjs'

export default {
  mixins: [VueCharts.mixins.reactiveProp],
  extends: VueCharts.Bar,
  props: ['chartData'],
  data () {
    return {
      options: {
        responsive: true,
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
            id: 'left-y-axis',
            display: false
          }, {
            id: 'right-y-axis',
            display: false,
            ticks: {
              min: 0
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
  updated () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
