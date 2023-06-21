<template>
  <div>
    <div class="pc-homepage-background2-l">
      <div class="pc-homepage-background2" ref="pcBg2">
        <div class="charaDetail">
          <img src="@/assets/aboutCharlie/charaDetail.png" />
        </div>
        <div class="border2">
          <img src="@/assets/aboutCharlie/圆角矩形12.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "charaDetail",
  data() {
    return {};
  },
};
</script>

<style scoped>
.pc-homepage-background2 {
  background-image: url(@/assets/HomePage/首页2.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-size: cover;
  position: relative;
  height: 1080px;
}
.pc-homepage-background2-l {
  background-image: url(@/assets/HomePage/首页2l.jpg);

  background-position: center center;
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-size: cover;
  position: relative;
  height: 1080px;
}
.charaDetail img {
  position: absolute;
  top: 140px;
  left: 670px;
  width: 547px;
  height: 90px;
}
.border2 img {
  position: absolute;
  top: 285px;
  left: 300px;
  width: 1354px;
  height: 789px;
}
</style>
