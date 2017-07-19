<template>
  <div class="my-header">
    <div class="menu-button el-icon-menu" :click="handleClickMenu"/>
    <div class="logo">Where2Get</div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    title: 'Header'
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
.my-header{
  font-family: "Hiragino Sans GB";
  padding: 1rem 1rem 1rem 1rem;
  background-color: #324157;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

.my-header .menu-button{
  color: #fff;
  font-size: 1.5rem;
}
</style>
