<template>
  <div class="profile_night">
    <a class="video-btn" target="_blank" href="http://www.bilibili.com"></a>
    <div class="title"></div>
    <div class="night2" v-show="Index===1 || Index===0" @click="show(2);"></div>
    <div class="light1" v-show="Index===1 || Index===0"></div>
    <div class="night1" v-show="Index===2" @click="show(1);"></div>
    <div class="light2" v-show="Index===2"></div>
    <ul class="btns">
      <li class="origin" tabindex="0" @click="show(0);" :class="Index===0? 'active':''"></li>
      <li class="light" tabindex="1" @click="show(1);" :class="Index===1? 'active':''"></li>
      <li class="night" tabindex="2" @click="show(2);" :class="Index===2? 'active':''"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Index:0,
    }
  },
  methods: {
    show(value) {
      this.Index === value ? this.isShow = !this.isShow : this.isShow = true
      this.Index = value
    },
  }
}
</script>

<style scoped lang="scss">
.title {
  background: url("./侧影1/title.png");
  background-size: 100% 100% ;
  position: relative;
  top:40px;
  left:190px;
  width: 280px;
  height: 70px;
}

.video-btn {
  background-image: url("./侧影1/video.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  top: -550px;
  left: 670px;
  width: 145px;
  height: 46px;
  display: inline-block;
}

.btns {
  display: flex;
  flex-direction: column;
  top: 560px;
  left: 700px;
  position: absolute;
  float: left;
}

.origin,.light,.night {
  background-size: 100% 100%;
  height: 95px;
  width: 43px;
  cursor: pointer;
}

.origin {
  background-image: url("./侧影1/origin.png");
  margin-bottom: 20px;
  display: inline-block;
}

.light {
  background-image: url("./侧影1/light.png");
  margin-bottom: 20px;
  display: inline-block;
}
.night {
  background-image: url("./侧影1/night.png");
  display: inline-block;
}

.night2 {
  background-image: url("./侧影1/暗2.png");
  background-size: 100% 100%;
  position: absolute;
  top: 350px;
  left: 190px;
  width: 349px;
  height: 424px;
  cursor: pointer;
}
.light1 {
  background-image: url("./侧影1/光1.png");
  background-size: 100% 100%;
  position: absolute;
  top: 300px;
  left: 190px;
  width: 349px;
  height: 424px;
}

.night1 {
  background-image: url("./侧影1/暗1.png");
  background-size: 100% 100%;
  position: absolute;
  top: 350px;
  left: 190px;
  width: 349px;
  height: 424px;
  cursor: pointer;
}
.light2 {
  background-image: url("./侧影1/光2.png");
  background-size: 100% 100%;
  position: absolute;
  top: 300px;
  left: 190px;
  width: 349px;
  height: 424px;
}

</style>