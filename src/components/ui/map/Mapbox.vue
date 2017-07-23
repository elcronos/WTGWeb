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
            "circle-color": "#3498db",
            "circle-radius": 10,
            "circle-opacity": 0.8
          }
        });

        // Change the cursor to a pointer when the mouse is over the states layer.
        /* this.map.on('mouseenter', `${newLayer}`, `${newLayer}`, () =>  {
             this.map.getCanvas().style.cursor = 'pointer';
         });

         // Change it back to a pointer when it leaves.
         this.map.on('mouseleave', `${newLayer}`, `${newLayer}`,  () =>  {
             this.map.getCanvas().style.cursor = '';
         });
         */
        // When a click event occurs on a feature in the places layer, open a popup at the
        // location of the feature, with description HTML from its properties.
        /*this.map.on('click', `${newLayer}`, function (e) {
            //console.log('Click...'+e)
            var features = _this.map.queryRenderedFeatures(e.point, { layers: [`${newLayer}`] });
            if (!features.length) {
              return;
            }
            var feature = features[0];
            var popup = new mapboxgl.Popup()
              .setLngLat(feature.geometry.coordinates)
              .setHTML(feature.properties.description)
              .addTo(map);

            //alert(`${e.features[0].properties.title}`)
            /*new mapboxgl.Popup()
                .setLngLat(e.features[0].geometry.coordinates)
                .setHTML(`<h2>${e.features[0].properties.title}</h2><h3>${e.features[0].properties.description}</h3>`)
                .addTo(map);


        });*/
      }
    },
    watch: {
      // whenever layer changes, this function will run
      layer: function (newLayer, oldLayer) {
        console.log('Layer changed:'+newLayer+ ' old layer:'+oldLayer)
        if(oldLayer !== 'default'){
          //Remove clic event
          this.map.off('clic', oldLayer, oldLayer)
          //this.map.off('mouseenter', oldLayer,oldLayer)
          //this.map.off('mouseleave', oldLayer,oldLayer)
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
