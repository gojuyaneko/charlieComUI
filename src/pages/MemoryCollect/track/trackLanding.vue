<template>
  <div class="landing">
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
    <div class="text">
      <trackDia :sendName="Dia1" v-show="Index===1"></trackDia>
      <trackDia :sendName="Dia2" v-show="Index===2"></trackDia>
      <trackDia :sendName="Dia3" v-show="Index===3"></trackDia>
      <trackDia :sendName="Dia4" v-show="Index===4"></trackDia>
      <trackMemory :sendName="Memory1" v-show="Index===5"></trackMemory>
      <trackMemory :sendName="Memory2" v-show="Index===6"></trackMemory>
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
      Dia1:[
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
      Dia2:[
        {
          name:'旁白',
          content:'连绵阴雨过后，转晴的那一天总是显得有些特别。人们纷纷走出家门，在草坪上享受久违的日光，四周的一切都仿佛洋溢着鲜亮的生机。\n' +
              '黄昏时分，澄澈的天空被晚霞染成了明艳的红色，这也已经许久未见。\n' +
              '查理苏本来以为，这只是漫长雨季结束后最最普通的一天。\n' +
              '结束了一天的工作，查理苏和马克走在路上，一边聊着今天的任务，一边咬了一口手里的冰激凌。\n'
        },
        {
          name:'查理苏',
          content:'太幸运了，今天正好有双重可可口味。',
        },
        {
          name:'旁白',
          content:'他一脸幸福的表情看起来可以直接去拍冰淇淋广告，马克不由得笑了。'
        },
        {
          name:'马克',
          content: '这种东西只有小孩才喜欢。',
        }
      ],
      Dia3:[
        {
          name:'旁白',
          content:'连绵阴雨过后，转晴的那一天总是显得有些特别。人们纷纷走出家门，在草坪上享受久违的日光，四周的一切都仿佛洋溢着鲜亮的生机。\n' +
              '黄昏时分，澄澈的天空被晚霞染成了明艳的红色，这也已经许久未见。\n' +
              '查理苏本来以为，这只是漫长雨季结束后最最普通的一天。\n' +
              '结束了一天的工作，查理苏和马克走在路上，一边聊着今天的任务，一边咬了一口手里的冰激凌。\n'
        },
        {
          name:'查理苏',
          content:'太幸运了，今天正好有双重可可口味。',
        },
        {
          name:'旁白',
          content:'他一脸幸福的表情看起来可以直接去拍冰淇淋广告，马克不由得笑了。'
        },
        {
          name:'马克',
          content: '这种东西只有小孩才喜欢。',
        }
      ],
      Dia4:[
        {
          name:'旁白',
          content:'连绵阴雨过后，转晴的那一天总是显得有些特别。人们纷纷走出家门，在草坪上享受久违的日光，四周的一切都仿佛洋溢着鲜亮的生机。\n' +
              '黄昏时分，澄澈的天空被晚霞染成了明艳的红色，这也已经许久未见。\n' +
              '查理苏本来以为，这只是漫长雨季结束后最最普通的一天。\n' +
              '结束了一天的工作，查理苏和马克走在路上，一边聊着今天的任务，一边咬了一口手里的冰激凌。\n'
        },
        {
          name:'查理苏',
          content:'太幸运了，今天正好有双重可可口味。',
        },
        {
          name:'旁白',
          content:'他一脸幸福的表情看起来可以直接去拍冰淇淋广告，马克不由得笑了。'
        },
        {
          name:'马克',
          content: '这种东西只有小孩才喜欢。',
        }
      ],
      Memory1:[
        {
          name:'妈妈',
          content: '“Charlie，想不想和妈妈一起去游乐园玩？”'
        },
        {
          name:'旁白',
          content: '一天炎热的午后，妈妈突然这样问我。\n' +
              '她半蹲在我面前，用柔软的手指轻抚我的头顶，眼里充盈着温柔。\n'
        },
        {
          name:'查理苏',
          content:'“当然想去啦！”'
        },
        {
          name: '旁白',
          content:'我用力点点头。\n' +
              '也许是因为许久没有出门，妈妈最近总是郁郁寡欢，我已经很久没有见过她的笑容了。'
        },
         {
          name:'妈妈',
          content: '“那我们两个偷偷溜出去，不要被爸爸发现。”'
        },
      ],
      Memory2:[
        {
          name:'妈妈',
          content: '“Charlie，想不想和妈妈一起去游乐园玩？”'
        },
        {
          name:'旁白',
          content: '一天炎热的午后，妈妈突然这样问我。\n' +
              '她半蹲在我面前，用柔软的手指轻抚我的头顶，眼里充盈着温柔。\n'
        },
        {
          name:'查理苏',
          content:'“当然想去啦！”'
        },
        {
          name: '旁白',
          content:'我用力点点头。\n' +
              '也许是因为许久没有出门，妈妈最近总是郁郁寡欢，我已经很久没有见过她的笑容了。'
        },
         {
          name:'妈妈',
          content: '“那我们两个偷偷溜出去，不要被爸爸发现。”'
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
  top:10px;
  right:15px;
  float: right;
}

.video-btn {
  background-image: url("./轨迹2/video.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  top: -85px;
  left: 843.5px;
  width: 145px;
  height: 46px;
  display: inline-block;
}

.title-img {
  height: 20px;
  top:50px;
  float: right;
  right:-70px;
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