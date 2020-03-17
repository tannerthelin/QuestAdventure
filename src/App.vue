<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
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
}

.light-text {
  color: #8F8F8F;
}
</style>
