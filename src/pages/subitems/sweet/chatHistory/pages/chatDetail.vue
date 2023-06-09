<template>
  <div class="chat-detail">
    <div class="chat-detail-bg">
      <main class="ch-detail-main">
        <a
          class="ch-detail-video"
          target="_blank"
          href="http://www.bilibili.com"
        >
        </a>
        <div class="ch-detail-design"> Moments of Charlie</div>
        <section v-for="(item, index) in chDetailData" :key="index" class="ch-detail-section">
          <div class="ch-dt-sec-header" :data-person="item.name">
            <picture :data-person="item.name"><img  class="ch-dt-header-img"  src="../../../../../assets/charlieprofile.png" alt=""></picture>
          </div>
          <div class="ch-dt-sec-main ">
            <div class="ch-dt-normal-text" v-if="item.type==='nomarl'">
              <p>{{item.content[0].selfContent}}</p>
              <img :src="item.content.img" alt="" v-if="item.content.ifImg">
            </div>
            <el-collapse v-model="deActiveName" accordion v-if="item.type==='choice'">
              <el-collapse-item  :name="index" v-for="(secitem,index) in item.content" :key="index">
                <span slot="title" class="collapse-title">
                  <i  :class="['el-icon-d-arrow-right ch-title-icon ' ,{'ch-title-icon-active':item.index===deActiveName}]"></i>
                  <p v-if="!secitem.ifImg">{{secitem.selfContent}}</p>
                  <img class="ch-title-img" v-if="secitem.ifImg" :src="secitem.img" alt="">
                </span>
                <div class="ch-dt-nd-reply" v-for="(thitem,index) in secitem.reply" :key="index"> <span class="purple">查理苏</span> <p>：{{thitem.content}}</p></div>
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
      deActiveName:'',
      chDetailData: [
        {
          type: "nomarl", // normal无选项，choice有选项
          name:'查理苏',
          content: [
            {
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
      ],
    };
  },
  mounted() {
    console.log(this.$route.query)
  },
  methods: {},
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
      background-color: pink;
      position: relative;
      .ch-detail-section {
        background-color: white;
        padding: 10px 50px 25px 50px;
        position: relative;
        box-shadow: 0.3em 0.3em 0.5em rgba(0,0,0,0.2);
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
          .ch-dt-header-img[data-person='查理苏']::after {
            content: '查理苏';
            width: 30px;
            height: 30px;
            font-size: 25px;
            color:#674d97 ;
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
::-webkit-scrollbar {
  display: none;
}
</style>
