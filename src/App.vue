<template>
  <div id="app">
    <myNavbar class="sticky"> </myNavbar>
    <div class="position-absolute">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>


export default {
    name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
h1,h2,h3,h4,h5,h6 {
  font-weight: 400;
}
.position-absolute {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
</style>
