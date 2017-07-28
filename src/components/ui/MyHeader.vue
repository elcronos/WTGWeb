<template>
  <div>
  <div class="my-header">
    <MenuBurger class="burger"/>
    <div class="home">
      <router-link class="page-link" to="/#">
        <div class="image"><img src="../../assets/images/house.svg"></img></div>
        <div class="text">{{ $t('header.home') }}</div>
      </router-link>
    </div>
    <div></div>
    <div class="logo">WhereToGet</div>
    <div class="links">
      <router-link class="page-link" to="/Contribute">
        <div class="image"><img src="../../assets/images/map-location.svg"></img></div>
        <div class="text">{{ $t('header.contribute') }}</div>
      </router-link>
      <router-link class="page-link" to="/ContactUs">
        <div class="image"><img src="../../assets/images/envelope.svg"></img></div>
        <div class="text">{{ $t('header.contactus') }}</div>
      </router-link>
    </div>
    <div class="right-spacing"></div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import MenuBurger from './MenuBurger.vue'

export default {
  components: {
    MenuBurger
  },
  data: () => ({

  }),
  created() {

  },
  methods: {
    handleClickMenu: () => {
      alert("Menu:")
    }
  }
}
</script>

<style>
@font-face {
  font-family: logo;
  src: url('../../assets/fonts/Note_this.ttf');
}

.my-header{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1rem 1rem 1rem 1rem;
  background-color: #506DDA;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

.my-header .burger{
  display: none;
}

  .page-link{
    margin: 1rem;
    display: flex;
    color: #fff;
    text-decoration:none;
  }
  .page-link .text{
    margin-top: 0.2rem;
    margin-left: 0.5rem;
    font-size: 0.8rem;
  }
  .page-link .image{
    width: 1.5rem;
  }

  .my-header .menu-button{
    color: #fff;
    font-size: 1.5rem;
  }

  .router-link-active{
    border-bottom: 0.3rem solid #5D7BE5;
  }

  .links{
    display: flex;
  }

  .my-header .logo{
    padding-top: 1rem;
    font-family: "logo";
    font-size: 1.5rem;
  }
  .my-header .right-spacing{
    display: none;
  }

@media only screen and (max-width: 800px) {

  .my-header{
    padding: 1.2rem 1rem 1.5rem 1rem;
  }
  .my-header .home{
    display: none;
  }

  .my-header .links{
    display: none;
  }

  .my-header .burger{
    display: block;
    top: 1.2rem !important;
    z-index: 10;
  }

  .my-header .right-spacing{
    display: block;
  }
}
</style>
