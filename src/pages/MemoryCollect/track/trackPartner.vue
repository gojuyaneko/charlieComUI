<template>
  <div class="partner">
    <a class="video-btn" target="_blank" href="http://www.bilibili.com"></a>
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
      <trackMono :sendName="Mono1" v-show="Index===1"></trackMono>
      <trackDia :sendName="Dia1" v-show="Index===2"></trackDia>
      <trackMono :sendName="Mono2" v-show="Index===3"></trackMono>
      <trackDia :sendName="Dia2" v-show="Index===4"></trackDia>
      <trackDia :sendName="Dia3" v-show="Index===5"></trackDia>
      <trackMono :sendName="Mono3" v-show="Index===6"></trackMono>
    </div>
  </div>

</template>

<script>
import trackDia from "@/pages/MemoryCollect/track/components/trackDia.vue";
import trackMono from "@/pages/MemoryCollect/track/components/trackMono.vue";
export default {
  components:{trackDia,trackMono},
  data() {
    return {
      Index: 1,
      minorTitles: [
        {
          bg: require("../track/轨迹1/title1.png"),
          num:1,
        },
        {
          bg: require("../track/轨迹1/title2.png"),
          num:2,
        },
        {
          bg: require("../track/轨迹1/title3.png"),
          num:3,
        },
        {
          bg: require("../track/轨迹1/title4.png"),
          num:4,
        },
        {
          bg: require("../track/轨迹1/title5.png"),
          num:5,
        },
        {
          bg: require("../track/轨迹1/title6.png"),
          num:6,
        },
      ],
      minorDates: [
        {
          bg: require("../track/轨迹1/minor1.png"),
          num:1,
        },
        {
          bg: require("../track/轨迹1/minor2.png"),
          num:2,
        },
        {
          bg: require("../track/轨迹1/minor3.png"),
          num:3,
        },
        {
          bg: require("../track/轨迹1/minor4.png"),
          num:4,
        },
        {
          bg: require("../track/轨迹1/minor5.png"),
          num:5,
        },
        {
          bg: require("../track/轨迹1/minor6.png"),
          num:6,
        },
      ],
      Mono1:[
        {
          name:'查理苏',
          content:'早上好，Charlie。\n' +
              '你今天看起来还不错。\n' +
              '昨晚睡得不算好，也许从现在就开始减轻药物的剂量还是太早了。\n' +
              'Alan医生告诉过我，人的记忆远没有自己想象的那么可靠。\n' +
              '我想是的。\n' +
              '就像他说的一样，人类总是对情绪以及它带来的刺激上瘾，然后不断用困难和问题加固自己的困局。\n' +
              '真是一种奇怪的现象。\n'+
              '但还存在一种方法可以挣脱困局，那就是欺骗大脑，改变自己的记忆。\n' +
              '记忆会因为许多机制产生混乱和错觉，所以只需要在大脑里不断重复同一件事、不断地去想象……\n' +
              '只要它足够真实、足够具体，大脑就会无法分辨出我的想象和现实的经历。\n' +
              '它会混淆两者的界限，然后创造出新的记忆。\n' +
              '所以，我在做的事是对的。\n' +
              '你没错，Charlie。你要做的，就是在大脑里重新印刻那些美好的记忆。\n' +
              '你可以淡忘一部分过去，不再被那些困境主导\n' +
              '一切都会变好，那些事不会再次发生，也不会有人再离开你。\n' +
              '一个人开始自爱的时候，也就可以爱上生活。\n' +
              '我当然也可以做到这一点。\n' +
              '我可以活得像个开心的人，我可以继续去寻找梦想。\n' +
              '记住，我很开心，我不会被困扰，我要去“救人”……\n' +
              '这不是什么难事，我一定可以做到。毕竟我是Charlie，我是完美的。\n' +
              '好了，现在状态完美。我该出门了。\n' +
              '不行.……重来……\n' +
              'Charlie，今天又是完美的一天！\n' +
              '为什么今天就是不行，明明以前都可以了。\n' +
              '再来。\n' +
              'Charlie，去想想那些美好的回忆，告诉自己你依然还拥有……\n' +
              '我是Charlie，我有花不完的钱，还拥有全世界最幸福的家庭。\n' +
              '我的母亲，是个很温柔的人。她总是一边说多吃甜食对牙齿不好，一边给我买可可甜筒。\n' +
              '一边说今天学校的老师骂的好，一边跑到学校，拜托老师下次骂得轻一点。\n' +
              '我的父亲……他很爱我的妈妈。\n'

        }
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
      Mono2:[
        {
          name:'查理苏',
          content:'111早上好，Charlie。\n' +
              '你今天看起来还不错。\n' +
              '昨晚睡得不算好，也许从现在就开始减轻药物的剂量还是太早了。\n' +
              'Alan医生告诉过我，人的记忆远没有自己想象的那么可靠。\n' +
              '我想是的。\n' +
              '就像他说的一样，人类总是对情绪以及它带来的刺激上瘾，然后不断用困难和问题加固自己的困局。\n' +
              '真是一种奇怪的现象。\n'+
              '但还存在一种方法可以挣脱困局，那就是欺骗大脑，改变自己的记忆。\n' +
              '记忆会因为许多机制产生混乱和错觉，所以只需要在大脑里不断重复同一件事、不断地去想象……\n' +
              '只要它足够真实、足够具体，大脑就会无法分辨出我的想象和现实的经历。\n' +
              '它会混淆两者的界限，然后创造出新的记忆。\n' +
              '所以，我在做的事是对的。\n' +
              '你没错，Charlie。你要做的，就是在大脑里重新印刻那些美好的记忆。\n' +
              '你可以淡忘一部分过去，不再被那些困境主导\n' +
              '一切都会变好，那些事不会再次发生，也不会有人再离开你。\n' +
              '一个人开始自爱的时候，也就可以爱上生活。\n' +
              '我当然也可以做到这一点。\n' +
              '我可以活得像个开心的人，我可以继续去寻找梦想。\n' +
              '记住，我很开心，我不会被困扰，我要去“救人”……\n' +
              '这不是什么难事，我一定可以做到。毕竟我是Charlie，我是完美的。\n' +
              '好了，现在状态完美。我该出门了。\n' +
              '不行.……重来……\n' +
              'Charlie，今天又是完美的一天！\n' +
              '为什么今天就是不行，明明以前都可以了。\n' +
              '再来。\n' +
              'Charlie，去想想那些美好的回忆，告诉自己你依然还拥有……\n' +
              '我是Charlie，我有花不完的钱，还拥有全世界最幸福的家庭。\n' +
              '我的母亲，是个很温柔的人。她总是一边说多吃甜食对牙齿不好，一边给我买可可甜筒。\n' +
              '一边说今天学校的老师骂的好，一边跑到学校，拜托老师下次骂得轻一点。\n' +
              '我的父亲……他很爱我的妈妈。\n'
        }
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
      Mono3:[
        {
          name:'查理苏',
          content:'111早上好，Charlie。\n' +
              '你今天看起来还不错。\n' +
              '昨晚睡得不算好，也许从现在就开始减轻药物的剂量还是太早了。\n' +
              'Alan医生告诉过我，人的记忆远没有自己想象的那么可靠。\n' +
              '我想是的。\n' +
              '就像他说的一样，人类总是对情绪以及它带来的刺激上瘾，然后不断用困难和问题加固自己的困局。\n' +
              '真是一种奇怪的现象。\n'+
              '但还存在一种方法可以挣脱困局，那就是欺骗大脑，改变自己的记忆。\n' +
              '记忆会因为许多机制产生混乱和错觉，所以只需要在大脑里不断重复同一件事、不断地去想象……\n' +
              '只要它足够真实、足够具体，大脑就会无法分辨出我的想象和现实的经历。\n' +
              '它会混淆两者的界限，然后创造出新的记忆。\n' +
              '所以，我在做的事是对的。\n' +
              '你没错，Charlie。你要做的，就是在大脑里重新印刻那些美好的记忆。\n' +
              '你可以淡忘一部分过去，不再被那些困境主导\n' +
              '一切都会变好，那些事不会再次发生，也不会有人再离开你。\n' +
              '一个人开始自爱的时候，也就可以爱上生活。\n' +
              '我当然也可以做到这一点。\n' +
              '我可以活得像个开心的人，我可以继续去寻找梦想。\n' +
              '记住，我很开心，我不会被困扰，我要去“救人”……\n' +
              '这不是什么难事，我一定可以做到。毕竟我是Charlie，我是完美的。\n' +
              '好了，现在状态完美。我该出门了。\n' +
              '不行.……重来……\n' +
              'Charlie，今天又是完美的一天！\n' +
              '为什么今天就是不行，明明以前都可以了。\n' +
              '再来。\n' +
              'Charlie，去想想那些美好的回忆，告诉自己你依然还拥有……\n' +
              '我是Charlie，我有花不完的钱，还拥有全世界最幸福的家庭。\n' +
              '我的母亲，是个很温柔的人。她总是一边说多吃甜食对牙齿不好，一边给我买可可甜筒。\n' +
              '一边说今天学校的老师骂的好，一边跑到学校，拜托老师下次骂得轻一点。\n' +
              '我的父亲……他很爱我的妈妈。\n'
        }
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
  background: url("./轨迹1/title.png");
  background-size: 100% 100% ;
  position: relative;
  width: 116px;
  height: 75px;
  top:50px;
  right:30px;
  float: right;
}

.video-btn {
  background-image: url("./轨迹1/video.png");
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
  right:-12px;
  display: inline-block;
  position: relative;
}

.btn1, .btn2, .btn3, .btn4, .btn5, .btn6 {
  background-image: url("./轨迹1/btn.png");
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
.btn1{
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