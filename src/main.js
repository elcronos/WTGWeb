import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './style.css'
import App from './App.vue'
import store from './store'
import vuexI18n from 'vuex-i18n'
import MyMain from './components/pages/MyMain.vue'
import router from './router/index.js'

Vue.use(ElementUI)
Vue.use(vuexI18n.plugin, store)

const translationsEn = {
  "menu.title" : "Products",
  "menu.input.placeholder": "Please Input",
  "menu.input.option.country":"Country",
  "menu.input.option.name":"Name",
  "product.title":"Please select one product",
  "product.title.search":"Search Product",
  "product.actionbar.search":"Search",
  "product.actionbar.searchall":"Search All",
  "product.actionbar.clearall":"Clear All",
  "product.table.product":"PRODUCTS",
  "product.table.preview":"IMAGE PRODUCT",
  "product.table.country":"COUNTRY",
}

const translationsEs = {
  "menu.title" : "Productos",
  "menu.input.placeholder": "¿Que buscas?",
  "menu.input.option.country":"Pais",
  "menu.input.option.name":"Nombre",
  "product.title":"Por favor seleccione un producto",
  "product.title.search":"Buscar Producto",
  "product.actionbar.search":"Buscar",
  "product.actionbar.searchall":"Buscar todos",
  "product.actionbar.clearall":"Reiniciar busqueda",
  "product.table.product":"PRODUCTOS",
  "product.table.preview":"IMAGEN DEL PRODUCTO",
  "product.table.country":"PAIS",
}

Vue.i18n.add('en',translationsEn)
Vue.i18n.add('es',translationsEs)
Vue.i18n.fallback('en')
Vue.i18n.set('es')

new Vue({
  el: '#app',
  router,
  store, // inject store to all children
  render: h => h(App)
})
