<template>
  <div class="profile_attract">
    <li v-for="(item,index) in contentDataList" :key="'content'+ index" v-show="Index===item.sessionIndex">
        <a class="video-btn" target="_blank" :href="item.videoUrl"></a>
    </li>
    <div class="title"></div>
    <div class="night2" v-show="Index===1 || Index===0" @click="show(2);"></div>
    <div class="light1" v-show="Index===1 || Index===0"></div>
    <div class="night1" v-show="Index===2" @click="show(1);"></div>
    <div class="light2" v-show="Index===2"></div>
    <ul class="btns">
      <li class="origin" tabindex="0" @click="show(0);" :class="Index===0? 'active':''"></li>
      <li class="light" tabindex="1" @click="show(1);" :class="Index===1? 'active':''"></li>
      <li class="night" tabindex="2" @click="show(2);" :class="Index===2? 'active':''"></li>
    </ul>
    <div class="text-bg">
      <div class="text">
        <ul>
          <li v-for="(item,index) in contentDataList" :key="'content'+ index" v-show="Index===item.sessionIndex">
            <profileContent :sendName="subContent"></profileContent>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
import profileContent from "@/pages/MemoryCollect/profile/profileContent";
import {getPP} from "@/request/api";
export default {
  components:{profileContent},
  data() {
    return {
      Index: 0,
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
    getPara() {
      getPP({cardindex:1,sessionIndex:this.Index}).then((res) => {
        this.subContent=[]
        this.contentDataList=[]
            for( let i in res.subContent) {
              let dia= {
                name: res.subContent[i]["name"],
                content:res.subContent[i]["content"],
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

<style scoped lang="scss">
.title {
  background: url("./侧影2/title.png");
  background-size: 100% 100% ;
  position: fixed;
  top:850px;
  left:190px;
  width: 280px;
  height: 70px;
}

.video-btn {
  background-image: url("./侧影2/video.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: absolute;
  top: 230px;
  left: 1570px;
  width: 145px;
  height: 46px;
  display: inline-block;
}


.btns {
  display: flex;
  flex-direction: column;
  top: 600px;
  left: 700px;
  position: fixed;
  float: left;
}

.origin,.light,.night {
  background-size: 100% 100%;
  height: 95px;
  width: 43px;
  cursor: pointer;
}

.origin {
  background-image: url("./侧影2/origin.png");
  margin-bottom: 20px;
  display: inline-block;
}
.origin:hover, .origin:focus, .origin.active {
  background: url("./侧影2/origin1.png");
  background-size: 100% 100%;
  cursor: pointer;
  margin-bottom: 20px;
}

.light {
  background-image: url("./侧影2/light.png");
  margin-bottom: 20px;
  display: inline-block;
}

.light:hover, .light:focus, .light.active {
  background: url("./侧影2/light1.png");
  background-size: 100% 100%;
  cursor: pointer;
  margin-bottom: 20px;
}
.night {
  background-image: url("./侧影2/night.png");
  display: inline-block;
}
.night:hover, .night:focus, .night.active {
  background: url("./侧影2/night1.png");
  background-size: 100% 100%;
  cursor: pointer;
  margin-bottom: 20px;
}


.night2 {
  background-image: url("./侧影2/暗2.png");
  background-size: 100% 100%;
  position: fixed;
  top: 370px;
  left: 190px;
  width: 349px;
  height: 424px;
  cursor: pointer;
}
.light1 {
  background-image: url("./侧影2/光1.png");
  background-size: 100% 100%;
  position: fixed;
  top: 310px;
  left: 190px;
  width: 349px;
  height: 424px;
}

.night1 {
  background-image: url("./侧影2/暗1.png");
  background-size: 100% 100%;
  position: fixed;
  top: 370px;
  left: 190px;
  width: 349px;
  height: 424px;
  cursor: pointer;
}
.light2 {
  background-image: url("./侧影2/光2.png");
  background-size: 100% 100%;
  position: fixed;
  top: 310px;
  left: 190px;
  width: 349px;
  height: 424px;
}

.text-bg {
  background: url('./侧影1/text-bg.png') no-repeat;
  background-size: 100% 100%;
  height: 641px;
  width: 959px;
  position: fixed;
  top:300px;
  left:760px;
}

.text {
  width: 900px;
  height: 580px;
  overflow-y: scroll;
  position: absolute;
  top:15px;
  left:20px;
  white-space: pre-wrap;
  line-height: 20px;
}

::-webkit-scrollbar {
  width: 20px;
  margin-left: -30px;
  display: flex;
}
::-webkit-scrollbar-track {
  border:1px solid #d6b367;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  border: 3px solid transparent;
  background-clip: content-box;
  background-color: rgb(185,158,99,0.5);
  border-radius: 10px;
}

</style>