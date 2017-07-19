<template>
  <yandex-map class="yandex-map" :coords="[54.62896654088406, 39.731893822753904]"
            zoom="10"
            style="width: 800px; height: 650px;">

    <ymap-marker marker-type="placemark"
                 :coords="[54.62896654088406, 39.731893822753904]"
                 hint-content="Hint content 1"
                 :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                 :icon="{color: 'green', glyph: 'cinema'}"></ymap-marker>

    <ymap-marker marker-type="circle"
                 :coords="[54.62896654088406, 39.731893822753904]"
                 circle-radius="1600"
                 hint-content="Hint content 1"
                 :marker-fill="{color: '#000000', opacity: 0.4}"
                 :marker-stroke="{color: '#ff0000', width: 5}"
                 :balloon="{header: 'header', body: 'body', footer: 'footer'}"></ymap-marker>
  </yandex-map>
</template>

<script>
import yandexMap from 'vue-yandex-maps'
import Vue from 'vue';
Vue.use(yandexMap)

export default {
    data:() => ({

    }),
    created(){

    },
    methods: {

    }
}
</script>

<style>
.yandex-map{
  width: 100%;
  height: 100%;
}
</style>
