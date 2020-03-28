<template>
  <div id="app">
     <!-- <app-header></app-header> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Header from './components/header.vue';

export default {
  name: 'App',
  components: {
    Home,
    appHeader: Header
  }
}
</script>

<style>
@font-face {
  font-family: 'Carbon';
  src: url(./assets/fonts/CarbonBold.woff) format('woff');
}

#app {
  font-family: 'Carbon', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  width: 100vw;
  margin: 0px;
  text-transform: uppercase;
  line-height: 32px;
  font-size: 20px;
  color: white;
  background-color: #000;
}

body {
  margin: 0px;  
  background-color: #000;
}

.light-text {
  color: #8F8F8F;
}
</style>
