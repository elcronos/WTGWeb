import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './style.css'
import App from './App.vue'
import store from './store'
import vuexI18n from 'vuex-i18n'
import MyMain from './components/pages/MyMain.vue'
import VeeValidate from 'vee-validate';
import VueUp from 'vueup'
import VueNotifications from 'vue-notifications'
import router from './router/index.js'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import { SERVER } from './data/data.js'
import { translationsEs, translationsEn } from './translations/translations.js'
import VueAnalytics from 'vue-analytics'
import VueResource from 'vue-resource'
import VueAuthenticate from 'vue-authenticate'

Vue.use(VueResource)
Vue.use(VueAuthenticate, {
  baseUrl: `http://${SERVER}:8888`, // Your API domain
  providers: {
    facebook: {
      clientId: '1889046694678887',
      redirectUri: `http://${SERVER}:8010/` // Your client app URL
    }
  }
})
Vue.use(VueAnalytics, {
  id: 'UA-103588886-1',
  router
})
Vue.use(VueMaterial.MdCore)
Vue.use(VueUp)
Vue.use(ElementUI)
Vue.use(vuexI18n.plugin, store)
Vue.use(VueMaterial)
Vue.use(VeeValidate)

Vue.i18n.add('en',translationsEn)
Vue.i18n.add('es',translationsEs)
Vue.i18n.fallback('en')
//Vue.i18n.set('es')

new Vue({
  el: '#app',
  router,
  store, // inject store to all children
  render: h => h(App)
})
