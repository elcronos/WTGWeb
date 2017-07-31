<template>
  <div :class="styleContainer">
    <div class="header">
      <div class="close" @click="handleClose">
        <img :src="iconCancel" width="1rem" height="1rem"/>
      </div>
      <div>
        <h4>{{ $t('results.wheretoget')}} {{ this.resultProduct.product.name }}</h4>
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
      resultProduct : 'result',
      checkedMenu: 'checked'
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
        if(this.checkedMenu){
          return 'result-container hidden'
        }
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

.result{
  width: 80%;
}

.result-container{
  top: 12rem;
  z-index: 9;
  position: absolute;
  background-color: transparent;
  width: 20rem;
  height: calc(100vh - 360px);
}
.result-container.hidden{
  width: 0;
  z-index: 0;
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

@media only screen and (max-width: 800px) {
  h4{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .result{
    width: 92%;
  }
  .result-container .body{
    margin-top: 0.1rem;
    background-color: gray;
    opacity: 0.75;
    width: 100vw;
  }

  .result-container{
    z-index: 11;
    top: inherit;
    bottom: 10rem;
    width: 100vw;
    max-height: calc(8.4rem);
  }

  .scrollable{
    max-height: calc(11rem);
    display: block;
    overflow: scroll;
  }

  .result-container .header {
    margin-top: 0;
  }
}

@media only screen and (max-height: 680px) {
  .scrollable{
    max-height: calc(10rem);
  }
  .result-container{
    max-height: calc(10rem);
    bottom: 7.4rem;
  }
}

@media only screen and (max-height: 580px) {
  .scrollable{
    max-height: calc(6rem);
  }
  .result-container{
    max-height: calc(8.4rem);
    bottom: 5rem;
  }
}


</style>
