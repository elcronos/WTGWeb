<template>
  <div class="my-footer">
    <div class="logo">Footer</div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    title: 'Footer'
  }),
  created() {

  },
  methods: {

  }
}
</script>

<style>
.my-footer{
  font-family: "Hiragino Sans GB";
  padding: 1rem 1rem 1rem 1rem;
  background-color: #324157;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
</style>
