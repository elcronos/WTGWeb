<template>
  <div class="outer-menu">
    <input v-model="value" class="checkbox-toggle" type="checkbox" />
    <div class="hamburger">
      <div></div>
    </div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li><a @click="setValue" href="/#">Home</a></li>
            <li><a @click="setValue" href="#/Contribute">Contribute</a></li>
            <li><a @click="setValue" href="#/ContactUs">Contact Us</a></li>
            <li><a @click="setValue" href="#">About</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data: () => ({
      value : ''
    }),
    methods:{
      setValue(){
        this.value = !this.value
      }
    }
  }
</script>

<style scoped>
@import url('http://fonts.googleapis.com/css?family=Open+Sans:300');
.flex-center {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

* {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
}

a,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: none;
}

h1 {
  font-family: 'Open Sans', cursive;
  font-weight: 400;
  font-size: 3em;
  text-align: center;
}

.outer-menu {
  position: fixed;
  top: 10vh;
  left: 0;
  z-index: 3;
}

.outer-menu .checkbox-toggle {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  cursor: pointer;
  width: 60px;
  height: 60px;
  opacity: 0;
}

.outer-menu .checkbox-toggle:checked + .hamburger > div {
  -webkit-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
}

.outer-menu .checkbox-toggle:checked + .hamburger > div:before,
.outer-menu .checkbox-toggle:checked + .hamburger > div:after {
  top: 0;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

.outer-menu .checkbox-toggle:checked + .hamburger > div:after { opacity: 0; }

.outer-menu .checkbox-toggle:checked ~ .menu > div {
  width: 200vw;
  height: 200vw;
}

.outer-menu .checkbox-toggle:checked ~ .menu > div > div {
  opacity: 1;
  -webkit-transition: opacity 0.3s ease 0.3s;
  transition: opacity 0.3s ease 0.3s;
}

.outer-menu .checkbox-toggle:hover + .hamburger { box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1); }

.outer-menu .checkbox-toggle:checked:hover + .hamburger > div {
  -webkit-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  transform: rotate(225deg);
}

.outer-menu .hamburger {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 60px;
  height: 60px;
  padding: .5em 1em;
  border-radius: 0 0.12em 0.12em 0;
  cursor: pointer;
  -webkit-transition: box-shadow 0.3s ease;
  transition: box-shadow 0.3s ease;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.outer-menu .hamburger > div {
  position: relative;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
  width: 100%;
  height: 2px;
  background: #fefefe;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.outer-menu .hamburger > div:before,
.outer-menu .hamburger > div:after {
  content: '';
  position: absolute;
  z-index: 3;
  top: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  background: inherit;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.outer-menu .hamburger > div:after { top: 10px; }

.outer-menu .menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.outer-menu .menu > div {
  width: 0;
  height: 0;
  color: #fefefe;
  background: #5D7BE5;
  border-radius: 50%;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.outer-menu .menu > div > div {
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
  overflow-y: auto;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.outer-menu .menu > div > div > ul {
  list-style: none;
  padding: 0 1em;
  margin: 0;
  display: block;
  max-height: 100vh;
}

.outer-menu .menu > div > div > ul > li {
  padding: 0;
  margin: 1em;
  font-size: 24px;
  display: block;
}

.outer-menu .menu > div > div > ul > li > a {
  position: relative;
  display: inline;
  cursor: pointer;
  -webkit-transition: color 0.3s ease;
  transition: color 0.3s ease;
}

.outer-menu .menu > div > div > ul > li > a:hover { color: #e5e5e5; }

.outer-menu .menu > div > div > ul > li > a:hover:after { width: 100%; }

.outer-menu .menu > div > div > ul > li > a:after {
  content: '';
  position: absolute;
  z-index: 3;
  bottom: -0.15em;
  left: 0;
  width: 0;
  height: 2px;
  background: #e5e5e5;
  -webkit-transition: width 0.3s ease;
  transition: width 0.3s ease;
}
</style>
