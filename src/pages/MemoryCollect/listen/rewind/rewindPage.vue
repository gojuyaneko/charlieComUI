<template>
 <div class="rewind">
   <div class="guide"></div>
   <a class="video-btn" target="_blank" href="http://www.bilibili.com" v-show="index===0"></a>
    <a class="video-btn" target="_blank" href="http://www.bilibili.com" v-show="index===1"></a>
    <a class="video-btn" target="_blank" href="http://www.bilibili.com" v-show="index===2"></a>
    <a class="video-btn" target="_blank" href="http://www.bilibili.com" v-show="index===3"></a>
    <a class="video-btn" target="_blank" href="http://www.bilibili.com" v-show="index===4"></a>
   <div class="text-bg">
    <div class="title"></div>
     <div class="option">
       <li class="option1" tabindex="0" @click="show(0);" :class="index===0? 'active':''"></li>
       <ul class="option2" tabindex="1" @click="show(1);" :class="index===1? 'active':''"></ul>
       <li class="minor1" tabindex="2" @click="show(2);" :class="index===2? 'active':''"></li>
       <li class="minor2" tabindex="3" @click="show(3);" :class="index===3? 'active':''"></li>
       <li class="minor3" tabindex="4" @click="show(4);" :class="index===4? 'active':''"></li>
     </div>
     <div class="text">
       <rewindContent :sendName="A" v-show="index===0"></rewindContent>
       <rewindDia :sendName="B" v-show="index===1"></rewindDia>
       <rewindDia :sendName="B01" v-show="index===2"></rewindDia>
       <rewindDia :sendName="B02" v-show="index===3"></rewindDia>
       <rewindDia :sendName="B03" v-show="index===4"></rewindDia>


     </div>

   </div>

 </div>
</template>

<script>
import rewindContent from "@/pages/MemoryCollect/listen/rewind/rewindContent.vue";
import rewindDia from "@/pages/MemoryCollect/listen/rewind/rewindDia.vue";
export default {
  components:{rewindContent,rewindDia},
  data() {
    return {
      index:0,
      A:[
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
      B:[
        {
          name:'查理苏',
          content: '不急。麻烦转告这位美丽的拖延鬼小姐，夜晚还早，我会在沙发区静静等候她的到来. 对了，老规矩。给我准备一副扑克。不急。麻烦转告这位美丽的拖延鬼小姐，夜晚还早，我会在沙发区静静等候她的到来。\n' +
              '对了，老规矩。给我准备一副扑克。'
        }
      ],
      B01:[
        {
          name:'我',
          content:'戴项链的事，就让我自己来吧。'
        },
        {
          name:'查理苏',
          content:'你想自己来?没问题。\n' +
              '小心勾到后面的碎发。没事，我会帮你撩起来。\n'
        }
      ],
      B02:[
        {
          name:'查理苏',
          content: '222不急。麻烦转告这位美丽的拖延鬼小姐，夜晚还早，我会在沙发区静静等候她的到来. 对了，老规矩。给我准备一副扑克。不急。麻烦转告这位美丽的拖延鬼小姐，夜晚还早，我会在沙发区静静等候她的到来。\n' +
              '对了，老规矩。给我准备一副扑克。'
        }
      ],
      B03:[
        {
          name:'我',
          content:'111戴项链的事，就让我自己来吧。'
        },
        {
          name:'查理苏',
          content:'你想自己来?没问题。\n' +
              '小心勾到后面的碎发。没事，我会帮你撩起来。\n'
        }
      ],
    }
  },
  methods: {
    show(value) {
      this.index === value ? this.isShow = !this.isShow : this.isShow = true
      this.index = value
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
  width: 1000px;
  height: 580px;
  overflow-y: scroll;
  position: absolute;
  top:15px;
  left:10px;
  white-space: pre-wrap;
  line-height: 20px;
}


</style>