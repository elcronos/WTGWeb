<template>
    <el-dialog :size="sizeDialog" class="product-dialog" :title="message"
    :before-close="handleClose"
    :visible.sync="isVisible">
        <div class="action-bar">
          <el-button @click="search(checkedProducts)" :disabled="disabled" type="primary">{{ $t('product.actionbar.search') }}</el-button>
          <el-button @click="clearAll" :disabled="disabled" type="primary">{{ $t('product.actionbar.clearall') }}</el-button>
        </div>
        <table class="table">
          <col class="table-cols"/>
          <thead>
            <tr class="table-header">
              <th class="table-item">{{ $t('product.table.product') }}</th>
              <th class="table-item">{{ $t('product.table.preview') }}</th>
              <th class="table-item">{{ $t('product.table.country') }}</th>
            </tr>
          </thead>
          <tbody class="scrollable">
            <tr class="table-products" v-for="p in data">
              <td class="table-checkbox">
                <input @click="handleClickCheckbox(p)" type="checkbox" :id="p.id" :value="p" v-model="checkedProducts"/>
                <label :for="p.id">{{ p.name }}</label>
              </td>
              <td class="table-item"><img :src="`http://192.168.1.4:3001/products/${p.countryId}/${p.file}.png`"/></td>
              <td class="table-item">{{ p.country.name }}</td>
            </tr>
          </tbody>
        </table>
    </el-dialog>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import axios from 'axios'
    export default {
        data: () => ({
          checkedProducts : [],
          sizeDialog      : 'large'
        }),
        computed: {
          ...mapGetters({
            isVisible : 'dialog',
            data: 'data'
          }),
          message(){
            if(this.checkedProducts.length > 0){
              return `Search Product: ${this.checkedProducts.map( p => p.name.toLowerCase()).join(', ')}`
            }else{
              return 'Please select at least one product:'
            }
          },
          disabled(){
            if(this.checkedProducts.length > 0){
              return false
            }else{
              return true
            }
          }
        },
        methods: {
          ...mapActions([
            'closeDialog',
            'setLayerProduct',
            'setResult'
          ]),
          handleClickCheckbox(product){
            var _this = this
            this.data.forEach(p => {
              if(p.id === product.id){
                _this.checkedProducts = []
                _this.checkedProducts.push(p)
                return true;
              }
            })
          },
          handleClose(){
            this.checkedProducts = []
            this.closeDialog()
          },
          clearAll(){
            console.log('Clear All')
            this.checkedProducts = []
          },
          selectAll(){
            console.log('Select All')
            this.checkedProducts = []
            this.data.forEach( p => { this.checkedProducts.push(p)})
          },
          search(products){
            console.log('Search')
            this.closeDialog()
            this.setLayerProduct(products[0].file)
            var result = {features:[], visible:false, product: products[0].file}
            // Set result
            axios.get(`http://192.168.1.4:3001/map/data/perth/${products[0].file}.geojson`)
            .then(response => {
              let features = response.data.features.length
              if(features > 0){
                result.features = response.data.features
                result.visible = true
                result.product = products[0]
                this.setResult(result)
              }
            })
            .catch(e => {
              console.log('Error:'+e)
            });
          }
        }
    }
</script>

<style>
.product-dialog{
    overflow: visible;
}

.scrollable{
  max-height: 400px;
  display: block;
  overflow: scroll;
}

.action-bar{
  margin-top: -1.5rem;
}

.table{
  width: 100%;
}

.table-header{
  background-color: #eef1f6;
  display: flex;
  justify-content: space-around;
}
.table-products{
  display: flex;
  justify-content: space-between;
}
.table-checkbox{
  text-align: left;
  align-self: center;
  width:33%
}
.table-item{
  text-align: center;
  align-self: center;
  width:33%
}

tr:hover{
  background-color: #eef1f6;
}
img {
  max-width:2rem;
  max-height:7rem;
  width: auto;
  height: auto;
}

/* Base for label styling */
[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  left: -9999px;
}
[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 1.95em;
  cursor: pointer;
}

/* checkbox aspect */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: '';
  position: absolute;
  left: 0; top: 0;
  width: 1.25em; height: 1.25em;
  border: 2px solid #ccc;
  background: #fff;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
}
/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: '✔';
  position: absolute;
  top: .1em; left: .3em;
  font-size: 1.3em;
  line-height: 0.8;
  color: #09ad7e;
  transition: all .2s;
}
/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  transform: scale(1);
}
/* disabled checkbox */
[type="checkbox"]:disabled:not(:checked) + label:before,
[type="checkbox"]:disabled:checked + label:before {
  box-shadow: none;
  border-color: #bbb;
  background-color: #ddd;
}
[type="checkbox"]:disabled:checked + label:after {
  color: #999;
}
[type="checkbox"]:disabled + label {
  color: #aaa;
}
/* accessibility */
[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  border: 2px dotted blue;
}

/* hover style just for information */
label:hover:before {
  border: 2px solid #4778d9!important;
}

@media only screen and (max-width: 450px) {
  img {
    max-width:2rem !important;
    max-height:7rem !important;
    width: auto !important;
    height: auto !important;
  }
  .table-item{
      font-size: 12px;
  }
  label{
    font-size: 10px;
  }
}

</style>
