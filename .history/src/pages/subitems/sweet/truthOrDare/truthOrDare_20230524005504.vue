<template>
  <div class="truth-or-dare">
    <ul class="td-items">
      <li v-for="item in tdItems" :key="item" class="td-item-li" @click="dialogVisible=true">
        <img :src="item.bgImg" alt="" class="td-item-img">
      </li>
    </ul>
    <div class="td-l-n">
      LIGHT AND NIGHT
    </div>
    <div>
      <h3 class="td-h3-text">
        真心话大冒险
      </h3>
      <h4 class="td-h4-text">
        Truth or dare
      </h4>
    </div>
    <div class=" td-dialog">
      <el-dialog custom-class="td-dialog" :modal="false" top="11%" :visible.sync="dialogVisible"  :before-close="handleClose">
        <span>这是一段信息</span>
        <div class="td-dia-card">
          <img :src="cardImg" alt="" class="td-card-img">
          <h4 class="td-card-h4"> {{ diaContent }}</h4>
        </div>
        <el-radio-group  v-model="yesOrNo">
          <el-radio-button label="YES"><div style="position: absolute;left: 12px;">YES</div> </el-radio-button>
          <el-radio-button label="NO"><div style="position: absolute;left: 14px;">NO</div></el-radio-button>
        </el-radio-group>
        <span slot="footer" class="dialog-footer">
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tdItems: [
        {
          type: 'truth',
          person: 'charlie',
          bgImg: require('./img/charlietruth.png')
        },
        {
          type: 'truth',
          person: 'me',
          bgImg: require('./img/metruth.png')
        },
        {
          type: 'dare',
          person: 'charlie',
          bgImg: require('./img/charliedare.png')
        },
        {
          type: 'dare',
          person: 'me',
          bgImg: require('./img/medare.png')
        }
      ],
      dialogVisible:false,
      cardImg:require('./img/metruth.png'),
      diaContent:'你曾有过一见钟情的感觉吗？',
      yesOrNo:"YES"
    }
  }
}
</script>

<style scoped lang="scss">
.truth-or-dare {
  width: 100%;
  height: 100%;
  background: url('./img/tdbg.png') no-repeat;
  background-size: 100% 100%;
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

.td-l-n {
  writing-mode: vertical-lr;
  font-size: 50px;
  font-family: "Branch";
  color: rgba(0, 0, 0, 0.478);
  line-height: 0.226;
  -moz-transform: matrix(0.81091601581285, 0, 0, 0.81091601581285, 0, 0);
  -webkit-transform: matrix(0.81091601581285, 0, 0, 0.81091601581285, 0, 0);
  -ms-transform: matrix(0.81091601581285, 0, 0, 0.81091601581285, 0, 0);
  position: absolute;
  left: 135px;
  top: 225px;
  width: 76px;
  z-index: 18;

}

.td-h3-text {
  font-size: 86px;
  font-family: "nansongshuju";
  color: rgb(10, 5, 4);
  line-height: 1.2;
  -moz-transform: scale(1.07, 1);
  -webkit-transform: scale(1.07, 1);
  -ms-transform: scale(1.07, 1);
  position: absolute;
  left: 1232.162px;
  top: 809.406px;
  width: 542.413px;
  height: 79.867px;
  z-index: 21;

}

.td-h4-text {
  font-size: 70px;
  font-family: "Branch";
  color: rgba(65, 32, 128, 0.502);
  line-height: 1.2;
  -moz-transform: matrix(1.09559805446257, 0, 0, 1.02392341538558, 0, 0);
  -webkit-transform: matrix(1.09559805446257, 0, 0, 1.02392341538558, 0, 0);
  -ms-transform: matrix(1.09559805446257, 0, 0, 1.02392341538558, 0, 0);
  position: absolute;
  left: 1364px;
  top: 852px;
  z-index: 20;
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
  font-family: 'Branch';
  src: url('../../../../../public/font/branch-regular.ttf');
}
.el-radio-button__inner, .el-radio-group  {
  display: flex;
  flex-direction: column;
  width: 80px;
  position: absolute;
  top:450px;
  left: 350px;
}
.el-radio-button {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  z-index: 4;
  margin-top: 10px;
}
::v-deep{
.el-radio-button:first-child .el-radio-button__inner {
  border-radius: 40px;
  border: 2px #b99950 solid;
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
.el-radio-button:last-child .el-radio-button__inner  {
  border-radius: 40px;
  border: 2px #b99950 solid;
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
  background:url('./img/dialog.png') no-repeat;
  background-size: 100% 100%;
  height: 640px;
  width: 1415px;
  margin-left: 50%;
  transform: translate(-45%);
}
.is-active {
 background-image: linear-gradient( #674d97,black);
}
.el-radio-button__orig-radio:checked+.el-radio-button__inner {
  -webkit-box-shadow:none;
  box-shadow:none
}
}

</style>
