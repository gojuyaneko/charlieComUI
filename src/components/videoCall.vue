<template>
  <div class="charlie-video-call">
    <div class="ch-vc-left">
      <p>来电</p>
    </div>
    <div class="ch-vc-name">{{ callName }}</div>
    <div class="ch-pick-up" @click="dialogVisible = true">
      接听
    </div>
    <el-dialog :visible.sync="dialogVisible" width="70%" :center="true">
      <div slot="title">
        <div class="ch-vc-title"><img class="ch-vc-title-left" src="../assets/calldetailleft.png" alt="">通话详情<img class="ch-vc-title-right" src="../assets/calldetailright.png" alt=""></div>
      </div>
      <div v-for="(item, index) in chDetailData" :key="index" class="ch-vc-section">
        <div class="ch-dt-sec-header" :data-person="item.name">
          <picture :data-person="item.name"><img class="ch-dt-header-img" src="../assets/charlieprofile.png" alt="">
          </picture>
        </div>
        <div class="ch-dt-sec-main" :data-person="item.name">
          <div class="ch-dt-normal-text">
            <p>{{ item.content[0].selfContent }}</p>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
    
<script>
export default {
  components: {},
  props: { callName: String },
  data() {
    return {
      dialogVisible: false,
      chDetailData: [
        {
          name: '查理苏',//说话人名称
          content: [//说话内容数组
            {
              selfContent: "[红包]在忙吗？"//说话内容
            },
          ],
        },
        {
          name: '我',
          content: [
            {
              selfContent: "[惊]"
            },
            {
              selfContent:
                "呜呜呜，我的手比脑子快一步，还没反应过来就把红包给抢了"
            },
            {
              selfContent: "谢谢查医生，红包我就先收下了"
            },
          ],
        },
        {
          name: '查理苏',
          content: [
            {
              selfContent: "完美啊，你的名字是charlie"
            },
          ],
        },
        {
          name: '查理苏',
          content: [
            {
              selfContent: "1完美啊，你的名字是charlie"
            },
          ],
        },
        {
          name: '我',
          content: [
            {
              selfContent: "啦啦啦啦啦"
            },
            {
              selfContent:
                "呜呜呜，我的手比脑子快一步，还没反应过来就把红包给抢了"
            },
            {
              selfContent: "谢谢查医生，红包我就先收下了"
            },
          ],
        },
        {
          name: '查理苏',
          content: [
            {
              selfContent: "让我想想，亲爱的未婚妻现在有没有在想我呢？",
            },
          ],
        },
        {
          name: '我',
          content: [
            {
              selfContent: "你怎么知道？！",
            },
            {
              selfContent: "最近好忙，满脑子都是工作...",
            },
            {
              selfContent: "你呢，想我了吗？",
            }
          ],
        },
        {
          name: '查理苏',
          content: [
            {
              selfContent: "巴拉巴拉",
            },
          ],
        }
      ]
    }
  }
}
</script>
    
<style scoped lang="scss">
.charlie-video-call {
  width: 400px;
  display: flex;
  flex-direction: row;
  border: 1px solid #674d97;
  position: relative;
  color: #674d97;
  line-height: 48px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.ch-vc-left {
  flex: 1;
  margin: 4px 10px;
  border-right: 1px solid #aa89e8;

  p {
    padding-right: 10px;
  }

}

.ch-vc-name {
  flex: 2.5;
  margin: 4px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ch-pick-up {
  cursor: pointer;
  flex: 1.5;
  margin: 4px 10px;
  font-size: 21px;
  position: relative;
  right: 0px;
}

.ch-pick-up::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0%, -50%);
  content: ' ';
  background: url('../assets/videoCall.png');
  background-size: 100% 100%;
  width: 40px;
  height: 40px;
}
.ch-vc-title{
  font-size: 24px;
}
.ch-vc-title-left {
  width: 202px;
  height: 22px;
  margin-right: 10px;
}
.ch-vc-title-right {
  width: 119px;
  height: 2px;
  margin-left: 10px;
  vertical-align: middle;
}
.ch-vc-section {
  padding: 10px 50px 25px 50px;
  position: relative;
  .ch-dt-sec-header {
    width: 100%;
    height: 76px;
    font-family: 'nansongshuju';

    .ch-dt-header-img {
      width: 76px;
      height: 76px;
      vertical-align: middle;
    }

    picture[data-person='我']::before {
      content: '我';
      display: inline-block;
      width: 10px;
      height: 10px;
      z-index: 3;
      font-size: 25px;
      margin-right: 10px;
      color: rgb(235, 73, 130);
    }

    picture[data-person='查理苏']::after {
      content: '查理苏';
      display: inline-block;
      width: 90px;
      z-index: 3;
      font-size: 25px;
      margin-left: 10px;
      color: #674d97;
    }
  }

  .ch-dt-sec-header[data-person='我'] {
    text-align: right;
  }

  .ch-dt-sec-main {
    padding: 0 96px;
    font-size: 21px;
    margin: -25px 0 5px 40px;
  }
  
}
.ch-dt-sec-main[data-person='我'] {
  text-align: right;
}
::-webkit-scrollbar {
  display: none;
}
::v-deep {
  .el-icon-close:before {
    display: none;
  }
  .el-dialog {
    background-image: url('../assets/starbottom.png');
    background-size: 100% auto;
  }
  .el-dialog__body {
    height: 60vh;
    overflow-y: scroll;
    background: transparent;
  }
  .el-dialog__wrapper {
    overflow-x: hidden;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      width: 25px;
    }
    ::-webkit-scrollbar-track {
      background-color: #efedf4ad;
    }
    ::-webkit-scrollbar-thumb {
      border: 3px solid transparent;
      background-clip: content-box;
      background-image: linear-gradient(black, #674d97);
    }
  }
  
}
</style>
    