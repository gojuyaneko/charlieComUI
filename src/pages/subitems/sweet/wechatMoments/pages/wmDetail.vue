<template>
  <div class="wechat-moments-detail">
    <div class="wm-detail-bg"> 
      <main class="wm-detail-main">
        <section class="wm-detail-section">
          <div class="wm-dt-f-header">
            <picture><img class="wm-dt-header-img margin-right" src="../../../../../assets/charlieprofile.png" alt=""></picture>
            <span class="wm-dt-header-span">{{fisrtPerson}}</span>
          </div>
          <div class="wm-dt-sec-main">
            <p>{{ firstText }}</p>
            <img :src="firstImg" alt="" class="wm-dt-main-img" v-if="hasImg">
            <ul class="wm-likeAndComment"><li></li><li></li></ul>
          </div>
          <div class="wm-detail-design"> Moments of Charlie</div>
        </section>
        <section class="wm-detail-section">
          <div class="wm-dt-sec-header item-right">
            <span class="wm-dt-header-span margin-right pink">{{secondPerson}}</span>
            <picture><img class="wm-dt-header-img" src="../../../../../assets/charlieprofile.png" alt=""></picture>
          </div>
          <div class="wm-dt-sec-main ">
            <el-collapse v-model="deActiveName" accordion>
              <el-collapse-item :title="item.choiceContent" :name="item.index" v-for="item in secondChoice" :key="item.index">
                <span slot="title" class="collapse-title">
                  <i  :class="['el-icon-d-arrow-right wm-title-icon ' ,{'wm-title-icon-active':item.index===deActiveName}]"></i>{{ item.choiceContent }}
                </span>
                <div class="wm-dt-nd-reply"> <span class="purple">{{item.reply.person}}</span> <p>：{{item.reply.content}}</p></div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
  
<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      fisrtPerson:'查理苏',
      firstText:'雪莉酒已经两岁了',
      firstImg:require('../../../../../assets/bird.png'),
      hasImg:true,
      secondPerson:'我',
      secondChoice:[
        {
          index:0,
          choiceContent:'哇，好漂亮的小鸟，看起来有点眼熟',
          reply:{
            person:'查理苏',
            content:'巴拉巴拉巴拉，巴拉巴拉巴拉巴拉巴拉巴拉，巴拉巴拉巴拉,巴拉巴拉巴拉，巴拉巴拉巴拉巴拉巴拉巴拉，巴拉巴拉巴拉,巴拉巴拉巴拉，巴拉巴拉巴拉巴拉巴拉巴拉'
          }
        },
        {
          index:1,
          choiceContent:'为什么要叫雪莉酒',
          reply:{
            person:'查理苏',
            content:'咕噜咕噜，咕噜咕噜咕噜咕噜，咕噜咕噜咕噜'
          }
        },
        {
          index:2,
          choiceContent:'还以为像你这样的人，都是养马的',
          reply:{
            person:'查理苏',
            content:'啪嗒啪嗒啪嗒啪嗒啪嗒啪嗒，啪嗒啪嗒啪嗒'
          }
        }
      ],
      deActiveName:['']
    };
  },
  mounted() { console.log(this.$route.query)},
  methods: {}
};
</script>
  
<style scoped lang="scss">
.wechat-moments-detail {
  width: 100%;
  height: 100%;
  background: url("../../../../../assets/charlieCretsBG/tdbg-min.jpg") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  user-select: none;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
  .wm-detail-bg {
    width: 100%;
    height: 100%;
    background: url("../image/detailbg.png") no-repeat;
    background-size: 100% 100%;
    overflow: scroll;
    position: absolute;
    top: 0;
    left: 0; 
    .wm-detail-section {
      background-color: white;
      padding: 10px 50px 25px 50px;
      position: relative;
      box-shadow: 0.3em 0.3em 0.5em rgba(0,0,0,0.2);
    }
    .wm-detail-section:first-child {
      margin-bottom: 2%;
        .wm-detail-design {
          position: absolute;
          top: -20px;
          right: 56px;
          font-size: 100px;
          font-family: "Branch";
          color: #d6b3672f;
        }
    }
    .wm-detail-main {
      width: 1500px;
      margin: 5px auto;
      margin-top: 11%;
      position: relative;
      .wm-dt-sec-header {
        width: 1400px;
        height: 76px;
      }
      .wm-dt-sec-main {
        padding: 0 76px;
        font-size: 21px;
        margin:5px 0  5px 40px;
      }
      .wm-dt-header-img {
        width: 76px;
        height: 76px;
        vertical-align: bottom;
      }
      .wm-dt-header-span {
        color:#674d97 ;
        font-size: 25px;
        font-family: 'nansongshuju';
      }
      .pink {
        color:rgb(235, 73, 130) ;
      }
      .wm-dt-main-img {
        margin-top: 5px;
        width: 311px;
        height: 223px;
      }
      .wm-dt-nd-reply {
        margin-left: 36px;
        padding: 10px 0;
        display: flex;
        font-size: 21px;
        background-color: rgba(196, 196, 196, 0.1);
        .purple {
          min-width: 70px;
          color: #674d97;
          font-family: 'nansongshuju';
        }
      }
    } 
  }
  .wm-likeAndComment {
    display: flex;
    flex-direction: row;
    width: 100px;
    height: 41px;
    position: absolute;
    bottom: 0px;
    right: 40px;
  }
  .wm-likeAndComment>li {
    width: 41px;
    height: 41px;
  }
  .wm-likeAndComment>li:first-child {
    background: url('../image/like.png') no-repeat;
    background-size:contain;
    margin-right: 30px;
  }
  .wm-likeAndComment>li:last-child {
    background: url('../image/comment.png') no-repeat;
    background-size: contain;
  }
  .item-right {
    text-align: right;
  }
  .margin-right {
    margin-right: 10px;
  }
  ::v-deep {
  .el-collapse-item__header {
    font-size:21px;
    font-family: "nansongshuju";
    height: 64px;
    border: 0;
  }
  .el-collapse {
    border: 0;
  }
  .el-collapse-item__arrow {
    display: none;
  }
  .el-collapse-item__wrap {
    border: 0;
  }
  .el-collapse-item__content {
    padding-bottom: 0;
  }
  .el-collapse-item__header.focusing:focus:not(:hover) {
    color: #d6b367;
  }
  .wm-title-icon {
    width: 25px;
    height: 26px;
    margin-right: 10px;
    color: #d6b367;
    font-weight: 700;
    transition: 0.2s linear;
  }
  .wm-title-icon-active {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
}
::-webkit-scrollbar {
  display: none;
}
</style>
  