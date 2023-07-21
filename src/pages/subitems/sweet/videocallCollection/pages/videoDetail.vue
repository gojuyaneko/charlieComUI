<template>
  <div class="video-detail">
    <div class="video-detail-bg" ref="videoBg" @click.stop="choiceChoose">
      <main class="vc-detail-main">
        <a
          class="vc-detail-video"
          target="_blank"
          :href="videoUrl"
        >
        </a>
        <div class="detail-design"> Moments of Charlie</div>
        <div class="vc-detail-box">
          <div class="vc-detail-left">
            <img class="vc-detail-img" src="../../../../../assets/video/c-01.png" alt="">
            <div class="vc-border"></div>
          </div>
          <div class="vc-content">
            <span class="vc-content-name">查理苏</span>
              <div class="vc-section">
                <div class="dt-sec-main" data-person="查理苏">
                  <div class="dt-normal-text" v-for="(content, iindex) in chDetailData.content" :key="'con' +iindex">
                    <p>{{ content }}</p>
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
import { getVC} from '@/request/api';

export default {
  components: {},
  props: {},
  data() {
    return {
      chDetailData: [],
      entry: 1,
      videoUrl: ''
    };
  },
  mounted() {
  },
  activated() {
    this.getContent()
  },
  methods: {
    getContent() {
      this.entry = this.$route.query.name
      this.chDetailData = []
      this.videoUrl = ''
      getVC({entry: this.entry }).then((res) => {
        this.chDetailData = res
        this.videoUrl = res.videoLink
      })
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
    .vc-detail-main {
      position: relative;
      .detail-section {
        background-color: white;
        padding: 10px 50px 25px 50px;
        position: relative;
        box-shadow: 0.3em 0.3em 0.5em rgba(0,0,0,0.2);
        margin-bottom: 3%;
        .dt-sec-main {
          padding: 0 76px;
          font-size: 18px;
          margin:5px 0  5px 40px; 
        }
      }
      .detail-design {
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
      overflow-y: auto;
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
.vc-detail-video {
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

.vc-section {
  position: relative;
  margin-left: 70px;
  line-height: 1.2;
  .dt-sec-header {
    width: 100%;
    height: 76px;
  }
  .dt-sec-main {
    font-size: 18px;
  }
}
.dt-normal-text {
  margin-bottom: 10px;
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
