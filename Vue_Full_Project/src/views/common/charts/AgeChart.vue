<script>
import {HorizontalBar} from 'vue-chartjs'

export default {
  name: 'AgeChart',
  extends: HorizontalBar,
  data () {
    return {
      datacollection: {
        labels: ['60+', '50대', '40대', '30대', '20대', '10대'],
        datasets: [
          {
            label: '남성',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1,
            data: [-1.2, -9.2, -18.1, -19.3, -16.1, -5.3]
          },
          {
            label: '여성',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
            data: [5.2, 12.4, 20.1, 25.3, 22.1, 6.3]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            stacked: true,
            ticks: {
              callback: function (value, index, values) {
                return Math.abs(value) + '%'
              }
            }
          }],
          yAxes: [{
            stacked: true
          }]
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              return data.datasets[tooltipItem.datasetIndex].label + ' : ' + Math.abs(tooltipItem.xLabel) + '%'
            }
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>

<style scoped>

</style>
