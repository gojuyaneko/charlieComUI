<template>
  <div class="landing">
    <li v-for="(item,index) in contentDataList" :key="'content'+ index" v-show="Index===item.sessionIndex">
        <a class="video-btn" target="_blank" :href="item.videoUrl"></a>
    </li>
    <div class="title"></div>
    <div class="titles" v-for="(item,index) in minorTitles" :key="index" v-show="item.num===Index">
      <img :src="item.bg" alt="" class="title-img"/>
    </div>
    <ul class="btns">
      <li class="btn1" tabindex="0" @click="show(0);" :class="Index===0? 'active':''"></li>
      <li class="btn2" tabindex="1" @click="show(1);" :class="Index===1? 'active':''"></li>
      <li class="btn3" tabindex="2" @click="show(2);" :class="Index===2? 'active':''"></li>
      <li class="btn4" tabindex="3" @click="show(3);" :class="Index===3? 'active':''"></li>
      <li class="btn5" tabindex="4" @click="show(4);" :class="Index===4? 'active':''"></li>
      <li class="btn6" tabindex="5" @click="show(5);" :class="Index===5? 'active':''"></li>
    </ul>
    <ul class="active">
      <li class="active1" v-show="Index===0"></li>
      <li class="active2" v-show="Index===1"></li>
      <li class="active3" v-show="Index===2"></li>
      <li class="active4" v-show="Index===3"></li>
      <li class="active5" v-show="Index===4"></li>
      <li class="active6" v-show="Index===5"></li>
    </ul>
    <div class="dates" v-for="(item,index) in minorDates" :key="index" v-show="item.num===Index">
      <img :src="item.bg" alt="" class="date-img"/>
    </div>
    <div class="text">
      <ul>
        <li v-for="(item,index) in contentDataList" :key="'content'+ index" v-show="Index===item.sessionIndex">
          <trackDia v-if="item.DiaOrMemory === 'dia'" :sendName="item.subContent"></trackDia>
          <trackMemory v-if="item.DiaOrMemory === 'memory'" :sendName="item.subContent"></trackMemory>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import trackDia from "@/pages/MemoryCollect/track/components/trackDia.vue";
import trackMemory from "@/pages/MemoryCollect/track/components/trackMemory.vue";

export default {
  components:{trackDia,trackMemory},
  data() {
    return {
      Index: 0,
      minorTitles: [
        {
          bg: require("../track/轨迹2/title1.png"),
          num:0,
        },
        {
          bg: require("../track/轨迹2/title2.png"),
          num:1,
        },
        {
          bg: require("../track/轨迹2/title3.png"),
          num:2,
        },
        {
          bg: require("../track/轨迹2/title4.png"),
          num:3,
        },
        {
          bg: require("../track/轨迹2/title5.png"),
          num:4,
        },
        {
          bg: require("../track/轨迹2/title6.png"),
          num:5,
        },
      ],
      minorDates: [
        {
          bg: require("../track/轨迹2/minor1.png"),
          num:0,
        },
        {
          bg: require("../track/轨迹2/minor2.png"),
          num:1,
        },
        {
          bg: require("../track/轨迹2/minor3.png"),
          num:2,
        },
        {
          bg: require("../track/轨迹2/minor4.png"),
          num:3,
        },
        {
          bg: require("../track/轨迹2/minor5.png"),
          num:4,
        },
        {
          bg: require("../track/轨迹2/minor6.png"),
          num:5,
        },
      ],
      contentDataList:[
        {
          sessionIndex:0,
          DiaOrMemory:'memory',
          videoUrl: "https://www.bilibili.com",
          subContent: [
            {
              name:'妈妈',
              content: '“Charlie，想不想和妈妈一起去游乐园玩？”',
            },
            {
              name:'旁白',
              content: '一天炎热的午后，妈妈突然这样问我。\n' +
                  '她半蹲在我面前，用柔软的手指轻抚我的头顶，眼里充盈着温柔。\n'
            },
          ]
        },

        {
          sessionIndex:1,
          DiaOrMemory:'dia',
          videoUrl: "https://www.bilibili.com",
          subContent: [
        {
          name:'管家',
          content:'少爷，欢迎回来。\n' +
              '今天Alan医生有给您什么建议吗？'
        },
        {
          name:'查理苏',
          content: '他没说什么。\n' +
              '我先回房，晚上不用喊我吃饭。\n' +
              '看心理医生真的会有用吗……\n' +
              '谁？\n'
        },
       {
          name:'管家',
          content:'少爷，Linda给您做了您最爱吃的饼干，还准备了可可牛奶和 — —'
        },
        {
          name:'查理苏',
          content: '吉叔，不用费心了，今天我吃不下。'
        },
          {
          name:'管家',
          content:'少爷，欢迎回来。\n' +
              '今天Alan医生有给您什么建议吗？'
        },
        {
          name:'查理苏',
          content: '他没说什么。\n' +
              '我先回房，晚上不用喊我吃饭。\n' +
              '看心理医生真的会有用吗……\n' +
              '谁？\n'
        },
       {
          name:'管家',
          content:'少爷，Linda给您做了您最爱吃的饼干，还准备了可可牛奶和 — —'
        },
        {
          name:'查理苏',
          content: '吉叔，不用费心了，今天我吃不下。'
        },
          {
          name:'管家',
          content:'少爷，欢迎回来。\n' +
              '今天Alan医生有给您什么建议吗？'
        },
        {
          name:'查理苏',
          content: '他没说什么。\n' +
              '我先回房，晚上不用喊我吃饭。\n' +
              '看心理医生真的会有用吗……\n' +
              '谁？\n'
        },
       {
          name:'管家',
          content:'少爷，Linda给您做了您最爱吃的饼干，还准备了可可牛奶和 — —'
        },
        {
          name:'查理苏',
          content: '吉叔，不用费心了，今天我吃不下。'
        },
      ],
        },
          {
          sessionIndex:2,
          DiaOrMemory:'memory',
            videoUrl: "https://www.bilibili.com",
          subContent:[
            {
              name:'妈妈',
              content: '“Charlie，想不想和妈妈一起去游乐园玩？”',
            },
            {
              name:'旁白',
              content: '一天炎热的午后，妈妈突然这样问我。\n' +
                  '她半蹲在我面前，用柔软的手指轻抚我的头顶，眼里充盈着温柔。\n'
            },
          ]
        },
          {
          sessionIndex:3,
          DiaOrMemory:'dia',
            videoUrl: "https://www.bilibili.com",
          subContent: [
        {
          name:'管家',
          content:'333少爷，欢迎回来。\n' +
              '今天Alan医生有给您什么建议吗？'
        },
        {
          name:'查理苏',
          content: '他没说什么。\n' +
              '我先回房，晚上不用喊我吃饭。\n' +
              '看心理医生真的会有用吗……\n' +
              '谁？\n'
        },
       {
          name:'管家',
          content:'少爷，Linda给您做了您最爱吃的饼干，还准备了可可牛奶和 — —'
        },
        {
          name:'查理苏',
          content: '吉叔，不用费心了，今天我吃不下。'
        },
          {
          name:'管家',
          content:'少爷，欢迎回来。\n' +
              '今天Alan医生有给您什么建议吗？'
        },
        {
          name:'查理苏',
          content: '他没说什么。\n' +
              '我先回房，晚上不用喊我吃饭。\n' +
              '看心理医生真的会有用吗……\n' +
              '谁？\n'
        },
       {
          name:'管家',
          content:'少爷，Linda给您做了您最爱吃的饼干，还准备了可可牛奶和 — —'
        },
        {
          name:'查理苏',
          content: '吉叔，不用费心了，今天我吃不下。'
        },
          {
          name:'管家',
          content:'少爷，欢迎回来。\n' +
              '今天Alan医生有给您什么建议吗？'
        },
        {
          name:'查理苏',
          content: '他没说什么。\n' +
              '我先回房，晚上不用喊我吃饭。\n' +
              '看心理医生真的会有用吗……\n' +
              '谁？\n'
        },
       {
          name:'管家',
          content:'少爷，Linda给您做了您最爱吃的饼干，还准备了可可牛奶和 — —'
        },
        {
          name:'查理苏',
          content: '吉叔，不用费心了，今天我吃不下。'
        },
      ],
        },
          {
          sessionIndex:4,
          DiaOrMemory:'memory',
            videoUrl: "https://www.bilibili.com",
          subContent: [
            {
              name:'妈妈',
              content: '“Charlie，想不想和妈妈一起去游乐园玩？”',
            },
            {
              name:'旁白',
              content: '一天炎热的午后，妈妈突然这样问我。\n' +
                  '她半蹲在我面前，用柔软的手指轻抚我的头顶，眼里充盈着温柔。\n'
            },
          ]
        },
          {
          sessionIndex:5,
          DiaOrMemory:'memory',
            videoUrl: "https://www.bilibili.com",
          subContent: [
            {
              name:'妈妈',
              content: '“Charlie，想不想和妈妈一起去游乐园玩？”',
            },
            {
              name:'旁白',
              content: '一天炎热的午后，妈妈突然这样问我。\n' +
                  '她半蹲在我面前，用柔软的手指轻抚我的头顶，眼里充盈着温柔。\n'
            },
          ]
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
  background: url("./轨迹2/title.png");
  background-size: 100% 100% ;
  position: relative;
  width: 263px;
  height: 128px;
  top:-30px;
  right:50px;
  float: right;
}

.video-btn {
  background-image: url("./轨迹2/video.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  top: -85px;
  left: 770px;
  width: 145px;
  height: 46px;
  display: inline-block;
}

.title-img {
  height: 20px;
  top:50px;
  float: right;
  right:-35px;
  display: inline-block;
  position: relative;
}

.btn1, .btn2, .btn3, .btn4, .btn5, .btn6 {
  background-image: url("./轨迹2/btn.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  height: 19px;
  width: 19px;
}

.active1, .active2, .active3, .active4, .active5, .active6 {
  background-image: url("./轨迹1/active.png");
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


.text {
  width: 1000px;
  height: 570px;
  overflow-y: scroll;
  position: absolute;
  top:60px;
  left:45px;
  white-space: pre-wrap;
  line-height: 30px;
}
</style>