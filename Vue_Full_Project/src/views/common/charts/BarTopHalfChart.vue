<script>
import VueCharts from 'vue-chartjs'
import numeral from 'numeral'

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
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              console.log(data)
              // return data.labels[tooltipItem.index] + ' 등급 : ' + Math.abs(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]) + '%'
              return data.labels[tooltipItem.index] +
                ' 당월 누적 ' + numeral(data.datasets[1].data[tooltipItem.index]).format('0,0') + ' PT' +
                '(당일 ' + numeral(data.datasets[0].data[tooltipItem.index]).format('0,0') + ' PT)'
            }
          }
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
