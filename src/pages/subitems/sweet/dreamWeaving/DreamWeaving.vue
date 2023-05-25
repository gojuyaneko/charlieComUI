<template>
  <div class="dream_weaving">
    <div class="titles">
      <ul class="btns">
          <li class="angel-btn" @click="angelVisible=true"><img src="./image/btn.png" alt="button" height="37.5" width="110"></li>
          <li class="evil-btn" @click="evilVisible=true"><img src="./image/btn.png" alt="button" height="37.5" width="110"></li>
      </ul>
    </div>

    <el-dialog class="angel-dia" :visible.sync="angelVisible" :show-close="false" >
      <h4>{{cardText}}</h4>
      <li class="slide"><img src="./image/滑轨.png" height="465" width="30"></li>
      <li class="x" @click="angelVisible=false"><img src="./image/x.png" height="30" width="30"></li>
      <li class="next-btn"><img src="./image/下一幕.png" height="37.5" width="110"></li>
    </el-dialog>

  </div>

</template>

<script>
export default {
  data(){
    return {
      angelVisible:false,
      evilVisible:false,
      cardText:'刚走进餐馆坐下'
    }

  }
}
</script>

<style scoped lang="scss">
.dream_weaving {
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
  bottom:0.775rem;
  left:3rem;
}

.angel-btn {
  cursor: pointer;
  margin-right: 3.73rem;
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
  left:6.25rem;
}
.x:hover {
  transform: scale(1.05);
}

.angel-dia{
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
  left:6.25rem;
  display: inline-block;
}

.next-btn {
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top: 562px;
  left: 5.2rem;
}

</style>