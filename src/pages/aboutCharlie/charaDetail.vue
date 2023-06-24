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

        <div class="text">
          <ul>
            <li v-for="detail in detail" :key="detail.detail1">
              <p>
                <span>{{ detail.id }}</span>

                <router-link to="/">
                  <span style="color: white">{{ detail.card }}</span>
                </router-link>

                <span>{{ detail.more }}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "charaDetail",
  data() {
    return {
      name: "relationShip",
      detail: [
        {
          id: 1,
          card: "[向心引力]",
          more: "对自己",
        },
        {
          id: 2,

          card: "[向心引力]",
          more: "对自己",
        },
        {
          id: 3,
          card: "[向心引力]",
          more: "对自己对自己对自己对自己对自己对自己对自己",
        },
      ],
    };
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
.text {
  display: inline-block;
  position: absolute;
  top: 350px;
  left: 470px;
  color: #d6b367;
  font-size: 20px;
  font-family: "nansongshuju";
}
.text li p {
  margin-bottom: 15px;
}
</style>
