<template>
  <div class="td-com-card">
    <ul class="td-items">
      <li
        v-for="(item,index) in tdItems"
        :key="index"
        class="td-item-li"
        @click="cvisivle(item)"
      >
        <img :src="item.bgImg" alt="" class="td-item-img" />
      </li>
    </ul>
    <div class="td-dialog">
      <el-dialog
        custom-class="td-dialog"
        :modal="false"
        top="11%"
        :visible.sync="dialogVisible"
      >
        <div class="td-dia-card">
          <img :src="cardImg" alt="" class="td-card-img" />
          <h4 class="td-card-h4">{{ diaCardText }}</h4>
        </div>
        <el-radio-group v-model="yesOrNo" v-if="mytruth" >
          <el-radio-button label="YES"
            ><div class="radio-group-div" @click="changeYN('YES')">YES</div>
          </el-radio-button>
          <el-radio-button label="NO">
            <div class="radio-group-div" @click="changeYN('NO')" style="letter-spacing:2px ;">NO</div>
          </el-radio-button>
        </el-radio-group>
        <div class="td-dialog-right">
          <div class="td-dialog-content">
            <div v-for="( item,index) in diaContent" :key="index" class="td-dialog-div">
              <span class="td-dialog-span">
                <span v-if="item.name !== '我'" :data-person="item.name">{{item.name }}</span>
              </span>
              <p class="td-dialog-p" :data-person-p="item.name">
                {{ item.content }}
              </p>
              <span class="td-dialog-span">
                <span v-if="item.name === '我'" :data-person="item.name">
                  {{ item.name }}
                </span>
              </span>
            </div>
          </div>
          <div class="td-dialog-page">
            <td-pagi @changeCurPa="getDiaContent" :pageCount="pageCount"></td-pagi>
          </div>
          <a class="td-dialog-video" target="_blank" :href="videoUrl"> 
          </a>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getTOD } from '../../../../../request/api'
import tdPagi from '../components/tdPagi.vue'
export default {
  components: {tdPagi},
  props: {},
  data() {
    return {
      tdItems: [
        {
          type: "truth",
          person: "charlie",
          bgImg: require("../img/charlietruth.png"),
        },
        {
          type: "truth",
          person: "me",
          bgImg: require("../img/metruth.png"),
        },
        {
          type: "dare",
          person: "charlie",
          bgImg: require("../img/charliedare.png"),
        },
        {
          type: "dare",
          person: "me",
          bgImg: require("../img/medare.png"),
        },
      ],
      dialogVisible: false,
      cardImg: require("../img/metruth.png"),
      diaCardText: "你曾有过一见钟情的感觉吗？",
      mytruth:false,
      diaContent: [],
      type:'truth',
      person:'charlie',
      num:1,
      yesOrNo: "YES",
      pageCount: 20,
      videoUrl: ''
    };
  },
  mounted() {},
  methods: {
    cvisivle (obj) {
      this.cardImg = obj.bgImg
      this.dialogVisible = true
      this.type = obj.type
      this.person = obj.person
      let bntVis 
      if(this.type==='truth'&&this.person === 'me') {
        bntVis = true
      }
      else {
        bntVis = false
      }
      this.mytruth = bntVis
      this.getData()
    },
    getDiaContent (num) {
      this.num = num
      this.getData()
    },
    getData () {
      let getType = this.type === 'truth' ? '真心话' : '大冒险'
      let getPerson = this.person === 'charlie' ? '查理苏' : '我'
      getTOD({type: getType, person: getPerson, num: this.num, yOrN: this.yesOrNo}).then((res) => {
        this.diaCardText = res.title
        this.pageCount = res.totalNum
        this.videoUrl = res.videoUrl
        this.diaContent = []
        for( let i in res.diaContent) {
          let name = res.diaContent[i]["旁白"] ? '旁白' : res.diaContent[i]["我"] ? '我' : '查理苏'
          for (let j in res.diaContent[i][name]) {
            let item = {
              name: name,
              content: res.diaContent[i][name][j]
            }
            this.diaContent.push(item)
          }
        }
      })
    },
    changeYN (yn) {
      this.yesOrNo = yn
      this.getData()
    }
  },
};
</script>

<style scoped lang="scss">
.td-com-card {
  width: 100%;
  height: 100%;
  min-width: 1280px;
  overflow: hidden;
}
.td-items {
  display: flex;
}
.td-item-li {
  margin-right: 60px;
  cursor: pointer;
}
.td-item-li:hover {
  scale: calc(1.005);
}
.td-item-img {
  width: 330px;
  height: 500px;
}
.td-dia-card {
  position: absolute;
  top: 0;
  left: -140px;
  font-size: 36px;
  font-family: "nansongshuju";
  color: rgb(214, 179, 103);
}
.td-card-img {
  width: 440px;
  height: 652px;
}
.td-card-h4 {
  position: absolute;
  top: 270px;
  left: 67px;
  width: 320px;
  font-weight: 400;
}

.el-radio-button__inner,
.el-radio-group {
  display: flex;
  flex-direction: column;
  width: 80px;
  position: absolute;
  top: 420px;
  left: 300px;
}
.el-radio-button {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  z-index: 4;
  margin-top: 5px;
}
.el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled) {
  -webkit-box-shadow: none;
  box-shadow: none;
}
::v-deep {
  .el-radio-button .el-radio-button__inner {
    font-size: 18px;
    border-radius: 40px;
    border: 3px #b99950 solid;
    background: transparent;
    width: 80px;
    height: 80px;
    top: 0px;
    left: 2px;
    z-index: 0;
    color: #b99950;
    display: flex;
    align-items: center;
  }
  .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .el-dialog__wrapper .td-dialog {
    background: url("../img/dialog.png") no-repeat;
    background-size: 100% 100%;
    height: 640px;
    width: 1415px;
    margin-left: 50%;
    transform: translate(-45%);
  }
  .is-active {
    background-image: linear-gradient(#674d97, black);
  }
  .el-dialog__header {
    .el-dialog__headerbtn {
      top: 0px;
      right: 0px;
      font-size: 25px;
      width: 25px;
      height: 25px;
      background-color: #efedf4ad;
    }
  }
  .el-dialog__headerbtn .el-dialog__close {
    color: #b99950;
  }
  .el-dialog__wrapper {
    overflow: hidden;
  }
}
.radio-group-div {
  position: absolute;
  left: 24px;
}
.td-dialog-right {
  width: 960px;
  height: 610px;
  position: absolute;
  top: 25px;
  right: 0;
}
.td-dialog-content {
  width: 960px;
  height: 530px;
  overflow-y: scroll;
}
.td-dialog-div {
  display: flex;
  flex-direction: row;
  font-size: 18px;
  color: black;
  font-family: "nansongshuju";
}
.td-dialog-p {
  width: 550px;
  margin-bottom: 30px;
}
.td-dialog-span {
  width: 105px;
}
span[data-person="我"] {
  color: #eb4982;
  margin-left: 55px;
}
span[data-person="查理苏"] {
  color: #674d97;
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
/* 浏览器滚动条样式 */
::-webkit-scrollbar {
  width: 25px;
}
::-webkit-scrollbar-track {
  background-color: #efedf4ad;
}
::-webkit-scrollbar-thumb {
  border: 3px solid transparent;
  background-clip: content-box;
  background-image: linear-gradient(black, #674d97);
}

.td-dialog-page {
  margin-top:16px ;
  margin-left: 85px;
}
.td-dialog-video {
  display: inline-block;
  width: 148px;
  height: 47px;
  background-image: url('../../../../../assets/watchvideo.png');
  background-size: 100% 100%;
  position: relative;
  bottom: 60px;
  left: 760px;
}
</style>
