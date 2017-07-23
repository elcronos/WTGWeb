<template>
  <div id="app">
    <MyMain></MyMain>
  </div>
</template>

<script>
import MyMain from './components/pages/MyMain.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    MyMain
  },
  methods: {

  }
}
</script>

<style>
@font-face {
  font-family: Roboto;
  src: url('assets/fonts/Roboto-Regular.ttf');
}
body {
  font-family: Roboto;
  margin: 0;
}
</style>
