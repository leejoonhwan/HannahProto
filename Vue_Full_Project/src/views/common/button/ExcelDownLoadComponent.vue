<template slot="actions"  slot-scope="data">
  <!--<i class="fa fa-download fa-2x mt-1" style="color: #7ab800" v-on:click = "downloadExcel(data.item.merchantId)"></i>-->
  <i class="icon-cloud-download icons p-2" style="color:green;" v-on:click = "downloadExcel(data.item.merchantId)"></i>
</template>

<script>
export default {
  name: 'ExcelDownLoadComponent',
  methods: {
    downloadExcel (merchantId) {
      console.log(JSON.stringify(merchantId))
    }
  }
}
</script>

<style scoped>
  .icons {
    font-size: 18px;
    padding-right: 7px;
    font-weight: bold;
  }
</style>
