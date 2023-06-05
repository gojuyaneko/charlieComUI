<template>
  <div class="truth_cameout">
    <div class="major-title">
      <div class="content1" v-show="index===1"></div>
      <div class="content2" v-show="index===2"></div>
      <div class="content3" v-show="index===3"></div>
    </div>
    <ul class="minor-titles">
      <span class="title1" tabindex="1" @click="show(1)" :class="index===1? 'active':''" ></span>
      <span class="title2" tabindex="2" @click="show(2)" :class="index===2"></span>
      <span class="title3" tabindex="3" @click="show(3)" :class="index===3"></span>
    </ul>
    <div class="text-bg">
      <div class="text" v-show="index===1">
        <div v-for="( item,index) in meetContent" :key="index" class="text-div">
          <span class="dialog-span">
            <span v-if="item.name !== '我' && item.name !== '查理苏'" :data-person="item.name" style="color:#b99e63;margin-right: 25px;">{{item.name }}</span>
            <span v-if="item.name === '查理苏'" :data-person="item.name">{{item.name }}</span>
          </span>
          <p class="dialog-p" :data-person-p="item.name" v-if="item.name !== '我' && item.name!=='旁白'" style="text-align: left">{{ item.content }}</p>
          <p class="dialog-p" :data-person-p="item.name" v-if="item.name === '我' || item.name==='旁白'">{{ item.content }}</p>
          <span class="dialog-span">
            <span v-if="item.name === '我'" :data-person="item.name">
              {{ item.name }}
            </span>
          </span>
        </div>
      </div>
      <ul class="choice">
          <li class="choice1" v-show="index===1"></li>
          <li class="choice2" v-show="index===1"></li>
        </ul>
    </div>

    <a class="video-btn" target="_blank" href="http://www.bilibili.com"></a>
  </div>
</template>

<script>
export default {
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

.title2:hover, .title2:focus {
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

.title3:hover, .title3:focus {
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
  top: -100px;
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

.text {
  width: 900px;
  height: 500px;
  overflow-y: scroll;
  position: relative;
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