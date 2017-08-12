import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/pages/Login.vue'
import MyMain from '../components/pages/MyMain.vue'
import ContactUs from '../components/pages/ContactUs.vue'
import Contribute from '../components/pages/Contribute.vue'
import Profile from '../components/pages/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MyMain
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
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
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
