<template>
  <div id="app">
    <MyHeader></MyHeader>
    <router-view></router-view>
    <MyFooter></MyFooter>
  </div>
</template>
<script>
import MyHeader from './components/ui/MyHeader.vue'
import MyFooter from './components/ui/MyFooter.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    MyHeader,
    MyFooter
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
  background-color: #fbfbfb;
}
</style>
