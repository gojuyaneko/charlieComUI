<template>
  <div>
    <div class="bg">
      <img src="@/assets/aboutCharlie/relationbg.png" />
    </div>

    <div class="charaPic">
      <div v-for="chara in charaData" :key="chara.name">
        <img :src="chara.img" :alt="chara.name" @click="showPopup = true" />
        <div class="name">{{ chara.name }}</div>
        <div class="text">
          <ul>
            <li v-for="detail in chara.details" :key="detail.details">
              <p>{{ detail.identities }}</p>
              <p>{{ detail.overview }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRelation } from "@/request/api";

export default {
  data() {
    return {
      showPopup: false,
      name: "",
      charaData: [
        {
          name: "查",
          img: require("@/assets/aboutCharlie/查兆澎.png"),
          details: [
            {
              identities:
                "查理苏父亲查理苏父亲查理苏父亲查理苏父亲查理苏父亲查理苏父亲",
            },
            { overview: "对自己对自己对自己对自己对自己对自己对自己对自己" },
          ],
        },
      ],
    };
  },
  mounted() {
    this.getMenuList();
    this.getContent();
  },
  methods: {
    getContent() {
      getRelation()
        .then((res) => {
          this.name = res.name;
          this.img = res.img;
          this.detail = res.detail;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getMenuList() {
      getRelation()
        .then((res) => {
          this.menuData = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
.bg {
  width: 100%;
  height: 100%;
}
.bg img {
  position: relative;
  z-index: 0;
  background-color: rgba(77, 55, 117, 0.7) !important;
  width: 1272px;
  height: 540px;
  top: 40px;
  left: 100px;
}

.charaPic {
  z-index: 1;
  position: absolute;
  top: 50px;
  left: 10px;
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
  top: 460px;
  left: 800px;
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
  top: 300px;
  left: 700px;
  font-size: 50px;
  font-family: "nansongshuju";
  text-align: right;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.my-ship {
  width: 1272px;
  height: 540px;
  /* background-color: white; */
}
</style>
