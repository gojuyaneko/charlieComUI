<template>
  <div class="td-com-card">
    <ul class="td-items">
      <li
        v-for="item in tdItems"
        :key="item"
        class="td-item-li"
        @click="dialogVisible = true"
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
        :before-close="handleClose"
      >
        <div class="td-dia-card">
          <img :src="cardImg" alt="" class="td-card-img" />
          <h4 class="td-card-h4">{{ diaCardText }}</h4>
        </div>
        <el-radio-group v-model="yesOrNo">
          <el-radio-button label="YES"
            ><div class="radio-group-div">YES</div>
          </el-radio-button>
          <el-radio-button label="NO">
            <div class="radio-group-div">NO</div>
          </el-radio-button>
        </el-radio-group>
        <div class="td-dialog-right">
          <div class="td-dialog-content">
            <div v-for="item in diaContent" :key="item" class="td-dialog-div">
              <span class="td-dialog-span">
                <span v-if="item.name !== '我'" :data-person="item.name">{{
                  item.name
                }}</span>
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
          <div class="td-dialog-page"></div>
        </div>
        <span slot="footer" class="dialog-footer"> 
          <td-pagi></td-pagi>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import tdPagi from '@/pages/subitems/sweet/truthOrDare/components/tdPagi'
export default {
  components: {},
  props: {tdPagi},
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
      yesOrNo: "YES",
      diaContent: [
        {
          name: "我",
          content:
            "饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪",
        },
        {
          name: "查理苏",
          content:
            "完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人。",
        },
        {
          name: "旁白",
          content:
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
        },
        {
          name: "我",
          content:
            "饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪",
        },
        {
          name: "查理苏",
          content:
            "完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人。",
        },
        {
          name: "旁白",
          content:
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
        },
        {
          name: "我",
          content:
            "饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪",
        },
        {
          name: "查理苏",
          content:
            "完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人。",
        },
        {
          name: "旁白",
          content:
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
        },
        {
          name: "我",
          content:
            "饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪",
        },
        {
          name: "查理苏",
          content:
            "完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人。",
        },
        {
          name: "旁白",
          content:
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
        },
        {
          name: "我",
          content:
            "饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪",
        },
        {
          name: "查理苏",
          content:
            "完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人。",
        },
        {
          name: "旁白",
          content:
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.td-com-card {
  width: 100%;
  height: 100%;
}
.td-items {
  display: flex;
  position: absolute;
  top: 260px;
  left: 210px;
}

.td-item-li {
  margin-right: 60px;
  cursor: pointer;
}

.td-item-img {
  width: 337px;
  height: 513px;
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
}
@font-face {
  font-family: "Branch";
  src: url("../../../../../../public/font/branch-regular.ttf");
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
::v-deep {
  .el-radio-button:first-child .el-radio-button__inner {
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
  .el-radio-button:last-child .el-radio-button__inner {
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
  .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    -webkit-box-shadow: none;
    box-shadow: none;
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
  left: 22px;
}
.td-dialog-right {
  background-color: rgba(172, 255, 47, 0.178);
  width: 980px;
  height: 620px;
  position: absolute;
  top: 25px;
  right: 0;
}
.td-dialog-content {
  width: 980px;
  height: 540px;
  overflow-y: scroll;
  background-color: rgba(255, 192, 203, 0.411);
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
}
.td-dialog-span {
  width: 85px;
}
span[data-person="我"] {
  color: #eb4982;
  margin-left: 16px;
}
span[data-person="查理苏"] {
  color: #674d97;
  margin-right: 16px;
}
span[data-person="旁白"] {
  display: none;
}
p[data-person-p="旁白"] {
  color: #848484;
}
/* 浏览器滚动条样式 */
::-webkit-scrollbar {
  width: 25px;
}
::-webkit-scrollbar-track {
  background-color: #efedf4ad;
}
::-webkit-scrollbar-thumb {
  background-image: linear-gradient(black, #674d97);
}
.dialog-footer {
  background-color: rgba(22, 163, 81, 0.548);
}
</style>
