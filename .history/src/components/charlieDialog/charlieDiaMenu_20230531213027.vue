<template>
  <el-col :span="12" class="com-dialog-menu">
    <span class="demonstration">click 激活</span>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
        <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
</template>
    
    <script>
export default {
  components: {},
  props: { diaBtnData:Array },
  data() {
    return {
      yesOrNo:'light',
      buttonData:[]
    };
  },
  mounted() {
  },
  methods: {

  },
};
</script>
    
<style scoped lang="scss">
.com-dialog-menu {
    
}
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
    