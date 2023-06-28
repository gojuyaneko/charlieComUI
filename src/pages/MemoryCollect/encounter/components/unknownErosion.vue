<template>
  <div>
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
            restContentVisible=false;
            argueContentVisible=false
            agreeContentVisible=false
            disagreeContentVisible=false"
            :class="index===1? 'active':''"
      ></span>
      <span class="title2" tabindex="2"
            @click="show(2);
            choiceshow1=false;
            buffer=true; buffer1=true;
            walkContentVisible=false;
            wakeContentVisible=false;"
            :class="index===2? 'active':''"></span>
      <span class="title3" tabindex="3"
            @click="show(3)
            choiceshow2=false;buffer=true;
            dontContentVisible=false;
            togetherContentVisible=false;
            persuadeContentVisible=false;
            together1ContentVisible=false;"
            :class="index===3? 'active':''"></span>
    </ul>
    <div class="text-bg">
      <ul class="choice" v-if="choiceshow && buffer" v-show="index===1">
        <li class="rest" @click="choiceshow=false; restContentVisible=true; buffer=false"></li>
        <li class="argue" @click="choiceshow=false; argueContentVisible=true; buffer=false"></li>
      </ul>
      <li class="reload" v-show="restContentVisible && choiceshow && !buffer && index===1"
          @click="choiceshow=true;buffer=true;restContentVisible=false;"></li>
      <ul class="choice" v-if="argueContentVisible && choiceshow && buffer1" v-show="index===1">
        <li class="agree" @click="choiceshow=false; agreeContentVisible=true; buffer1=false"></li>
        <li class="disagree" @click="choiceshow=false; disagreeContentVisible=true; buffer1=false"></li>
      </ul>
      <li class="reload" v-if="agreeContentVisible && choiceshow && !buffer1 && index===1"
          @click="choiceshow=true;agreeContentVisible=false;buffer1=true"></li>
      <div class="text" v-show="index===1" @scroll="choiceEvent">
        <encounterContent :sendName="suspectContent" ></encounterContent>
        <encounterContent :sendName="restContent" v-if="restContentVisible"></encounterContent>
        <encounterContent :sendName="argueContent" v-if="argueContentVisible"></encounterContent>
        <encounterContent :sendName="agreeContent" v-if="agreeContentVisible"></encounterContent>
        <encounterContent :sendName="disagreeContent" v-if="disagreeContentVisible"></encounterContent>
      </div>

      <ul class="choice" v-if="choiceshow1 && buffer" v-show="index===2">
        <li class="walk"  @click="choiceshow1=false; walkContentVisible=true; buffer=false"></li>
        <li class="wake" @click="choiceshow1=false; wakeContentVisible=true; buffer=false"></li>
      </ul>
      <li class="reload" v-show="walkContentVisible && choiceshow1 && !buffer && index===2"
          @click="choiceshow1=true;buffer=true;walkContentVisible=false;"></li>
      <div class="text" v-show="index===2" @scroll="choiceEvent1">
        <encounterContent :sendName="doctorContent" ></encounterContent>
        <encounterContent :sendName="walkContent" v-if="walkContentVisible"></encounterContent>
        <encounterContent :sendName="wakeContent" v-if="wakeContentVisible"></encounterContent>
      </div>

      <ul class="choice" v-if="choiceshow2 && buffer" v-show="index===3">
        <li class="dont"  @click="choiceshow2=false; dontContentVisible=true; buffer=false"></li>
        <li class="together" @click="choiceshow2=false; togetherContentVisible=true; buffer=false"></li>
      </ul>
      <li class="reload" v-show="dontContentVisible && choiceshow2 && !buffer && index===3"
          @click="choiceshow2=true;buffer=true;dontContentVisible=false;"></li>

      <ul class="choice" v-if="togetherContentVisible && choiceshow2 && buffer1" v-show="index===3">
        <li class="persuade"  @click="choiceshow2=false; persuadeContentVisible=true; buffer1=false"></li>
        <li class="together1" @click="choiceshow2=false; together1ContentVisible=true; buffer1=false"></li>
      </ul>
      <li class="reload" v-show="persuadeContentVisible && choiceshow2 && !buffer1 && index===3"
          @click="choiceshow2=true;buffer1=true;persuadeContentVisible=false;"></li>
      <div class="text" v-show="index===3" @scroll="choiceEvent2">
        <encounterContent :sendName="windContent" ></encounterContent>
        <encounterContent :sendName="dontContent" v-if="dontContentVisible"></encounterContent>
        <encounterContent :sendName="togetherContent" v-if="togetherContentVisible"></encounterContent>
        <encounterContent :sendName="persuadeContent" v-if="persuadeContentVisible"></encounterContent>
        <encounterContent :sendName="together1Content" v-if="together1ContentVisible"></encounterContent>
      </div>
    </div>

    <a class="video-btn" target="_blank" href="http://www.bilibili.com"></a>
  </div>
</template>

<script>
import encounterContent from "@/pages/MemoryCollect/encounter/components/encounterContent.vue";
export default {
  components:{encounterContent},
  data() {
    return {
      index: 1,
      suspectContent: [
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
      restContentVisible:false,
      argueContentVisible:false,
      restContent: [
          {
          name: "旁白",
          content:
            "嘀——rest"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      argueContent: [
          {
          name: "旁白",
          content:
            "嘀——argue"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      agreeContentVisible:false,
      disagreeContentVisible:false,
      agreeContent: [
          {
          name: "旁白",
          content:
            "嘀——agree"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      disagreeContent: [
          {
          name: "旁白",
          content:
            "嘀——disagree"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      doctorContent: [
        {
          name: "旁白",
          content:
            "嘀——doctor"
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
      walkContentVisible:false,
      wakeContentVisible:false,
      walkContent:[
          {
          name: "旁白",
          content:
            "嘀——walk"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      wakeContent:[
          {
          name: "旁白",
          content:
            "嘀——wake"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      windContent: [
        {
          name: "旁白",
          content:
            "嘀——wind"
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
      dontContentVisible:false,
      togetherContentVisible:false,
      dontContent:[
          {
          name: "旁白",
          content:
            "嘀——dont"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      togetherContent:[
          {
          name: "旁白",
          content:
            "嘀——together"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      together1ContentVisible:false,
      persuadeContentVisible:false,
      together1Content:[
          {
          name: "旁白",
          content:
            "嘀——together1"
        },
        {
          name: "护士",
          content:
            "查医生，7号床发生窦性心动过速！心率已达160次！",
        },
      ],
      persuadeContent:[
          {
          name: "旁白",
          content:
            "嘀——persuade"
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

.major-title {
  background: url("../邂逅2/title1.png") no-repeat;
  background-size: 95% 95%;
  height: 70px;
  width: 275px;
  position: relative;
  top:165px;
  left:180px;
}

.content1 {
  background: url("../邂逅2/content1.png");
  background-size: 100% 100%;
  position: relative;
  top:85px;
  left: 75px;
  height: 21px;
  width: 418px;
}

.content2 {
  background: url("../邂逅2/content2.png");
  background-size: 100% 100%;
  position: relative;
  top:85px;
  left: 75px;
  height: 21px;
  width: 299px;
}

.content3 {
   background: url("../邂逅2/content3.png");
  background-size: 100% 100%;
  position: relative;
  top:85px;
  left: 75px;
  height: 21px;
  width: 248px;
}

.video-btn {
  background-image: url("../邂逅2/video.png");
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
  background: url('../邂逅3/text.png') no-repeat;
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
  background: url("../邂逅2/暗2-1.png");
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
  background: url("../邂逅2/title2-1.png");
  background-size: 100% 100%;
  cursor: pointer;
  margin-bottom: 20px;
}

.title2 {
  background: url("../邂逅2/暗2-2.png");
  background-size: 100% 100%;
  height: 47px;
  width: 190px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
}

.title2:hover, .title2:focus, .title2.active, {
  background: url("../邂逅2/title2-2.png");
  background-size: 100% 100%;
  cursor: pointer;
  margin-bottom: 20px;
}

.title3 {
  background: url("../邂逅2/暗2-3.png");
  background-size: 100% 100%;
  height: 47px;
  width: 190px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
}

.title3:hover, .title3:focus, .title3.active, {
  background: url("../邂逅2/title2-3.png");
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

.rest {
  background: url("../邂逅2/rest.png");
  margin-bottom: 25px;
}

.argue {
  background: url("../邂逅2/argue.png");
}

.agree {
  background: url("../邂逅2/agree.png");
  margin-bottom: 25px;
}
.disagree {
    background: url("../邂逅2/disagree.png");
}

.walk {
  background: url("../邂逅2/walk.png");
  margin-bottom: 25px;
}

.wake {
  background: url("../邂逅2/wake.png");
}

.dont {
  background: url("../邂逅2/dont.png");
  margin-bottom: 25px;
}

.persuade {
  background: url("../邂逅2/persuade.png");
  margin-bottom: 25px;
}

.together {
  background: url("../邂逅2/together.png");
  margin-bottom: 25px;
}

.together1 {
  background: url("../邂逅2/together.png");

}


.rest, .agree, .argue, .disagree,.walk,.wake,.dont,.together1,.together, .persuade {
  background-size: 100% 100%;
  height: 132px;
  width: 46px;
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.reload {
  background: url("../邂逅1/reload.png");
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