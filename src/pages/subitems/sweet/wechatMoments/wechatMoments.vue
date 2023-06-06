<template>
  <div class="wechat-moments">
    <div class="wm-l-n">LIGHT AND NIGHT</div>
    <div class="wechat-moments-bg">
      <main class="wm-main">
        <section class="wm-main-header">
          <a class="wm-video" target="_blank" href="http://www.bilibili.com">
          </a>
        </section>
        <div class="wm-collapse">
          <wm-collapse :collapseData="collapseData"></wm-collapse>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import WmCollapse from "./component/wmCollapse.vue";
export default {
  components: { WmCollapse },
  props: {},
  data() {
    return {
      collapseDataEntire:{
        mainStory:[
          {
            className:'主线获得',
            items:[
              {
                name:'获取途径1',
                content:'内容1'
              },
              {
                name:'获取途径2',
                content:'内容2'
              },
              {
                name:'获取途径3',
                content:'内容3'
              }
            ]
          }
        ],
        lingXi:[
          {
            className:'3星灵犀',
            items:[
              {
                name:'l获取途径1',
                content:'内容1'
              },
              {
                name:'获取途径2',
                content:'内容2'
              },
              {
                name:'获取途径3',
                content:'内容3'
              }
            ]
          },
          {
            className:'4星灵犀',
            items:[
              {
                name:'4l获取途径1',
                content:'内容1'
              },
              {
                name:'获取途径2',
                content:'内容2'
              },
              {
                name:'获取途径3',
                content:'内容3'
              }
            ]
          },
          {
            className:'5星灵犀',
            items:[
              {
                name:'l获取途径1',
                content:'内容1'
              },
              {
                name:'获取途径2',
                content:'内容2'
              },
              {
                name:'获取途径3',
                content:'内容3'
              }
            ]
          },
          {
            className:'6星灵犀',
            items:[
              {
                name:'l获取途径1',
                content:'内容1'
              },
              {
                name:'获取途径2',
                content:'内容2'
              },
              {
                name:'获取途径3',
                content:'内容3'
              }
            ]
          }
        ],
        xieHou:[
          {
            className:'邂逅获得',
            items:[
              {
                name:'x获取途径1',
                content:'内容1'
              },
              {
                name:'获取途径2',
                content:'内容2'
              },
              {
                name:'获取途径3',
                content:'内容3'
              }
            ]
          }
        ],
        activities:[
          {
            className:'活动获得',
            items:[
              {
                name:'l获取途径1',
                content:'内容1'
              },
              {
                name:'获取途径2',
                content:'内容2'
              },
              {
                name:'获取途径3',
                content:'内容3'
              }
            ]
          }
        ],
        truthOrDare:[
          {
            className:'真话冒险获得',
            items:[
              {
                name:'l获取途径1',
                content:'内容1'
              },
              {
                name:'获取途径2',
                content:'内容2'
              },
              {
                name:'获取途径3',
                content:'内容3'
              }
            ]
          }
        ],
        teaParty:[
          {
            className:'茶歇获得',
            items:[
              {
                name:'l获取途径1',
                content:'内容1'
              },
              {
                name:'获取途径2',
                content:'内容2'
              },
              {
                name:'获取途径3',
                content:'内容3'
              }
            ]
          }
        ]
      },
      collapseData:[
          {
            className:'3星灵犀',
            items:[
              {
                name:'l获取途径1',
                content:'内容1'
              },
              {
                name:'获取途径2',
                content:'内容2'
              },
              {
                name:'获取途径3',
                content:'内容3'
              },
              {
                name:'l获取途径1',
                content:'内容1'
              },
              {
                name:'获取途径2',
                content:'内容2'
              },
              {
                name:'获取途径3',
                content:'内容3'
              }
            ]
          },
          {
            className:'4星灵犀',
            items:[
              {
                name:'4l获取途径1',
                content:'内容1'
              },
              {
                name:'获取途径2',
                content:'内容2'
              },
              {
                name:'获取途径3',
                content:'内容3'
              }
            ]
          },
          {
            className:'5星灵犀',
            items:[
              {
                name:'l获取途径1',
                content:'内容1'
              },
              {
                name:'获取途径2',
                content:'内容2'
              },
              {
                name:'获取途径3',
                content:'内容3'
              }
            ]
          },
          {
            className:'6星灵犀',
            items:[
              {
                name:'l获取途径1',
                content:'内容1'
              },
              {
                name:'获取途径2',
                content:'内容2'
              },
              {
                name:'获取途径3',
                content:'内容3'
              }
            ]
          }
        ],
    }
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.wechat-moments {
  width: 100%;
  height: 100%;
  background: url("../../../../assets/charlieCretsBG/tdbg-min.jpg") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  user-select: none;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
  .wechat-moments-bg {
    width: 100%;
    height: 100%;
    background: url("../../../../assets/charlieCretsBG/tdbg.png") no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  .wm-l-n {
    writing-mode: vertical-lr;
    font-size: 50px;
    font-family: "Branch";
    color: rgba(0, 0, 0, 0.478);
    line-height: 0.226;
    -moz-transform: matrix(0.81091601581285, 0, 0, 0.81091601581285, 0, 0);
    -webkit-transform: matrix(0.81091601581285, 0, 0, 0.81091601581285, 0, 0);
    -ms-transform: matrix(0.81091601581285, 0, 0, 0.81091601581285, 0, 0);
    position: absolute;
    left: 135px;
    top: 225px;
    width: 76px;
    z-index: 18;
  }
  .wm-main {
    width: 1500px;
    margin: 7% auto;
    .wm-main-header {
      height: 60px;
      position: relative;
      .wm-video {
        display: inline-block;
        width: 148px;
        height: 47px;
        background-image: url("../../../../assets/watchvideo.png");
        background-size: 100% 100%;
        position: absolute;
        top: 0px;
        right: 10px;
      }
    }
  }
  
}

::-webkit-scrollbar {
  display: none;
}
@font-face {
  font-family: "Branch";
  src: url("../../../../../public/fonts/branch-regular.ttf");
}
</style>
