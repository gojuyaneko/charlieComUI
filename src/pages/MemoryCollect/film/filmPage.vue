<template>
 <div class="film">
   <div class="guide"></div>
   <li v-for="(item,index) in contentDataList" :key="'content'+ index" v-show="Index===item.sessionIndex">
        <a class="video-btn" target="_blank" :href="item.videoUrl"></a>
    </li>
   <div class="text-bg">
    <div class="title"></div>
     <div class="prev" @click="prev()" :class="{active:Index}"></div>
     <div class="next" @click="next()" :class="{active:Index}"></div>
      <div class="titles" v-for="(item,index) in minorTitles" :key="index" v-show="item.num===Index">
        <ul class="title-content">
          <li class="number">{{item.number}}</li>
          <li class="minor">{{item. minor}}</li>
          <li class="part">{{item.part}}</li>
        </ul>

      </div>
     <div class="text">
       <ul>
        <li v-for="(item,index) in contentDataList" :key="'content'+ index" v-show="Index===item.sessionIndex">
          <filmDia :sendName="subContent"></filmDia>

        </li>
       </ul>
     </div>

   </div>

 </div>
</template>

<script>
import filmDia from "@/pages/MemoryCollect/film/filmDia";
import {getF} from "@/request/api";

export default {
  components:{filmDia},
  data() {
    return {
      Index:0,
      minorTitles:[
          {
          number:"01",
            minor:'莱索亚之乱',
            part:'I',
          num:0,
        },
        {
          number:"02",
            minor:'莱索亚之乱',
            part:'II',
          num:1,
        },
        {
          number:"03",
            minor:'命运原点',
            part:'I',
          num:2,
        },
        {
         number:"04",
          minor:'命运原点',
          part:'II',
          num:3,
        },
        {
          number:"05",
          minor:'燃烧的星',
          part:'I',
          num:4,
        },
        {
          number:"06",
          minor:'燃烧的星',
          part:'II',
          num:5,
        },
        {
          number:"07",
          minor:'再开场',
          part:'I',
          num:6,
        },
        {
          number:"08",
          minor:'在自由之前',
          part:'I',
          num:7,
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
    prev () {
      if(this.Index <= 0 ) {
        this.Index = 7
      } else{
        this.Index --
      }
      console.log(this.Index)
      this.getPara()
    },
    next () {
      if(this.Index >= 7 ) {
        this.Index = 0
      } else{
        this.Index ++
      }
      console.log(this.Index)
      this.getPara()
    },
    getPara() {
      getF({sessionIndex:this.Index}).then((res) => {
        this.subContent=[]
        this.contentDataList=[]
            for( let i in res.para) {
              let dia= {
                name: res.para[i]["speaker"],
                content:res.para[i]["content"],
              }
              this.subContent.push(dia)
            }
            let item = {
              sessionIndex:this.Index,
            }
            this.contentDataList.push(item)

      })
    }
  }
}
</script>

<style scoped lang="scss">
.film {
  text-align: center;
  width: 100%;
  height: 100%;
  background: url('./胶片1/bg.png') no-repeat;
  background-size: cover;
  background-position: center;
}

.guide {
  background: url("./胶片1/guide.png");
  background-size: 100% 100% ;
  position: relative;
  top:150px;
  left:190px;
  height: 31px;
  width: 207px;
}

.video-btn {
  background-image: url("./胶片1/video.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: absolute;
  top: 150px;
  left: 1570px;
  width: 145px;
  height: 46px;
  display: inline-block;
}

.text-bg {
  background: url('./胶片1/text-bg.png') no-repeat;
  background-size: 100% 100%;
  height: 670px;
  width: 1505px;
  position: fixed;
  top:250px;
  left:190px;
}

.title {
  background: url("./胶片1/title.png");
  background-size: 100% 100% ;
  position: relative;
  float: right;
  top:100px;
  right: 180px;
  width: 53px;
  height: 250px;
}

.title-content {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.number, .minor, .part {
  color: rgb(214, 179, 103);
  font-family: nansongshuju;
  top:535px;
  left: 615px;
  position: relative;
}

.number {
  left:613px;
  margin-bottom: 38px;
}

.minor {
  margin-bottom: 32px;
}

.prev {
  background: url("./胶片1/prev.png") no-repeat;
  background-size: 80% 80% ;
  position: relative;
  float: right;
  top:537px;
  right: 160px;
  width: 14px;
  height: 18px;
  cursor: pointer;
  z-index: 2;
}

.next {
  background: url("./胶片1/next.png") no-repeat;
  background-size: 80% 80% ;
  position: relative;
  float: right;
  top:537px;
  right: 60px;
  width: 14px;
  height: 18px;
  cursor: pointer;
  z-index: 2;
}
.text {
  width: 1000px;
  height: 480px;
  overflow-y: scroll;
  position: absolute;
  top:100px;
  left:45px;
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