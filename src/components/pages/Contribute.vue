<template>
  <div class="content-contribute">
    <vue-up></vue-up>
    <div class="contribute-header">
      <h1>Contribute with information</h1>
      <h3>Do you know about a place or product that is not listed here?</h3>
      <h4>Help us to improve the information provided in WhereToGet</h4>
    </div>
    <form @submit.prevent="validateBeforeSubmit" class="contribute-form">
      <md-input-container class="contribute-input">
        <label>Email</label>
        <md-input type="email" data-vv-delay="1000" v-model="contact.email" v-validate="'required|email'" :class="{'form-input': true, 'form-input is-danger': errors.has('email') }" name="email"></md-input>
      </md-input-container>
      <div v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</div>
      <md-input-container class="contribute-input">
        <label>Name</label>
        <md-input data-vv-delay="1000" v-model="contact.name" v-validate="'required|alpha_spaces'" :class="{'form-input': true, 'form-input is-danger': errors.has('name') }" name="name" type="text"/>
      </md-input-container>
      <div v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</div>
      <md-input-container class="contribute-input">
        <label>Place</label>
        <md-input data-vv-delay="1000" v-model="contact.namePlace" v-validate="'required|alpha_spaces'" :class="{'form-input': true, 'form-input is-danger': errors.has('namePlace') }" name="namePlace" type="text"/>
      </md-input-container>
      <div v-show="errors.has('namePlace')" class="help is-danger">{{ errors.first('namePlace') }}</div>
      <md-input-container class="contribute-input">
        <label>Address</label>
        <md-input data-vv-delay="1000" v-model="contact.address" v-validate="'required'" :class="{'form-input': true, 'form-input is-danger': errors.has('address') }" name="address" type="text"/>
      </md-input-container>
      <div v-show="errors.has('address')" class="help is-danger">{{ errors.first('address') }}</div>
      <md-input-container class="contribute-input">
        <label>Message</label>
        <md-textarea v-model="contact.message" rows="6" type="text" v-validate="'required|max:1000'" :class="{'form-input form-input': true, 'form-input is-danger': errors.has('message') }" name="message"/>
      </md-input-container>
      <div v-show="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</div>
      <button class="btn">SEND</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    contact : {
      email     : '',
      name      : '',
      namePlace : '',
      address   : '',
      message   : ''
    }
  }),
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
      this.notify('Thank you for helping us !')
      axios.post(`http://192.168.1.4:3000/email`, email)
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
          let email     = {}
          email.name    = _this.contact.name
          email.email   = _this.contact.email
          email.message = `<h4>${_this.contact.namePlace}</h4><h3>${_this.contact.address}</h3><p>${_this.contact.message}<p>`
          _this.sendEmail(email);
          return;
        }

        alert('Correct the errors!');
      });
    }
  }
}
</script>

<style scoped>
.contribute-input{
  margin-bottom: 1rem;
  width: 80% !important;
}
.contribute-input input{
  background-color: #fff;
}
.md-input{
  color: #ffffff;
  background-color: #fff;
  border: 1px solid #DBE2E9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 0 0 2px transparent inset;
  box-sizing: border-box;
}
.content-contribute{
  height: calc(100vh - 145px);
  padding: -1rem 0.5rem 0 0.5rem;
}
.contribute-header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.contribute-header h1{
  color: #7F7B82;
  margin: 2rem 0 0 0;
}
.contribute-header h3{
  color: #7F7B82;
  margin: 0;
}
.contribute-header h4{
  margin: 0;
}
.contribute-form{
 display: flex;
 flex-direction: column;
 align-items: center;
 max-width: 100%;
}
.md-input-container.contribute-input.md-theme-default{
  margin: 0px;
}
textarea{
  font-size: 1rem !important;
  border: 0;
  border-bottom: 1px solid #DBE2E9;
  width: 90%;
  align-self: center;
}

textarea:focus, textarea:focus{
    outline: none;
}

.form-input{
  width: 70%;
  background-color: #fff;
  border: 1px solid #DBE2E9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07), 0 0 0 2px transparent inset;
  box-sizing: border-box;
}

@media only screen and (max-width: 800px) {
  textarea{
    height: 80%;
  }
  input{
    margin: 0px;
  }
  .md-input-container.contribute-input.md-theme-default{
    margin-top: -0.8rem;
  }
  .contribute-header h1{
    font-size: 1rem;
  }
  .contribute-header h3{
    font-size: 0.8rem;
  }
  .contribute-header h4{
    font-size: 0.6rem;
  }

  .btn{
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
  }
}
.md-input-container{
  margin: 0px;
}
.btn{
  margin-top: 1rem;
  color: #fff;
  border: none;
  font-size: 0.7rem;
  padding: 0.5rem 3rem 0.5rem 3rem;
  border-radius: 2rem;
  background-color: #506DDA;
}
input{
  padding-left: 1rem;
}
input:focus {
   padding-left: 1em;
}
</style>
