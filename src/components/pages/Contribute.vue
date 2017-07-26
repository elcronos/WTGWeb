<template>
  <div class="content-contribute">
    <vue-up></vue-up>
    <div class="contribute-header">
      <h1>Contribute with information</h1>
      <h3>Do you know about a place or product that is not listed here?</h3>
      <h4>Help us to improve the information provided in WhereToGet</h4>
    </div>
    <form @submit.prevent="validateBeforeSubmit" class="contribute-form">
      <div :class="{ 'control': true }">
        <input data-vv-delay="1000" v-model="contact.email" v-validate="'required|email'" :class="{'form-input': true, 'form-input is-danger': errors.has('email') }" name="email" type="text" placeholder="Your Email"/>
        <div v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</div>
      </div>
      <div :class="{ 'control': true }">
        <input data-vv-delay="1000" v-model="contact.name" v-validate="'required|alpha_spaces'" :class="{'form-input': true, 'form-input is-danger': errors.has('name') }" name="name" type="text" placeholder="Your Name"/>
        <div v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</div>
      </div>
      <div :class="{ 'control': true }">
        <input data-vv-delay="1000" v-model="contact.namePlace" v-validate="'required|max: 100'" :class="{'form-input': true, 'form-input is-danger': errors.has('namePlace') }" name="namePlace" type="text" placeholder="Name Place"/>
        <div v-show="errors.has('namePlace')" class="help is-danger">{{ errors.first('namePlace') }}</div>
      </div>
      <div :class="{ 'control': true }">
        <input data-vv-delay="1000" v-model="contact.address" v-validate="'required|min:5'" :class="{'form-input': true, 'form-input is-danger': errors.has('address') }" name="address" type="text" placeholder="Address"/>
        <div v-show="errors.has('address')" class="help is-danger">{{ errors.first('address') }}</div>
      </div>
      <div :class="{ 'control': true }">
        <textarea v-model="contact.message" rows="4" type="textarea" v-validate="'required|max: 1000'" :class="{'form-input form-input': true, 'form-input is-danger': errors.has('message') }" name="message"  placeholder="Message"/>
        <div v-show="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</div>
      </div>
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
      axios.post(`http://localhost:3000/email`, email)
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

<style>
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
}
.btn{
  color: #fff;
  font-size: 0.7rem;
  padding: 0.5rem 3rem 0.5rem 3rem;
  border-radius: 2rem;
  background-color: #506DDA;
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
  padding: 1.4rem;
  margin: 0.2rem 0 0.2rem 0;
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
  .contribute-header h1{
    font-size: 1.2rem;
  }
  .contribute-header h3{
    font-size: 1rem;
  }
  .contribute-header h4{
    font-size: 0.8rem;
  }
}
</style>
