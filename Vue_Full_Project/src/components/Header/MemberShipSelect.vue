<template>
  <b-form-select id="basicSelectLg" :options="membershipListsItem" v-model="membershipSelected" />
</template>

<script>
import store from '../../vuex/store'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MemberShipSelect',
  store,
  data () {
    return {
      membershipSelected: '',
      membershipLists: []
    }
  },
  computed: mapGetters({
    membershipListsItem: 'getMembershipLists',
    membershipStatus: 'getMembershipStatus',
    getMembershipStatueExample () {
      return this.$store.state.memberShipStatus
    }
  }),
  components: {
  },
  methods: {
    ...mapActions(['getMembershipLists', 'getMembershipStatus', 'updateMembershipStatus'])
  },
  mounted () {
    // 마운트된 시점에 데이터를 불러온다(비동기)
    this.getMembershipLists()
    this.getMembershipStatus()
    this.membershipLists = this.membershipListsItem
  },
  created () {
  },
  updated () {
    alert('바뀜 감지 ' + this.membershipSelected)
  }
}
</script>

<style scoped>

</style>
