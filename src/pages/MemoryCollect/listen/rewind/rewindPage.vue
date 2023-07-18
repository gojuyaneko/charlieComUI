<template>
 <div class="rewind">
   <div class="guide"></div>
   <li v-for="(item,index) in contentDataList" :key="'content'+ index" v-show="Index===item.sessionIndex">
        <a class="video-btn" target="_blank" :href="item.videoUrl"></a>
    </li>
   <div class="text-bg">
    <div class="title"></div>
     <div class="option">
       <li class="option1" tabindex="0" @click="show(0);" :class="Index===0? 'active':''"></li>
       <ul class="option2" tabindex="1" @click="show(1);" :class="Index===1? 'active':''"></ul>
       <li class="minor1" tabindex="2" @click="show(2);" :class="Index===2? 'active':''"></li>
       <li class="minor2" tabindex="3" @click="show(3);" :class="Index===3? 'active':''"></li>
       <li class="minor3" tabindex="4" @click="show(4);" :class="Index===4? 'active':''"></li>
     </div>
     <div class="text">
       <ul>
        <li v-for="(item,index) in contentDataList" :key="'content'+ index" v-show="Index===item.sessionIndex">
          <rewindDia v-if="item.DiaOrMemory === 'dia'" :sendName="item.subContent"></rewindDia>
          <rewindMemory v-if="item.DiaOrMemory === 'memory'" :sendName="item.subContent"></rewindMemory>
        </li>
       </ul>
     </div>

   </div>

 </div>
</template>

<script>
import rewindDia from "@/pages/MemoryCollect/listen/rewind/components/rewindDia.vue";
import rewindMemory from "@/pages/MemoryCollect/listen/rewind/components/rewindMemory.vue";

export default {
  components:{rewindDia,rewindMemory},
  data() {
    return {
      Index:0,
      contentDataList:[
        {
          sessionIndex:0,
          DiaOrMemory:'dia',
          videoUrl: "https://www.bilibili.com",
          subContent: [
        {
          name:'保安',
          content: 'Charlie先生，欢迎来到Bitter&Sweet 2023巧克力主题派对夜。您邀请的客人还在女宾休息室准备'
        },
        {
          name:'查理苏',
          content: '不急。麻烦转告这位美丽的拖延鬼小姐，夜晚还早，我会在沙发区静静等候她的到来。\n' +
              '对了，老规矩。给我准备一副扑克。\n'
        }
      ],
        },
        {
          sessionIndex:1,
          DiaOrMemory:'memory',
          videoUrl: "https://www.bilibili.com",
          subContent: [
        {
          name:'查理苏',
          content: '不急。麻烦转告这位美丽的拖延鬼小姐，夜晚还早，我会在沙发区静静等候她的到来. 对了，老规矩。给我准备一副扑克。不急。麻烦转告这位美丽的拖延鬼小姐，夜晚还早，我会在沙发区静静等候她的到来。\n' +
              '对了，老规矩。给我准备一副扑克。'
        },
            {
              name:'我',
          content: '不急。麻烦转告这位美丽的拖延鬼小姐，夜晚还早，我会在沙发区静静等候她的到来. 对了，老规矩。给我准备一副扑克。不急。麻烦转告这位美丽的拖延鬼小姐，夜晚还早，我会在沙发区静静等候她的到来。\n' +
              '对了，老规矩。给我准备一副扑克。'
            }
      ],
        },
        {
          sessionIndex:2,
          DiaOrMemory:'memory',
          videoUrl: "https://www.bilibili.com",
          subContent: [
        {
          name:'查理苏',
          content: '111不急。麻烦转告这位美丽的拖延鬼小姐，夜晚还早，我会在沙发区静静等候她的到来. 对了，老规矩。给我准备一副扑克。不急。麻烦转告这位美丽的拖延鬼小姐，夜晚还早，我会在沙发区静静等候她的到来。\n' +
              '对了，老规矩。给我准备一副扑克。'
        }
      ],
        },
        {
          sessionIndex:3,
          DiaOrMemory:'memory',
          videoUrl: "https://www.bilibili.com",
          subContent: [
        {
          name:'查理苏',
          content: '222不急。麻烦转告这位美丽的拖延鬼小姐，夜晚还早，我会在沙发区静静等候她的到来. 对了，老规矩。给我准备一副扑克。不急。麻烦转告这位美丽的拖延鬼小姐，夜晚还早，我会在沙发区静静等候她的到来。\n' +
              '对了，老规矩。给我准备一副扑克。'
        }
      ],
        },
        {
          sessionIndex:4,
          DiaOrMemory:'memory',
          videoUrl: "https://www.bilibili.com",
          subContent: [
        {
          name:'查理苏',
          content: '333不急。麻烦转告这位美丽的拖延鬼小姐，夜晚还早，我会在沙发区静静等候她的到来. 对了，老规矩。给我准备一副扑克。不急。麻烦转告这位美丽的拖延鬼小姐，夜晚还早，我会在沙发区静静等候她的到来。\n' +
              '对了，老规矩。给我准备一副扑克。'
        }
      ],
        },

      ],
    }
  },
  methods: {
    show(value) {
      this.Index === value ? this.isShow = !this.isShow : this.isShow = true
      this.Index = value
    },
  }
}
</script>

<style scoped lang="scss">
.rewind {
  text-align: center;
  width: 100%;
  height: 100%;
  background: url('./倒带1/bg.png') no-repeat;
  background-size: cover;
  background-position: center;
}

.guide {
  background: url("./倒带1/guide.png");
  background-size: 100% 100% ;
  position: relative;
  top:180px;
  left:190px;
  height: 31px;
  width: 207px;
}

.video-btn {
  background-image: url("./倒带1/video.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  top: 150px;
  left: 670px;
  width: 145px;
  height: 46px;
  display: inline-block;
}

.text-bg {
  background: url('./倒带1/text-bg.png') no-repeat;
  background-size: 100% 100%;
  height: 648px;
  width: 1521px;
  position: relative;
  top:200px;
  left:190px;
}

.title {
  background: url("./倒带1/title.png");
  background-size: 100% 100% ;
  position: relative;
  float: right;
  top:10px;
  width: 102px;
  height: 300px;
}

.option {
  display: flex;
  flex-direction: column;
  position: relative;
  float: right;
  top: 350px;
  right: -100px;
}

.option1 {
  background: url("./倒带1/option1.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  width: 150px;
  height: 37px;
  margin-bottom: 20px;
}

.option2 {
  background: url("./倒带1/option2.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  width: 150px;
  height: 37px;
}

.minor1 {
  background: url("./倒带1/minor1.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  width: 72px;
  height: 19px;
  top: 30px;
}

.minor2 {
  background: url("./倒带1/minor2.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  width: 72px;
  height: 19px;
  top: 40px;
}

.minor3 {
  background: url("./倒带1/minor3.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  width: 72px;
  height: 19px;
  top: 50px;
}

.text {
  width: 1300px;
  height: 580px;
  overflow-y: scroll;
  position: absolute;
  top:15px;
  left:10px;
  white-space: pre-wrap;
  line-height: 20px;
}


</style>