<template>
  <div class="chat-history">
    <div class="ch-l-n">LIGHT AND NIGHT</div>
    <div class="chat-history-bg">
      <main class="ch-main">
        <section class="ch-main-header">
          <el-select class="ch-classbtn" :popper-append-to-body="false" v-model="selectValue" placeholder="请选择" popper-class='ch-select-pop' @change="freshType">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </section>
        <div class="ch-layout">
          <ch-layout :layoutData="layoutData" :pageSize="pageSize" ref="chlayout"></ch-layout>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import ChLayout from './component/chLayout.vue';
import { getChat } from '@/request/api';
export default {
  components:{ChLayout},
  props: {},
  data() {
    return {
      layoutData:{
          type:'activities',
          data:[
            {
              dtype:'vediocalls',
              name:'回归短信-重逢之歌',
              content:'查理苏：没事的时候值夜班还是挺无聊的。'
            },
            {
              dtype:'normal',
              name:'百度地图联动-遛鸟',
              content:'：到了吗？'
            },
            {
              dtype:'voicemessage',
              name:'2021查理苏生日-突然的礼物',
              content:'查理苏：快递到了...'
            },
            {
              dtype:'normal',
              name:'2022除夕-急诊室外',
              content:'查理苏：除夕快乐未婚妻，在这样一个合家欢的夜晚，有没有想我？'
            },
            {
              dtype:'redenvelope',
              name:'2021中秋-月圆礼盒',
              content:'查理苏：[红包]在忙吗？'
            },
            {
              dtype:'normal',
              name:'2022春节-豪华晚宴',
              content:'我：查理苏新年快乐！下夜班了吗？'
            },
            {
              dtype:'vediocalls',
              name:'回归短信-重逢之歌',
              content:'查理苏：没事的时候值夜班还是挺无聊的。'
            },
            {
              dtype:'normal',
              name:'百度地图联动-遛鸟',
              content:'：到了吗？'
            },
            {
              dtype:'voicemessage',
              name:'2021查理苏生日-突然的礼物',
              content:'查理苏：快递到了...'
            },
            {
              dtype:'normal',
              name:'2022除夕-急诊室外',
              content:'查理苏：除夕快乐未婚妻，在这样一个合家欢的夜晚，有没有想我？'
            },
            {
              dtype:'redenvelope',
              name:'2021中秋-月圆礼盒',
              content:'查理苏：[红包]在忙吗？'
            },
            {
              dtype:'normal',
              name:'2022春节-豪华晚宴',
              content:'我：查理苏新年快乐！下夜班了吗？'
            }
          ]
        },
      options:[
        {
          value:'lingXi',
          label:'灵犀'
        },
        {
          value:'mainStory',
          label:'主线'
        },
        {
          value:'xieHou',
          label:'邂逅'
        },
        {
          value:'activities',
          label:'活动'
        },
        {
          value:'truthorDare',
          label:'真话冒险'
        },
        {
          value:'teaParty',
          label:'茶歇小憩'
        }
      ],
      selectValue:'lingXi',
      pageSize: 0
    }
  },
  activated() {
    this.getLayoutData(this.selectValue)
  },
  methods: {
    freshType(data) {
      this.selectValue = data
      this.getLayoutData()
      this.$refs['chlayout'].freshPage()
    },
    getLayoutData(){
      this.layoutData=[]
      getChat({type: this.selectValue}).then((res)=>{
        this.pageSize = res.totalNum
        this.layoutData = res
        console.log(res)
      })
    }
  },
};
</script>

<style scoped lang="scss">
.chat-history {
  width: 100%;
  height: 100%;
  background: url("../../../../assets/charlieCretsBG/tdbg-min.jpg") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  user-select: none;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
  .chat-history-bg {
    width: 100%;
    height: 100%;
    background: url("../../../../assets/charlieCretsBG/tdbg.png") no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  .ch-l-n {
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
  .ch-main {
    width: 1500px;
    padding-left: 20px;
    margin: 8% auto;
    position: relative;
    .ch-main-header {
      height: 60px;
      position: relative;
      .ch-classbtn{
        width: 150px;
        height: 46px;
        position: absolute;
        top: 0px;
        right: 10px;
      }
    }
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
  .ch-select-pop {
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
