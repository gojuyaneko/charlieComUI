<template>
  <div class="control">
    <a class="video-btn" target="_blank" href="http://www.bilibili.com" v-show="index===1"></a>
    <a class="video-btn" target="_blank" href="http://www.bilibili.com" v-show="index===2"></a>
    <a class="video-btn" target="_blank" href="http://www.bilibili.com" v-show="index===3"></a>
    <a class="video-btn" target="_blank" href="http://www.bilibili.com" v-show="index===4"></a>
    <div class="title"></div>
    <div class="text-bg">
      <div class="text">
        <volumeContent v-show="index===1" :sendName="first"></volumeContent>
        <volumeContent v-show="index===2" :sendName="second"></volumeContent>
        <volumeContent v-show="index===3" :sendName="third"></volumeContent>
        <volumeContent v-show="index===4" :sendName="fourth"></volumeContent>
      </div>
    </div>
    <ul class="btns">
      <li class="btn1" tabindex="1" @click="show(1);" :class="index===1? 'active':''"></li>
      <li class="btn2" tabindex="2" @click="show(2);" :class="index===2? 'active':''"></li>
      <li class="btn3" tabindex="3" @click="show(3);" :class="index===3? 'active':''"></li>
      <li class="btn4" tabindex="4" @click="show(4);" :class="Index===4? 'active':''"></li>
    </ul>
  </div>
</template>

<script>
import volumeContent from "@/pages/MemoryCollect/listen/volume/components/volumeContent.vue";
export default {
  components:{volumeContent,},
  data() {
    return {
      index: 1,
      first:[
        {
         type:'title',
          content:'01-预谋'
        },
        {
          type:'content',
          content: '叫声很有力气，看来我们救下的狮子已经脱离生命危险了。\n' +
              '你之前还怀疑我的判断。但人也是动物，查医生偶尔触类旁通一下，也不稀奇。\n' +
              '怎么了，还在想那天的事情?那场偷猎的确非常恐怖，扎布尔地区的治安不太好，枪支和火药都可以随便流通\n'
        }
      ],
      second: [
        {
         type:'title',
          content:'02-漫途'
        },
        {
          type:'content',
          content: '叫声很有力气，看来我们救下的狮子已经脱离生命危险了。\n' +
              '你之前还怀疑我的判断。但人也是动物，查医生偶尔触类旁通一下，也不稀奇。\n' +
              '怎么了，还在想那天的事情?那场偷猎的确非常恐怖，扎布尔地区的治安不太好，枪支和火药都可以随便流通\n'
        }
      ],
      third: [
        {
           type:'title',
          content:'03-喘息'
        },
          {
          type:'content',
          content:'小心。没关系，未婚妻轻得很，我的脚一点也不疼。\n' +
              '第一次接近狮子，紧张是人之常情。\n' +
              '不如你闭上眼睛,把手交给我，我带你摸一摸。\n'
        },
        {
          type:'title',
          content:'03-心跳'
        },
        {
          type:'content',
          content:'这个烦闷的叫声，看来狮子是被热带小飞虫缠住了。\n' +
              '想去车里拿防虫喷雾帮帮它?嗯，那我在这里等你，快去快回，否则我会很想你的。\n' +
              '怎么了，羡慕我有一个善良又勇敢的未婚妻?\n'
        }
      ],
      fourth: [
        {
          type:'title',
          content:'04-迷蒙'
        },
        {
          type:'content',
          content: '444陪你出国取材，没想到会遇到这么惊险的事。\n' +
              '我猜你现在特别担心狮子的情况，想要马上看看才放心。\n' +
              '但当地人把狮子奉为神明，按照风俗，我们要先在神庙的侧室沐浴更衣。\n'
        }
      ],
    }
  },
  methods: {
    show(value) {
      this.index === value ? this.isShow = !this.isShow : this.isShow = true
      this.index = value
    },
  }
}
</script>

<style scoped>

.video-btn {
  background-image: url("./余音2/video.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  top: 135px;
  left: 951px;
  width: 145px;
  height: 46px;
  display: inline-block;
}

.title {
  background: url("./余音2/title.png");
  background-size: 100% 100% ;
  position: relative;
  width: 213px;
  height: 101px;
  top:230px;
  right:150px;
  float: right;
}

.text-bg {
  background: url('./余音2/text-bg.png') no-repeat;
  background-size: 100% 100%;
  height: 641px;
  width: 1519px;
  position: relative;
  top:200px;
  left:190px;
}

.btns {
  display: flex;
  flex-direction: row;
  top:80px;
  float:right;
  right:200px;
  position: relative;
}

.btn1 {
  background-image: url("./余音2/暗1.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  height: 38px;
  width: 38px;
  margin-right: 10px;
}

.btn1:hover, .btn1:focus, .btn1.active {
  background-image: url("./余音2/亮1.png");
  background-size: 100% 100%;
  cursor: pointer;
}

.btn2 {
  background-image: url("./余音2/暗2.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  height: 38px;
  width: 38px;
  margin-right: 10px;
}

.btn2:hover, .btn2:focus, .btn2.active {
  background-image: url("./余音2/亮2.png");
  background-size: 100% 100%;
  cursor: pointer;
}

.btn3 {
  background-image: url("./余音2/暗3.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  height: 38px;
  width: 38px;
  margin-right: 10px;
}

.btn3:hover, .btn3:focus, .btn3.active {
  background-image: url("./余音2/亮3.png");
  background-size: 100% 100%;
  cursor: pointer;
}

.btn4 {
  background-image: url("./余音2/暗4.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  height: 38px;
  width: 38px;
  margin-right: 10px;
}

.btn4:hover, .btn4:focus, .btn4.active {
  background-image: url("./余音2/亮4.png");
  background-size: 100% 100%;
  cursor: pointer;
}

.text {
  width: 900px;
  height: 550px;
  overflow-y: scroll;
  position: absolute;
  top:45px;
  left:10px;
  white-space: pre-wrap;
  line-height: 20px;
}



</style>