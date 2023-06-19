<template>
    <div class="wechat-moments">
      <div class="wm-l-n">LIGHT AND NIGHT</div>
      <h4 class="wm-h4-text">Memories Album</h4>
      <div class="wechat-moments-bg">
        <main class="wm-main">
          <section class="wm-main-header">
            <el-select class="wm-classbtn" :popper-append-to-body="false" v-model="selectValue" placeholder="请选择" popper-class='wm-select-pop' @change="getCollapseData">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </section>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    components: { },
    props: {},
    data() {
      return {
        selectValue:'lingXi',
      }
    },
    mounted() {},
    methods: {
      getCollapseData(data){
        this.collapseData=[]
        this.collapseData = this.collapseDataEntire[data]
        console.log(this.collapseDataEntire[data])
        this.$refs['wmCollapse'].freshPage()
      }
    },
  };
  </script>
  
  <style scoped lang="scss">
  .wechat-moments {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    overflow: hidden;
    user-select: none;
    position: relative;
    scrollbar-width: none;
    -ms-overflow-style: none;
    .wechat-moments-bg {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
    }
    .wm-l-n {
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
      z-index: 2;
    }
    .wm-main {
      width: 1500px;
      margin: 8% auto;
      position: relative;
      z-index: 2;
      .wm-main-header {
        height: 60px;
        position: relative;
        .wm-classbtn{
          width: 150px;
          height: 46px;
          position: absolute;
          top: 0px;
          right: 10px;
        }
      }
    }
    .wm-h4-text {
      font-size: 70px;
      font-family: "Branch";
      font-weight: 400;
      color: rgba(65, 32, 128, 0.502);
      line-height: 1.2;
      -moz-transform: matrix(1.09559805446257, 0, 0, 1.02392341538558, 0, 0);
      -webkit-transform: matrix(1.09559805446257, 0, 0, 1.02392341538558, 0, 0);
      -ms-transform: matrix(1.09559805446257, 0, 0, 1.02392341538558, 0, 0);
      position: relative;
      left: 1200px;
      top:80%;
      z-index: 1;
    }
  }
  ::v-deep {
    .el-input {
      color: rgb(214, 179, 103);
      width: 150px;
      height: 46px;
    }
    .el-input__inner {
      color: rgb(214, 179, 103);
      background-color: transparent;
      border: 0;
      font-size: 20px;
      height: 46px;
      line-height: 46px;
      text-align: center;
    }
    .el-select .el-input.is-focus .el-input__inner {
      color: rgb(214, 179, 103);
    }
    .el-select .el-input .el-select__caret {
      display: none;
    }
    .el-popper .popper__arrow, .el-popper .popper__arrow::after {
      display: none;
    }
    .wm-select-pop {
      position: absolute;
      color: rgb(214, 179, 103);
      bottom:0!important;
      left: 0;
      transform: translateY(100%)!important;
      border: 0;
    }
    .el-scrollbar__wrap {
      overflow: hidden;
      width: 120px;
      font-size: 16px;
      margin: 0 auto!important;
      text-align: center;
    }
    .el-select-dropdown {
      background-color: transparent;
      box-shadow: none;
      top: 0!important;
    }
    .el-picker-panel, .el-popover, .el-select-dropdown, .el-table-filter, .el-time-panel {
      -webkit-box-shadow:0 0 0 0 transparent;
    }
    .el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
      background-color: rgba(68,50,97,.6);
    }
    .el-select-dropdown__item {
      color: rgb(214, 179, 103);
      font-weight: 400;
      padding: 0 10px;
      background-color: rgba(68,50,97,.5);
    }
    .el-select-dropdown__item.selected {
      color: #674d97;
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }
  </style>
  