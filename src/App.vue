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

body {
  overflow: hidden;
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

p {
  margin: 0px;
}

.light-text {
  color: #8F8F8F;
}

.main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.content-container {
  max-width: 700px;
  width: 100%;
  margin: auto;
}

.button {
  display: inline-block;
  font-family: 'CarbonBold';
  text-transform: uppercase;        
  font-size: 16px;
  margin-top: 12px;
  padding: 6px 10px;
  background-color: #393939;
  color: #757575 !important;
  border-radius: 3px;
  -moz-box-shadow:    inset 0 -4px 0px #252525;
  -webkit-box-shadow: inset 0 -4px 0px #252525;
  box-shadow:         inset 0 -4px 0px #252525;
  transition: .15s ease;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

.button:hover {
    color: #949494 !important;
    background-color: #494949;
}
</style>
