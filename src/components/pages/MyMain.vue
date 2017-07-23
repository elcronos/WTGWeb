<template>
  <div class="body">
    <MyHeader></MyHeader>
    <Searcher></Searcher>
    <Products></Products>
    <div class="content">
      <Results></Results>
      <div class="map-container">
        <Mapbox :layer="layerProduct"></Mapbox>
      </div>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '../ui/MyHeader.vue'
import Products from '../ui/Products.vue'
import Searcher from '../ui/Searcher.vue'
import Results from '../ui/Results.vue'
import Mapbox from '../ui/map/Mapbox.vue'
import MyFooter from '../ui/MyFooter.vue'
import { mapGetters } from 'vuex'
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
    Products,
    Searcher,
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
