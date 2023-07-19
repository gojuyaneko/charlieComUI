<template>
  <div>
    <div class="bg">
      <img src="@/assets/aboutCharlie/relationbg.png" />
    </div>
    <div class="charaPic">
      <div v-if="showPopup" class="popup">
        <div class="popup-content">
          <h2>{{ characterName }}</h2>
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
    <!-- <div>
        <img
          :src="characterImg"
          :alt="characterName"
          @click="showPopup = true"
        />
        <div class="name">{{ characterName }}</div>
        <div class="text">
          <ul>
            <li
              v-for="(detail, index) in characterDetail.identities"
              :key="index"
            >
              <p>{{ detail }}</p>
            </li>
            <li
              v-for="(detail, index) in characterDetail.overview"
              :key="index"
            >
              <p>{{ detail }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
//   </div>
// </template>

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
