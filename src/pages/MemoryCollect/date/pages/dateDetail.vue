<template>
  <div class="light-and-night">
    <div class="com-charlie-dialog">
      <div class="com-dia-box">
        <img class="com-dia-star1" src="../../../../assets/bgstar.png" />
        <img class="com-dia-star2" src="../../../../assets/bgstar.png" />
        <div class="com-dia-main">
          <div class="com-dia-left">
            <a class="com-dia-video" target="_blank" :href="videoUrl">
            </a>
            <div
              class="left"
              @mouseenter="changeImg(true)"
              @mouseleave="changeImg(false)"
            >
              <div :class="isUp ? 'border' : 'border-cover'">
                <img :src="imgList[1]" class="itemImg" />
              </div>
              <div :class="!isUp ? 'border' : 'border-cover'">
                <img :src="imgList[0]" class="itemImg" />
              </div>
            </div>
          </div>
          <div class="com-dia-right">
            <h4 class="com-dia-title"> {{ diaTitle }}</h4>
            <article class="com-dia-content" ref="dia">
              <charlie-dia-arti :diaContent="diaContent" v-on="$listeners"></charlie-dia-arti>
            </article>
            <charlie-dia-menu @getContent="getContent"   :menuData="menuData" v-bind="$attrs" v-on="$listeners" @changeChap="changeChap"> </charlie-dia-menu>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import CharlieDiaArti from '../../../../components/charlieDialog/charlieDiaArti';
import charlieDiaMenu from '../../../../components/charlieDialog/charlieDiaMenu.vue';
import charlieDiaPic from '../../../../components/charlieDialog/charlieDiaPic.vue';
import { getDateDetail } from "@/request/api";
export default {
  props:{
    pageType: String
  },
  data() {
    return {
      videoUrl: "http://www.bilibili.com",
      asideImg: require("../../../../assets/charlie/c-6-allback.png"),
      diaTitle: '假如是终曲',
      menuData: [],
      diaContent: [],
      isUp: false,
      info:{}
    };
  },
  components: { CharlieDiaArti,  charlieDiaMenu, charlieDiaPic},
  methods: {
    getContent(chap,data) {
      this.diaContent = []
      getDateDetail({dateIndex: this.$route.query.index}).then((res) => {
        console.log(res)
        this.videoUrl = res.dateUrl
        this.imgList = res.dateImgList
        this.diaTitle = res.dateName
        this.menuData = [{
          chap_name: '请选择约会小节',
          chap_num: 0,
          subchap:res.dateMenu}]
          let content = []
          for(let i in res.dateText) {
            if(res.dateText[i][data]) {
              content = res.dateText[i][data].dateContent
              for(let j in content) {
                let item = {
                  para_type: 'normal',
                  speaker: content[j].name,
                  content: [content[j].content]
                }
                this.diaContent.push(item)
              }
            }
          }
      })
    },
    changeChap() {
      let top = this.$refs.dia.scrollTop
      const timer = setInterval(() => {
        this.$refs.dia.scrollTop = top-= 100
        if(top<0) {
          clearInterval(timer)
        }
      }, 10);
    },
    changeImg(flag) {
      this.isUp = flag;
    }
  },
  activated() {
    this.getContent(0, '开头')
    this.getMenuList()
    this.getContent(this.$route.query.chap, this.$route.query.subchap)
  }
};
</script>
  
<style scoped lang="scss">
.light-and-night {
  background: url("../img/mlbackground.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.com-charlie-dialog {
  width: 100%;
  height: 100%;
}

.com-dia-box {
  position: relative;
  box-sizing: border-box;
  border-right: 1px solid #d6b367;
  border-bottom: 1px solid #d6b367;
  margin-top: 163px;
  margin-left: 227px;
  width: 1495px;
  height: 72.2%;
}

.com-dia-star1 {
  width: 28px;
  height: 28px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-60%, 50%);
}

.com-dia-star2 {
  width: 28px;
  height: 28px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}

.com-dia-main {
  position: absolute;
  display: flex;
  flex-direction: row;
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 613px;
  height: 85%;
  background-image: linear-gradient(to right,
      transparent,
      rgba(255, 255, 255, 0.37));
}

.com-dia-left {
  position: relative;
  width: 422px;
  height: 100%;
  display: flex;
  align-items:center;
  margin-right: 150px;
}

.com-dia-aside-img {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 612px;
}

.com-dia-video {
  display: inline-block;
  width: 148px;
  height: 47px;
  background-image: url("../../../../assets/watchvideo.png");
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  transform: translateY(-150%);
  z-index: 99;
  cursor: pointer;
}
.com-dia-right {
  height:100%;
  width: 60%;
}
.com-dia-title {
  position: absolute;
  top: 0;
  right: 10px;
  width: 381px;
  font-size: 63px;
  font-weight: 400;
  font-family: 'nansongshuju';
  color: #674d97;
  text-align: right;
  transform: translateY(-100%);
  background-image:-webkit-linear-gradient(top, rgb(242, 215, 156), rgb(70,59,34));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;

}
.com-dia-content {
  height: 80%;
  margin-top: 3%;
  overflow-y: auto;
}

.left {
  width: 480px;
  height: 566px;
  background: url("../../../../assets/photoAlbum/imgBg.png") no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
}
.left .border {
  height: 502px;
  border-radius: 3px;
  border: 2px solid #ccaa61;
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 24px;
  transition: width 0.01s;
  overflow: hidden;
  transition: all 0.3s;
}
.left .border-cover {
  height: 502px;
  background-size: 100%;
  border-radius: 3px;
  border: 2px solid #ccaa61;
  position: absolute;
  z-index: 1;
  top: 40px;
  left: 50px;
  overflow: hidden;
  filter: contrast(0.5);
  transition: all 0.3s;
}
.left .border img {
  width: 100%;
  height: 100%;
  background: #fff;
}
.left .border-cover img {
  width: 100%;
  height: 100%;
  background: #fff;
}
/* 浏览器滚动条样式 */
::-webkit-scrollbar {
  width: 20px;
  border:1px solid #d6b367;
  border-radius: 10px;
}
// ::-webkit-scrollbar-track {
//   background-color: #efedf4ad;
// }
::-webkit-scrollbar-thumb {
  background-color: #d6b36788;
  border-radius: 10px;
  width: 18px;
  border: 3px solid transparent;
  background-clip: content-box;
}
</style>
  