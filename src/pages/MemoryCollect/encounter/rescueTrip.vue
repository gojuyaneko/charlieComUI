<template>
  <div class="rescue_trip">
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
            goawayContentVisible=false;
            stayContentVisible=false
            awayContentVisible=false
            stay1ContentVisible=false"
            :class="index===1? 'active':''"
      ></span>
      <span class="title2" tabindex="2"
            @click="show(2);
            choiceshow1=false;buffer=true;
            heContentVisible=false;
            meContentVisible=false;"
            :class="index===2? 'active':''"></span>
      <span class="title3" tabindex="3"
            @click="show(3)
            choiceshow2=false;buffer=true;
            yesContentVisible=false;
            noContentVisible=false;
            hesitateContentVisible=false;"
            :class="index===3? 'active':''"></span>
    </ul>
    <div class="text-bg">
      <ul class="choice" v-if="choiceshow && buffer" v-show="index===1">
        <li class="goaway" @click="choiceshow=false; goawayContentVisible=true; buffer=false"></li>
        <li class="stay" @click="choiceshow=false; stayContentVisible=true; buffer=false"></li>
      </ul>
      <li class="reload" v-show="goawayContentVisible && choiceshow && !buffer && index===1" @click="choiceshow=true;buffer=true;goawayContentVisible=false;"></li>
      <ul class="choice" v-if="stayContentVisible && choiceshow && buffer1" v-show="index===1">
        <li class="away" @click="choiceshow=false; awayContentVisible=true; buffer1=false"></li>
        <li class="stay1" @click="choiceshow=false; stay1ContentVisible=true; buffer1=false"></li>
      </ul>
      <li class="reload" v-show="awayContentVisible && choiceshow && !buffer1 && index===1" @click="choiceshow=true;awayContentVisible=false;buffer1=true"></li>
      <div class="text" v-show="index===1" @scroll="choiceEvent">
        <encounterContent :sendName="meetContent" ></encounterContent>
        <encounterContent :sendName="goawayContent" v-if="goawayContentVisible"></encounterContent>
        <encounterContent :sendName="stayContent" v-if="stayContentVisible"></encounterContent>
        <encounterContent :sendName="awayContent" v-if="awayContentVisible"></encounterContent>
        <encounterContent :sendName="stay1Content" v-if="stay1ContentVisible"></encounterContent>
      </div>

      <ul class="choice" v-if="choiceshow1 && buffer" v-show="index===2">
        <li class="he"  @click="choiceshow1=false; heContentVisible=true; buffer=false"></li>
        <li class="me" @click="choiceshow1=false; meContentVisible=true; buffer=false"></li>
      </ul>
      <li class="reload" v-show="heContentVisible && choiceshow1 && !buffer && index===2" @click="choiceshow1=true;buffer=true;heContentVisible=false;"></li>
      <div class="text" v-show="index===2" @scroll="choiceEvent1">
        <encounterContent :sendName="liveContent" ></encounterContent>
        <encounterContent :sendName="heContent" v-if="heContentVisible"></encounterContent>
        <encounterContent :sendName="meContent" v-if="meContentVisible"></encounterContent>
      </div>

      <ul class="choice1" v-if="choiceshow2 && buffer" v-show="index===3">
        <li class="yes"  @click="choiceshow2=false; yesContentVisible=true; buffer=false"></li>
        <li class="hesitate" @click="choiceshow2=false; hesitateContentVisible=true; buffer=false"></li>
        <li class="no" @click="choiceshow2=false; noContentVisible=true; buffer=false"></li>
      </ul>
      <li class="reload" v-show="(yesContentVisible || hesitateContentVisible) && choiceshow2 && !buffer && index===3"
          @click="choiceshow2=true;buffer=true;yesContentVisible=false;hesitateContentVisible=false"></li>
      <div class="text" v-show="index===3" @scroll="choiceEvent2">
        <encounterContent :sendName="accidentContent" ></encounterContent>
        <encounterContent :sendName="yesContent" v-if="yesContentVisible"></encounterContent>
        <encounterContent :sendName="noContent" v-if="noContentVisible"></encounterContent>
        <encounterContent :sendName="hesitateContent" v-if="hesitateContentVisible"></encounterContent>
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
      goawayContentVisible:false,
      stayContentVisible:false,
      goawayContent: [
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
      stayContent: [
          {
          name: "旁白",
          content:
            "嘀——67890"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      awayContentVisible:false,
      stay1ContentVisible:false,
      awayContent: [
          {
          name: "旁白",
          content:
            "嘀——away"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      stay1Content: [
          {
          name: "旁白",
          content:
            "嘀——stay"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      liveContent: [
        {
          name: "旁白",
          content:
            "嘀——live"
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
      heContentVisible:false,
      meContentVisible:false,
      heContent:[
          {
          name: "旁白",
          content:
            "嘀——he"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      meContent:[
          {
          name: "旁白",
          content:
            "嘀——me"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      accidentContent: [
        {
          name: "旁白",
          content:
            "嘀——live"
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
      yesContentVisible:false,
      noContentVisible:false,
      hesitateContentVisible:false,
      yesContent:[
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
      noContent:[
          {
          name: "旁白",
          content:
            "嘀——no"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      hesitateContent:[
          {
          name: "旁白",
          content:
            "嘀——hesitate"
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

.title2:hover, .title2:focus, .title2.active {
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

.title3:hover, .title3:focus, .title3.active {
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
.goaway {
  background: url("./邂逅1/goaway.png");
  margin-bottom: 25px;
}

.stay {
  background: url("./邂逅1/stay.png");
}

.away {
  background: url("./邂逅1/away.png");
  margin-bottom: 25px;
}
.stay1 {
    background: url("./邂逅1/stay1.png");
}

.he {
  background: url("./邂逅1/he.png");
  margin-bottom: 25px;
}

.me {
  background: url("./邂逅1/me.png");
}

.yes {
  background: url("./邂逅1/yes.png");
  margin-bottom: 25px;
}

.no {
  background: url("./邂逅1/no.png");

}

.hesitate {
  background: url("./邂逅1/hesitate.png");
  margin-bottom: 25px;
}

.goaway, .away, .stay, .stay1,.he,.me,.yes,.no,.hesitate {
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