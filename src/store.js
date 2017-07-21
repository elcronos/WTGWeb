import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  visibleDialog: false,
  products: [],
  layer: 'default'
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  openDialog (state) {
    state.visibleDialog = true
  },
  closeDialog (state) {
    state.visibleDialog = false
  },
  addProduct (state, product) {
    state.products.push(product)
  },
  removeProduct (state, product){
    state.products = state.products.filter( pr => pr.id !== product.id);
  },
  clearProducts (state){
    state.products = []
  },
  setLayerProduct (state, layer){
    state.layer = layer
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  openDialog: ({ commit }) => commit('openDialog'),
  closeDialog: ({ commit }) => commit('closeDialog'),
  addProduct: ({ commit } , product) => commit('addProduct', product),
  removeProduct: ({ commit } , product) => commit('removeProduct', product),
  clearProducts: ({ commit }) => commit('clearProducts'),
  setLayerProduct: ({ commit }, layer) => commit('setLayerProduct', layer)
}

// getters are functions
const getters = {
  dialog: state => state.visibleDialog,
  selectedProducts: state => state.products,
  layer: state => state.layer
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
