<template>
  <div class="truth_cameout">
    <div class="major-title">
      <div class="content1" v-show="index===1"></div>
      <div class="content2" v-show="index===2"></div>
      <div class="content3" v-show="index===3"></div>
    </div>
    <ul class="minor-titles">
      <span class="title1" tabindex="1"
            @click="show(1);
            choiceshow=false;
            buffer=true; buffer1=true;
            wineContentVisible=false;
            bossContentVisible=false
            waitContentVisible=false
            handContentVisible=false"
            :class="index===1? 'active':''"
      ></span>
      <span class="title2" tabindex="2"
            @click="show(2);
            choiceshow1=false;
            buffer=true; buffer1=true;
            truthContentVisible=false;
            excuseContentVisible=false;
            yesContentVisible=false;
            followContentVisible=false;"
            :class="index===2? 'active':''"></span>
      <span class="title3" tabindex="3"
            @click="show(3)
            choiceshow2=false;buffer=true;
            topContentVisible=false;
            follow1ContentVisible=false;
            storeContentVisible=false;"
            :class="index===3? 'active':''"></span>
    </ul>
    <div class="text-bg">
      <ul class="choice" v-if="choiceshow && buffer" v-show="index===1">
        <li class="wine" @click="choiceshow=false; wineContentVisible=true; buffer=false"></li>
        <li class="boss" @click="choiceshow=false; bossContentVisible=true; buffer=false"></li>
      </ul>
      <li class="reload" v-show="wineContentVisible && choiceshow && !buffer && index===1"
          @click="choiceshow=true;buffer=true;wineContentVisible=false;"></li>
      <ul class="choice" v-if="bossContentVisible && choiceshow && buffer1" v-show="index===1">
        <li class="wait" @click="choiceshow=false; waitContentVisible=true; buffer1=false"></li>
        <li class="hand" @click="choiceshow=false; handContentVisible=true; buffer1=false"></li>
      </ul>
      <li class="reload" v-if="waitContentVisible && choiceshow && !buffer1 && index===1"
          @click="choiceshow=true;waitContentVisible=false;buffer1=true"></li>
      <div class="text" v-show="index===1" @scroll="choiceEvent">
        <encounterContent :sendName="meetContent" ></encounterContent>
        <encounterContent :sendName="wineContent" v-if="wineContentVisible"></encounterContent>
        <encounterContent :sendName="bossContent" v-if="bossContentVisible"></encounterContent>
        <encounterContent :sendName="waitContent" v-if="waitContentVisible"></encounterContent>
        <encounterContent :sendName="handContent" v-if="handContentVisible"></encounterContent>
      </div>

      <ul class="choice" v-if="choiceshow1 && buffer" v-show="index===2">
        <li class="truth"  @click="choiceshow1=false; truthContentVisible=true; buffer=false"></li>
        <li class="excuse" @click="choiceshow1=false; excuseContentVisible=true; buffer=false"></li>
      </ul>
      <li class="reload" v-show="truthContentVisible && choiceshow1 && !buffer && index===2"
          @click="choiceshow1=true;buffer=true;truthContentVisible=false;"></li>
      <ul class="choice" v-if="excuseContentVisible && choiceshow1 && buffer1" v-show="index===2">
        <li class="yes" @click="choiceshow1=false; yesContentVisible=true; buffer1=false"></li>
        <li class="follow" @click="choiceshow1=false; followContentVisible=true; buffer1=false"></li>
      </ul>
      <li class="reload" v-if="yesContentVisible && choiceshow1 && !buffer1 && index===2"
          @click="choiceshow1=true;yesContentVisible=false;buffer1=true"></li>
      <div class="text" v-show="index===2" @scroll="choiceEvent1">
        <encounterContent :sendName="attackContent" ></encounterContent>
        <encounterContent :sendName="truthContent" v-if="truthContentVisible"></encounterContent>
        <encounterContent :sendName="excuseContent" v-if="excuseContentVisible"></encounterContent>
        <encounterContent :sendName="yesContent" v-if="yesContentVisible"></encounterContent>
        <encounterContent :sendName="followContent" v-if="followContentVisible"></encounterContent>
      </div>

      <ul class="choice1" v-if="choiceshow2 && buffer" v-show="index===3">
        <li class="top"  @click="choiceshow2=false; topContentVisible=true; buffer=false"></li>
        <li class="store" @click="choiceshow2=false; storeContentVisible=true; buffer=false"></li>
        <li class="follow1" @click="choiceshow2=false; follow1ContentVisible=true; buffer=false"></li>
      </ul>
      <li class="reload" v-show="(topContentVisible || storeContentVisible) && choiceshow2 && !buffer && index===3"
          @click="choiceshow2=true;buffer=true;topContentVisible=false;storeContentVisible=false"></li>
      <div class="text" v-show="index===3" @scroll="choiceEvent2">
        <encounterContent :sendName="snakeContent" ></encounterContent>
        <encounterContent :sendName="topContent" v-if="topContentVisible"></encounterContent>
        <encounterContent :sendName="follow1Content" v-if="follow1ContentVisible"></encounterContent>
        <encounterContent :sendName="storeContent" v-if="storeContentVisible"></encounterContent>
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
      choiceshow:false,
      choiceshow1:false,
      choiceshow2:false,
      buffer:true,
      buffer1:true,
      wineContentVisible:false,
      bossContentVisible:false,
      wineContent: [
          {
          name: "旁白",
          content:
            "嘀——wine"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      bossContent: [
          {
          name: "旁白",
          content:
            "嘀——boss"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      waitContentVisible:false,
      handContentVisible:false,
      waitContent: [
          {
          name: "旁白",
          content:
            "嘀——wait"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      handContent: [
          {
          name: "旁白",
          content:
            "嘀——hand"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      attackContent: [
        {
          name: "旁白",
          content:
            "嘀——attack"
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
      truthContentVisible:false,
      excuseContentVisible:false,
      truthContent:[
          {
          name: "旁白",
          content:
            "嘀——truth"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      excuseContent:[
          {
          name: "旁白",
          content:
            "嘀——excuse"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      snakeContent: [
        {
          name: "旁白",
          content:
            "嘀——snake"
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
      topContentVisible:false,
      follow1ContentVisible:false,
      storeContentVisible:false,
      topContent:[
          {
          name: "旁白",
          content:
            "嘀——top"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      follow1Content:[
          {
          name: "旁白",
          content:
            "嘀——follow1"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      storeContent:[
          {
          name: "旁白",
          content:
            "嘀——store"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      yesContentVisible:false,
      followContentVisible:false,
      yesContent: [
          {
          name: "旁白",
          content:
            "嘀——yes"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      followContent: [
          {
          name: "旁白",
          content:
            "嘀——follow"
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
    },

    choiceEvent({target:{scrollTop, clientHeight, scrollHeight}}) {
      if (scrollTop + clientHeight >= scrollHeight) {
        this.choiceshow = true
      }
    },
    choiceEvent1({target:{scrollTop, clientHeight, scrollHeight}}) {
      if (scrollTop + clientHeight >= scrollHeight) {
        this.choiceshow1 = true
      }
    },

    choiceEvent2({target:{scrollTop, clientHeight, scrollHeight}}) {
      if (scrollTop + clientHeight >= scrollHeight) {
        this.choiceshow2 = true
      }
    },
  }
}
</script>

<style scoped lang="scss">
.truth_cameout {
  text-align: center;
  width: 100%;
  height: 100%;
  background: url('./邂逅1/bg.png') no-repeat;
  background-size: cover;
  background-position: center;
}

.major-title {
  background: url("./邂逅3/title1.png") no-repeat;
  background-size: 95% 95%;
  height: 70px;
  width: 406px;
  position: relative;
  top:165px;
  left:145px;
}

.content1 {
  background: url("./邂逅3/content1.png");
  background-size: 100% 100%;
  position: relative;
  top:85px;
  left: 110px;
  height: 21px;
  width: 447px;}

.content2 {
  background: url("./邂逅3/content2.png");
  background-size: 100% 100%;
  position: relative;
  top:85px;
  left: 110px;
  height: 21px;
  width: 291px;
}

.content3 {
   background: url("./邂逅3/content3.png");
  background-size: 100% 100%;
  position: relative;
  top:85px;
  left: 110px;
  height: 21px;
  width: 342px;
}

.video-btn {
  background-image: url("./邂逅3/video.png");
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
  background: url('./邂逅3/text.png') no-repeat;
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
  background: url("./邂逅3/暗2-1.png");
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
  background: url("./邂逅3/title2-1.png");
  background-size: 100% 100%;
  cursor: pointer;
  margin-bottom: 20px;
}

.title2 {
  background: url("./邂逅3/暗2-2.png");
  background-size: 100% 100%;
  height: 47px;
  width: 190px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
}

.title2:hover, .title2:focus, .title2.active, {
  background: url("./邂逅3/title2-2.png");
  background-size: 100% 100%;
  cursor: pointer;
  margin-bottom: 20px;
}

.title3 {
  background: url("./邂逅3/暗2-3.png");
  background-size: 100% 100%;
  height: 47px;
  width: 190px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
}

.title3:hover, .title3:focus, .title3.active, {
  background: url("./邂逅3/title2-3.png");
  background-size: 100% 100%;
  cursor: pointer;
  margin-bottom: 20px;
}

.choice {
  display: flex;
  flex-direction: column;
  position: relative;
  float: left;
  top: 400px;
  left: 30px;
}

.choice1 {
  display: flex;
  flex-direction: column;
  position: relative;
  float: left;
  top: 250px;
  left: 30px;
}
.wine {
  background: url("./邂逅3/wine.png");
  margin-bottom: 25px;
}

.boss {
  background: url("./邂逅3/boss.png");
}

.wait {
  background: url("./邂逅3/wait.png");
  margin-bottom: 25px;
}
.hand {
    background: url("./邂逅3/hand.png");
}

.truth {
  background: url("./邂逅3/truth.png");
  margin-bottom: 25px;
}

.excuse {
  background: url("./邂逅3/excuse.png");
}

.top {
  background: url("./邂逅3/top.png");
  margin-bottom: 25px;
}

.follow1 {
  background: url("./邂逅3/follow1.png");
}

.store {
  background: url("./邂逅3/store.png");
  margin-bottom: 25px;
}

.follow {
  background: url("./邂逅3/follow.png");
}

.yes {
  background: url("./邂逅3/yes.png");
  margin-bottom: 25px;
}

.wine, .wait, .boss, .hand,.truth,.excuse,.top,.follow1,.store, .follow, .yes{
  background-size: 100% 100%;
  height: 132px;
  width: 46px;
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.reload {
  background: url("./邂逅1/reload.png");
  background-size: 100% 100%;
  height: 129px;
  width: 43px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  top:530px;
  left:-790px;
}

.text {
  width: 900px;
  height: 500px;
  overflow-y: scroll;
  position: absolute;
  top:150px;
  left:110px
}
.text-div {
  display: flex;
  flex-direction: row;
  font-size: 18px;
  color: white;
  font-family: "nansongshuju";
}
.dialog-p {
  width: 600px;
  margin-bottom: 20px;
}
.dialog-span {
  width: 110px;
}

span[data-person="我"] {
  color: #f38aaf;
  margin-left: 18px;
}
span[data-person="查理苏"] {
  color: #bea7d5;
  margin-right: 35px;
}
span[data-person="旁白"] {
  display: none;
}
p[data-person-p="旁白"] {
  color: #848484;
  text-indent: 2em;
}
p[data-person-p="我"] {
  text-align: right;
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