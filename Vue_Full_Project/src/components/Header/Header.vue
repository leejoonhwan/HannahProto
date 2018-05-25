<template>
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-link class="navbar-brand" to="#"></b-link>
    <div class="navbar-toggler sidebar-toggler d-md-down-none">
    </div>
    <b-navbar-nav class="d-md-down-none">
      <LoginInfo/>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-form-select id="basicSelectLg" :options="membershipLists" value="행복충전"/>
      <HeaderDropdown/>
    </b-navbar-nav>
    <div class="navbar-toggler aside-menu-toggler d-md-down-none">
    </div>
  </header>
</template>
<script>
import HeaderDropdown from './HeaderDropdown.vue'
import LoginInfo from './LoginInfo.vue'
import store from '../../vuex/store'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'c-header',
  store,
  components: {
    HeaderDropdown,
    LoginInfo
  },
  computed: mapGetters({
    membershipLists: 'getMembershipLists'
  }),
  methods: {
    ...mapActions(['getMembershipLists']),
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    }
  },
  mounted () {
    // 마운트된 시점에 데이터를 불러온다(비동기)
    this.getMembershipLists()
  }
}
</script>
