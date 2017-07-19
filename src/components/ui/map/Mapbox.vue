<template>
  <div id="map" :style="classMap"></div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

export default {
    props: ['h'],
    data:() => ({
      center: [115.869, -31.955], // starting position Perth
      classMap : {width: "100%",height: '100%'}
    }),
    computed: {
      getStyles(){
        _this = this
        // CORS HEADER
        var config = {
          headers: [{'Access-Control-Allow-Origin': '*'},
                    {'Content-Type': 'application/json'}]
        };

        axios.get(`http://localhost:3001/map/styles/style.json`, config)
        .then(response => {
          // JSON responses are automatically parsed.
          return response.data
        })
        .catch(e => {
          console.log("Ooppss.."+e)
          return ''
        })
      }
    },
    beforeCreate(){
      //Geolocate
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(position => {
           console.log('Console log:'+position.coords.longitude+ ' '+position.coords.latitude)
           this.center = [ position.coords.longitude, position.coords.latitude]
         })
      }
    },
    mounted: function(){
      mapboxgl.accessToken = 'pk.eyJ1IjoiY2FwY2FyZGUiLCJhIjoiY2o0enFia3plMDdlNTJxbzlvcHgya2MwMSJ9._y_g1C2D1ZuK2JIXTOw4Pg'
      var map = new mapboxgl.Map({
          container: 'map', // container id
          //style: this.getStyles,
          //style: 'mapbox://styles/capcarde/cj5ap9i7m72rx2rqn6yf2wjnp',
          style: 'mapbox://styles/mapbox/light-v8', //stylesheet location
          center: this.center,
          zoom: 13 // starting zoom
      });

      map.on('load', function () {
        // Add Images
        /*
        map.loadImage(pin, (error, image) =>{
          if (error) throw error;
          map.addImage('pin', pin)
        });*/
        // Add a layer showing the places.
        map.addSource("points", {
        "type": "geojson",
        "data": "http://localhost:3001/map/data/perth/arepa.geojson"
        });

        map.addLayer({
          "id": "markers",
          "type": "symbol",
          "source": "points",
          "layout": {
            "icon-image": "pin",
            "icon-size": 0.25,
            "text-field": "{title}",
            "text-color": "red",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
          },
      });

      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      map.on('click', 'markers', function (e) {
          console.log(e.features[0])
          new mapboxgl.Popup()
              .setLngLat(e.features[0].geometry.coordinates)
              .setHTML(`<h2>${e.features[0].properties.title}</h2><h3>${e.features[0].properties.description}</h3>`)
              .addTo(map);
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter', 'markers', function () {
          map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'markers', function () {
          map.getCanvas().style.cursor = '';
      });
    });

    },
    methods: {

    }
}
</script>

<style>
#map{

}
</style>
