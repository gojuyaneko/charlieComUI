<template>
  <div>
    <div class="major-title">
      <div class="content1" v-show="Index===1"></div>
      <div class="content2" v-show="Index===2"></div>
      <div class="content3" v-show="Index===3"></div>
    </div>
    <ul class="minor-titles">
      <span class="title1" tabindex="1"
            @click="show(1);
            choiceshow=false;
            buffer=true; buffer1=true;
            firstChoice=0;
            secondChoice=0"
            :class="Index===1? 'active':''"
      ></span>
      <span class="title2" tabindex="2"
            @click="show(2);
            choiceshow1=false;
            buffer=true; buffer1=true;
            thirdChoice=0;"
            :class="Index===2? 'active':''"></span>
      <span class="title3" tabindex="3"
            @click="show(3)
            choiceshow2=false;buffer=true;buffer1=true;
            fourthChoice=0;
            fifthChoice=0;"
            :class="Index===3? 'active':''"></span>
    </ul>
    <div class="text-bg">
      <ul class="choice" v-if="choiceshow && buffer" v-show="Index===1">
        <li class="rest" @click="choiceshow=false; firstChoice=1; buffer=false"></li>
        <li class="argue" @click="choiceshow=false; firstChoice=2; buffer=false"></li>
      </ul>
      <li class="reload" v-show="firstChoice===1 && choiceshow && !buffer && Index===1"
          @click="choiceshow=true;buffer=true;firstChoice=0;"></li>
      <ul class="choice" v-if="firstChoice===2 && choiceshow && buffer1" v-show="Index===1">
        <li class="agree" @click="choiceshow=false; secondChoice=1; buffer1=false"></li>
        <li class="disagree" @click="choiceshow=false; secondChoice=2; buffer1=false"></li>
      </ul>
      <li class="reload" v-if="secondChoice===1 && choiceshow && !buffer1 && Index===1"
          @click="choiceshow=true;secondChoice=0;buffer1=true"></li>

      <ul class="choice" v-if="choiceshow1 && buffer" v-show="Index===2">
        <li class="walk"  @click="choiceshow1=false; thirdChoice=1; buffer=false"></li>
        <li class="wake" @click="choiceshow1=false; thirdChoice=2; buffer=false"></li>
      </ul>
      <li class="reload" v-show="thirdChoice===1 && choiceshow1 && !buffer && Index===2"
          @click="choiceshow1=true;buffer=true;thirdChoice=0;"></li>

      <ul class="choice" v-if="choiceshow2 && buffer" v-show="Index===3">
        <li class="dont"  @click="choiceshow2=false; fourthChoice=1; buffer=false"></li>
        <li class="together" @click="choiceshow2=false; fourthChoice=2; buffer=false"></li>
      </ul>
      <li class="reload" v-show="fourthChoice===1 && choiceshow2 && !buffer && Index===3"
          @click="choiceshow2=true;buffer=true;fourthChoice=0;"></li>

      <ul class="choice" v-if="fourthChoice===2 && choiceshow2 && buffer1" v-show="Index===3">
        <li class="persuade"  @click="choiceshow2=false; fifthChoice=2; buffer1=false"></li>
        <li class="together1" @click="choiceshow2=false; fifthChoice=1; buffer1=false"></li>
      </ul>
      <li class="reload" v-show="fifthChoice===2 && choiceshow2 && !buffer1 && Index===3"
          @click="choiceshow2=true;buffer1=true;fifthChoice=0;"></li>

      <div class="text" @scroll="choiceEvent" v-for="(item,index) in contentDataList" :key="'content'+ index" v-show="Index===item.sessionIndex">
          <encounterContent :sendName="item.subContent" ></encounterContent>
          <li v-for="(item,index) in item.choiceContent" :key="'content'+ index">
            <encounterContent :sendName="item.subContent"
                              v-if="(firstChoice || thirdChoice || fourthChoice)===item.firstNum || (secondChoice || fifthChoice)===item.secondNum"></encounterContent>
          </li>
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
      Index: 1,
      contentDataList:[
        {
          sessionIndex:1,
          subContent: [
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
          choiceContent:[
            {
              firstNum:1,
              subContent:[
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
            },
            {
              firstNum:2,
              subContent:[
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
            },
            {
              secondNum:1,
              subContent:[
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
            },
              {
              secondNum:2,
              subContent: [
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
            },
          ],
        },
        {
          sessionIndex: 2,
          subContent: [
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
          choiceContent: [
            {
              firstNum: 1,
              subContent: [
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
            },
            {
              firstNum: 2,
              subContent: [
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
            }
          ],
        },
        {
          sessionIndex: 3,
          subContent: [
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
          choiceContent: [
            {
              firstNum: 1,
              subContent: [
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
            },
            {
              firstNum: 2,
              subContent: [
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
            },
            {
              secondNum: 1,
              subContent: [
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
            },
            {
              secondNum: 2,
              subContent: [
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
            },

          ]
        },

      ],
      choiceshow:false,
      choiceshow1:false,
      choiceshow2:false,
      buffer:true,
      buffer1:true,
      firstChoice:0,
      secondChoice:0,
      thirdChoice:0,
      fourthChoice:0,
      fifthChoice:0,

    }
  },
  methods: {
    show(value) {
      this.Index === value ? this.isShow = !this.isShow : this.isShow = true
      this.Index = value
    },

    choiceEvent({target:{scrollTop, clientHeight, scrollHeight}}) {
      if (scrollTop + clientHeight >= scrollHeight) {
        if (this.Index ===1) {this.choiceshow = true}
        if (this.Index ===2) {this.choiceshow1 = true}
        if (this.Index ===3) {this.choiceshow2 = true}

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