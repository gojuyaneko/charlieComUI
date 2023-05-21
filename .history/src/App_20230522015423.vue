<template>
  <div id="app">
    <charlieIndex></charlieIndex>
  </div>
</template>

<script>
import charlieIndex from "./pages/charlieIndex.vue";

export default {
  name: "App",
  components: {
    charlieIndex,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  -webkit-user-drag: none;
}
li {
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
}
.app-nav {
  position: sticky;
  top: 0;
  z-index: 2;
}
@font-face {
  font-family: 'nansongshuju';
  src: url('../public/font/南宋书局体.ttf');
}
</style>
