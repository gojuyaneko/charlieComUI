<template>
  <div class="dream_weaving">
      <div class="titles">
        <ul class="btns">
          <li class="angel-btn" tabindex="0"  @click="meetVisible=true;show(0,0)" :class="Index===0?'active':''"></li>
          <li class="evil-btn" tabindex="0"  @click="skyVisible=true;show(1,0)" :class="Index===1?'active':''"></li>
        </ul>
      </div>

    <div class="angel-dia">
      <el-dialog custom-class="meet" :visible.sync="meetVisible" v-if="meetVisible">
        <div class="dia-text">
          <div v-for="( item,index) in ContentText" :key="index">
            <div v-for="(item,index) in subContent" :key="index" class="card-text">
              <h4 :datatype="item.type">{{item.content}}</h4>
            </div>
          </div>
        </div>
        <div class="diapage">
          <dw-pagi4 @changeCurPa="getContent_meet"></dw-pagi4>
            <ul class="elements4">
              <li class="co">第</li>
              <li class="ch">节</li>
            </ul>

          </div>
        <a class="next-btn" @click="tripVisible=true;meetVisible=false; show(0,1)" :class="Index===0?'active':''" ></a>

      </el-dialog>

      <el-dialog custom-class="trip" :visible.sync="tripVisible" v-if="tripVisible">
        <div class="dia-text">
          <div v-for="( item,index) in ContentText" :key="index">
            <div v-for="( item,index) in subContent" :key="index" class="card-text" >
              <h4 :datatype="item.type">{{item.content}}</h4>
            </div>
          </div>
        </div>
        <div class="diapage">
            <ul class="elements4">
              <li class="co">第</li>
              <li class="ch">节</li>
            </ul>
          <dw-pagi4 @changeCurPa="getContent_meet"></dw-pagi4>
          </div>
          <a class="next-btn" @click="meetVisible=true;tripVisible=false;show(0,0)" :class="Index===0?'active':''"></a>
      </el-dialog>
    </div>

    <div class="evil-dia">
      <el-dialog custom-class="sky" :visible.sync="skyVisible" v-if="skyVisible">
        <div class="dia-text">
          <div v-for="( item,index) in ContentText" :key="index">
            <div v-for="( item,index) in subContent" :key="index" class="card-text">
              <h4 :datatype="item.type">{{item.content}}</h4>
            </div>
          </div>
        </div>
        <div class="diapage">
            <ul class="elements6">
              <li class="co1">第</li>
              <li class="ch1">节</li>
            </ul>
          <dw-pagi6 @changeCurPa="getContent_meet"></dw-pagi6>
          </div>
          <a class="next-btn" @click="moonVisible=true;skyVisible=false; show(1,1)" :class="Index===0?'active':''"></a>

      </el-dialog>

      <el-dialog custom-class="moon" :visible.sync="moonVisible"  v-if="moonVisible" >
        <div class="dia-text">
          <div v-for="( item,index) in ContentText" :key="index">
            <div v-for="( item,index) in subContent" :key="index" class="card-text">
              <h4 :datatype="item.type">{{item.content}}</h4>
            </div>
          </div>
        </div>
        <div class="diapage">
            <ul class="elements6">
              <li class="co1">第</li>
              <li class="ch1">节</li>
            </ul>
          <dw-pagi6 @changeCurPa="getContent_meet"></dw-pagi6>
          </div>
          <a class="next-btn" @click="skyVisible=true;moonVisible=false;show(1,0)" :class="Index===0?'active':''"></a>
      </el-dialog>
    </div>

  </div>

</template>

<script>
import dwPagi4 from '../dreamWeaving/dwPagi4.vue'
import dwPagi6 from  '../dreamWeaving/dwPagi6.vue'
import {getDW} from "@/request/api";
export default {
  components: {dwPagi4,dwPagi6},
  data(){
    return {
      meetVisible:false,
      skyVisible:false,
      tripVisible:false,
      moonVisible:false,
      currentPage:1,
      Index:0,
      sessionIndex:0,
      ContentText:[],
      subContent:[],
    }
  },
    mounted() {
    this.getPara()
    },
    methods: {
      getContent_meet (currentPage) {
        this.currentPage = currentPage
        console.log(currentPage)
        this.getPara()
      },
      show(value,subValue) {
      this.Index === value ? this.isShow = !this.isShow : this.isShow = true
      this.Index = value
      this.sessionIndex = subValue
      this.getPara()
    },
      getPara() {
      getDW({cardindex:this.Index,sessionIndex:this.sessionIndex,currentPage:this.currentPage}).then((res) => {
        this.subContent=[]
        this.ContentText=[]
            for( let i in res.subContent) {
              let dia= {
                type: res.subContent[i]["type"],
                content:res.subContent[i]["content"],
              }
              console.log(dia)
              this.subContent.push(dia)
            }
            let item = {
              sessionIndex:this.sessionIndex,
              cardindex:this.Index,
              currentPage:this.currentPage
            }
            this.ContentText.push(item)

      })
    }
  }
}
</script>

<style scoped lang="scss">
.dream_weaving {
  text-align: center;
  width: 100%;
  height: 100%;
  background: url('./image/背景.png') no-repeat;
  background-size: cover;
  background-position: center;
}

.titles {
  height: 100%;
  background: url('./image/2.png') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  position: absolute;
  background-position: center;
}

.btns {
  top: 81%;
  left: 585px;
  display: flex;
  position: absolute;

}
.angel-btn {
  cursor: pointer;
  margin-right: 723px;
  display: inline-block;
  background-image: url("./image/btn.png");
  background-size: 100% 100%;
  height: 45px;
  width: 139px;
  position: relative;
}
.angel-btn:hover {
  transform: scale(1.05);
}
.evil-btn {
  cursor: pointer;
  display: inline-block;
  background-image: url("./image/btn.png");
  background-size: 100% 100%;
  height: 45px;
  width: 139px;
  position: relative;
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
  transform: scale(1.05);
}

::v-deep .el-dialog__wrapper .meet {
  background:url("./image/meet.png") no-repeat;
  background-size: 100% 100%;
  top: 110px;
  margin-left: 9.5%;
  position: absolute;
  height:650px;
  width: 1550px;
  background-position: center;
}

::v-deep .el-dialog__wrapper .trip {
  background:url("./image/trip.png") no-repeat;
  background-size: 100% 100%;
  top: 110px;
  margin-left: 9.5%;
  position: absolute;
  height:650px;
  width: 1550px;
  background-position: center;
}

::v-deep .el-dialog__wrapper .sky {
  background:url("./image/sky.png") no-repeat;
  background-size: 100% 100%;
  top: 110px;
  margin-left: 9.5%;
  position: absolute;
  height:650px;
  width: 1550px;
  background-position: center;
}

::v-deep .el-dialog__wrapper .moon {
  background: url("./image/moon.png") no-repeat;
  background-size: 100% 100%;
  top: 110px;
  margin-left: 9.5%;
  position: absolute;
  height:650px;
  width: 1550px;
  background-position: center;
}


::v-deep .el-dialog {
  background-color: transparent;
  box-shadow: none;
}


.dia-text {
  width: 940px;
  height: 500px;
  position: absolute;
  top: 40px;
  left:600px;
  overflow-y: scroll;
}

.card-text {
  display: flex;
  flex-direction: row;
  width: 800px;
}

h4 {
  font-family: "nansongshuju";
  color: rgb(214, 179, 103);
  margin-bottom: 10px;
  top:40px;
  left:-20px;
  text-align: left;
  line-height: 35px;
}

h4[datatype="choice"]  {
  font-family: "nansongshuju";
  color: #848484;
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
  background-image: url("./image/下一幕.png");
  background-size: 100% 100%;
  cursor: pointer;
  display: inline-block;
  position: relative;
  top: 480px;
  left: 250px;
  width: 141px;
  height: 45px;
}

.next-btn:hover {
  transform: scale(1.05);
}

.diapage {
  top:480px;
  left:200px;
  display: inline-block;
  position: relative;
  object-fit: cover;
  object-position: center;
}

.elements4 {
  display: flex;
  position: absolute;
  top:9px;
  left:290px;
  font-size: 18px;
}

.elements6 {
  display: flex;
  position: absolute;
  top:9px;
  left:255px;
  font-size: 18px;
}

.co {
  margin-right: 150px;
  font-family: "nansongshuju";
}

.co1 {
  margin-right: 218px;
  font-family: "nansongshuju";
}

.ch {
  font-family: "nansongshuju";
}

.ch1 {
  font-family: "nansongshuju";
}

</style>