import Vue from 'vue'
import Router from 'vue-router'
import MyMain from '../components/pages/MyMain.vue'
import ContactUs from '../components/pages/ContactUs.vue'
import Contribute from '../components/pages/Contribute.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MyMain
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/Contribute',
      name: 'Contribute',
      component: Contribute
    }
  ]
})
