<template>
  <div class="content-contribute">
    <div class="contribute-header">
      <h1>Contribute with information</h1>
      <h3>Do you know about a place or product that is not listed here?</h3>
      <h4>Help us to improve the information provided in WhereToGet</h4>
    </div>
    <div class="contribute-form">
      <input class="form-input" placeholder="Your Email"/>
      <input class="form-input" placeholder="Your Name"/>
      <input class="form-input" placeholder="Name Place"/>
      <input class="form-input" placeholder="Address"/>
      <textarea rows="6" type="textarea" class="form-input" placeholder="What products can you get there?"/>
      <a class="btn">SEND</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.content-contribute{
  height: calc(100vh - 145px)
}
.contribute-header{
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>
