<template>
  <div>
    <div class="pc-homepage-background2-l">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">关于Charlie</el-breadcrumb-item>
        <el-breadcrumb-item>人物关系</el-breadcrumb-item>
        <el-breadcrumb-item>查兆澎</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      </el-breadcrumb>

      <div>
        <div class="bg">
          <img src="@/assets/aboutCharlie/relationbg.png" />
        </div>
        <div class="charaPic">
          <div v-for="chara in charaData" :key="chara.name">
            <img :src="chara.img" alt="chara.name" />
            <div class="name">{{ chara.name }}</div>

            <div class="text">
              <ul>
                <li v-for="detail in chara.detail" :key="detail.detail1">
                  <p>{{ detail.detail1 }}</p>
                  <p>{{ detail.more }}</p>
                  <p>{{ detail.session }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "relationShip",
      charaData: [
        {
          name: "查兆澎",
          img: require("@/assets/aboutCharlie/查爹.png"),
          detail: [
            {
              detail1:
                "查理苏父亲查理苏父亲查理苏父亲查理苏父亲查理苏父亲查理苏父亲查理苏父亲查理苏父亲",
              more: "对自己",
              session: "登场:主线第x章",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
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
.bg img {
  position: relative;
  width: 1272px;
  height: 540px;
  top: 340px;
  left: 300px;
}
.el-breadcrumb {
  position: absolute;
  top: 200px;
  left: 160px;
}
.el-breadcrumb__inner {
  color: #d6b367 !important;
  font-size: 30px;
  font-family: "nansongshuju";
}
.charaPic {
  position: absolute;
  top: 400px;
  left: 400px;
  width: 291px;
  height: 424px;
  font-size: 100px;
  color: #d6b367;
}
.text {
  display: inline-block;
  position: absolute;
  width: 820px;
  height: 500px;
  top: 140px;
  left: 300px;
  font-size: 25px;
  font-family: "nansongshuju";
  text-align: right;
}
.text li p {
  margin-bottom: 50px;
}
.name {
  display: inline-block;
  position: absolute;
  width: 820px;
  height: 50px;
  top: 0px;
  left: 300px;
  font-size: 50px;
  font-family: "nansongshuju";
  text-align: right;
}
</style>
