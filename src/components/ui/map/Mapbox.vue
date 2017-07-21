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
      addProductLayer(newLayer){
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
            "circle-color": "#3498db",
            "circle-radius": 10,
            "circle-opacity": 0.8
          }
        });

        // When a click event occurs on a feature in the places layer, open a popup at the
        // location of the feature, with description HTML from its properties.
      /*  this.map.on('click',`${newLayer}`, `${newLayer}`, function (e) {
            console.log(`click: ${newLayer}`)
            console.log(e.features[0])
            new mapboxgl.Popup()
                .setLngLat(e.features[0].geometry.coordinates)
                .setHTML(`<h2>${e.features[0].properties.title}</h2><h3>${e.features[0].properties.description}</h3>`)
                .addTo(map);
        }); */
      }
    },
    watch: {
      // whenever layer changes, this function will run
      layer: function (newLayer, oldLayer) {
        console.log('Layer changed:'+newLayer+ ' old layer:'+oldLayer)
        if(oldLayer !== 'default'){
          //Remove clic event
          //this.map.off('clic',oldLayer,oldLayer)
          //Remove old layer
          this.map.removeLayer(oldLayer)
          this.map.removeLayer(`${oldLayer}2`)
          this.map.removeSource(oldLayer)
        }
        this.addProductLayer(newLayer)
      }
    },
    mounted: function(){
      mapboxgl.accessToken = 'pk.eyJ1IjoiY2FwY2FyZGUiLCJhIjoiY2o0enFia3plMDdlNTJxbzlvcHgya2MwMSJ9._y_g1C2D1ZuK2JIXTOw4Pg'
      this.map = new mapboxgl.Map({
          container: 'map', // container id
          style: 'mapbox://styles/mapbox/light-v8', //stylesheet location
          center: this.center,
          zoom: 13 // starting zoom
      });
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
