<template>
  <div class="dream">
    <li v-for="(item,index) in contentDataList" :key="'content'+ index" v-show="Index===item.sessionIndex">
        <a class="video-btn" target="_blank" :href="item.videoUrl"></a>
    </li>
    <div class="title"></div>
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
  components:{volumeContent},
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
      getVP({cardindex:0,sessionIndex:this.Index}).then((res) => {
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

.video-btn {
  background-image: url("./余音1/video.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: absolute;
  top: 170px;
  left: 1675px;
  width: 145px;
  height: 46px;
  display: inline-block;
}

.title {
  background: url("./余音1/title.png");
  background-size: 100% 100% ;
  position: absolute;
  width: 213px;
  height: 101px;
  top:265px;
  right:200px;
  float: right;
}

.text-bg {
  background: url('./余音1/text-bg.png') no-repeat;
  background-size: 100% 100%;
  height: 641px;
  width: 1519px;
  position: relative;
  display: flex;
  top:250px;
  left:190px;
}

.btns {
  display: flex;
  flex-direction: row;
  top:120px;
  float:right;
  right:200px;
  position: relative;
}

.btn1 {
  background-image: url("./余音1/暗1.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  height: 38px;
  width: 38px;
  margin-right: 10px;
}

.btn1:hover, .btn1:focus, .btn1.active {
  background-image: url("./余音1/亮1.png");
  background-size: 100% 100%;
  cursor: pointer;
}

.btn2 {
  background-image: url("./余音1/暗2.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  height: 38px;
  width: 38px;
  margin-right: 10px;
}

.btn2:hover, .btn2:focus, .btn2.active {
  background-image: url("./余音1/亮2.png");
  background-size: 100% 100%;
  cursor: pointer;
}

.btn3 {
  background-image: url("./余音1/暗3.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  height: 38px;
  width: 38px;
  margin-right: 10px;
}

.btn3:hover, .btn3:focus, .btn3.active {
  background-image: url("./余音1/亮3.png");
  background-size: 100% 100%;
  cursor: pointer;
}

.btn4 {
  background-image: url("./余音1/暗4.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  height: 38px;
  width: 38px;
  margin-right: 10px;
}

.btn4:hover, .btn4:focus, .btn4.active {
  background-image: url("./余音1/亮4.png");
  background-size: 100% 100%;
  cursor: pointer;
}

.text {
  width: 1100px;
  height: 550px;
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























