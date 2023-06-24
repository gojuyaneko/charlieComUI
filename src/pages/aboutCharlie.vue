<template>
  <div>
    <myNavbar class="sticky"> </myNavbar>

    <div class="pc-homepage-background2-l">
      <div class="pc-homepage-background2" ref="pcBg2">
        <div class="head"><img src="./../assets/aboutCharlie/头像.png" /></div>
        <div class="border">
          <img src="./../assets/aboutCharlie/多边形1.png" />
        </div>

        <div class="detail">
          <img src="./../assets/aboutCharlie/detail.png" />
        </div>

        <div class="more">
          <router-link to="/charaDetail">
            <img src="./../assets/aboutCharlie/moreDetail.png" />
          </router-link>
        </div>

        <div class="name">
          <img src="./../assets/aboutCharlie/查理苏.png" />
        </div>
      </div>
    </div>

    <div class="pc-homepage-background2-l">
      <div class="pc-homepage-background2" ref="pcBg2">
        <div class="relationTitle">
          <img src="./../assets/aboutCharlie/人际关系.png" />
        </div>
        <div class="charlie">
          <router-link to="/relationship">
            <img src="./../assets/aboutCharlie/Charlie.png" />
          </router-link>
        </div>
      </div>
    </div>

    <div class="pc-homepage-background2-l">
      <div class="pc-homepage-background2" ref="pcBg2">
        <div class="clothesTitle">
          <img src="./../assets/aboutCharlie/衣着图鉴.png" />
        </div>
        <div class="slider">
          <mySlider></mySlider>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "aboutCharlie",
  data() {
    return {};
  },
};
</script>

<style scoped>
.pc-homepage-background2 {
  background-image: url(./../assets/HomePage/首页2.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-size: cover;
  position: relative;
  height: 1080px;
}
.pc-homepage-background2-l {
  background-image: url(./../assets/HomePage/首页2l.jpg);

  background-position: center center;
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-size: cover;
  position: relative;
  height: 1080px;
}
.head img {
  position: absolute;

  width: 1869px;
  height: 1080px;
}
.border img {
  position: absolute;
  top: 355px;
  left: 755px;
  width: 1076px;
  height: 540px;
}
.detail img {
  position: absolute;
  top: 400px;
  left: 800px;
  width: 821px;
  height: 460px;
}
.name img {
  position: absolute;
  top: 254px;
  left: 755px;
  width: 377px;
  height: 70px;
}
.more img {
  position: absolute;
  bottom: 210px;
  left: 90px;
  width: 321px;
  height: 92px;
  cursor: pointer;
}
.relationTitle img {
  position: absolute;
  top: 165px;
  left: 70px;
  width: 459px;
  height: 109px;
}
.charlie img {
  position: absolute;
  top: 400px;
  left: 785px;
  width: 344px;
  height: 390px;
}
.clothesTitle img {
  position: absolute;
  top: 125px;
  right: 150px;
  width: 515px;
  height: 109px;
}
.slider {
  position: absolute;
  top: 380px;
  left: 80px;
}
</style>
