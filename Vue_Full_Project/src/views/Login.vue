<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>

                <form @submit.prevent="moveDashboard(loginId, password)">
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <input type="text" class="form-control" v-model="loginId" placeholder="Username">
                  </b-input-group>

                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <input type="password" class="form-control" v-model="password" placeholder="Password">
                  </b-input-group>

                  <b-row>
                    <b-col cols="6">
                      <b-button type = "submit" variant="primary" class="btn btn-primary px-4">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                </form>

              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <b-button variant="primary" class="active mt-3" v-on:click = "moveDashboard">Register Now!</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import store from '../vuex/store'
import { mapActions } from 'vuex'

// vuex 함수와 일반 함수를 동시에 사용하여 로그인 사용자 정보를 store 저장
export default {
  name: 'Login',
  store,
  methods: {
    ...mapActions(['updateLoginInfo']),
    moveDashboard (loginId, password) {
      this.updateLoginInfo({loginId, password})
      this.$router.push('../dashboard')
    }
  }
}
</script>
