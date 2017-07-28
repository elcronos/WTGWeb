<template>
  <div class="content-contactus">
    <div class="contactus-header">
      <h1> {{ $t('header.contactus') }}</h1>
    </div>
    <vue-up></vue-up>
    <form @submit.prevent="validateBeforeSubmit" class="contact-form">
      <md-input-container class="contactus-input">
        <label>{{ $t('message.email') }}</label>
        <md-input data-vv-delay="1000" v-model="contact.email" v-validate="'required|email'" :class="{'form-input': true, 'form-input is-danger': errors.has('email') }" name="email"></md-input>
      </md-input-container>
      <div v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</div>
      <md-input-container class="contactus-input">
        <label>{{ $t('message.name') }}</label>
        <md-input data-vv-delay="1000" v-model="contact.name" v-validate="'required|alpha_spaces'" :class="{'form-input': true, 'form-input is-danger': errors.has('name') }" name="name" type="text"/>
      </md-input-container>
      <div v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</div>
      <md-input-container class="contactus-input">
        <label>{{ $t('message.message') }}</label>
        <md-textarea v-model="contact.message" rows="6" type="text" v-validate="'required|max:1000'" :class="{'form-input form-input': true, 'form-input is-danger': errors.has('message') }" name="message"/>
      </md-input-container>
      <div v-show="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</div>
      <button class="btn">{{ $t('message.send') }}</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { SERVER } from '../../data/data.js'

export default {
  data: () => ({
    contact : {
      name    : '',
      email   : '',
      message : ''
    }
  }),
  mounted: function(){

  },
  methods: {
    notify (message) {
      this.$popup({
        message         : message,
        color           : '#fff',
        backgroundColor : 'rgba(62, 181, 42, 0.9)',
        delay           : 10
      })
    },
    sendEmail(email){
      this.notify('Thank you for contacting us !')
      axios.post(`http://${SERVER}:3000/email`, email)
      .then(response => {
        // JSON responses are automatically parsed.
        this.$router.push('/#')
      })
      .catch(e => {
        console.log("Ooppss.."+e)
      })
    },
    validateBeforeSubmit(){
      var _this = this
      this.$validator.validateAll().then(result => {
        if (result) {
          _this.sendEmail(_this.contact);
          return;
        }
        alert('Correct the errors!');
      });
    }
  }
}
</script>

<style scoped>
.contact-form{
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.md-input{
  color: #ffffff;
  background-color: #fff;
  border: 1px solid #DBE2E9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 0 0 2px transparent inset;
  box-sizing: border-box;
}
.btn{
  margin-top: 1rem;
  border: 0px;
}
.btn.inactive{
  background-color: gray;
}
.form-input{
  width: 70% !important;
  padding-left: 1rem;
}
.help.is-danger{
  align-self: center;
}
.control{
  width: 100% !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.is-danger{
  color: red;
}
.contactus-header{
  display: flex;
  flex-direction: column;
  text-align: center;
}
.contactus-header h1{
  color: #7F7B82;
  margin: 2rem 0 1.5rem 0;
}
.content-contactus{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: calc(100vh - 145px)
}
.contactus-input{
  margin-bottom: 1rem;
  width: 80% !important;
}
.contactus-input input{
  background-color: #fff;
  padding-left: 1rem;
}
.contactus-input input:focus{
  padding-left: 1em;
}
.md-input-container{
  margin: 0px;
}
.btn{
  color: #fff;
  font-size: 0.7rem;
  padding: 0.5rem 3rem 0.5rem 3rem;
  border-radius: 2rem;
  background-color: #506DDA;
}
</style>
