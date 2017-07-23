<template>
  <div class="my-footer">
    <div class="logo">Camilo Pestana <span class="copyright">©</span>2017</div>
    <div class="share"></div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
  }),
  created() {

  },
  methods: {

  }
}
</script>

<style>
.my-footer{
  font-family: Roboto;
  padding: 1rem 1rem 1rem 1rem;
  background-color: #506DDA;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.copyright{
  font-size: 1rem;
}
</style>
