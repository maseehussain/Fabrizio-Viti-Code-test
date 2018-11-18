<template>
  <div id="app">
    <img src="./assets/BANNER.png">
    <img src="./assets/MADISON.png">
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: {
    'Navigation': Navigation
  }
}
</script>

<style>
/* big landscape tablets, laptops, and desktops */
@media (min-width:1025px) {
  #app {
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    }

    #app img {
      width: 100%;
    }

    .page-name {
      position: absolute;
      top: 18%;
      left: 40%;
    }
}

#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  }



  .page-name {
    position: absolute;
    top: 18%;
    left: 40%;
  }

/* smartphones, Android phones, landscape iPhone */
@media (min-width:375px)  {

}
</style>
