<template>
  <div>
    <div class="major-title">
      <div class="content" v-for="(item,index) in subChaplist" :key="index" v-show="item.majorIndex===Index">
        <img :src="item.majorTitle" alt="" class="title-img"/>
      </div>
    </div>
    <ul class="minor-titles">
      <span class="title1" tabindex="1"
            @click="show(0);"
            :class="Index===0? 'active':''"></span>
      <span class="title2" tabindex="2"
            @click="show(1);"
            :class="Index===1? 'active':''"></span>
      <span class="title3" tabindex="3"
            @click="show(2);"
            :class="Index===2? 'active':''"></span>
    </ul>
    <div class="text-bg">
      <ul class="choice"  v-for="(choiceGroup, index) in choiceList" :key="'choiceG'+index" v-show="fontIndex === index&&isBottom&&chooseRigt">
        <li class="choiceBtn" @click=" changeContent(index, choiceindex)" v-for="(choice, choiceindex) in choiceGroup" :key="'choice'+choiceindex" style="margin-bottom: 10px;">{{ choice.choiceTitle }} </li>
      </ul>
      <div class="reload" @click="backToPre()" v-show="!chooseRigt&&isBottom">重新选择</div>
      <div class="text" @scroll="choiceEvent" >
          <encounterContent :sendName="item.subContent" v-show="preIndex +1 >= item.sessionIndex " v-for="(item,index) in contentDataList" :key="'content1'+ index"></encounterContent>
      </div>

    </div>
    <a class="video-btn" target="_blank" :href="this.videoUrl"></a>
  </div>
</template>

<script>
import encounterContent from "@/pages/MemoryCollect/encounter/components/encounterContent.vue";
import {getRT} from "@/request/api";
import axios from "axios";


export default {
  components:{encounterContent},
  data() {
    return {
      Index:0,
      contentDataList: [],
      // 数据使用public/testText.json中的数据
      subChaplist:[
        {
          majorIndex:0,
          majorTitle:require("../邂逅1/content1.png")
        },
        {
          majorIndex:1,
          majorTitle:require("../邂逅1/content2.png")
        },
        {
          majorIndex:2,
          majorTitle:require("../邂逅1/content3.png")
        }
      ],
      choiceList: [], // 后端传输过来的所有选项列表
      preIndex: -1, //文章段落进行标志，表明最新文章进度
      fontIndex: -1, //选项进行标志，表明下一个该出现choiceList的第几组组
      resData: [], // 储存后端传输数据内容，主要用于替换选项内容
      chooseRigt: true, // 是否选择了正确的选项
      isTop:true,
      isBottom: false, // 是否到达底部
      videoUrl:''
    }
  },
  methods: {
    show(value) {
      this.Index = value
      let url =`../testText${this.Index+1}.json` // 向后端发送请求时，就把index当做参数传就可以了 new
      this.getTestText(url) //new
    },
    choiceEvent({target:{scrollTop, clientHeight, scrollHeight}}) {
      if (scrollTop + clientHeight >= scrollHeight - 2) {
        this.isBottom = true // 滑动到底部时为真
        this.fontIndex = this.preIndex+ 1 // 选项初始为-1，第一次滑动到底部时出现choiceList[0]的选项组 ，当滑动到底部时自动进行到下一组选项
      }
    },

    initContent (data) { // 初始化文章内容，默认选项选择正确，规定第一个选项即xuanxiang[0]为正确/最优选项
      this.contentDataList = []
      for (let i in data) {
        if (data[i].para_type !== 'choice') {
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
      this.preIndex = -1
      this.fontIndex = -1
      this.isBottom = false
      this.chooseRigt = true
      //这里如果加了这一行的话 就不显示选项
      //this.$refs.scrollBox.scrollTop = 0
    },
    changeContent (index, j) { // 替换选项内容，
      this.preIndex = index // 段落进行标志在选择选项时自动行进至当前选项后一步
      this.fontIndex = -1 // 控制选项显示与否
      this.isBottom = false // 选择选项后自动设置到达底部为false
      this.chooseRigt = true
      if(j === 0) {
        this.chooseRigt = true // 第一个选项即xuanxiang[0]为正确/最优选项
      } else {
        this.chooseRigt = false // 第一个选项即xuanxiang[i+1]为错误/欠佳选项，可触发下次滑动到底部的重新选择选项
      }
      this.contentDataList[index + 1].subContent= this.resData[index + 1].xuanxiang[j].choice_para // 替换文本内容
    },
    backToPre () { // 后退至上一个选项和文本处
      this.isBottom = true //重新选择时需使文本在最后，因此设置在底部为真
      this.chooseRigt = true // 默认使选择正确
      this.preIndex-- // 回退文本
      this.fontIndex = this.preIndex + 1 // 回退选项，段落进行标志在选择选项时自动行进至当前选项前一步
    },
    getTestText (url) {
      axios.get('../testText1.json').then((res) => {
        console.log(url)
      //getRT({xhChap:0,subChap:this.Index}).then((res) => { // 获取testText文本内容，实际使用接口时替换为接口
        this.resData = res.data.para//  保存后端传过来的文本
        this.videoUrl = res.data.videoUrl
        let data = res.data.para // 暂存文本
        //this.chapIndex = res.data.chapIndex
        this.choiceList = [] // 初始化选择组列表
        this.initContent(data) // 初始化前端使用文本
        for (let i in data) {
          if(data[i].para_type  === 'choice') { // 若该段落为choice，则压进choiceList数组
            let choiceIndex = 0
            let item = []
            for ( let j in data[i].xuanxiang){ // 遍历选项
              let choice = {
                choiceIndex: choiceIndex, // 选项标号，用于定位选项所在文章行数
                paraIndex: i, //选项所在的文章段落
                choiceTitle: data[i].xuanxiang[j].choice_name, // 选项标题
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

.title-img {
  background-size: 100% 100%;
  position: relative;
  top:0;
  left: 0;
  height: 21px;
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
  left:120px
}

.choice {
  display: flex;
  position: relative;
  float: left;
  top:400px;
  left: 35px;
  background-color: transparent;
  color:#b99e63;
  writing-mode: tb-rl;
  font-family: "nansongshuju";
  font-size: 14px;

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

.choiceBtn {
  background-color: transparent;
  cursor: pointer;
  color:#b99e63;
  font-size: 14px;
  padding: 30px 6px;
  margin: 0 0 30px 10px;
  border: 1.5px solid #b99e63;
  border-radius: 35px;
}
.reload {
  background-color: transparent;
  flex-direction: column;
  cursor: pointer;
  color:#b99e63;
  writing-mode: tb-rl;
  font-family: "nansongshuju";
  font-size: 14px;
  padding: 30px 6px;
  margin: 0 0 30px 10px;
  border: 1.5px solid #b99e63;
  border-radius: 35px;
  display: flex;
  position: fixed;
  left:270px;
  top:700px;

}


</style>