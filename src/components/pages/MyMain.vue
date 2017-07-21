<template>
  <div>
    <MyHeader></MyHeader>
    <div class="content">
      <SideMenu></SideMenu>
      <div class="map-container">
        <Mapbox :layer="layerProduct"></Mapbox>
        <!--<yandex-map></yandex-map>-->
        <!--<google-map name="example"></google-map>-->
        <!--<MyMap></MyMap>-->
      </div>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '../ui/MyHeader.vue'
import SideMenu from '../ui/SideMenu.vue'
import Mapbox from '../ui/map/Mapbox.vue'
//import GoogleMap from '../ui/GoogleMap.vue'
//import YandexMap from '../ui/map/YandexMap.vue'
//import MyMap from '../ui/MyMap.vue'
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
      /*var container = document.getElementById("map");
      var content = container.innerHTML;
      container.innerHTML= content;
      */
    }
  },
  components: {
    MyHeader,
    SideMenu,
    Mapbox,
    //YandexMap,
    //GoogleMap,
    //MyMap,
    MyFooter
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
