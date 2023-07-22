<template>
  <div class="com-charlie-dialog">
    <div class="com-dia-box">
      <img class="com-dia-star1" src="../../assets/bgstar.png" />
      <img class="com-dia-star2" src="../../assets/bgstar.png" />
      <div class="com-dia-main">
        <div class="com-dia-left">
          <a class="com-dia-video" target="_blank" :href="videoUrl">
          </a>
          <picture>
            <img :src="asideImg" alt="" class="com-dia-aside-img" />
          </picture>
        </div>
        <div class="com-dia-right">
          <h4 class="com-dia-title"> {{ diaTitle }}</h4>
          <article class="com-dia-content" ref="dia">
            <charlie-dia-arti v-bind="$attrs" v-on="$listeners"></charlie-dia-arti>
          </article>
          <charlie-dia-menu v-bind="$attrs" v-on="$listeners" @changeChap="changeChap"> </charlie-dia-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script> 
import CharlieDiaArti from './charlieDiaArti.vue';
import charlieDiaMenu from './charlieDiaMenu.vue';
import charlieDiaPic from './charlieDiaPic.vue';
export default {
  components: {CharlieDiaArti, charlieDiaMenu, charlieDiaPic},
  props:{
    videoUrl:String, // 传入地址链接需为完整地址，如 http://www.bilibili.com
    asideImg:String,
    diaTitle:String
  }, 
  data() {
    return {
    };
  },
  methods: {
    changeChap() {
      let top = this.$refs.dia.scrollTop
      const timer = setInterval(() => {
        this.$refs.dia.scrollTop = top-= 100
        if(top<0) {
          clearInterval(timer)
        }
      }, 10);
      
    }
  }
};
</script>
  
<style scoped lang="scss">
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
  width: 572px;
  height: 100%;
}

.com-dia-aside-img {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}

.com-dia-video {
  display: inline-block;
  width: 148px;
  height: 47px;
  background-image: url("../../assets/watchvideo.png");
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
  