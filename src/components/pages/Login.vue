<template>
  <div class="bgimg">
    <div class="layer">
      <button @click="login('email','pass')">Login</button>
      <button @click="register()">Register</button>
      <button @click="authenticate('facebook')">auth Facebook</button>
      <button @click="authenticate('google')">auth Google</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      login: function (email,password) {
        this.$auth.login({ email, password }).then(function () {
          // Execute application logic after successful login
          console.log('Login')
        })
      },

      register: function () {
        this.$auth.register({ name, email, password }).then(function () {
          // Execute application logic after successful registration
        })
      },
      authenticate: function (provider) {
        this.$auth.authenticate(provider).then(function () {
          // Execute application logic after successful social authentication
        })
      }
    }
  }
</script>

<style scoped>
  .bgimg {
    height: 100vh;
    background-size: cover;
    background-image: url('../../assets/images/main.jpeg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .layer {
    background-color: rgba(19, 20, 66, 0.7);
    position: absolute;
    width: 100%;
    height: 100vh;
  }
</style>
