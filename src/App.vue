<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "../static/scss/style.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  -margin-top: 60px;
  height:100%;
  width:100%;
  overflow:hidden;
}
html body{
  height:100%;
  width:100%;
  overflow:hidden;
  margin:0;
  padding:0;
}
</style>
