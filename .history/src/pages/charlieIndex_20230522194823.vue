<template>
  <!-- 导航栏组件及其背景 -->
  <div class="homepage">
    <!-- 首页背景 -->
    <div class="pc-homepage-background">
      <!-- 查理苏人像 -->
      <div class="pc-charlie-portrait">
        <img src="./../assets/HomePage/Page1/查理.png" alt="" />
      </div>
      <!-- 查理苏字体加宝石 -->
      <div class="pc-charlie-name">
        <img src="./../assets/HomePage/Page1/查理苏.png" alt="" />
      </div>
      <!-- 关于charlie图标-->
      <div class="pc-icon-aboutcharlie">
        <img src="./../assets//HomePage/Page1/关于.png" alt="" />
      </div>
    </div>

    <!-- 背景2 -->
    <!-- 光夜变奏 -->
    <div class="pc-homepage-background2">
      <div class="pc-page2-img-left">
        <img src="./../assets//HomePage/Page2/左.png" alt="" />
      </div>
      <div class="pc-page2-title-lightnight">
        <img src="./../assets//HomePage/Page2/标题.png" alt="" />
      </div>
    </div>

    <!-- 背景2 -->
    <!-- 灵犀相册 -->
    <div class="pc-homepage-background2">
      <div class="pc-img-right">
        <img src="./../assets//HomePage/Page3/右.png" alt="" />
      </div>
      <div class="pc-icon-enter">
        <img src="./../assets//HomePage/Page3/进入.png" alt="" />
      </div>
      <div class="pc-page3-title-photograph">
        <img src="./../assets//HomePage/Page3/标题.png" alt="" />
      </div>
    </div>

    <!-- 背景3 -->
    <!-- 记忆收藏 -->

    <div class="pc-homepage-background2">
      <div class="pc-page4-img-left">
        <img src="./../assets//HomePage/Page4/左.png" alt="" />
      </div>
      <div class="pc-page4-title-memory">
        <img src="./../assets//HomePage/Page4/标题.png" alt="" />
      </div>
    </div>

    <div class="pc-nav-theme"></div>
  </div>
</template>

<script>
export default {
  name: "myContainer",
};
</script>

<style scoped>
.homepage {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.pc-homepage-background {
  background-image: url(./../assets/HomePage/Page1/背景.png);
  background-position: center center;
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-size: cover;
  position: relative;
  height: 100%;
}

.pc-homepage-background2 {
  background-image: url(./../assets/HomePage/Page4/背景2.png);
  background-position: center center;
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-size: cover;
  position: relative;
  height: 100%;
}
/* 首页 */
/* 查理苏人像 */
.pc-charlie-portrait img {
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  /* transform: scale(0.9, 0.9); */
}
/* 查理苏字体加宝石 */
.pc-charlie-name {
  position: absolute;
  top: 195px;
  left: 175px;
  width: 507px;
  height: 254px;
}
/* 关于charlie图标 */
.pc-icon-aboutcharlie img {
  width: 372px;
  height: 145px;
  position: absolute;
  left: 100px;
  bottom: 125px;
}

.pc-homepage-background2 {
  background-image: url(./../assets/HomePage/Page4/背景2.png);
  background-position: center center;
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-size: cover;
  position: relative;
  height: 100%;
}

/* 光夜变奏 */
.pc-page2-img-left img {
  position: absolute;
  width: 100%;
  bottom: 0px;
}
.pc-page2-title-lightnight {
  position: absolute;
  right: 27px;
  top: 130px;
}
/* 灵犀相册 */
.pc-icon-enter img {
  position: absolute;

  left: 287px;
  bottom: 173px;
}
.pc-img-right img {
  position: absolute;
  bottom: 0px;
  width: 100%;
  /* top: 2480px;  */
}
.pc-page3-title-photograph img {
  position: absolute;
  left: 27px;
  top: 130px;
}

/* 记忆收藏 */
.pc-page4-img-left img {
  position: absolute;
  bottom: 0px;
  width: 100%;
  /* top: 3430px; */
}
.pc-page4-title-memory img {
  width: 662px;
  height: 117px;
  position: absolute;
  right: 27px;
  top: 130px;
}
</style>
