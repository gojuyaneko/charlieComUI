<template>
  <div id="app">
    <nav-bar class="sticky"> </nav-bar>
    <charlieIndex></charlieIndex>
  </div>
</template>

<script>
import charlieIndex from "./pages/charlieIndex.vue";
import navBar from "./components/navBar.vue";
export default {
  name: "App",
  components: {
    charlieIndex,
    navBar
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.sticky {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
}
html,
body {
  width: 100%;
  height: 100%;
  -webkit-user-drag: none;
  scrollbar-width: none; 
  -ms-overflow-style: none;
}
li {
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
}

@font-face {
  font-family: 'nansongshuju';
  src: url('../public/font/南宋书局体.ttf');
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */}
</style>
