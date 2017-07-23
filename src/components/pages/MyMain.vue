<template>
  <div class="body">
    <div class="blue"/>
    <Searcher></Searcher>
    <Products></Products>
    <div class="content">
      <Results></Results>
      <div class="map-container">
        <Mapbox :layer="layerProduct"></Mapbox>
      </div>
    </div>
  </div>
</template>

<script>
import Products from '../ui/Products.vue'
import Searcher from '../ui/Searcher.vue'
import Results from '../ui/Results.vue'
import Mapbox from '../ui/map/Mapbox.vue'
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
    Products,
    Searcher,
    Mapbox,
    Results
  }
}
</script>

<style>
.blue{
  background-color: #5D7BE5;
  height: 4rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.content{
  display: flex;
}
.map-container{
  background-color: #d5d5d5;
  width: 100%;
  height: calc(100vh - 210px);
}
</style>
