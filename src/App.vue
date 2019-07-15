<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <index></index>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import index from './views/index'

export default {
  name: 'app',
  components: {
    // HelloWorld
    index
  }
}
</script>

<style>
#app {
  height: 100%;
  padding: 0px;
  margin: 0px;
}
</style>
