<template>
  <b-card no-body class="bg-primary">
    <b-card-body class="pb-2">
      <h4 class="mb-1">멤버십 회원 / Members</h4>
      <h6 class="mb-0">누적 13,333명 (+134 명)</h6>
      <h6 class="mb-2">4/29 기준</h6>
    </b-card-body>
    <member-card-bar-chart class="chart-wrapper px-3" style="height:70px;" height="70"/>
  </b-card>
</template>

<script>
import MemberCardBarChart from '../dashboard/MemberCardBarChart'
export default {
  name: 'MemberCardMixChart',
  components: {
    MemberCardBarChart
  },
  data () {
    return {
      urlSet: {
        'levis': '/static/dummy/getLevisMemberCount',
        'happyCharge': '/static/dummy/getHappyChargeMemberCount'
      }
    }
  },
  created () {
    console.log('MemberCardMixChart created')
    var url = this.getDataUrl()
    this.getMemberCountData(url)
  },
  methods: {
    getDataUrl () {
      var dataUrl = this.urlSet
      if (this.$store.state.memberShipStatus === 'levis') this.dataUrl = this.dataUrl.levis
      else if (this.$store.state.memberShipStatus === 'happyCharge') this.dataUrl = this.dataUrl.happyCharge
      console.log(this.$store.state.memberShipStatus + ' : ' + this.dataUrl)
      return dataUrl
    },
    getMemberCountData (url) {
      fetch(url).then((resp) => resp.json()).then(response => {
        console.log(response.data.length)
      })
    }
  }
}
</script>

<style scoped>

</style>
