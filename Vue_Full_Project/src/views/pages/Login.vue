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

                <form @submit.prevent="getSession(loginId, password)">
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
                  <b-button variant="primary" class="active mt-3" v-on:click = "getSession">Register Now!</b-button>
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
import store from '../../vuex/store'

export default {
  name: 'Login',
  store,
  data () {
    return {
      loginId: '',
      password: '',
      url: 'http://localhost:8080/hannah/user/login'
    }
  },
  methods: {
    moveDashboard (loginId, password) {
      console.log(loginId, password)
      this.$router.push('../../dashboard')
    },
    getSession (loginId, password) {
      var params = {}
      params.username = loginId
      params.password = password
      fetch(this.url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      }).then((res) => res.json())
        .then((response) => {
          // 로그인 정보
          console.log(JSON.stringify(response))

          let username = response.username
          let authorities = response.authorities
          let sessionToken = response.sessionToken
          this.$session.set('username', username)
          this.$session.set('authorities', authorities)
          this.$session.set('sessionToken', sessionToken)

          this.$router.push('../../dashboard')
        })
    }
  }
}
</script>
