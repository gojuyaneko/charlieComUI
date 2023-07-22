<template>
    <div class="light-and-night">
      <div class="com-charlie-dialog">
        <div class="com-dia-box">
          <img class="com-dia-star1" src="../../../assets/bgstar.png" />
          <img class="com-dia-star2" src="../../../assets/bgstar.png" />
          <div class="com-dia-main">
            <div class="com-dia-left">
              <a class="com-dia-video" target="_blank" :href="videoUrl">
              </a>
              <div
                class="left"
              >
              </div>
            </div>
            <div class="com-dia-right">
              <h4 class="com-dia-title"> {{ diaTitle }}</h4>
              <article class="com-dia-content" ref="dia">
                <charlie-talk-artu :diaContent="diaContent" v-on="$listeners"></charlie-talk-artu>
              </article>
              <charlie-dia-menu @getContent="getContent"   :menuData="menuData" v-bind="$attrs" v-on="$listeners" @changeChap="changeChap"> </charlie-dia-menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
      
  <script>
  import CharlieTalkArtu from '../../../components/charlieDialog/charlieTalkArtu.vue';
  import charlieDiaMenu from '../../../components/charlieDialog/charlieDiaMenu.vue';
  import charlieDiaPic from '../../../components/charlieDialog/charlieDiaPic.vue';
  import { getTalk } from "@/request/api";
  export default {
    props:{
      videoUrl:String, // 传入地址链接需为完整地址，如 http://www.bilibili.com
      asideImg:String,
      diaTitle:String,
      pageType: String
    },
    data() {
      return {
        videoUrl: "",
        asideImg: require("../../../assets/charlie/c-6-allback.png"),
        diaTitle: '假如是终曲',
        menuData: [],
        diaContent: []
      };
    },
    components: { CharlieTalkArtu,  charlieDiaMenu, charlieDiaPic},
    methods: {
      getContent(chap, data) {
        this.diaContent = []
        getTalk({ name: data }).then((res) => {
          console.log(res)
          this.diaTitle = data
          for(let i in res.talk_content) {
            if (res.talk_content[i].type === 'normal') {
              let obj = {
                para_type: res.talk_content[i].type,
                speaker: res.talk_content[i].speaker,
                content: res.talk_content[i].content
              }
              this.diaContent.push(obj)            
            } else {
              let obj0 = {
                choice_name: res.talk_content[i].region_content[0].choice_name,
                para_type: 'light',
                choice_para: res.talk_content[i].region_content[0].choice_content
              }
              let obj1 = {
                choice_name: res.talk_content[i].region_content[1].choice_name,
                para_type: 'night',
                choice_para: res.talk_content[i].region_content[1].choice_content
              }
              let obj = {
                xuanxiang: [obj0, obj1]
              } 
              this.diaContent.push(obj)
            }
          }
        })
      },
      getMenuList() {
        getTalk().then((res) => {
          let arr = [{
            chap_num:0,
            chap_name: '请选择闲聊',
            subchap:res
          }]
          this.menuData = arr
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
      }
    },
    activated() {
      this.getMenuList()
      this.getContent(6,'松鼠鳜鱼')
    }
  };
  </script>
    
  <style scoped lang="scss">
  .light-and-night {
    background: url("./img/mlbackground.png") no-repeat;
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
    width: 545px;
    height: 100%;
    display: flex;
    align-items:center;
    margin-right: 40px;
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
    background-image: url("../../../assets/watchvideo.png");
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
    width: 545px;
    height: 895px;
    background: url("./img/person.png") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
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
    