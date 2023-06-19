<template>
  <div class="chat-detail">
    <div class="chat-detail-bg" ref="chatBg" @click.stop="choiceChoose">
      <main class="ch-detail-main">
        <a
          class="ch-detail-video"
          target="_blank"
          href="http://www.bilibili.com"
        >
        </a>
        <div class="ch-detail-design"> Moments of Charlie</div>
        <section v-for="(item, index) in chDetailData" :key="index" class="ch-detail-section" v-show="index<contentIndex">
          <div class="ch-dt-sec-header" :data-person="item.name">
            <picture :data-person="item.name"><img  class="ch-dt-header-img"  src="../../../../../assets/charlieprofile.png" alt=""></picture>
          </div>
          <div class="ch-dt-sec-main ">
            <div class="ch-dt-normal-text" v-if="item.type==='nomarl'">
              <img  :src="item.content[0].img" alt="" v-if="item.content[0].ifImg">
              <video-call class="ch-video-call" :callName="item.content[0].video.name" v-else-if="item.content[0].ifVideo"></video-call>
              <div v-else-if="item.content[0].ifVoice" class="ch-voice-message">
                <h6 class="ch-voime-title">语音</h6>
                <p class="ch-voime-p">{{item.content[0].selfContent}}</p>
                
              </div>
              <p v-else>{{item.content[0].selfContent}}</p>
            </div>
            <div v-if="item.type==='choice'" @click.stop="">
              <el-collapse v-model="deActiveName" accordion >
                <el-collapse-item :name="'id'+index+iindex" v-for="(secitem,iindex) in item.content" :key="iindex">
                  <span slot="title" class="collapse-title">
                    <i  :class="['el-icon-d-arrow-right ch-title-icon ' ,{'ch-title-icon-active':'id'+index+iindex===deActiveName}]"></i>
                    <p v-if="!secitem.ifImg">{{secitem.selfContent}}</p>
                    <img class="ch-title-img" v-if="secitem.ifImg" :src="secitem.img" alt="">
                  </span>
                  <div class="ch-dt-nd-reply" v-for="(thitem,index) in secitem.reply" :key="index"> <span class="purple">查理苏</span> <p>：{{thitem.content}}</p></div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>          
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import VideoCall from '../../../../../components/videoCall.vue'
export default {
  components: {VideoCall},
  props: {},
  data() {
    return {
      deActiveName:'',
      chDetailData: [
        {
          type: "nomarl", // normal无选项，choice有选项
          name:'查理苏',
          content: [
            {
              ifVoice: false,
              ifVideo: false,
              ifImg: false,
              selfContent: "[红包]在忙吗？",
              img: require('../../../../../assets/meme/shock.png'),
              reply: "",
            },
          ],
        },
        {
          type: "choice", // normal无选项，choice有选项
          name:'我',
          content: [
            {
              ifVoice: false,
              ifVideo:false,
              ifImg: true,
              selfContent: "[惊]",
              img: require('../../../../../assets/meme/shock.png'),
              reply: [
                {
                  content: "回复得很及时，看来不在忙",
                },
                {
                  content:
                    "完美的男人，完美的男人，完美的男人，完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人",
                },
              ],
            },
            {
              ifVoice: false,
              ifVideo:false,
              ifImg: false,
              selfContent:
                "呜呜呜，我的手比脑子快一步，还没反应过来就把红包给抢了",
              reply: [
                {
                  content: "1回复得很及时，看来不在忙",
                },
                {
                  content:
                    "1完美的男人，完美的男人，完美的男人，完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人",
                },
              ],
            },
            {
              ifVoice: false,
              ifVideo:false,
              ifImg: false,
              selfContent: "谢谢查医生，红包我就先收下了",
              reply: [
                {
                  content: "2回复得很及时，看来不在忙",
                },
                {
                  content:
                    "2完美的男人，完美的男人，完美的男人，完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人",
                },
              ],
            },
          ],
        },
        {
          type: "nomarl", // normal无选项，choice有选项
          name:'查理苏',
          content: [
            {
              ifVoice: false,
              ifVideo:false,
              ifImg: false,
              selfContent: "完美啊，你的名字是charlie",
              reply: "",
            },
          ],
        },
        {
          type: "nomarl", // normal无选项，choice有选项
          name:'查理苏',
          content: [
            {
              ifVoice: true,
              ifVideo:false,
              ifImg: false,
              selfContent: "1完美啊，你的名字是charlie",
              reply: "",
            },
          ],
        },
        {
          type: "choice", // normal无选项，choice有选项
          name:'我',
          content: [
            {
              ifVoice: false,
              ifVideo:false,
              ifImg: true,
              selfContent: "",
              img: require('../../../../../assets/meme/shock.png'),
              reply: [
                {
                  content: "回复得很及时，看来不在忙",
                },
                {
                  content:
                    "完美的男人，完美的男人，完美的男人，完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人",
                },
              ],
            },
            {
              ifVoice: false,
              ifVideo:false,
              ifImg: false,
              selfContent:
                "呜呜呜，我的手比脑子快一步，还没反应过来就把红包给抢了",
              reply: [
                {
                  content: "1回复得很及时，看来不在忙",
                },
                {
                  content:
                    "1完美的男人，完美的男人，完美的男人，完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人",
                },
              ],
            },
            {
              ifVoice: false,
              ifVideo:false,
              ifImg: false,
              selfContent: "谢谢查医生，红包我就先收下了",
              reply: [
                {
                  content: "2回复得很及时，看来不在忙",
                },
                {
                  content:
                    "2完美的男人，完美的男人，完美的男人，完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人完美的男人",
                },
              ],
            },
          ],
        },
        {
          type: "nomarl", // normal无选项，choice有选项
          name:'查理苏',
          content: [
            {
              ifVoice: false,
              ifVideo:false,
              ifImg: false,
              selfContent: "让我想想，亲爱的未婚妻现在有没有在想我呢？",
              reply: "",
            },
          ],
        },
        {
          type: "choice", // normal无选项，choice有选项
          name:'我',
          content: [
            {
              ifVideo:false,
              ifImg: false,
              selfContent: "你怎么知道？！",
              reply: "",
            },
            {
              ifVideo:false,
              ifImg: false,
              selfContent: "最近好忙，满脑子都是工作...",
              reply: "",             
            },
            {
              ifVideo:false,
              ifImg: false,
              selfContent: "你呢，想我了吗？",
              reply: "",
            }
          ],
        },
        {
          type: "nomarl", // normal无选项，choice有选项
          name:'查理苏',
          content: [
            {
              ifVoice: false,
              ifVideo:true,
              ifImg: false,
              video:{
                name:'工作再忙，也要好好休息...',
                url:'http//www.bilibili.com',
                code:'V1234'
              },
              selfContent: "",
              reply: "",
            },
          ],
        }
      ],
      contentIndex:1
    };
  },
  mounted() {
    console.log(this.$route.query)
  },
  methods: {
    choiceChoose (e) {
      let scrollMain = this.$refs.chatBg
      if(this.contentIndex<this.chDetailData.length)
        this.contentIndex++
        this.$nextTick(() => {
          scrollMain.scrollTo({top:scrollMain.scrollHeight,behavior: 'smooth'})
        })
        console.log(this.contentIndex)
    }
  },
};
</script>

<style scoped lang="scss">
.chat-detail {
  width: 100%;
  height: 100%;
  background: url("../../../../../assets/charlieCretsBG/tdbg-min.jpg") no-repeat;
  background-size: 100% 100%;
  user-select: none;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
  .chat-detail-bg {
    width: 100%;
    height: 100%;
    background: url("../../../../../assets/detailbg.png") no-repeat;
    background-size: 100% 100%;
    overflow-y: scroll;
    position: absolute;
    padding: 0 210px;
    padding-top: 10%;
    box-sizing: border-box;
    top: 0;
    left: 0;
    .ch-detail-main {
      position: relative;
      .ch-detail-section {
        background-color: white;
        padding: 10px 50px 25px 50px;
        position: relative;
        box-shadow: 0.3em 0.3em 0.5em rgba(0,0,0,0.2);
        margin-bottom: 3%;
        .ch-dt-sec-header {
          width: 100%;
          height: 76px;
          font-family: 'nansongshuju';
          .ch-dt-header-img {
            width: 76px;
            height: 76px;
            vertical-align:middle;
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
            height: 90px;
            z-index: 3;
            font-size: 25px;
            margin-left: 10px;
            color: #674d97 ;
          }
        }
        .ch-dt-sec-header[data-person='我'] {
          text-align: right;
        }

        .ch-dt-sec-main {
          padding: 0 76px;
          font-size: 21px;
          margin:5px 0  5px 40px; 
          .ch-dt-normal-text {

          }
        }
      }
      .ch-detail-design {
        position: absolute;
        top: -20px;
        right: 26px;
        font-size: 100px;
        font-family: "Branch";
        color: #d6b3672f;
        z-index: 2;
      }
    }
  }
  .ch-title-img {
    width: 86px;
    height: 86px;
    vertical-align: top;
  }
  .collapse-title {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .ch-voice-message {
    border: 1px solid #674d97;
    background-color: rgba(80, 59, 114,.2);
    .ch-voime-title {
      position: relative;
      font-weight: 400;
      font-size: 21px;
      color: rgb(122, 122, 122);
      border-bottom: 1px solid rgb(80, 59, 114);
      padding: 4px 10px;
    }
    .ch-voime-title::after {
      content: ' ';
      background: url('../../../../../assets/voicemessage.png');
      background-size: 100% 100%;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 4px;
    }
    .ch-voime-p {
      padding: 8px 14px;
    }
  }
}
::v-deep {
    .el-collapse {
      border: 0;
    }
    .el-collapse-item__header {
      font-size: 22px;
      height: 90px;
      border: 0;
      margin: 5px 0;
    }
    .el-collapse-item__header.focusing:focus:not(:hover) {
      color: #d6b367;
    }
    .el-collapse-item__content {
      padding-bottom: 0;
    }
    .el-table .el-table__cell {
      padding:8px 0;
      padding-left: 90px;
    }
    .el-collapse-item__arrow {
      display: none;
    }
    .ch-title-icon {
      width: 25px;
      height: 26px;
      margin: 0 10px 0 40px;
      color: #d6b367;
      font-weight: 700;
      transition: 0.2s linear;
    }
    .el-collapse-item__wrap {
      border: 0;
      background-color: #674d9730;
      position: relative;
      left: 40px;
    }
    .ch-title-icon-active {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
    .ch-table-header {
      color: black;
    }
    .el-table--enable-row-transition .el-table__body td.el-table__cell {
      cursor: pointer;
    }
  }
.ch-detail-video {
  display: inline-block;
  width: 148px;
  height: 47px;
  background-image: url("../../../../../assets/watchvideo.png");
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-150%);
}
.ch-dt-nd-reply {
  margin-left: 36px;
  padding: 5px 0;
  display: flex;
  font-size: 21px;
  background-color: rgba(196, 196, 196, 0.1);
  .purple {
          min-width: 70px;
          color: #674d97;
          font-family: 'nansongshuju';
        }
}
::-webkit-scrollbar {
  display: none;
}
</style>
