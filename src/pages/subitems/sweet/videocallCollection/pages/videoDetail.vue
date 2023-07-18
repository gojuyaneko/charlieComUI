<template>
  <div class="video-detail">
    <div class="video-detail-bg" ref="videoBg" @click.stop="choiceChoose">
      <main class="ch-detail-main">
        <a
          class="ch-detail-video"
          target="_blank"
          href="http://www.bilibili.com"
        >
        </a>
        <div class="ch-detail-design"> Moments of Charlie</div>
        <div class="vc-detail-box">
          <div class="vc-detail-left">
            <img class="vc-detail-img" src="../../../../../assets/video/c-01.png" alt="">
            <div class="vc-border"></div>
          </div>
          <div class="vc-content">
            <span class="vc-content-name">查理苏</span>
            <div>
              <div v-for="(item, index) in chDetailData" :key="index" class="ch-vc-section">
                <div class="ch-dt-sec-main" :data-person="item.name">
                  <div class="ch-dt-normal-text">
                    <p>{{ item.content[0].selfContent }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              ifVideo: false,
              ifImg: false,
              selfContent: "[红包]在忙吗？",
              img: require('../../../../../assets/meme/shock.png'),
              reply: "",
            },
          ],
        },
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
      let scrollMain = this.$refs.videoBg
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
.video-detail {
  width: 100%;
  height: 100%;
  background: url("../../../../../assets/charlieCretsBG/tdbg-min.jpg") no-repeat;
  background-size: 100% 100%;
  user-select: none;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
  font-family: 'nansongshuju';
  .video-detail-bg {
    width: 100%;
    height: 100%;
    background: url("../../../../../assets/detailbg.png") no-repeat;
    background-size: 100% 100%;
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
        .ch-dt-sec-main {
          padding: 0 76px;
          font-size: 18px;
          margin:5px 0  5px 40px; 
        }
      }
      .ch-detail-design {
        position: absolute;
        top: -8vh;
        right: 26px;
        font-size: 100px;
        font-family: "Branch";
        color: rgb(187, 172, 147);
      }
    }
  }
  .vc-detail-box {
    margin-top: 5vh;
    background: url('../../../../../assets/video/bg.png') no-repeat;
    background-size: 100% 100%;
    height: 66.8vh;
    position: relative;
    z-index: 2;
    border-top-left-radius: 126px;
    border-bottom-left-radius: 126px;
    display: flex;
    .vc-detail-left {
      width: 425px;
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
    }
    .vc-detail-img {
      width: 425px;
      height: 649px;
      border-radius: 30px;
    }
    .vc-border {
      width: 425px;
      height: 642px;
      border-radius: 126px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 1vh;
      border: 4px solid rgb(214,179,103);
    }
    .vc-content {
      height: 66.8vh;
      margin-left: 180px;
      overflow-y: scroll;
      flex-grow: 1;
      position: relative;
      padding: 20px 0;
      display: flex;
      box-sizing: border-box;
    }
    .vc-content-name {
      color: #674d97;
      font-size: 18px;
    }
  }
}
.ch-detail-video {
  display: inline-block;
  width: 148px;
  height: 47px;
  background-image: url("../../../../../assets/watchvideo.png");
  background-size: 100% 100%;
  position: absolute;
  top: -5vh;
  right: 0;
  transform: translateY(-150%);
}

.ch-vc-section {
  position: relative;
  margin-left: 70px;
  line-height: 1.2;
  .ch-dt-sec-header {
    width: 100%;
    height: 76px;
  }
  .ch-dt-sec-main {
    font-size: 18px;
  }
}
/* 浏览器滚动条样式 */
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
 
</style>
