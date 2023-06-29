<template>
  <div class="profile_attract">
    <a class="video-btn" target="_blank" href="http://www.bilibili.com"></a>
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
        <trackContent :sendName="initialContent" v-show="Index===0"></trackContent>
        <trackContent :sendName="lightContent" v-show="Index===1"></trackContent>
        <trackContent :sendName="nightContent" v-show="Index===2"></trackContent>
      </div>
    </div>

  </div>

</template>

<script>
import trackContent from "@/pages/MemoryCollect/track/trackContent.vue";
export default {
  components:{trackContent},
  data() {
    return {
      Index:0,
      initialContent: [
        {
          name:'旁白',
          content:'鲜艳的繁体字招牌，穿着长袍大褂的行人，老式汽车……步入这条为合欢节庆典精心装扮的街道时，我忍不住四处张望，感觉不太真实。\n' +
              '合欢节将近，光启市各处弥漫着节日的氛围按照特有的风俗，一些街区特意装点成了百年前的样子。\n' +
              '抬头望去，前方路口上伫立着一栋高大的复古建筑。\n' +
              '五颜六色的彩灯装点着宽阔的大门，人们踏着从门口一路铺到楼梯下的红毯，正在不断涌入其中。'
        },
        {
          name:'我',
          content: '米高梅舞厅……就是这里了！'
        },
        {
          name:'旁白',
          content:'米高梅舞厅在每年合欢庆典上都非常引人注目。听说我对这里很好奇后，查理苏就提议和我在这里见面。\n' +
              '恰逢今天舞厅要举办一个非常特别的活动——以谍战小说《胭脂劫》为蓝本的大型角色扮演游戏。每个进入舞厅的人都要扮演一个角色。\n' +
              '我随着人群登上楼梯，在门口抽取了一张身份卡。看清卡片上的字，我吃了一惊——'
        },
        {
          name:'查理苏',
          content:'……'
        },
        {
          name:'黑衣人',
          content:'你是什么人？竟敢拦我们费大少爷的路！'
        },
        {
          name:'查理苏',
          content:'哦？未婚妻？什么时候有了这样的婚约，我怎么不记得呢？'
        },
          {
          name:'旁白',
          content:'鲜艳的繁体字招牌，穿着长袍大褂的行人，老式汽车……步入这条为合欢节庆典精心装扮的街道时，我忍不住四处张望，感觉不太真实。\n' +
              '合欢节将近，光启市各处弥漫着节日的氛围按照特有的风俗，一些街区特意装点成了百年前的样子。\n' +
              '抬头望去，前方路口上伫立着一栋高大的复古建筑。\n' +
              '五颜六色的彩灯装点着宽阔的大门，人们踏着从门口一路铺到楼梯下的红毯，正在不断涌入其中。'
        },
        {
          name:'我',
          content: '米高梅舞厅……就是这里了！'
        },
        {
          name:'旁白',
          content:'米高梅舞厅在每年合欢庆典上都非常引人注目。听说我对这里很好奇后，查理苏就提议和我在这里见面。\n' +
              '恰逢今天舞厅要举办一个非常特别的活动——以谍战小说《胭脂劫》为蓝本的大型角色扮演游戏。每个进入舞厅的人都要扮演一个角色。\n' +
              '我随着人群登上楼梯，在门口抽取了一张身份卡。看清卡片上的字，我吃了一惊——'
        },
        {
          name:'查理苏',
          content:'……'
        },
        {
          name:'黑衣人',
          content:'你是什么人？竟敢拦我们费大少爷的路！'
        },
        {
          name:'查理苏',
          content:'哦？未婚妻？什么时候有了这样的婚约，我怎么不记得呢？'
        },
          {
          name:'旁白',
          content:'鲜艳的繁体字招牌，穿着长袍大褂的行人，老式汽车……步入这条为合欢节庆典精心装扮的街道时，我忍不住四处张望，感觉不太真实。\n' +
              '合欢节将近，光启市各处弥漫着节日的氛围按照特有的风俗，一些街区特意装点成了百年前的样子。\n' +
              '抬头望去，前方路口上伫立着一栋高大的复古建筑。\n' +
              '五颜六色的彩灯装点着宽阔的大门，人们踏着从门口一路铺到楼梯下的红毯，正在不断涌入其中。'
        },
        {
          name:'我',
          content: '米高梅舞厅……就是这里了！'
        },
        {
          name:'旁白',
          content:'米高梅舞厅在每年合欢庆典上都非常引人注目。听说我对这里很好奇后，查理苏就提议和我在这里见面。\n' +
              '恰逢今天舞厅要举办一个非常特别的活动——以谍战小说《胭脂劫》为蓝本的大型角色扮演游戏。每个进入舞厅的人都要扮演一个角色。\n' +
              '我随着人群登上楼梯，在门口抽取了一张身份卡。看清卡片上的字，我吃了一惊——'
        },
        {
          name:'查理苏',
          content:'……'
        },
        {
          name:'黑衣人',
          content:'你是什么人？竟敢拦我们费大少爷的路！'
        },
        {
          name:'查理苏',
          content:'哦？未婚妻？什么时候有了这样的婚约，我怎么不记得呢？'
        }
      ],
      lightContent:[
        {
          name:'旁白',
          content:'111鲜艳的繁体字招牌，穿着长袍大褂的行人，老式汽车……步入这条为合欢节庆典精心装扮的街道时，我忍不住四处张望，感觉不太真实。\n' +
              '合欢节将近，光启市各处弥漫着节日的氛围按照特有的风俗，一些街区特意装点成了百年前的样子。\n' +
              '抬头望去，前方路口上伫立着一栋高大的复古建筑。\n' +
              '五颜六色的彩灯装点着宽阔的大门，人们踏着从门口一路铺到楼梯下的红毯，正在不断涌入其中。'
        },
        {
          name:'我',
          content: '米高梅舞厅……就是这里了！'
        },
        {
          name:'旁白',
          content:'米高梅舞厅在每年合欢庆典上都非常引人注目。听说我对这里很好奇后，查理苏就提议和我在这里见面。\n' +
              '恰逢今天舞厅要举办一个非常特别的活动——以谍战小说《胭脂劫》为蓝本的大型角色扮演游戏。每个进入舞厅的人都要扮演一个角色。\n' +
              '我随着人群登上楼梯，在门口抽取了一张身份卡。看清卡片上的字，我吃了一惊——'
        },
        {
          name:'查理苏',
          content:'……'
        },
        {
          name:'黑衣人',
          content:'你是什么人？竟敢拦我们费大少爷的路！'
        },
        {
          name:'查理苏',
          content:'哦？未婚妻？什么时候有了这样的婚约，我怎么不记得呢？'
        }
      ],
      nightContent:[
        {
          name:'旁白',
          content:'222鲜艳的繁体字招牌，穿着长袍大褂的行人，老式汽车……步入这条为合欢节庆典精心装扮的街道时，我忍不住四处张望，感觉不太真实。\n' +
              '合欢节将近，光启市各处弥漫着节日的氛围按照特有的风俗，一些街区特意装点成了百年前的样子。\n' +
              '抬头望去，前方路口上伫立着一栋高大的复古建筑。\n' +
              '五颜六色的彩灯装点着宽阔的大门，人们踏着从门口一路铺到楼梯下的红毯，正在不断涌入其中。'
        },
        {
          name:'我',
          content: '米高梅舞厅……就是这里了！'
        },
        {
          name:'旁白',
          content:'米高梅舞厅在每年合欢庆典上都非常引人注目。听说我对这里很好奇后，查理苏就提议和我在这里见面。\n' +
              '恰逢今天舞厅要举办一个非常特别的活动——以谍战小说《胭脂劫》为蓝本的大型角色扮演游戏。每个进入舞厅的人都要扮演一个角色。\n' +
              '我随着人群登上楼梯，在门口抽取了一张身份卡。看清卡片上的字，我吃了一惊——'
        },
        {
          name:'查理苏',
          content:'……'
        },
        {
          name:'黑衣人',
          content:'你是什么人？竟敢拦我们费大少爷的路！'
        },
        {
          name:'查理苏',
          content:'哦？未婚妻？什么时候有了这样的婚约，我怎么不记得呢？'
        }
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
.title {
  background: url("./侧影2/title.png");
  background-size: 100% 100% ;
  position: relative;
  top:670px;
  left:190px;
  width: 280px;
  height: 70px;
}

.video-btn {
  background-image: url("./侧影2/video.png");
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  top: 55px;
  left: 680px;
  width: 145px;
  height: 46px;
  display: inline-block;
}

.btns {
  display: flex;
  flex-direction: column;
  top: 560px;
  left: 700px;
  position: absolute;
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
  position: absolute;
  top: 350px;
  left: 190px;
  width: 349px;
  height: 424px;
  cursor: pointer;
}
.light1 {
  background-image: url("./侧影2/光1.png");
  background-size: 100% 100%;
  position: absolute;
  top: 300px;
  left: 190px;
  width: 349px;
  height: 424px;
}

.night1 {
  background-image: url("./侧影2/暗1.png");
  background-size: 100% 100%;
  position: absolute;
  top: 350px;
  left: 190px;
  width: 349px;
  height: 424px;
  cursor: pointer;
}
.light2 {
  background-image: url("./侧影2/光2.png");
  background-size: 100% 100%;
  position: absolute;
  top: 300px;
  left: 190px;
  width: 349px;
  height: 424px;
}

.text-bg {
  background: url('./侧影1/text-bg.png') no-repeat;
  background-size: 100% 100%;
  height: 641px;
  width: 959px;
  position: relative;
  top:50px;
  left:760px;
}

.text {
  width: 880px;
  height: 580px;
  overflow-y: scroll;
  position: absolute;
  top:15px;
  left:45px;
  white-space: pre-wrap;
  line-height: 20px;
}

::-webkit-scrollbar {
  width: 20px;
  margin-left: -30px;
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