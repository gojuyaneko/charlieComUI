<template>
  <div id="app">
    <charlie-nav class="app-nav"></charlie-nav>
   <router-view></router-view>
  </div>
</template>

<script>
import charlieNav from '@/components/charlieNav'
export default {
  name: 'App',
  components: {
    charlieNav
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0; 
}
html,body{
  width: 100%;
  height: 100%;
  -webkit-user-drag: none;
}
@media screen and (min-width:480px) {
  html,body {
    font-size:16px ;
  }
}
@media screen and (min-width:768px) {
  html,body {
    font-size:18px ;
  }
}
@media screen and (min-width:992px) {
  html,body {
    font-size:20px ;
  }
}
@media screen and (min-width:1200px) {
  html,body {
    font-size:22px ;
  }
}
li{
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
}
.app-nav{
  position: sticky;
  top: 0;
  z-index: 2;
}
</style>
