<script>
import { VueCharts } from 'vue-chartjs'

export default {
  name: 'MemberCardBarChart',
  extends: VueCharts.Bar,
  mixins: [VueCharts.mixins.reactiveProp],
  props: ['height', 'options'],
  data () {
    return {
    }
  },
  methods: {
    refetch: function () {
      this.renderChart(this.chartData, this.options)
    }
  },
  mounted () {
    this.refetch()
  }
}
</script>
