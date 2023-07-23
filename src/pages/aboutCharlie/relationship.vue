<template>
  <div>
    <div class="mybg">
      <img src="@/assets/aboutCharlie/矩形2拷贝3.png" />
    </div>
    <div class="charaPic">
      <img
        v-if="characterImg"
        :src="characterImg"
        @click="showPopup = !showPopup"
        alt="Character Image"
      />
      <div v-else class="no-image"></div>
      <div v-if="showPopup" class="popup">
        <div class="popup-content">
          <p>{{ characterName }}</p>
          <ul>
            <li v-for="identity in characterDetail.identities" :key="identity">
              {{ identity }}
            </li>
          </ul>
          <ul>
            <li v-for="overview in characterDetail.overview" :key="overview">
              {{ overview }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    characterName: String,
    characterImg: String,
    characterDetail: Object,
  },
  data() {
    return {
      showPopup: false,
    };
  },
  watch: {
    characterDetail: {
      handler(newVal) {
        this.showPopup = true; // 当 characterDetail 变化时，显示弹窗
      },
      deep: true, // 深度侦听
    },
  },
};
</script>

<style>
.mybg {
  width: 100%;
  height: 100%;
}
.mybg img {
  position: relative;
  z-index: 0;
  background-color: rgba(77, 55, 117, 0.7) !important;
  width: 1272px;
  height: 540px;
  top: 40px;
  left: 30px;
}

.charaPic {
  z-index: 1;
  position: absolute;
  top: 50px;
  left: -80px;
  width: 291px;
  height: 424px;
  font-size: 100px;
  color: #d6b367;
}
.charaPic img {
  z-index: 1;
  position: absolute;
  top: 250px;
  left: 490px;
  width: 291px;
  height: 424px;
  font-size: 100px;
  color: #d6b367;
}

.popup {
  position: fixed;
  top: 0;
  left: -30px;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  display: inline-block;
  position: absolute;
  width: 820px;
  height: 500px;
  top: 335px;
  left: 690px;
  font-size: 18px;
  font-family: "nansongshuju";
  text-align: right;
  margin-bottom: 50px;
}

.popup-content ul {
  margin-bottom: 50px;
  font-size: 23px;
  font-family: "nansongshuju";
  text-align: right;
}
.popup-content p {
  font-family: "nansongshuju";
  text-align: right;
  font-size: 40px;
  margin-bottom: 50px;
}
.popup-content li {
  margin-bottom: 10px;
}
.my-ship {
  width: 1272px;
  height: 540px;
  /* background-color: white; */
}
</style>
