<template>
    <div class="sidemenu">
         <div>
           <div class="title">{{ $t('menu.title')}}</div>
           <div class="product-filter" :title="'Find a Product ' + 'by '+filterBy">
             <div>
               <el-input :placeholder="$t('menu.input.placeholder')" v-model="filterValue">
                <el-select class="selector" v-model="filterBy" slot="prepend" :placeholder="filterBy">
                  <el-option :label="$t('menu.input.option.name')" value="name"></el-option>
                  <el-option :label="$t('menu.input.option.country')" value="country"></el-option>
                </el-select>
                <el-button @click="handleSearchInput(filterValue)" slot="append" icon="search"></el-button>
              </el-input>
            </div>
           </div>
         </div>
         <div class="item">

         </div>
         <Products :data="products"></Products>
    </div>
</template>

<script>
import axios from 'axios';
import TableProducts from './TableProducts.vue';
import Products from './Products.vue';
import { mapActions } from 'vuex'
import { SERVER } from '../../data/data.js'

export default {
  data: () => ({
    filterValue: '',
    filterBy: 'name',
    products: []
  }),
  methods: {
    ...mapActions([
      'openDialog'
    ]),
    handleSearchInput(value) {
      var _this = this
      console.log('FilterBy:'+this.filterBy+' Value:'+value)
      if(this.filterBy == 'name'){
        axios.get(`http://${SERVER}:3000/products?name=${value}`)
        .then(response => {
          // JSON responses are automatically parsed.
          _this.products = response.data
          _this.openDialog()
          //console.log(JSON.stringify(_this.products))
        })
        .catch(e => {
          console.log("Ooppss.."+e)
        })
      }else{
        axios.get(`http://${SERVER}:3000/products?country=${value}`)
        .then(response => {
          // JSON responses are automatically parsed.
          _this.products = response.data
          _this.openDialog()
          //console.log(JSON.stringify(_this.products))
        })
        .catch(e => {
          console.log("Ooppss.."+e)
        })
      }
    }
  },
  components: {
    Products, TableProducts
  }
}
</script>

<style scoped>
.sidemenu{
  width: 25rem;
  height: calc(100vh - 110px);
}
.el-select .el-input {
    width: 5rem;
}
.product-filter{
  width: 100%;
}
.el-submenu .el-menu-item{
  padding: 0 1rem 0 1rem;
}
li.el-menu-item{
  margin-left: -1rem !important;
}
.item{
  padding-left: 1rem;
}
.selector{
  width: 2rem;
}
</style>
