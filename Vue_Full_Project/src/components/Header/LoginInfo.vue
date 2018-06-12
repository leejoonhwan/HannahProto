<template>
  <b-nav-item class="px-3">반갑습니다. {{this.$store.state.name}}({{this.$store.state.id}})님.</b-nav-item>
</template>

<script>
import store from '../../vuex/store'

export default {
  name: 'LoginInfo',
  store,
  data () {
    return {
      newItemText: ''
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
