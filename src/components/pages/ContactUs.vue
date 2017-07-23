<template>
  <div class="content-contactus">
    <div class="contactus-header">
      <h1>Contact Us</h1>
    </div>
    <div class="contribute-form">
      <input class="form-input" placeholder="Your Email"/>
      <input class="form-input" placeholder="Your Name"/>
      <textarea rows="6" type="textarea" class="form-input" placeholder="Message"/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
