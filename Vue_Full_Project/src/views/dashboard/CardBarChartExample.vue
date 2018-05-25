<script>
import { Bar } from 'vue-chartjs'

var dataset = [{
}]

export default {
  data () {
    return {
      newItemText: 'leejoonhwna'
    }
  },
  extends: Bar,
  props: ['height', 'items', 'borderColor', 'backgroundColor'],
  mounted () {
    let options = {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: []
    }
    options.backgroundColor = this.backgroundColor
    options.borderColor = this.borderColor
    options.data = this.items

    dataset = [options]

    console.log('barchart parents itemss')
    console.log(this.items)
    console.log(options)

    this.renderChart({
      labels: ['5/15', '5/16', '5/17', '5/18', '5/19', '5/20', '5/21', '5/22', '5/23', '5/24', '5/25', '', '', '', '', ''],
      datasets: dataset
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
  }
}
</script>
