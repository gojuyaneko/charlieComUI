<template>
  <div>
    <div
      class="zjp"
      @click="showPopup = true"
      :class="{ 'gold-border': showPopup }"
    >
      <img src="@/assets/aboutCharlie/查兆澎.png" />
    </div>

    <div
      class="xh"
      @click="showPopup = true"
      :class="{ 'gold-border': showPopup }"
    >
      <img src="@/assets/aboutCharlie/羲和.png" />
    </div>
    <div
      class="js"
      @click="showPopup = true"
      :class="{ 'gold-border': showPopup }"
    >
      <img src="@/assets/aboutCharlie/吉叔.png" />
    </div>
    <div
      class="zlf"
      @click="showPopup = true"
      :class="{ 'gold-border': showPopup }"
    >
      <img src="@/assets/aboutCharlie/查理芬.png" />
    </div>

    <div
      class="alan"
      @click="showPopup = true"
      :class="{ 'gold-border': showPopup }"
    >
      <img src="@/assets/aboutCharlie/alan.png" />
    </div>
    <div
      class="sy"
      @click="showPopup = true"
      :class="{ 'gold-border': showPopup }"
    >
      <img src="@/assets/aboutCharlie/舒云.png" />
    </div>

    <div
      class="hgh"
      @click="showPopup = true"
      :class="{ 'gold-border': showPopup }"
    >
      <img src="@/assets/aboutCharlie/何国恒.png" />
    </div>

    <div
      class="mk"
      @click="showPopup = true"
      :class="{ 'gold-border': showPopup }"
    >
      <img src="@/assets/aboutCharlie/马克.png" />
    </div>
    <div
      class="axn"
      @click="showPopup = true"
      :class="{ 'gold-border': showPopup }"
    >
      <img src="@/assets/aboutCharlie/埃西诺.png" />
    </div>

    <div
      class="zlf"
      @click="showPopup = true"
      :class="{ 'gold-border': showPopup }"
    >
      <img src="@/assets/aboutCharlie/查理芬.png" />
    </div>
    <div
      class="la"
      @click="showPopup = true"
      :class="{ 'gold-border': showPopup }"
    >
      <img src="@/assets/aboutCharlie/莱昂.png" />
    </div>

    <div
      class="stz"
      @click="showPopup = true"
      :class="{ 'gold-border': showPopup }"
    >
      <img src="@/assets/aboutCharlie/孙泰中.png" />
    </div>
    <div
      class="dl"
      @click="showPopup = true"
      :class="{ 'gold-border': showPopup }"
    >
      <img src="@/assets/aboutCharlie/迪伦.png" />
    </div>
    <div
      class="shy"
      @click="showPopup = true"
      :class="{ 'gold-border': showPopup }"
    >
      <img src="@/assets/aboutCharlie/时晏.png" />
    </div>
    <!-- <div
      class="dl"
      @click="showPopup = true"
      :class="{ 'gold-border': showPopup }"
    >
      <img src="@/assets/aboutCharlie/迪伦.png" />
    </div> -->
    <div
      class="ow"
      @click="showPopup = true"
      :class="{ 'gold-border': showPopup }"
    >
      <img src="@/assets/aboutCharlie/欧文.png" />
    </div>

    <div class="popup" v-show="showPopup" @click.self="showPopup = false">
      <img
        src="@/assets/aboutCharlie/relationbg.png"
        style="width: 1272px; height: 540px"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "moreRelation",
  data() {
    return {
      showPopup: false,
    };
  },
};
</script>

<style>
.zjp img {
  position: absolute;
  height: 246px;
  width: 246px;
  top: 320px;
  left: 470px;
  cursor: pointer;
}
.xh img {
  position: absolute;
  height: 230px;
  width: 230px;
  top: 780px;
  left: 570px;
  cursor: pointer;
}
.js img {
  position: absolute;
  height: 206px;
  width: 206px;
  top: 880px;
  left: 850px;
  cursor: pointer;
}

.zlf img {
  position: absolute;
  height: 178px;
  width: 178px;
  top: 380px;
  left: 200px;
  cursor: pointer;
}

.sy img {
  position: absolute;
  height: 157px;
  width: 157px;
  top: 880px;
  left: 310px;
  cursor: pointer;
}
.alan img {
  position: absolute;
  height: 140px;
  width: 140px;
  bottom: 80px;
  right: 670px;
  cursor: pointer;
}
.hgh img {
  position: absolute;
  height: 210px;
  width: 210px;
  top: 410px;
  right: 500px;
  cursor: pointer;
}
.axn img {
  position: absolute;
  height: 188px;
  width: 188px;
  bottom: 200px;
  right: 500px;
  cursor: pointer;
}

.mk img {
  position: absolute;
  height: 188px;
  width: 188px;
  top: 180px;
  right: 650px;
  cursor: pointer;
}
.la img {
  position: absolute;
  height: 117px;
  width: 117px;
  bottom: 130px;
  right: 350px;
  cursor: pointer;
}

.stz img {
  position: absolute;
  height: 175px;
  width: 175px;
  bottom: 350px;
  right: 250px;
  cursor: pointer;
}
.shy img {
  position: absolute;
  height: 157px;
  width: 157px;
  top: 400px;
  right: 120px;
  cursor: pointer;
}
.dl img {
  position: absolute;
  height: 152px;
  width: 152px;
  top: 250px;
  right: 350px;
  cursor: pointer;
}
.ow img {
  position: absolute;
  height: 125px;
  width: 125px;
  bottom: 100px;
  right: 170px;
  cursor: pointer;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup img {
  width: 1272px;
  height: 540px;
}

.gold-border {
  border: 2px solid gold;
}
</style>
