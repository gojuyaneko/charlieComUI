<template>
  <div class="landing">
    <a class="video-btn" target="_blank" href="http://www.bilibili.com"></a>
    <div class="title"></div>
  </div>

</template>

<script>
export default {
  name: "trackLanding"
}
</script>

<style scoped lang="scss">

.title {
  background: url("./轨迹2/title.png");
  background-size: 100% 100% ;
  position: relative;
  width: 263px;
  height: 128px;
  top:10px;
  right:15px;
  float: right;
}

.video-btn {
  background-image: url("./轨迹2/video.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  top: -85px;
  left: 843.5px;
  width: 145px;
  height: 46px;
  display: inline-block;
}

</style>