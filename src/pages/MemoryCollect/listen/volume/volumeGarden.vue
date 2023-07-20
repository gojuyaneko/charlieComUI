<template>
<div class="garden">
  <li v-for="(item,index) in contentDataList" :key="'content'+ index" v-show="Index===item.sessionIndex">
        <a class="video-btn" target="_blank" :href="item.videoUrl"></a>
  </li>
    <div class="title"></div>
    <div class="change"  @mouseenter="changeImg(true)" @mouseleave="changeImg(false)">
          <div :class="isUp ? 'border' : 'border-cover'" >
            <img :src="card1" class="itemImg" />
          </div>
          <div :class="!isUp ? 'border' : 'border-cover'" >
            <img :src="card2" class="itemImg" />
          </div>
  </div>

   <div class="text-bg">
      <div class="text">
        <ul>
          <li v-for="(item,index) in contentDataList" :key="'content'+ index" v-show="Index===item.sessionIndex">
            <volumeContent :sendName="subContent"></volumeContent>

          </li>
        </ul>
      </div>
    </div>
    <ul class="btns">
      <li class="btn1" tabindex="0" @click="show(0);" :class="Index===0? 'active':''"></li>
      <li class="btn2" tabindex="1" @click="show(1);" :class="Index===1? 'active':''"></li>
      <li class="btn3" tabindex="2" @click="show(2);" :class="Index===2? 'active':''"></li>
      <li class="btn4" tabindex="3" @click="show(3);" :class="Index===3? 'active':''"></li>
    </ul>
  </div>
</template>

<script>
import volumeContent from "@/pages/MemoryCollect/listen/volume/components/volumeContent.vue";
import {getVP} from "@/request/api";
export default {
  components:{volumeContent,},
  data() {
    return {
      card1:require('./余音3/card1.png'),
      card2:require('./余音3/card2.png'),
      temp:1,
      Index: 0,
      isUp: true,
      contentDataList: [],
      subContent:[],
    }
  },
  mounted () {
    this.getPara()
  },
  methods: {
    show(value) {
      this.Index === value ? this.isShow = !this.isShow : this.isShow = true
      this.Index = value
      console.log(this.Index)
      this.getPara()
    },
    change(){
      if(this.temp === 0){
        this.temp = 1
      }else{
         this.temp = 0
      }
      this.getPara()
    },
    changeImg(flag) {
      this.isUp = flag
      this.getPara()
    },
    getPara() {
      getVP({cardindex:2,sessionIndex:this.Index}).then((res) => {
        this.subContent=[]
        this.contentDataList=[]
            for( let i in res.subContent) {
              let type = res.subContent[i]["type"] ? 'content' : 'title'
              let dia= {
                type: res.subContent[i]["type"],
                content:res.subContent[i][type],
              }
              this.subContent.push(dia)
            }
            let item = {
              sessionIndex:this.Index,
                videoUrl: res.videoUrl,
            }
            this.contentDataList.push(item)

      })
    }
  }
}
</script>

<style scoped>

.garden {
  text-align: center;
  width: 100%;
  height: 100%;
  background-size: auto ;
  background-position: center;
}

.video-btn {
  background-image: url("./余音3/video.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: absolute;
  top: 160px;
  left: 1550px;
  width: 145px;
  height: 46px;
  display: inline-block;
}

.title {
  background: url("./余音3/title.png")no-repeat;
  background-size: 95% 95% ;
  position: absolute;
  width: 326px;
  height: 101px;
  top:280px;
  right:190px;
  float: right;
}

.change {
  width: 540px;
  height: 300px;
  background-size: 100% 100%;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  top:370px;
  left: 1320px;
}
.change .border {
  width: 432px;
  height: 611px;
  position: absolute;
  z-index: 2;
  top: -22px;
  left: 36px;
  transition: width 0.01s;
  overflow: hidden;
}
.change .border-cover {
  width: 429px;
  height: 608px;
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 62px;
  overflow: hidden;
  filter: contrast(0.5);
}
.change:hover .border-cover {
  transition: all 0.3s;
}
.change .border img {
  width: 95%;
  height: 95%;
  background: transparent;
}
.change .border-cover img {
  width: 95%;
  height: 95%;
  background: transparent;
}

.text-bg {
  background: url('./余音3/text-bg.png') no-repeat;
  background-size: 100% 100%;
  height: 700px;
  width: 1060px;
  position: fixed;
  top:300px;
  left:190px;
}

.btns {
  display: flex;
  flex-direction: column;
  top:760px;
  float:right;
  right:565px;
  position: fixed;
}

.btn1 {
  background-image: url("./余音3/暗1.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  height: 38px;
  width: 38px;
  margin-bottom: 8px;
}

.btn1:hover, .btn1:focus, .btn1.active {
  background-image: url("./余音3/亮1.png");
  background-size: 100% 100%;
  cursor: pointer;
}

.btn2 {
  background-image: url("./余音3/暗2.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  height: 38px;
  width: 38px;
  margin-bottom: 8px;
}

.btn2:hover, .btn2:focus, .btn2.active {
  background-image: url("./余音3/亮2.png");
  background-size: 100% 100%;
  cursor: pointer;
}

.btn3 {
  background-image: url("./余音3/暗3.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  height: 38px;
  width: 38px;
  margin-bottom: 8px;
}

.btn3:hover, .btn3:focus, .btn3.active {
  background-image: url("./余音3/亮3.png");
  background-size: 100% 100%;
  cursor: pointer;
}

.btn4 {
  background-image: url("./余音3/暗4.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  height: 38px;
  width: 38px;
  margin-bottom: 8px;
}

.btn4:hover, .btn4:focus, .btn4.active {
  background-image: url("./余音3/亮4.png");
  background-size: 100% 100%;
  cursor: pointer;
}

.text {
  width: 1100px;
  height: 610px;
  overflow-y: scroll;
  position: absolute;
  top:45px;
  left:10px;
  white-space: pre-wrap;
  line-height: 20px;
}

::-webkit-scrollbar {
  display: none;
}
::-webkit-scrollbar-track {
  display: none;
}
::-webkit-scrollbar-thumb {
  display: none;
}
</style>