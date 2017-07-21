<template>
    <el-menu default-active="1" class="sidemenu">
         <el-submenu index="1">
           <template slot="title"><i class="el-icon-star-off"></i>Products</template>
           <el-menu-item-group class="product-filter" :title="'Find a Product ' + 'by '+filterBy">
             <el-menu-item index="1-1">
               <el-input placeholder="Please input" v-model="filterValue">
                <el-select class="selector" v-model="filterBy" slot="prepend" :placeholder="filterBy">
                  <el-option label="Name" value="name"></el-option>
                  <el-option label="Country" value="country"></el-option>
                </el-select>
                <el-button @click="handleSearchInput(filterValue)" slot="append" icon="search"></el-button>
              </el-input>
             </el-menu-item>
           </el-menu-item-group>
         </el-submenu>
         <div class="item">
           <el-menu-item index="2"><i class="el-icon-setting"></i>Settings</el-menu-item>
           <el-menu-item index="3"><i class="el-icon-message"></i>Contact Us</el-menu-item>
           <el-menu-item index="4"><i class="el-icon-share"></i>Share</el-menu-item>
         </div>
         <Products :data="products"></Products>
    </el-menu>
</template>

<script>
import axios from 'axios';
import TableProducts from './TableProducts.vue';
import Products from './Products.vue';
import { mapActions } from 'vuex'

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
        axios.get(`http://localhost:3000/products?name=${value}`)
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
        axios.get(`http://localhost:3000/products?country=${value}`)
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
  width: 30%;
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
