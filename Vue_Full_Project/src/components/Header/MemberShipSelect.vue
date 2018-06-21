<template>
  <b-form-select id="basicSelectLg" v-model="membershipIndex" :options="membershipList" />
</template>

<script>
import store from '../../vuex/store'

export default {
  name: 'MemberShipSelect',
  store,
  computed: {
    membershipList () {
      return this.$store.state.membershipLists
    },
    membershipIndex: {
      get: function () {
        return this.$store.state.memberShipStatus
      },
      set: function (newValue) {
        this.$store.state.memberShipStatus = newValue
      }
    }
  }
}
</script>

<style scoped>
#basicSelectLg {
  border: none;
  box-shadow: none;
}
</style>
