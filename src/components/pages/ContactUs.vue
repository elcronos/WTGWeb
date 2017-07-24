<template>
  <div class="content-contactus">
    <div class="contactus-header">
      <h1>Contact Us</h1>
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
        <textarea v-model="contact.message" rows="6" type="textarea" v-validate="'required|max:1000'" :class="{'form-input form-input': true, 'form-input is-danger': errors.has('message') }" name="message"  placeholder="Message"/>
        <div v-show="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</div>
      </div>
      <button class="btn">SEND</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    contact : {
      email: '',
      name: '',
      message: ''
    }
  }),
  methods: {
    validateBeforeSubmit(){
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
          return;
        }

        alert('Correct the errors!');
      });
    }
  }
}
</script>

<style>
.btn{
  border: 0px;
}
.btn.inactive{
  background-color: gray;
}
.form-input{
  width: 70% !important;
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
  align-items: center;
}
.contactus-header h1{
  color: #7F7B82;
  margin: 2rem 0 1.5rem 0;
}
.content-contactus{
  height: calc(100vh - 145px)
}
</style>
