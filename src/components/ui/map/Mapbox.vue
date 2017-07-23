<template>
  <div id="map" :style="classMap"></div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

export default {
    props: ['layer'],
    data:() => ({
      center: [115.869, -31.955], // starting position Perth
      classMap : {width: "100%",height: 'calc(100vh - 110px)'},
      geojson: [{
        type: "FeatureCollection",
        features: []
      }],
      map: undefined
    }),
    methods: {
      foundResults(layer){
        var _this = this
        if(!!layer){
          axios.get(`http://localhost:3001/map/data/perth/${layer}.geojson`)
          .then(response => {
            let features = response.data.features.length
            if(features > 0){
              this.$message({
                message: `Found ${features} results`,
                type: 'success'
              })
            }else{
              this.$message({
                message: 'No results found',
                type: 'warning'
              })
            }
          })
          .catch(e => {
            this.$message({
              message: 'No information found for this product',
              type: 'warning'
            })
            console.log('Error:'+e)
          })
        }
      },
      addProductLayer(newLayer){
        var _this = this
        // Add a layer showing the places.
        this.map.addSource(`${newLayer}`, {
        "type": "geojson",
        "data": `http://localhost:3001/map/data/perth/${newLayer}.geojson`
        });
        //Text
        this.map.addLayer({
          "id": `${newLayer}`,
          "type": "symbol",
          "source": `${newLayer}`,
          "layout": {
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
          }
        });
        //Points
        this.map.addLayer({
          "id": `${newLayer}2`,
          "type": "circle",
          "source": `${newLayer}`,
          "paint": {
            "circle-color": "#506DDA",
            "circle-radius": 10,
            "circle-opacity": 0.8
          }
        });
      }
    },
    watch: {
      // whenever layer changes, this function will run
      layer: function (newLayer, oldLayer) {
        console.log('Layer changed:'+newLayer+ ' old layer:'+oldLayer)
        if(oldLayer !== 'default'){
          //Remove clic event
          this.map.off('clic', oldLayer, oldLayer)
          //Remove old layer
          this.map.removeLayer(oldLayer)
          this.map.removeLayer(`${oldLayer}2`)
          this.map.removeSource(oldLayer)
        }
        this.addProductLayer(newLayer)
        this.foundResults(newLayer)
      }
    },
    mounted: function(){
      mapboxgl.accessToken = 'pk.eyJ1IjoiY2FwY2FyZGUiLCJhIjoiY2o0enFia3plMDdlNTJxbzlvcHgya2MwMSJ9._y_g1C2D1ZuK2JIXTOw4Pg'
      this.map = new mapboxgl.Map({
          container: 'map', // container id
          style: 'mapbox://styles/mapbox/light-v8', //stylesheet location
          center: this.center,
          zoom: 10 // starting zoom
      });
      // Add zoom and rotation controls to the map.
      this.map.addControl(new mapboxgl.NavigationControl());
      this.map.on('load', () => {
        // Add a layer showing the places.
        if(this.layer !== 'default'){
          this.addProductLayer(this.layer);
        }
    });
  }
}
</script>

<style>

</style>
