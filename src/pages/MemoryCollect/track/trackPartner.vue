<template>
  <div class="partner">
    <li v-for="(item,index) in contentDataList" :key="'content'+ index" v-show="Index===item.sessionIndex">
        <a class="video-btn" target="_blank" :href="item.videoUrl"></a>
    </li>
    <div class="title"></div>
    <div class="titles" v-for="(item,index) in minorTitles" :key="index" v-show="item.num===Index">
      <img :src="item.bg" alt="" class="title-img"/>
    </div>
    <ul class="btns">
      <li class="btn1" tabindex="0" @click="show(0);" :class="Index===0? 'active':''"></li>
      <li class="btn2" tabindex="1" @click="show(1);" :class="Index===1? 'active':''"></li>
      <li class="btn3" tabindex="2" @click="show(2);" :class="Index===2? 'active':''"></li>
      <li class="btn4" tabindex="3" @click="show(3);" :class="Index===3? 'active':''"></li>
      <li class="btn5" tabindex="4" @click="show(4);" :class="Index===4? 'active':''"></li>
      <li class="btn6" tabindex="5" @click="show(5);" :class="Index===5? 'active':''"></li>
    </ul>
    <ul class="active">
      <li class="active1" v-show="Index===0"></li>
      <li class="active2" v-show="Index===1"></li>
      <li class="active3" v-show="Index===2"></li>
      <li class="active4" v-show="Index===3"></li>
      <li class="active5" v-show="Index===4"></li>
      <li class="active6" v-show="Index===5"></li>
    </ul>
    <div class="dates" v-for="(item,index) in minorDates" :key="index" v-show="item.num===Index">
      <img :src="item.bg" alt="" class="date-img"/>
    </div>
    <div class="text">
      <ul>
        <li v-for="(item,index) in contentDataList" :key="'content'+ index" v-show="Index===item.sessionIndex">
          <trackDia v-if="item.DiaOrMono === 'dia'" :sendName="subContent"></trackDia>
          <trackMono v-if="item.DiaOrMono === 'mono'" :sendName="subContent"></trackMono>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import trackDia from "@/pages/MemoryCollect/track/components/trackDia.vue";
import trackMono from "@/pages/MemoryCollect/track/components/trackMono.vue";
import {getTP} from "@/request/api";
export default {
  components:{trackDia,trackMono},
  data() {
    return {
      Index: 0,
      minorTitles: [
        {
          bg: require("../track/轨迹1/title1.png"),
          num:0,
        },
        {
          bg: require("../track/轨迹1/title2.png"),
          num:1,
        },
        {
          bg: require("../track/轨迹1/title3.png"),
          num:2,
        },
        {
          bg: require("../track/轨迹1/title4.png"),
          num:3,
        },
        {
          bg: require("../track/轨迹1/title5.png"),
          num:4,
        },
        {
          bg: require("../track/轨迹1/title6.png"),
          num:5,
        },
      ],
      minorDates: [
        {
          bg: require("../track/轨迹1/minor1.png"),
          num:0,
        },
        {
          bg: require("../track/轨迹1/minor2.png"),
          num:1,
        },
        {
          bg: require("../track/轨迹1/minor3.png"),
          num:2,
        },
        {
          bg: require("../track/轨迹1/minor4.png"),
          num:3,
        },
        {
          bg: require("../track/轨迹1/minor5.png"),
          num:4,
        },
        {
          bg: require("../track/轨迹1/minor6.png"),
          num:5,
        },
      ],
      contentDataList:[],
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
      getTP({cardindex:0,sessionIndex:this.Index}).then((res) => {
        this.subContent=[]
        this.contentDataList=[]
            for( let i in res.subContent) {
              let dia= {
                name: res.subContent[i]["name"],
                content:res.subContent[i]["content"],
              }
              console.log(res.subContent[i])
              this.subContent.push(dia)
            }
            let item = {
              sessionIndex:this.Index,
                videoUrl: res.videoUrl,
              DiaOrMono:res.DiaOrMono,
            }
            this.contentDataList.push(item)

      })
    }
  }
}
</script>

<style scoped lang="scss">

.title {
  background: url("./轨迹1/title.png");
  background-size: 100% 100% ;
  position: absolute;
  width: 116px;
  height: 75px;
  top:40px;
  right:80px;
  float: right;
}

.video-btn {
  background-image: url("./轨迹1/video.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: absolute;
  top: -85px;
  left: 1500px;
  width: 145px;
  height: 46px;
  display: inline-block;
}

.title-img {
  height: 20px;
  top:90px;
  float: right;
  right:155px;
  display: inline-block;
  position: absolute;
}

.btn1, .btn2, .btn3, .btn4, .btn5, .btn6 {
  background-image: url("./轨迹1/btn.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  height: 19px;
  width: 19px;
}

.active1, .active2, .active3, .active4, .active5, .active6 {
  background-image: url("./轨迹1/active.png");
  background-size: 100% 100%;
  position: relative;
  height: 15.2px;
  width: 8.8px;
}

.active1 {
  top: 520px;
  left:1318px;
}

.active2 {
  top: 464px;
  left: 1323.5px;
}

.active3 {
  left: 1346px;
  top: 409px;
}

.active4 {
  left: 1386px;
  top: 372px;
}

.active5 {
  left :1439px;
  top: 348px;
}

.active6 {
  left:1494px;
  top: 345px;
}
.btn1{
  top: 631.5px;
  left:1315px;
}

.btn2 {
  top:558px;
  left:1320px;
}

.btn3 {
  top:483px;
  left:1343px;
}

.btn4 {
  top:427px;
  left:1383px;
}

.btn5 {
  top:385px;
  left:1435.5px;
}

.btn6 {
  top:362px;
  left:1490.5px;
}

.date-img {
  display: inline-block;
  position: relative;
  float: right;
  top: 450px;
  right:5px;
  height: 70px;
}

.text {
  width: 1200px;
  height: 570px;
  overflow-y: scroll;
  position: absolute;
  top:60px;
  left:45px;
  white-space: pre-wrap;
  line-height: 30px;
}

</style>