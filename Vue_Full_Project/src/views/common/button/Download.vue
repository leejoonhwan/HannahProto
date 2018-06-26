<template>
  <i class="icon-cloud-download icons p-2" style="color:green;" v-on:click = "downloadExcel()"></i>
</template>

<script>
export default {
  name: 'ExcelDownLoadComponent',
  props: ['downloadUrl'],
  methods: {
    downloadExcel () {
      console.log(this.downloadUrl)
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
