<template>
  <div>
  <div class="my-header">
    <div>
      <router-link class="page-link" to="/#">
        <div class="image"><img src="../../assets/images/house.svg"></img></div>
        <div class="text">Home</div>
      </router-link>
    </div>
    <div></div>
    <div class="logo">WhereToGet</div>
    <div class="links">
      <router-link class="page-link" to="/Contribute">
        <div class="image"><img src="../../assets/images/map-location.svg"></img></div>
        <div class="text">Contribute with information</div>
      </router-link>
      <router-link class="page-link" to="/ContactUs">
        <div class="image"><img src="../../assets/images/envelope.svg"></img></div>
        <div class="text">Contact Us</div>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({

  }),
  created() {
    axios.get(`http://localhost:3000/countries/ve`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.title = response.data.Name
    })
    .catch(e => {
      console.log("Ooppss.."+e)
    })
  },
  methods: {
    handleClickMenu: () => {
      alert("Menu:")
    }
  }
}
</script>

<style>
@font-face {
  font-family: logo;
  src: url('../../assets/fonts/Note_this.ttf');
}
.page-link{
  margin: 1rem;
  display: flex;
  color: #fff;
  text-decoration:none;
}
.page-link .text{
  margin-top: 0.2rem;
  margin-left: 0.5rem;
  font-size: 0.8rem;
}
.page-link .image{
  width: 1.5rem;
}

.my-header{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1rem 1rem 1rem 1rem;
  background-color: #506DDA;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

.my-header .logo{
  padding-top: 1rem;
  font-family: "logo";
  font-size: 1.5rem;
}

.my-header .menu-button{
  color: #fff;
  font-size: 1.5rem;
}

.router-link-active{
  border-bottom: 0.3rem solid #5D7BE5;
}
.links{
  display: flex;
}
</style>
