<template>
  <div class="google-map" :id="mapName"></div>
</template>
<script>
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [{
        latitude: 51.501527,
        longitude: -0.1921837
      }],
      map: null,
      bounds: null,
      markers: []
    }
  },
  mounted: function () {
      this.bounds = new google.maps.LatLngBounds();
      const element = document.getElementById(this.mapName)
      const mapCentre = this.markerCoordinates[0]
      const options = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
      }
      this.map = new google.maps.Map(element, options);

      this.markerCoordinates.forEach((coord) => {
        const position = new google.maps.LatLng(coord.latitude, coord.longitude);
        const marker = new google.maps.Marker({
          position,
          map: this.map
        });
      this.markers.push(marker)
        this.map.fitBounds(this.bounds.extend(position))
      });
  }
};
</script>
<style>
.google-map {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: gray;
}
</style>
