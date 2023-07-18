<template>
  <div>
    <div class="major-title">
      <div class="content">{{ majorTitle }}</div>
    </div>
    <ul class="minor-titles">
      <span class="title1" tabindex="1"
            @click="show(1);
            choiceshow=false;
            buffer=true; buffer1=true;
            firstChoice=0;
            secondChoice=0"
            :class="Index===1? 'active':''"></span>
      <span class="title2" tabindex="2"
            @click="show(2);
            choiceshow1=false;buffer=true;
            thirdChoice=0;"
            :class="Index===2? 'active':''"></span>
      <span class="title3" tabindex="3"
            @click="show(3)
            choiceshow2=false;buffer=true;
            fourthChoice=0;"
            :class="Index===3? 'active':''"></span>
    </ul>
    <div class="text-bg">
      <ul class="choice"  v-for="(choiceGroup, index) in choiceList" :key="'choiceG'+index" v-show="fontIndex === index&&isBottom&&chooseRigt">
        <li class="goaway" @click=" changeContent(index, choiceindex)" v-for="(choice, choiceindex) in choiceGroup" :key="'choice'+choiceindex">{{ choice.choiceTitle }} </li>
      </ul>
      <div class="reload" @click=" backToPre()" v-show="!chooseRigt&&isBottom">重新选择 </div>
      <div class="text" @scroll="choiceEvent" >
          <encounterContent :sendName="item.subContent" v-show="preIndex +1 >= item.sessionIndex" v-for="(item,index) in contentDataList" :key="'content1'+ index"></encounterContent>
      </div>

    </div>
    <a class="video-btn" target="_blank" href="http://www.bilibili.com"></a>
  </div>
</template>

<script>
import encounterContent from "@/pages/MemoryCollect/encounter/components/encounterContent.vue";
import axios from "axios";
export default {
  components:{encounterContent},
  data() {
    return {
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
            "嘀——12345"
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
            "嘀——67890"
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
            "嘀——66666"
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
              subContent:[
          {
          name: "旁白",
          content:
            "嘀——7777"
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
          choiceContent: [
            {
              firstNum: 1,
              subContent: [
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
            },
            {
              firstNum: 2,
              subContent: [
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
            }
          ],
        },
        {
          sessionIndex: 3,
          subContent: [
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
          choiceContent: [
            {
              firstNum: 1,
              subContent: [
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
            },
            {
              firstNum: 2,
              subContent: [
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
            },
            {
              firstNum: 3,
              subContent: [
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
          ]
        },

      ],
      choiceList: [
      ],
      majorTitle: '原来是你？逃婚小姐', // 后端给你标题
      preIndex: -1,
      fontIndex: -1,
      resData: [],
      chooseRigt: true,
      isBottom: false
    }
  },
  methods: {
    show(value) {
      this.Index === value ? this.isShow = !this.isShow : this.isShow = true
      this.Index = value
    },
    choiceEvent({target:{scrollTop, clientHeight, scrollHeight}}) {
      if (scrollTop + clientHeight >= scrollHeight - 2) {
        this.isBottom = true
        this.fontIndex = this.preIndex+ 1
      }
    },
    initContent (data) {
      this.contentDataList = []
      for (let i in data) {
        if(data[i].para_type  !== 'choice') {
          let item = {
            sessionIndex: i,
            subContent: data[i].normalContent
          }
          this.contentDataList.push(item)
        } else {
          let choiceItem = data[i].xuanxiang[0]
            let item = {
              sessionIndex: i,
              subContent: choiceItem.choice_para
            }            
          this.contentDataList.push(item)
        }
      }
    },
    changeContent (index, j) {
      this.preIndex = index
      this.fontIndex = -1
      this.isBottom = false
      this.chooseRigt = true
      if(j === 1) {
        this.chooseRigt = false
      } else {
        this.chooseRigt = true
      }
      this.contentDataList[index + 1].subContent= this.resData[index + 1].xuanxiang[j].choice_para
    },
    backToPre () {
      this.isBottom = true
      this.chooseRigt = true
      this.preIndex--
      this.fontIndex = this.preIndex + 1
    },
    getTestText () {
      axios.get('../testText.json').then((res) => {
        this.resData = res.data.para
        let data = res.data.para
        this.choiceList = []
        this.initContent(data)
        for (let i in data) {
          if(data[i].para_type  === 'choice') {
            let choiceIndex = 0
            let item = []
            for ( let j in data[i].xuanxiang){
              let choice = {
                choiceIndex: choiceIndex, // 选项标号
                groupIndex: j,
                paraIndex: i,
                choiceTitle: data[i].xuanxiang[j].choice_name, // 选项标题
                isVisited: false // 是否选择过该选项
              }
              choiceIndex++
              item.push(choice)      
            }
          this.choiceList.push(item) 
          }
        }
      })
    },
  },
  activated() {
    this.getTestText()
  }
}
</script>

<style scoped lang="scss">

.major-title {
  background: url("../邂逅1/title1.png") no-repeat;
  background-size: 95% 95%;
  height: 70px;
  width: 322px;
  position: relative;
  top:165px;
  left:145px;
}

.content {
  color: #b99e63;
  font-family: 'nansongshuju';
  position: relative;
  top:85px;
  left: 110px;
  height: 20px;
  width: 188px;
}
.video-btn {
  background-image: url("../邂逅1/video.png");
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
  background: url('../邂逅1/text.png') no-repeat;
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
  background: url("../邂逅1/暗2-1.png");
  background-size: 100% 100%;
  height: 47px;
  width: 190px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
}

.title1:hover, .title1:focus, .title1.active
{
  background: url("../邂逅1/title2-1.png");
  background-size: 100% 100%;
  cursor: pointer;
  margin-bottom: 20px;
}

.title2 {
  background: url("../邂逅1/暗2-2.png");
  background-size: 100% 100%;
  height: 47px;
  width: 190px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
}

.title2:hover, .title2:focus, .title2.active {
  background: url("../邂逅1/title2-2.png");
  background-size: 100% 100%;
  cursor: pointer;
  margin-bottom: 20px;
}

.title3 {
  background: url("../邂逅1/暗2-3.png");
  background-size: 100% 100%;
  height: 47px;
  width: 190px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
}

.title3:hover, .title3:focus, .title3.active {
  background: url("../邂逅1/title2-3.png");
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
  background: url("../邂逅1/goaway.png");
  margin-bottom: 25px;
  color: white;
}

.stay {
  background: url("../邂逅1/stay.png");
}

.away {
  background: url("../邂逅1/away.png");
  margin-bottom: 25px;
}
.stay1 {
    background: url("../邂逅1/stay1.png");
}

.he {
  background: url("../邂逅1/he.png");
  margin-bottom: 25px;
}

.me {
  background: url("../邂逅1/me.png");
}

.yes {
  background: url("../邂逅1/yes.png");
  margin-bottom: 25px;
}

.no {
  background: url("../邂逅1/no.png");

}

.hesitate {
  background: url("../邂逅1/hesitate.png");
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