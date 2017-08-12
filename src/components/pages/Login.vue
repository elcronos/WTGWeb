<template>
  <div class="bgimg">
    <div class="layer">
      <div class="login">
        <div class="logo">WhereToGet</div>
        <md-input-container class="contactus-input">
          <label>{{ $t('message.user') }}</label>
          <md-input data-vv-delay="1000" v-model="user.name" v-validate="'required'" :class="{'form-input': true, 'form-input is-danger': errors.has('name') }" name="name"></md-input>
        </md-input-container>
        <md-input-container class="contactus-input">
          <label>{{ $t('message.password') }}</label>
          <md-input data-vv-delay="1000" v-model="user.password" v-validate="'required|password'" :class="{'form-input': true, 'form-input is-danger': errors.has('password') }" name="password"></md-input>
        </md-input-container>
        <button @click="login(user.name,user.password)">Login</button>
        <button @click="register()">Register</button>
        <button @click="authenticate('facebook')">auth Facebook</button>
        <button @click="authenticate('google')">auth Google</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import sha512 from 'sha512'

  export default {
    data: () => ({
      user : {name : '', password : ''}
    }),
    methods: {
      ...mapActions({
        loginStore : 'isAuthenticated'
      }),
      login: function (username,password) {
        password = sha512(password).toString('hex')
        console.log(`User:${username} Password:${password}`)
        this.$auth.login({ username, password }).then(function (response, error) {
          // Execute application logic after successful login
          console.log('Token:'+response.data.token)
          console.log('Login')
          this.loginStore(true)
          this.$router.push('/Profile')
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
  @font-face {
    font-family: logo;
    src: url('../../assets/fonts/Note_this.ttf');
  }
  .bgimg {
    height: calc(100vh - 8rem);
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
    height: calc(100vh - 8rem);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login{
    width: 30%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .logo{
    color: #fff;
    text-align: center;
    padding: 1rem;
    padding-top: 1rem;
    font-family: "logo";
    font-size: 3rem;
  }
  .md-input-container label{
    color: #fff;
  }

  .md-theme-default.md-input-container.md-input-focused input{
    text-shadow: rgba(156,36,36,0.87);
  }

  .md-input.form-input.form-input.is-danger{
    color: #3283ca !important;
  }


</style>
