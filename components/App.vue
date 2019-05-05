<template>
  <div id="app">
    <b-container fluid>
    <b-row class="text-center"> <!--align-v align-h -->
      <b-col></b-col>
      <b-col cols="9" class="module-border-wrap">
        <div class="module">
          <div class="logo">
            <img alt="BlownAway - Omicron wow logo" src="~/assets/logo.svg" height="245px" style="margin: 50px">
          </div>
          <Main />
        </div>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
  <Footer />
  </div>
</template>

<script>
import BAlert from 'bootstrap-vue/es/components/alert/alert'
import BContainer from 'bootstrap-vue/es/components/layout/container'
import BRow from 'bootstrap-vue/es/components/layout/row'
import BCol from 'bootstrap-vue/es/components/layout/col'
// import HelloWorld from './components/HelloWorld.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'

export default {
  name: 'app',
  components: {
    Main,
    Footer,
    BContainer,
    BCol,
    BRow
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  padding-top: 60px;
  background-image: /*url('./assets/PNG/geometry2.png')*/ url("~assets/memphis-colorful.png");
  background-repeat: repeat;
  min-width: 100%;
  min-height: 100%;
  height: 100%;
  max-height: 100%;
}

.module-border-wrap {
  /* max-width: 250px; */
  /* padding: 1rem; */
  position: relative;
  background: linear-gradient(to right, red, purple);
  padding: 1px 1px !important;
  margin: 2rem;
}

.module {
  background: white;
  /* max-width: 100%; */
  /* color: black; */
  padding: 2rem;
}
</style>
