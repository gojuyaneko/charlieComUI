<template>
  <div class="dream_weaving">
    <div class="titles">
      <div class="button">
        <ul class="btns">
          <li class="angel-btn" @click="meetVisible=true;"><img src="./image/btn.png" height="35" width="100"></li>
          <li class="evil-btn" @click="skyVisible=true"><img src="./image/btn.png" height="35" width="100"></li>
        </ul>
      </div>

    </div>

    <div class="angel-dia">
      <el-dialog custom-class="meet" :visible.sync="meetVisible" v-if="meetVisible">
        <div class="dia-text">
          <h4>{{cardText}}</h4>
          <div class="diapage">
            <ul class="elements">
              <li class="co">第</li>
              <li class="ch">节</li>
            </ul>
          <dw-pagi @changeCurPa="getContent_meet"></dw-pagi>
        </div>
        <a class="next-btn" @click="tripVisible=true;meetVisible=false" ><img src="./image/下一幕.png" height="35" width="100"></a>

        </div>

      </el-dialog>

      <el-dialog custom-class="trip" :visible.sync="tripVisible" v-if="tripVisible">
        <h4>{{cardText1}}</h4>
        <div class="diapage">
          <ul class="elements">
            <li class="co">第</li>
            <li class="ch">节</li>
          </ul>
          <dw-pagi @changeCurPa="getContent_trip"></dw-pagi>
        </div>
        <a class="next-btn" @click="meetVisible=true;tripVisible=false"><img src="./image/下一幕.png" height="35" width="100"></a>
      </el-dialog>
    </div>

    <div class="evil-dia">
      <el-dialog custom-class="sky" :visible.sync="skyVisible" v-if="skyVisible">
        <h4>{{cardText}}</h4>
        <div class="diapage">
          <ul class="elements">
            <li class="co">第</li>
            <li class="ch">节</li>
          </ul>
          <dw-pagi @changeCurPa="getContent_sky"></dw-pagi>
        </div>
        <a class="next-btn" @click="moonVisible=true;skyVisible=false"><img src="./image/下一幕.png" height="35" width="100"></a>
      </el-dialog>

      <el-dialog custom-class="moon" :visible.sync="moonVisible"  v-if="moonVisible" >
        <h4>{{cardText1}}</h4>
        <div class="diapage">
          <ul class="elements">
            <li class="co">第</li>
            <li class="ch">节</li>
          </ul>
          <dw-pagi @changeCurPa="getContent_moon"></dw-pagi>
        </div>
        <a class="next-btn" @click="skyVisible=true;moonVisible=false"><img src="./image/下一幕.png" height="35" width="100"></a>
      </el-dialog>
    </div>


  </div>

</template>

<script>
import dwPagi from '../dreamWeaving/dwPagi'
export default {
  components: {dwPagi},
  data(){
    return {
      meetVisible:false,
      skyVisible:false,
      tripVisible:false,
      moonVisible:false,
      cardText:'刚走进餐馆坐下\n刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐\n刚走进餐馆坐下\n刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐\n下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆\n坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进\n刚走进餐馆坐下\n刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐\n下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆\n坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进\n刚走进餐馆坐下\n刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐\n下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆\n坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进\n下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆\n坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进\n餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆\n刚走进餐馆坐下\n刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐\n下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆\n坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进\n餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆\n刚走进餐馆坐下\n刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐\n下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆\n坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进\n餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆\n刚走进餐馆坐下\n刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐\n下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆\n坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进\n餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆坐下刚走进餐馆\n刚走进餐馆坐下\n走进餐馆坐下刚走进餐馆',
      cardText1:'完美啊你的名字是charlie'
    }
  },
    mounted() {},
    methods: {
    }
}
</script>

<style scoped lang="scss">
.dream_weaving {
  text-align: center;
  width: 100%;
  background: url('./image/背景.png') no-repeat;
  background-size: cover;
  height: 100%;
  background-position: center;
}

.titles {
  background: url('./image/2.png') no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  background-position: center;
}

.button {
  position: relative;
  top:860px;
  left:127px;
  display: inline-block;
}
.btns {
  display: flex;
}

.angel-btn {
  cursor: pointer;
  margin-right: 720px;
}
.angel-btn:hover {
  transform: scale(1.05);
}
.evil-btn {
  cursor: pointer;
}
.evil-btn:hover {
  transform: scale(1.05);
}

::v-deep .el-dialog__header {
  .el-dialog__headerbtn {
    top: 2px;
    right: 2px;
    font-size: 25px;
    width: 27px;
    height: 25px;
    background-color: transparent;
  }
}
::v-deep .el-dialog__headerbtn .el-dialog__close {
  color: #b99950;
  display: inline-block;
}

::v-deep .el-dialog__headerbtn .el-dialog__close:hover{
  border-style: solid ;
  border-radius: 5px;
}

::v-deep .el-dialog__wrapper .meet {
  background:url("./image/卡牌.png") no-repeat;
  background-size: 100% 100%;
  top: 96px;
  margin-left: 9.5%;
  position: absolute;
  height: 660px;
  width: 1550px;
}

::v-deep .el-dialog__wrapper .trip {
  background:url("./image/卡牌.png") no-repeat;
  background-size: 100% 100%;
  background-position: center;
  top: 90px;
  margin-left: 9.5%;
  position: absolute;
  height: 655px;
  width: 1550px;
}

::v-deep .el-dialog__wrapper .sky {
  background:url("./image/卡牌.png") no-repeat;
  background-size: 100% 100%;
  background-position: center;
  top: 90px;
  margin-left: 9.5%;
  position: absolute;
  height: 655px;
  width: 1550px;
}

::v-deep .el-dialog__wrapper .moon {
  background:url("./image/卡牌.png") no-repeat;
  background-size: 100% 100%;
  background-position: center;
  top: 90px;
  margin-left: 9.5%;
  position: absolute;
  height: 655px;
  width: 1550px;
}


::v-deep .el-dialog {
  background-color: transparent;
  box-shadow: none;
}


.dia-text {
  width: 1000px;
  height: 610px;
  position: absolute;
  top: 25px;
  right: 0;
}

h4 {
  font-family: "nansongshuju";
  color: rgb(214, 179, 103);
  display: inline-block;
  position: absolute;
  top:40px;
  left:-20px;
  width: 1012px;
  height: 460px;
  overflow-y: scroll;
  white-space: pre-wrap;
}

::-webkit-scrollbar {
  width: 10px;
  display: block;
}
::-webkit-scrollbar-track {
  background-color:transparent;
}
::-webkit-scrollbar-thumb {
  background-image: linear-gradient(black, #674d97);
  -webkit-border-radius: 6px;
}

.next-btn {
  cursor: pointer;
  display: inline-block;
  position: relative;
  top: 540px;
  left: -50px;
  width: 100px;
  height: 45px;
}

.next-btn:hover {
  transform: scale(1.05);
}

.diapage {
  top:560px;
  left:40px;
  display: inline-block;
  position: relative;
  object-fit: cover;
  object-position: center;
}

.elements {
  display: flex;
  position: absolute;
  top:8px;
  left:290px;
  font-size: 18px;
}

.co {
  margin-right: 150px;
}

</style>