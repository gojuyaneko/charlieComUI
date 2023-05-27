<template>
  <div class="dream_weaving">
    <div class="titles">
      <ul class="btns">
          <li class="angel-btn" @click="meetVisible=true"><img src="./image/btn.png" height="37.5" width="110"></li>
          <li class="evil-btn" @click="skyVisible=true"><img src="./image/btn.png" height="37.5" width="110"></li>
      </ul>
    </div>

    <div class="angel-dia">
      <el-dialog class="meet" :visible.sync="meetVisible" :show-close="false" v-if="meetVisible" :close-on-click-modal ="false">
        <h4>{{cardText}}</h4>
        <li class="slide"><img src="./image/滑轨.png" height="460" width="30"></li>
        <li class="x" @click="meetVisible=false"><img src="./image/x.png" height="30" width="30"></li>
        <ul class="elements">
            <li class="co">第</li>
            <li class="ch">节</li>
        </ul>
        <div class="diapage">
          <dw-pagi @changeCurPa="getDiaContent"></dw-pagi>
        </div>
        <li class="next-btn" @click="tripVisible=true;meetVisible=false" ><img src="./image/下一幕.png" height="37.5" width="110"></li>

      </el-dialog>

      <el-dialog class="trip" :visible.sync="tripVisible" :show-close="false" v-if="tripVisible" :close-on-click-modal ="false">
        <h4>{{cardText1}}</h4>
        <li class="slide"><img src="./image/滑轨.png" height="460" width="30"></li>
        <li class="x" @click="tripVisible=false"><img src="./image/x.png" height="30" width="30"></li>
        <ul class="elements">
            <li class="co">第</li>
            <li class="ch">节</li>
        </ul>
        <div class="diapage">
          <dw-pagi @changeCurPa="getDiaContent"></dw-pagi>
        </div>
        <li class="next-btn" @click="meetVisible=true;tripVisible=false"><img src="./image/下一幕.png" height="37.5" width="110"></li>
      </el-dialog>
    </div>

    <div class="evil-dia">
      <el-dialog class="sky" :visible.sync="skyVisible" :show-close="false" v-if="skyVisible" :close-on-click-modal ="false">
        <h4>{{cardText}}</h4>
        <li class="slide"><img src="./image/滑轨.png" height="460" width="30"></li>
        <li class="x" @click="skyVisible=false"><img src="./image/x.png" height="30" width="30"></li>
        <ul class="elements">
            <li class="co">第</li>
            <li class="ch">节</li>
        </ul>
        <div class="diapage">
          <dw-pagi @changeCurPa="getDiaContent"></dw-pagi>
        </div>
        <li class="next-btn" @click="moonVisible=true;skyVisible=false"><img src="./image/下一幕.png" height="37.5" width="110"></li>
      </el-dialog>

      <el-dialog class="moon" :visible.sync="moonVisible" :show-close="false" v-if="moonVisible" :close-on-click-modal ="false">
        <h4>{{cardText1}}</h4>
        <li class="slide"><img src="./image/滑轨.png" height="460" width="30"></li>
        <li class="x" @click="moonVisible=false"><img src="./image/x.png" height="30" width="30"></li>
        <ul class="elements">
            <li class="co">第</li>
            <li class="ch">节</li>
        </ul>
        <div class="diapage">
          <dw-pagi @changeCurPa="getDiaContent"></dw-pagi>
        </div>
        <li class="next-btn" @click="skyVisible=true;moonVisible=false"><img src="./image/下一幕.png" height="37.5" width="110"></li>
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
      cardText:'刚走进餐馆坐下',
      cardText1:'完美啊你的名字是charlie'
    }

  },
    mounted() {},
    methods() {

    }
}
</script>

<style scoped lang="scss">
.dream_weaving {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('./image/背景.png') no-repeat;
  background-size: 100% 100%;
  
}

.titles {
  height: 100%;
  background: url('./image/2.png') no-repeat;
  background-size: 100% 100%;
}

.btns {
  display: flex;
  position: absolute;
  bottom:148px;
  left:577px;
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

.x {
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top:-15px;
  left: 1200px;
}
.x:hover {
  transform: scale(1.05);
}

.meet, .trip, .sky, .moon {
  background:url("./image/卡牌.png") no-repeat;
  background-size: 79% 70%;
  background-position: center;
  top: 120px;
}


::v-deep .el-dialog {
  background-color: transparent;
  box-shadow: none;
}

h4 {
  font-family: "nansongshuju";
  color: rgb(214, 179, 103);
  position: absolute;
  top:40px;
  left:300px;
}

.slide {
  position: absolute;
  top:-8px;
  left:1200px;
  display: inline-block;
}

.next-btn {
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top: 555px;
  left: 1000px;
}

.next-btn:hover {
  transform: scale(1.05);
}

.diapage {
  top:560px;
  left:450px;
  display: inline-block;
  position: absolute;

}

.elements {
  display: flex;
  position: relative;
  top: 490px;
  left:495px;
}

.co {
  margin-right: 185px;
}

</style>