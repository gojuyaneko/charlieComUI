<template>
  <!-- 导航栏组件及其背景 -->

  <div class="homepage">
    <!-- 首页背景 -->

    <div class="pc-homepage-background">
      <div class="pc-myIndex">
        <myIndex :sections="sections"> </myIndex>
      </div>

      <div class="pc-charlie-portrait">
        <img src="../assets/HomePage/Page1/查理.png" alt="" />
      </div>
      <div class="pc-charlie-name">
        <img src="../assets/HomePage/Page1/查理苏.png" alt="" />
      </div>
      <div class="pc-icon-aboutcharlie">
        <router-link to="/about">
          <img src="../assets//HomePage/Page1/关于.png" alt="" />
        </router-link>
      </div>
    </div>

    <!-- 背景2 -->
    <!-- 光夜变奏 -->
    <div>
      <div class="pc-homepage-background2" id="1">
        <div class="pc-carousel">
          <myPic></myPic>
        </div>

        <div class="pc-page2-img-left">
          <img src="../assets//HomePage/Page2/左.png" alt="" />
        </div>
        <div class="pc-page2-title-lightnight">
          <img src="../assets//HomePage/Page2/标题.png" alt="" />
        </div>
      </div>
    </div>

    <!-- 背景2 -->
    <!-- 灵犀相册 -->
    <div class="pc-homepage-background2" id="2">
      <div class="pc-img-right">
        <img src="../assets//HomePage/Page3/右.png" alt="" />
      </div>
      <div class="pc-icon-enter">
        <router-link to="/enter">
          <img src="../assets//HomePage/Page3/进入.png" alt="" />
        </router-link>
      </div>
      <div class="pc-page3-title-photograph">
        <img src="../assets//HomePage/Page3/标题.png" alt="" />
      </div>
    </div>

    <!-- 背景3 -->
    <!-- 记忆收藏 -->
    <div class="pc-homepage-background2" id="3">
      <div class="pc-menu">
        <myMenu></myMenu>
      </div>
      <div class="pc-page4-img-left">
        <img src="../assets//HomePage/Page4/左.png" alt="" />
      </div>
      <div class="pc-page4-title-memory">
        <img src="../assets//HomePage/Page4/标题.png" alt="" />
      </div>
    </div>

    <div class="pc-indexFooter">
      <span class="pc-footerFont">1111</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "myContainer",
  data() {
    return {
      sections: [
        {
          name: "光夜变奏",
          ref: "section1",
          content: ' <div class="pc-homepage-background2" id="1"> </div>',
        },
        {
          name: "灵犀相册",

          ref: "section2",
          content: ' <div class="pc-homepage-background2" id="2"> </div>',
        },
        {
          name: "记忆收藏",
          ref: "section1",
          content: ' <div class="pc-homepage-background2" id="3"> </div>',
        },
      ],
    };
  },
};
</script>

<style scoped>
.homepage {
  width: 100%;
  height: 100%;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}

.pc-homepage-background {
  background-image: url(./../assets/HomePage/Page1/背景.png);
  background-position: center center;
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-size: cover;
  position: relative;
  height: 1080px;
  z-index: 0;
}

.pc-homepage-background2 {
  background-image: url(./../assets/HomePage/Page4/背景2.png);
  background-position: center center;
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-size: cover;
  position: relative;
  height: 1080px;
}
/* 首页 */
/* 查理苏人像 */
.pc-charlie-portrait img {
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 1920px;
  height: 1080px;
  z-index: 0;
  /* transform: scale(0.9, 0.9); */
}
/* 查理苏字体加宝石 */
.pc-charlie-name img {
  position: absolute;
  width: 507px;
  height: 253px;
  top: 230px;
  left: 185px;
}

/* 关于charlie图标 */
.pc-icon-aboutcharlie img {
  width: 372px;
  height: 145px;
  position: absolute;
  left: 100px;
  bottom: 125px;
}

/* 光夜变奏 */
.pc-page2-img-left img {
  z-index: auto;
  position: absolute;
  width: 100%;
  bottom: 0px;
}
.pc-page2-title-lightnight img {
  position: absolute;
  right: 30px;
  top: 135px;
  width: 638px;
  height: 119px;
  overflow: hidden;
}

/* 灵犀相册 */
.pc-icon-enter img {
  position: absolute;
  width: 372px;
  height: 125px;
  left: 290px;
  bottom: 180px;
}
.pc-img-right img {
  position: absolute;
  bottom: 0px;
  width: 100%;
  /* top: 2480px;  */
}
.pc-page3-title-photograph img {
  position: absolute;
  left: 30px;
  top: 135px;
  width: 638px;
  height: 119px;
}

/* 记忆收藏 */
.pc-page4-img-left img {
  position: absolute;
  bottom: 0px;
  width: 100%;
  /* top: 3430px; */
}
.pc-page4-title-memory img {
  width: 638px;
  height: 119px;
  position: absolute;
  right: 30px;
  top: 135px;
}

/* 首页第一页上的组件 */
.pc-myIndex {
  position: absolute;
  right: 390px;
  top: 400px;
  z-index: 100;
}
/* 记忆收藏页上的组件 */
.pc-menu {
  position: absolute;
  right: 330px;
  top: 408px;
  z-index: 100;
}

.pc-indexFooter {
  background: url("./../assets/HomePage/Page1/导航.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 65px;
  font-family: "nansongshuju";
}
.pc-footerFont {
  text-align: center;
  letter-spacing: 10px;
  font-size: 41px;
  font-family: "nansongshuju";
  color: #d6b367;
}

.pc-carousel {
  z-index: 1;
  position: absolute;
  right: 130px;
  top: 340px;
}
</style>
