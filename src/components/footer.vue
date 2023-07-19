<template>
  <div class="pc-footer">
    <div class="name">
      <img src="./../assets/HomePage/CharlieLove.png" />
    </div>
    <div class="aboutus">
      <div class="title">关于我们</div>
      <div
        style="
          font-family: 'nansongshuju';
          color: #848484;
          text-align: center;
          font-size: 18px;
          margin-top: 20px;
          letter-spacing: 3px;
        "
      >
        本站部分素材来源于北极光工作室-《光与夜之恋》，<br />

        仅供交流学习使用，不用于任何商业用途
      </div>
    </div>

    <div class="email">
      <div class="title">反馈邮箱</div>
      <div
        style="
          font-family: 'nansongshuju';
          color: #848484;
          text-align: center;
          font-size: 18px;
          margin-top: 35px;
          letter-spacing: 4px;
        "
      >
        CharlieLovesU.163.com
      </div>
    </div>

    <div class="icon">
      <div class="title">关注我们</div>
      <img src="./../assets/HomePage/wb拷贝.png" />
      <img src="./../assets/HomePage/red拷贝.png" />
      <img src="./../assets/HomePage/b拷贝.png" />
    </div>
  </div>
</template>
<script>
export default {
  name: "indexFooter",
  data() {
    return {};
  },
};
</script>
<style scoped>
.pc-footer {
  position: relative;
  background: url("./../assets/HomePage/图层0.png") no-repeat;
  background-size: 100% 100%;
  width: 1920px;
  height: 229px;
}
.name {
  position: absolute;
  top: 10px;
  left: 330px;
}
.name img {
  width: 322px;
  height: 34px;
}
.aboutus {
  position: absolute;
  top: 100px;
  left: 50px;
  width: 540px;
  height: 140px;
}
.email {
  position: absolute;
  top: 100px;
  left: 850px;
  width: 290px;
  height: 140px;
}
.icon {
  position: absolute;
  top: 100px;
  left: 1400px;
}
.icon img {
  margin: 10px;
  margin-top: 20px;
  width: 53px;
  height: 53px;
}
.title {
  color: #d5b265;
  text-align: center;
  font-size: 20px;
  font-family: "nansongshuju";
  letter-spacing: 2px;
}
.text {
  font-family: "nansongshuju";
}
</style>
