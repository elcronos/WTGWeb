<template>
  <div class="searcher-content">
    <div class="searcher">
      <input @keyup.enter="handleSearchInput(filterValue)" v-model="filterValue" placeholder="nombre producto, nombre servicio">
      <img @click="handleSearchInput(filterValue)" src="../../assets/images/search.svg"></img>
      </input>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Products from './Products.vue';
import { mapActions } from 'vuex'

export default {
  data: () => ({
    filterValue: ''
  }),
  methods: {
    ...mapActions([
      'openDialog',
      'setData'
    ]),
    handleSearchInput(value) {
      console.log('Search...'+value)
      var _this = this
        axios.get(`http://localhost:3000/products?name=${value}`)
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
  height: 3rem;
  width: 70%;
  z-index: 2;
  padding: 1rem;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
input{
  font-size:          1rem;
  border:             0px;
  height:             2rem;
  border-bottom:      1px solid #DBE2E9;
  width: 90%;
  align-self:         center;
  -webkit-appearance: textfield;
  -moz-appearance:    textfield;
  appearance:         textfield;
}

input:focus, input:focus{
    outline: none;
}
</style>
