<template>
  <div class="com-charlie-dialog">
    <div class="com-dia-box">
      <img class="com-dia-star1" src="../assets/bgstar.png" />
      <img class="com-dia-star2" src="../assets/bgstar.png" />
      <div class="com-dia-main">
        <div class="com-dia-left">
          <a
            class="com-dia-video"
            target="_blank"
            href="http://www.bilibili.com"
          >
          </a>
          <picture>
            <img :src="charliePhoto" alt="" class="com-dia-charlie"
          /></picture>
        </div>
        <div class="com-dia-right">
          <h2 class="com-dia-"></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      charliePhoto: require("../assets/charlie/c-6-allback.png"),
      chapter: 6,
    };
  },
  components: {},
};
</script>
  
<style scoped lang="scss">
.com-charlie-dialog {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.com-dia-box {
  position: relative;
  box-sizing: border-box;
  border-right: 1px solid #d6b367;
  border-bottom: 1px solid #d6b367;
  margin-top: 183px;
  margin-left: 227px;
  width: 1495px;
  height: 72.2%;
}
.com-dia-star1 {
  width: 28px;
  height: 25px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-60%, 50%);
}
.com-dia-star2 {
  width: 28px;
  height: 25px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}
.com-dia-main {
  position: absolute;
  display: flex;
  flex-direction: row;
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 613px;
  height: 80%;
  background-image: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.37)
  );
}
.com-dia-left {
  position: relative;
  width: 572px;
  height: 100%;
}

.com-dia-charlie {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 612px;
}

.com-dia-video {
  display: inline-block;
  width: 148px;
  height: 47px;
  background-image: url("../assets/watchvideo.png");
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  transform: translateY(-100%);
  z-index: 99;
}
</style>
  