<template>
  <div class="partner">
    <a class="video-btn" target="_blank" href="http://www.bilibili.com"></a>
    <div class="title"></div>
  </div>

</template>

<script>
export default {
  name: "trackPartner"
}
</script>

<style scoped lang="scss">

.title {
  background: url("./轨迹1/title.png");
  background-size: 100% 100% ;
  position: relative;
  width: 116px;
  height: 75px;
  top:50px;
  right:30px;
  float: right;
}

.video-btn {
  background-image: url("./轨迹1/video.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  top: -85px;
  left: 770px;
  width: 145px;
  height: 46px;
  display: inline-block;
}

</style>