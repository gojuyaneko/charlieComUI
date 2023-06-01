<template>
  <div class="com-charlie-dialog">
    <div class="com-dia-box">
      <img class="com-dia-star1" src="../../assets/bgstar.png" />
      <img class="com-dia-star2" src="../../assets/bgstar.png" />
      <div class="com-dia-main">
        <div class="com-dia-left">
          <a class="com-dia-video" target="_blank" href="http://www.bilibili.com">
          </a>
          <picture>
            <img :src="charliePhoto" alt="" class="com-dia-charlie" />
          </picture>
        </div>
        <div class="com-dia-right">
          <h2 class="com-dia-title">
            {{ diaTitle }}
          </h2>
          <article class="com-dia-content">
            <charlie-dia-arti></charlie-dia-arti>
          </article>
          <charlie-dia-menu></charlie-dia-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script> 
import CharlieDiaArti from './charlieDiaArti.vue';
import charlieDiaMenu from './charlieDiaMenu.vue';
export default {
  components: {CharlieDiaArti, charlieDiaMenu},
  data() {
    return {
      charliePhoto: require("/src/assets/charlie/c-6-allback.png"),
      chapter: 6,
      diaTitle:'',
      diaContent: [
        {
          name: "我",
          content:
            "饿了想吃饭，不想上班，想打王国之泪。"
        },
        {
          name: "查理苏",
          content:
            "完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人。",
        },
        {
          name: "旁白",
          content:
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
        },
        {
          name: "我",
          content:
            "饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪",
        },
        {
          name: "查理苏",
          content:
            "完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人。",
        },
        {
          name: "旁白",
          content:
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
        },
        {
          name: "我",
          content:
            "饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪",
        },
        {
          name: "查理苏",
          content:
            "完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人。",
        },
        {
          name: "旁白",
          content:
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
        },
        {
          name: "我",
          content:
            "饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪",
        },
        {
          name: "查理苏",
          content:
            "完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人。",
        },
        {
          name: "旁白",
          content:
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
        },
        {
          name: "我",
          content:
            "饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪。饿了想吃饭，不想上班，想打王国之泪",
        },
        {
          name: "查理苏",
          content:
            "完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人，完美的男人。",
        },
        {
          name: "旁白",
          content:
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
        },
      ],
      diaBtnData:[
        {
          label:'first',
          text:'回答他',
          bgimg:require('../../assets/diabtnl.png')
        },
        {
          label:'second',
          text:'拒绝回答',
          bgimg:require('../../assets/diabtnn.png')
        }
      ]
    };
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

.com-dia-charlie {
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
  background-image: url("../../assets/watchvideo.png");
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  transform: translateY(-150%);
  z-index: 99;
}
.com-dia-right {
  height:100%;
}
.com-dia-content {
  height: 80%;
  margin-top: 3%;
  overflow-y: scroll;
}
/* 浏览器滚动条样式 */
::-webkit-scrollbar {
  width: 20px;
  border:1px solid #d6b367;
  border-radius: 6px;
}
// ::-webkit-scrollbar-track {
//   background-color: #efedf4ad;
// }
::-webkit-scrollbar-thumb {
  background-color: #d6b36788;
  border-radius: 6px;
  width: 18px;
  border: 3px solid transparent;
  background-clip: content-box;
}


</style>
  