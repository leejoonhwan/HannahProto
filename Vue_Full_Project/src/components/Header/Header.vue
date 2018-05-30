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
      <member-ship-select></member-ship-select>
      <HeaderDropdown/>
    </b-navbar-nav>
    <div class="navbar-toggler aside-menu-toggler d-md-down-none">
    </div>
  </header>
</template>
<script>
import HeaderDropdown from './HeaderDropdown.vue'
import LoginInfo from './LoginInfo.vue'
import MemberShipSelect from './MemberShipSelect'
export default {
  name: 'c-header',
  data () {
    return {
      membershipSelectData: []
    }
  },
  components: {
    MemberShipSelect,
    HeaderDropdown,
    LoginInfo
  },
  methods: {
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
  }
}
</script>

<style scoped>

</style>
