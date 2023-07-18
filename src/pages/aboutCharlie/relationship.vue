<template>
  <div>
    <!-- <div class="pc-homepage-background2-l"> -->
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">关于Charlie</el-breadcrumb-item>
        <el-breadcrumb-item>人物关系</el-breadcrumb-item>
        <el-breadcrumb-item>查兆澎</el-breadcrumb-item> -->
    <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
    <!-- </el-breadcrumb> -->

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
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
      characterInfo: null,
    };
  },
  methods: {
    fetchCharacterInfo(role) {
      axios
        .get(`your-backend-api-url/${role}`)
        .then((response) => {
          this.characterInfo = response.data;
          this.showPopup = true;
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
  background-color: rgba(77, 55, 117, 0.7) !important;
  width: 1272px;
  height: 540px;
  top: 340px;
  left: 300px;
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
.text::-webkit-scrollbar {
  display: none;
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
