<template>
  <div>
    <MyHeader></MyHeader>
    <div class="content">
      <Menu></Menu>
      <div class="map-container">
        <Mapbox :layer="layerProduct"></Mapbox>
      </div>
      <Results></Results>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '../ui/MyHeader.vue'
//import SideMenu from '../ui/SideMenu.vue'
import Menu from '../ui/Menu.vue'
import Results from '../ui/Results.vue'
import Mapbox from '../ui/map/Mapbox.vue'
import { mapGetters } from 'vuex'
import MyFooter from '../ui/MyFooter.vue'
export default {
  computed: {
    ...mapGetters({
      layerProduct : 'layer'
    }),
  },
  watch: {
    // whenever layer changes, this function will run
    layerProduct: function (newLayer) {
      console.log('Layer changed MyMain:'+newLayer)
    }
  },
  components: {
    MyHeader,
    //SideMenu,
    Menu,
    Mapbox,
    MyFooter,
    Results
  }
}
</script>

<style>
.content{
  display: flex;
}
.map-container{
  background-color: #d5d5d5;
  width: 100%;
  height: calc(100vh - 110px);
}
</style>
