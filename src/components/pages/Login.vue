<template>
  <div class="bgimg">
    <div class="layer">
      <div class="login">
        <div class="logo">WhereToGet</div>
        <md-input-container class="contactus-input">
          <label>{{ $t('message.user') }}</label>
          <md-input data-vv-delay="1000" v-model="user.email" v-validate="'required'" :class="{'form-input': true, 'form-input is-danger': errors.has('name') }" name="name"></md-input>
        </md-input-container>
        <md-input-container class="contactus-input">
          <label>{{ $t('message.password') }}</label>
          <md-input data-vv-delay="1000" v-model="user.password" v-validate="'required|password'" :class="{'form-input': true, 'form-input is-danger': errors.has('password') }" name="password"></md-input>
        </md-input-container>
        <button @click="login(user.email,user.password)">Login</button>
        <button @click="register()">Register</button>
        <button @click="signInOAuth('facebook')">auth Facebook</button>
        <button @click="signInOAuth('google')">auth Google</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  import sha512 from 'sha512' 
  import { firebase , Firebase } from '../../db.js'

  export default {
    data: () => ({
      user : {email : '', password : ''}
    }),
    methods: {
      ...mapActions({
        setUserProfile: 'setUserProfile'
      }),
      login: function (email,password) {
        console.log(`User:${email} Password:${password}`)
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
          let user = firebase.auth().currentUser;
          if(user){
            console.log('User:'+JSON.stringify(user));
          }
        }).catch(function(error) {
          // Handle Errors here.
          let errorCode = error.code;
          if(errorCode){
            console.log(errorCode);
          }
        });
      },
      register: function () {
        console.log('register');
      },
      signInOAuth: function (provider) {
        const _this = this
        if(provider === 'facebook'){
          const provider = new Firebase.auth.FacebookAuthProvider();

          provider.addScope('email');
          provider.addScope('public_profile');
          provider.addScope('user_friends');
          
          //Try Linking
          /*
            firebase.auth().currentUser.linkWithPopup(provider).then(function(result) {
              // Accounts successfully linked.
              var credential = result.credential;
              var user = result.user;
              console.log('Account successfully linked');
              console.log(`Credential Token: ${result.credential.accessToken}`)
            }).catch(function(error) {
              // Handle Errors here.
              console.log('Error linking');
            });
          */
          firebase.auth().signInWithPopup(provider).then(function(authData) {
            console.log(authData);
            console.log(`Credential Token: ${authData.credential.accessToken}`)
            let user = {
              accessToken: authData.credential.accessToken,
              refreshToken: authData.user.refreshToken,
              profile: authData.additionalUserInfo.profile
            };
            console.log(user)
            //Vuex
            _this.setUserProfile(user);

          }).catch(function(error) {
            console.log('Error:'+error);
          });
        } 
        /*else if(provider === 'google'){
          let provider = new firebase.auth.GoogleAuthProvider();
        }*/
      }
    }
  }
</script>

<style scoped>

  body{
    color: #fff;
  }
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

  .md-input.form-input{
    background-color: #3283ca !important;
    opacity: 0.4;
  }

  .md-input-container.md-has-value input, .md-input-container.md-has-value textarea{
    color: #fff !important;
  }

  .md-theme-default.md-has-value.md-input-focused input{
    color: #fff;
  }

</style>
