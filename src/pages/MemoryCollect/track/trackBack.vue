<template>
  <div class="back">
    <a class="video-btn" target="_blank" href="http://www.bilibili.com" v-show="index===1"></a>
    <a class="video-btn" target="_blank" href="http://www.bilibili.com" v-show="index===2"></a>
    <a class="video-btn" target="_blank" href="http://www.bilibili.com" v-show="index===3"></a>
    <a class="video-btn" target="_blank" href="http://www.bilibili.com" v-show="index===4"></a>
    <a class="video-btn" target="_blank" href="http://www.bilibili.com" v-show="index===5"></a>
    <a class="video-btn" target="_blank" href="http://www.bilibili.com" v-show="index===6"></a>
    <div class="title"></div>
    <div class="titles" v-for="(item,index) in minorTitles" :key="index" v-show="item.num===Index">
      <img :src="item.bg" alt="" class="title-img"/>
    </div>
    <ul class="btns">
      <li class="btn1" tabindex="1" @click="show(1);" :class="Index===1? 'active':''"></li>
      <li class="btn2" tabindex="2" @click="show(2);" :class="Index===2? 'active':''"></li>
      <li class="btn3" tabindex="3" @click="show(3);" :class="Index===3? 'active':''"></li>
      <li class="btn4" tabindex="4" @click="show(4);" :class="Index===4? 'active':''"></li>
      <li class="btn5" tabindex="5" @click="show(5);" :class="Index===5? 'active':''"></li>
      <li class="btn6" tabindex="6" @click="show(6);" :class="Index===6? 'active':''"></li>
    </ul>
    <ul class="active">
      <li class="active1" v-show="Index===1"></li>
      <li class="active2" v-show="Index===2"></li>
      <li class="active3" v-show="Index===3"></li>
      <li class="active4" v-show="Index===4"></li>
      <li class="active5" v-show="Index===5"></li>
      <li class="active6" v-show="Index===6"></li>
    </ul>
    <div class="dates" v-for="(item,index) in minorDates" :key="index" v-show="item.num===Index">
      <img :src="item.bg" alt="" class="date-img"/>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      Index: 1,
      minorTitles: [
        {
          bg: require("../track/轨迹2/title1.png"),
          num:1,
        },
        {
          bg: require("../track/轨迹2/title2.png"),
          num:2,
        },
        {
          bg: require("../track/轨迹2/title3.png"),
          num:3,
        },
        {
          bg: require("../track/轨迹2/title4.png"),
          num:4,
        },
        {
          bg: require("../track/轨迹2/title5.png"),
          num:5,
        },
        {
          bg: require("../track/轨迹2/title6.png"),
          num:6,
        },
      ],
      minorDates: [
        {
          bg: require("../track/轨迹2/minor1.png"),
          num:1,
        },
        {
          bg: require("../track/轨迹2/minor2.png"),
          num:2,
        },
        {
          bg: require("../track/轨迹2/minor3.png"),
          num:3,
        },
        {
          bg: require("../track/轨迹2/minor4.png"),
          num:4,
        },
        {
          bg: require("../track/轨迹2/minor5.png"),
          num:5,
        },
        {
          bg: require("../track/轨迹2/minor6.png"),
          num:6,
        },
      ],
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
  background: url("./轨迹3/title.png");
  background-size: 100% 100% ;
  position: relative;
  width: 218px;
  height: 74px;
  top:50px;
  right:40px;
  float: right;
}

.video-btn {
  background-image: url("./轨迹3/video.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  top: -85px;
  left: 821px;
  width: 145px;
  height: 46px;
  display: inline-block;
}

.title-img {
  height: 20px;
  top:50px;
  float: right;
  right:-30px;
  display: inline-block;
  position: relative;
}

.btn1, .btn2, .btn3, .btn4, .btn5, .btn6 {
  background-image: url("./轨迹3/btn.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  height: 19px;
  width: 19px;
}

.active1, .active2, .active3, .active4, .active5, .active6 {
  background-image: url("./轨迹2/active.png");
  background-size: 100% 100%;
  position: relative;
  height: 15.2px;
  width: 8.8px;
}

.active1 {
  top: 470px;
  left:1325px;
}

.active2 {
  top: 415px;
  left: 1328px;
}

.active3 {
  left: 1351px;
  top: 366px;
}

.active4 {
  left: 1389px;
  top: 327px;
}

.active5 {
  left :1438.5px;
  top: 304px;
}

.active6 {
  left:1493.5px;
  top: 300px;
}
.btn1 {
  top: 581.5px;
  left:1322px;
}

.btn2 {
  top:508px;
  left:1325px;
}

.btn3 {
  top:440px;
  left:1348px;
}

.btn4 {
  top:382px;
  left:1386px;
}

.btn5 {
  top:339.5px;
  left:1435.5px;
}

.btn6 {
  top:316px;
  left:1490.5px;
}

.date-img {
  display: inline-block;
  position: relative;
  float: right;
  top: 400px;
  right:5px;
  height: 70px;
}
</style>