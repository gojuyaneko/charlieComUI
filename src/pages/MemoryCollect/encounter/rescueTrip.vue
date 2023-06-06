<template>
  <div class="rescue_trip">
    <div class="major-title">
      <div class="content1" v-show="index===1"></div>
      <div class="content2" v-show="index===2"></div>
      <div class="content3" v-show="index===3"></div>
    </div>
    <ul class="minor-titles">
      <span class="title1" tabindex="1" @click="show(1); choiceshow=true;choiceContent1Visible=false" :class="index===1? 'active':''" ></span>
      <span class="title2" tabindex="2" @click="show(2)" :class="index===2"></span>
      <span class="title3" tabindex="3" @click="show(3)" :class="index===3"></span>
    </ul>
    <div class="text-bg">
      <ul class="choice" v-show="choiceshow">
        <li class="choice1" v-show="index===1" @click="choiceshow=false; choiceContent1Visible=true"></li>
        <li class="choice2" v-show="index===1" @click="choiceshow=false"></li>
      </ul>
      <div class="text" v-show="index===1">
        <encounterContent :sendName="meetContent" ></encounterContent>
        <encounterContent :sendName="choiceContent1" v-if="choiceContent1Visible"></encounterContent>
      </div>

    </div>
    <a class="video-btn" target="_blank" href="http://www.bilibili.com"></a>
  </div>
</template>

<script>
import encounterContent from "@/pages/MemoryCollect/encounter/encounterContent.vue";
export default {
  components:{encounterContent},
  data() {
    return {
      index: 1,
      meetContent: [
        {
          name: "旁白",
          content:
            "嘀——"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
        {
          name: "查理苏",
          content:
            "血压尿量如何？",
        },
        {
          name: "??",
          content:
            "饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪",
        },
        {
          name: "查理苏",
          content:
            "完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人。",
        },
        {
          name: "旁白",
          content:
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
        },
        {
          name: "我",
          content:
            "饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪",
        },
        {
          name: "查理苏",
          content:
            "完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人。",
        },
        {
          name: "旁白",
          content:
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
        },
        {
          name: "我",
          content:
            "饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪",
        },
        {
          name: "查理苏",
          content:
            "完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人。",
        },
        {
          name: "旁白",
          content:
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
        },
        {
          name: "我",
          content:
            "饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪",
        },
        {
          name: "查理苏",
          content:
            "完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人。",
        },
        {
          name: "旁白",
          content:
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
        },
      ],
      choiceshow:true,
      choiceContent1Visible:false,
      choiceContent1: [
          {
          name: "旁白",
          content:
            "嘀——12345"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
    }
  },
  methods: {
    show(value) {
      this.index === value ? this.isShow = !this.isShow : this.isShow = true
      this.index = value
    }
  }
}
</script>

<style scoped lang="scss">
.rescue_trip {
  text-align: center;
  width: 100%;
  height: 100%;
  background: url('./邂逅1/bg.png') no-repeat;
  background-size: cover;
  background-position: center;
}

.major-title {
  background: url("./邂逅1/title1.png") no-repeat;
  background-size: 95% 95%;
  height: 70px;
  width: 406px;
  position: relative;
  top:165px;
  left:145px;
}

.content1 {
  background: url("./邂逅1/content1.png");
  background-size: 100% 100%;
  position: relative;
  top:85px;
  left: 110px;
  height: 20px;
  width: 188px;
}

.content2 {
  background: url("./邂逅1/content2.png");
  background-size: 100% 100%;
  position: relative;
  top:85px;
  left: 110px;
  height: 21px;
  width: 322px;
}

.content3 {
   background: url("./邂逅1/content3.png");
  background-size: 100% 100%;
  position: relative;
  top:85px;
  left: 110px;
  height: 21px;
  width: 417px;
}

.video-btn {
  background-image: url("./邂逅1/video.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  top: -120px;
  left: 1640px;
  width: 145px;
  height: 50px;
  display: inline-block;
}
.video-btn:hover {
  transform: scale(1.05);
}

.text-bg {
  background: url('./邂逅1/text.png') no-repeat;
  background-size: 100% 97%;
  height: 760px;
  width: 1680px;
  position: relative;
  float: right;
  top:120px;
}

.minor-titles {
  display: flex;
  flex-direction: column;
  position: relative;
  float: left;
  top:300px;
  left: 40px;
}

.title1 {
  background: url("./邂逅1/暗2-1.png");
  background-size: 100% 100%;
  height: 47px;
  width: 190px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
}

.title1:hover, .title1:focus, .title1.active,
{
  background: url("./邂逅1/title2-1.png");
  background-size: 100% 100%;
  cursor: pointer;
  margin-bottom: 20px;
}

.title2 {
  background: url("./邂逅1/暗2-2.png");
  background-size: 100% 100%;
  height: 47px;
  width: 190px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
}

.title2:hover, .title2:focus {
  background: url("./邂逅1/title2-2.png");
  background-size: 100% 100%;
  cursor: pointer;
  margin-bottom: 20px;
}

.title3 {
  background: url("./邂逅1/暗2-3.png");
  background-size: 100% 100%;
  height: 47px;
  width: 190px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
}

.title3:hover, .title3:focus {
  background: url("./邂逅1/title2-3.png");
  background-size: 100% 100%;
  cursor: pointer;
  margin-bottom: 20px;
}


.text {
  width: 900px;
  height: 500px;
  overflow-y: scroll;
  position: absolute;
  top:150px;
  left:110px
}

.choice {
  display: flex;
  flex-direction: column;
  position: relative;
  float: left;
  top: 400px;
  left: 27px;
}

.choice1 {
  background: url("./邂逅1/goaway.png");
  background-size: 100% 100%;
  height: 132px;
  width: 46px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: 25px;
}

.choice2 {
  background: url("./邂逅1/stay.png");
  background-size: 100% 100%;
  height: 132px;
  width: 46px;
  display: inline-block;
  position: relative;
  cursor: pointer;
}


::-webkit-scrollbar {
  width: 25px;
}
::-webkit-scrollbar-track {
  box-shadow:inset 0 0 5px #b99e63;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  border: 4.5px solid transparent;
  background-clip: content-box;
  background-color: rgb(185,158,99,0.5);
  border-radius: 10px;

}


</style>