<template>
  <el-radio-group v-model="yesOrNo" @input="pushYoN" >
    <el-radio-button :label="item.para_type" v-for="(item,index) in diaBtnData" :key="index">
      <img  draggable="false" :src="diaBtnImg[index].bgimg" alt="" class="dia-btn-bg">
      <div class="radio-group-div">{{ item.choice_name}}</div>
    </el-radio-button>
  </el-radio-group>
</template>
    
    <script>
export default {
  components: {},
  props: { 
    diaBtnData:Array,
    diaBtnImg:Array,
    },
  data() {
    return {
      yesOrNo:'',
    };
  },
  mounted() {
    this.yesOrNo = this.diaBtnData[0].para_type
    this.pushYoN()
  },
  methods: {
    pushYoN(){
      this.$emit('getYoN',this.yesOrNo)
    }
  }
};
</script>
    
<style scoped lang="scss">
.el-radio-button__inner,
.el-radio-group {
  display: flex;
  flex-direction: row;
}
.el-radio-button {
  height: 28px;
  display: flex;
  align-items: center;
  margin-right: 60px;
  
}
.el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled) {
  -webkit-box-shadow: none;
  box-shadow: none;
}
::v-deep {
  .el-radio-button .el-radio-button__inner {
    font-size: 18px;
    border: 0;
    background: transparent;
    width: 220px;
    color: #b99950;  
    padding: 8px 0;
  }

  .is-active {
    scale: calc(1.08);
    border: 0;
    background-image: linear-gradient(to left , transparent,#674d97);
    border-radius: 28px;
  }
  .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}
.dia-btn-bg {
  position: absolute;
  top: 0;
  left: -2px;
  height: 0;
  width: 100%;
  height: 100%;
}
</style>
    