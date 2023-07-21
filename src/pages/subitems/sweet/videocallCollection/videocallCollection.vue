<template>
  <div class="video-call">
    <div class="vc-l-n">LIGHT AND NIGHT</div>
    <div class="video-call-bg">
      <main class="vc-main">
        <div class="vc-layout">
          <vc-layout :layoutData="layoutData" ref="vclayout"></vc-layout>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import vcLayout from './component/vcLayout.vue';
import { getVC} from '@/request/api';
export default {
  components:{vcLayout},
  props: {},
  data() {
    return {
      layoutData:{}
    }
  },
  activated() {
    this.getLayoutData()
  },
  methods: {
    getLayoutData(){
      this.layoutData=[]
      getVC().then((res)=>{
        this.pageSize = res.totalNum
        this.layoutData = res
      })
    }
  },
  beforeRouteEnter(to, from, next) {
    if(from.name !== 'vcdetail') {
      next(vm => {
        vm.$refs['vclayout'].freshPage()
      })
    } else {
      next()
    }
  }
};
</script>

<style scoped lang="scss">
.video-call {
  width: 100%;
  height: 100%;
  background: url("../../../../assets/charlieCretsBG/tdbg-min.jpg") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  user-select: none;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
  .video-call-bg {
    width: 100%;
    height: 100%;
    background: url("../../../../assets/charlieCretsBG/tdbg.png") no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  .vc-l-n {
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
  .vc-main {
    width: 1500px;
    padding-left: 20px;
    margin: 11.095% auto;
    position: relative;
  }
}
::v-deep {
  .el-input {
    color: rgb(214, 179, 103);
    background-image: url("../../../../assets/redBtn.png");
    background-size: 100% 100%;
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
  .vc-select-pop {
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
@font-face {
  font-family: "Branch";
  src: url("../../../../../public/fonts/branch-regular.ttf");
}
</style>
