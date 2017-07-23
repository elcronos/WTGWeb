<template>
  <div :class="styleContainer">
    <div class="header">
      <div class="close" @click="handleClose">
        <img :src="iconCancel" width="1rem" height="1rem"/>
      </div>
      <div>
        <h4>Where to get {{ this.resultProduct.product }}</h4>
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

h4{
  color: #506DDA;
}
.scrollable{
  max-height: calc(100vh - 360px);
  display: block;
  overflow: scroll;
}

.result-container{
  top: 12rem;
  z-index: 1;
  position: absolute;
  background-color: transparent;
  width: 25rem;
  height: calc(100vh - 360px);
}
.result-container.hidden{
  width: 0;
  display: none;
}
.result-container .header {
  margin-left: 1rem;
  margin-top: 1rem;
}

.result-container .header .close{
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 1rem;
}

.result-container .header img{
  max-width: 2rem;
  max-height: 2rem;
}
.result-container .body {
  margin-top: -1rem;
}
.result-container .body .result{
  display: flex;
  background-color: #fff;
  padding-left: 1rem;
  padding-bottom: 1rem;
  flex-direction: column;
  margin: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
