<template>
  <div class="page">
    <div class="pc-homepage-background2-l">
      <div class="pc-homepage-background2">
        <div class="text">
          <p class="item">邮箱： CharlieLovesU@163.com</p>
          <p class="item">微博：CharlieLove频道</p>
          <p class="item">哔哩哔哩：CharlieLove频道</p>
          <p class="item">小红书：伪装现充</p>
        </div>
        <div class="bg">
          <img src="./../assets/HomePage/剪影.png" />
        </div>
        <div class="title">
          <img src="./../assets/HomePage/标题.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutUs",
  data() {
    return {};
  },
};
</script>

<style>
.page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}
.pc-homepage-background2 {
  position: relative;
  background-image: url(@/assets/HomePage/首页2.jpg);
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.pc-homepage-background2-l {
  position: relative;
  background-image: url(@/assets/HomePage/首页2l.jpg);
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.bg img {
  position: absolute;
  top: 140px;
  left: 195px;
  width: 1726px;
  height: 739px;
  background: transparent !important;
}
.title img {
  position: absolute;
  top: 146px;
  left: 195px;
  width: 288px;
  height: 59px;
}

.item {
  margin-right: 10px;
}
.text {
  display: flex;
  position: absolute;
  top: 226px;
  left: 235px;
  color: #d5b265;
  text-align: center;
  font-size: 19px;
  font-family: "nansongshuju";
  letter-spacing: 2px;
}
</style>
