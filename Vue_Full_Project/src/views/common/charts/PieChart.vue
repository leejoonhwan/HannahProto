<script>
import {Pie} from 'vue-chartjs'

export default {
  name: 'PieChart',
  extends: Pie,
  data () {
    return {
      datacollection: {
        labels: ['Family', 'Welcome', 'VIP', 'Friends'],
        datasets: [
          {
            label: 'Grade',
            // red: 'rgb(255, 99, 132)',
            // orange: 'rgb(255, 159, 64)',
            // yellow: 'rgb(255, 205, 86)',
            // green: 'rgb(75, 192, 192)',
            // blue: 'rgb(54, 162, 235)',
            // purple: 'rgb(153, 102, 255)',
            // grey: 'rgb(201, 203, 207)'
            backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(255, 159, 64, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)'],
            borderColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)'],
            borderWidth: 1,
            data: [40, 20, 10, 30]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              console.log(tooltipItem)
              return Math.abs(tooltipItem.xLabel) + '%'
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
