<template>
  <div class="page">
    <div class="pc-homepage-background2-l">
      <div class="pc-homepage-background2">
        <div class="charaDetail">
          <img src="@/assets/aboutCharlie/charaDetail.png" />
        </div>
        <div class="border2">
          <img src="@/assets/aboutCharlie/bg.png" />
        </div>

        <div class="text">
          <ul>
            <li v-for="detail in detail" :key="detail.detail1">
              <p>
                <span>{{ detail.id }}、</span>
                <span style="color: #efdfb3">{{ detail.card }}</span>
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
import { getDetail } from "@/request/api";

export default {
  name: "charaDetail",
  data() {
    return {
      name: "relationShip",
      detail: [],
      id: null,
      card: null,
      more: null,
    };
  },
  methods: {
    getContent(a) {
      getDetail().then((res) => {
        this.id = res.id;
        this.card = res.card;
        this.more = res.more;
      });
    },
    getMenuList() {
      getDetail().then((res) => {
        this.detail = res; // Assuming the response is an array
      });
    },
  },
  activated() {
    this.getMenuList();
    this.getContent();
  },
};
</script>
<style scoped>
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

.charaDetail img {
  position: absolute;
  top: 100px;
  left: 670px;
  width: 547px;
  height: 90px;
}
.border2 img {
  position: absolute;
  top: 200px;
  left: 280px;
  width: 1404px;
  height: 768px;
}
.text {
  display: inline-block;
  position: absolute;
  width: 1100px;
  height: 620px;
  top: 280px;
  left: 430px;
  color: #d6b367;
  font-size: 20px;
  font-family: "nansongshuju";
  text-align: left;
  overflow-x: hidden;
  overflow-y: scroll;
}
.text::-webkit-scrollbar {
  display: none;
}
.text li p {
  margin-bottom: 20px;
}
</style>
