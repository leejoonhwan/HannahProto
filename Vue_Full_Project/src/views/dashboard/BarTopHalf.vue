<script>
import VueCharts from 'vue-chartjs'

export default {
  // mixins: [VueCharts.mixins.reactiveProp],
  extends: VueCharts.Bar,
  props: ['apiUrl'],
  data () {
    return {
      chartData: {
        labels: ['5/15', '5/16', '5/17', '5/18', '5/19', '5/20', '5/21', '5/22', '5/23', '5/24', '5/25', '', '', ''],
        datasets: [{
          label: 'Data11',
          backgroundColor: ['rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,55,55,.3)', 'rgba(255,55,55,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,55,55,.3)', 'rgba(255,55,55,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.3)'],
          borderColor: ['transparent', 'rgba(105,205,205,.9)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
          yAxisID: 'left-y-axis',
          data: [30, 22, 24, 35, 30, 34, 56, 74, 22, 17, 32, 58, 54, 62]
        },
        {
          label: 'Data12',
          backgroundColor: 'transparent', // 'rgba(255,255,255,.3)',
          borderColor: 'rgba(255,255,255,.5)',
          yAxisID: 'right-y-axis',
          type: 'line',
          data: [1130, 1122, 1214, 1315, 1350, 1374, 1416, 1514, 1622, 1617, 1732, 1758, 1854, 1862]
        }]
      },
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
  methods: {
    refetch: function () {
      // fetch(this.apiUrl).then(res => res.json()).then(response => {
      //   this.chartData.datasets[0].data = response
      // })
      this.renderChart(this.chartData, this.options)
    }
  },
  mounted () {
    this.refetch()
  },
  updated () {
    this.refetch()
  }
}
</script>
