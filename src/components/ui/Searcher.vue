<template>
  <div class="searcher-content">
    <div :class="searchStyle">
      <md-input-container class="searcher-input" md-inline>
        <label>{{ $t('searcher.placeholder') }}</label>
        <md-input @keyup.enter.native="handleSearchInput(filterValue)" v-model="filterValue"></md-input>
      </md-input-container>
      <img class="search-action" @click="handleSearchInput(filterValue)" src="../../assets/images/search.svg"></img>
      </input>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Products from './Products.vue';
import { mapActions, mapGetters } from 'vuex'
import { SERVER } from '../../data/data.js'

export default {
  data: () => ({
    filterValue: ''
  }),
  computed:{
    ...mapGetters({
      checked: 'checked'
    }),
    searchStyle(){
      if(this.checked){
        return 'searcher-checked'
      }else{
        return 'searcher'
      }
    }
  },
  methods: {
    ...mapActions([
      'openDialog',
      'setData'
    ]),
    handleSearchInput(value) {
      console.log('Search...'+value)
      var _this = this
        axios.get(`http://${SERVER}:3000/products?name=${value}`)
        .then(response => {
          _this.setData(response.data)
          _this.openDialog()
        })
        .catch(e => {
          console.log("Ooppss.."+e)
        })
    }
  },
  components: {
    Products
  }
}
</script>

<style>
.searcher-content{
  background-color: transparent;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 7rem;
  width: 100%;
}
.searcher{
  display: flex;
  justify-content: center;
  background-color: #fff;
  z-index: 10;
  height: 4.5rem;
  width: 80%;
  padding: 1rem;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.searcher-checked{
  display: flex;
  justify-content: center;
  background-color: #fff;
  height: 4.5rem;
  z-index: 4;
  width: 80%;
  padding: 1rem;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.searcher-input{
  margin-top: -0.8rem !important;
}
.search-action{
  width: 3rem;;
}
</style>
