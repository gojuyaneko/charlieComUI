<template>
  <div id="app">
    <myNavbar class="sticky"> </myNavbar>
    <div class="position-absolute">
      <KeepAlive>
        <router-view></router-view>
      </KeepAlive>
    </div>
    <div class="myFooter">
      <myFooter></myFooter>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
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
  z-index: 3;
}
.myFooter {
  position: absolute;
  bottom: -60px;
  left: 0;
  width: 1080px !important;
  height: 60px;
  flex-shrink: 0;
  width: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
}
li {
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}

@font-face {
  font-family: "nansongshuju";
  src: url("../public/fonts/南宋书局体.ttf");
}
@font-face {
  font-family: "Branch";
  src: url("../public/fonts/branch-regular.ttf");
}
.position-absolute {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
