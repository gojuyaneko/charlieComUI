<template>
  <el-radio-group v-model="yesOrNo" @input="pushYoN" >
    <el-radio-button :label="item.para_type" v-for="(item,index) in diaBtnData" :key="index">
      <div :class="'radio-group-div'+ index">{{ item.choice_name}}</div>
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
      console.log(this.yesOrNo)
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
  justify-content: center;
}
.el-radio-button {
  height: 38px;
  display: flex;
  align-items: center;
  margin-right: 40px;
  
}
.el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled) {
  -webkit-box-shadow: none;
  box-shadow: none;
}
::v-deep {
  .el-radio-button .el-radio-button__inner {
    font-size: 16px;
    border: 0;
    background: transparent;
    color: #b99950;
    padding: 6px 30px;
    border: 1px solid;
    border-image: linear-gradient(to right #b99950 #312916);
    border-radius: 30px;
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
  .radio-group-div1::after {
  content: '';
  background-image: url('../../assets/diabtnnIcon.png');
  background-size: 23px 23px;
  width: 23px;
  height: 23px;
  position: absolute;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);
}
.radio-group-div0::after {
  content: '';
  background-image: url('../../assets/diabtnlIcon.png');
  background-size: 23px 23px;
  width: 23px;
  height: 23px;
  position: absolute;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);
}
}
</style>
    