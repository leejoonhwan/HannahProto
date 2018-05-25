<template>
  <b-nav-item class="px-3">반갑습니다. {{itemLists.name}}({{itemLists.id}})님.</b-nav-item>
</template>

<script>
import store from '../../vuex/store'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'LoginInfo',
  store,
  data () {
    return {
      newItemText: ''
    }
  },

  // state.itemLists 를 itemLists 속성으로 연결하기 위해
  // 계산된 속성에서 게터를 매핑한다.
  computed: mapGetters({
    itemLists: 'getLists'
  }),

  // 액션을 내부 메서드처럼 사용하기 위해 매핑한다.
  methods: {
    ...mapActions(['fetchItemLists'])
  },
  mounted () {
    // 마운트된 시점에 데이터를 불러온다(비동기)
    this.fetchItemLists()
  }
}
</script>

<style scoped>

</style>
