
<template>
    <el-dialog class="product-dialog" :title="message"
    :before-close="handleClose"
    :visible.sync="isVisible">
        <div class="action-bar">
          <el-button @click="search(checkedProducts)" :disabled="disabled" type="primary">Search</el-button>
          <el-button @click="selectAll" type="primary">Select All</el-button>
          <el-button @click="clearAll" :disabled="disabled" type="primary">Clear All</el-button>
        </div>
        <table class="table">
          <col class="table-cols"/>
          <thead>
            <tr class="table-header">
              <th class="table-item">PRODUCTS</th>
              <th class="table-item">PREVIEW</th>
              <th class="table-item">COUNTRY</th>
            </tr>
          </thead>
          <tbody class="scrollable">
            <tr class="table-products" v-for="p in data">
              <td class="table-checkbox">
                <input type="checkbox" :id="p.id" :value="p" v-model="checkedProducts"/>
                <label :for="p.id">{{ p.name }}</label>
              </td>
              <td class="table-item"><img :src="`http://localhost:3001/products/${p.countryId}/${p.file}.png`"/></td>
              <td class="table-item">{{ p.country.name }}</td>
            </tr>
          </tbody>
        </table>
    </el-dialog>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        props : ['data'],
        data: () => ({
          checkedProducts : []
        }),
        computed: {
          ...mapGetters({
            isVisible : 'dialog'
          }),
          message(){
            if(this.checkedProducts.length > 0){
              return `Search Products: ${this.checkedProducts.map( p => p.name.toLowerCase()).join(', ')}`
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
            'setLayerProduct'
          ]),
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
  max-width:4rem;
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

</style>
