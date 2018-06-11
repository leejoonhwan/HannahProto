<template>
  <b-form-select id="basicSelectLg" v-model="selected" :options="membershipListsItem" />
</template>

<script>
import store from '../../vuex/store'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MemberShipSelect',
  store,
  data () {
    return {
      membershipLists: [],
      selected: ''
    }
  },
  computed: mapGetters({
    membershipListsItem: 'getMembershipLists',
    membershipStatus: 'getMembershipStatus'
  }),
  components: {
  },
  methods: {
    ...mapActions(['getMembershipLists', 'getMembershipStatus', 'updateMembershipStatus'])
  },
  mounted () {
    // 마운트된 시점에 데이터를 불러온다(비동기)
    // selected 값을 호출
    this.getMembershipLists()
    this.getMembershipStatus()
    this.selected = this.$store.state.memberShipStatus
    this.membershipLists = this.membershipListsItem
  },
  created () {
  },
  updated () {
    this.$store.state.memberShipStatus = this.selected
  }
}
</script>

<style scoped>

</style>
