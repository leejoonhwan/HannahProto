<template slot="actions"  slot-scope="data">
  <i class="fa fa-download fa-2x mt-1" style="color: #7ab800" v-on:click = "downloadExcel(data.item.merchantId)"></i>
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

</style>
