import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './style.css'
import App from './App.vue'
import store from './store'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  store, // inject store to all children
  render: h => h(App)
})
