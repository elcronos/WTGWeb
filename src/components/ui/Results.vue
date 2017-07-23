<template>
  <div :class="styleContainer">
    <div class="header">
      <div>
        <h4>Where to get {{ this.resultProduct.product }}</h4>
      </div>
      <div class="close" @click="handleClose">
        <img :src="iconCancel" width="1rem" height="1rem"/>
      </div>
    </div>
    <div class="body">
      <div class="scrollable">
        <div class="result" v-for="feature in this.resultProduct.features">
          <h4>{{ feature.properties.title }}</h4>
          <div>{{ feature.properties.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    iconCancel : require("../../assets/images/cancel.svg"),
  }),
  computed: {
    ...mapGetters({
      resultProduct : 'result'
    }),
    foundProduct(){
      if(product){
        return product.toUpperCase()
      }else{
        return ''
      }
    },
    styleContainer(){
      if(this.resultProduct.visible){
        return 'result-container'
      }else{
        return 'result-container hidden'
      }
    }
  },
  methods:{
    ...mapActions([
      'setResult'
    ]),
    handleClose(){
      let result = this.resultProduct
      result.visible = false
      this.setResult(result)
    }
  }
}
</script>

<style>
.scrollable{
  max-height: calc(100vh - 190px);
  display: block;
  overflow: scroll;
}

.result-container{
  background-color: #fff;
  width: 25rem;
  height: calc(100vh - 110px);
}
.result-container.hidden{
  width: 0;
}
.result-container .header {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}

.result-container .header .close{
  width: 2rem;
  height: 2rem
}

.result-container .header img{
  max-width: 2rem;
  max-height: 2rem;
}

.result-container .body .result{
  display: flex;
  flex-direction: column;
  background-color: #eef1f6;
  padding: 1rem;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
</style>
