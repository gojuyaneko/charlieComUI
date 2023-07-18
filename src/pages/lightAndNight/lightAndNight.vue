<template>
  <div class="light-and-night">
    <charlieDialog
      :videoUrl="videoUrl"
      :asideImg="asideImg"
      :diaTitle="diaTitle"
      @getContent="getContent"
      :menuData="menuData"
      :diaContent="diaContent"
      :diaBtnData="diaBtnData"
      :diaBtnImg="diaBtnImg"
    >
    </charlieDialog>
  </div>
</template>
  
<script>
import charlieDialog from "@/components/charlieDialog/charlieDialog.vue";
import { getDNMenu } from "@/request/api";
export default {
  data() {
    return {
      videoUrl: "http://www.bilibili.com",
      asideImg: require("../../assets/charlie/c-6-allback.png"),
      diaTitle: '假如是终曲',
      menuData: [
        {
          chap: 6,
          name: "第六章",
          subChap: [
            {
              session: 18,
              name: "6-18",
            },
          ],
        },
        {
          chap: 7,
          name: "第七章",
          subChap: [
            {
              session: 12,
              name: "7-12",
            },
            {
              session: 13,
              name: "7-13",
            },
            {
              session: 14,
              name: "7-14",
            },
            {
              session: 15,
              name: "7-15",
            },
          ],
        },
        {
          chap: 8,
          name: "第八章",
          subChap: [
            {
              session: 1,
              name: "8-1",
            },
            {
              session: 2,
              name: "8-2",
            },
            {
              session: 3,
              name: "8-3",
            },
            {
              session: 4,
              name: "8-4",
            },
          ],
        },
      ],
      diaContent: [
        {
          para_type: "normal",
          speaker: "我",
          content: [
            "饿了想吃饭，不想上班，想打王国之泪。",
            "饿了想吃饭，不想上班，想打王国之泪。",
            "饿了想吃饭，不想上班，想打王国之泪。",
          ],
          tag: "me",
        },
        {
          para_type: "normal",
          speaker: "查理苏",
          content: [
            "完美的男人，完美的男人",
            "完美的男人，完美的男人。",
            "完美的男人，完美的男人,完美的男人，完美的男人。",
          ],
          tag: "charlie",
        },
        {
          para_type: "normal",
          speaker: "旁白",
          content: [
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
          ],
          tag: "pb",
        },
        {
          para_type: "choice",
          xuanxiang: [
            {
              para_type: "light",
              choice_name: "回答他",
              choice_para: [
                {
                  para_type: "normal",
                  speaker: "我",
                  content: [
                    "1饿了想吃饭，不想上班，想打王国之泪。",
                    "饿了想吃饭，不想上班，想打王国之泪。",
                    "饿了想吃饭，不想上班，想打王国之泪。",
                  ],
                  tag: "me",
                },
                {
                  para_type: "normal",
                  speaker: "查理苏",
                  content: [
                    "完美的男人，完美的男人",
                    "完美的男人，完美的男人。",
                    "完美的男人，完美的男人,完美的男人，完美的男人。",
                  ],
                  tag: "charlie",
                },
                {
                  para_type: "normal",
                  speaker: "旁白",
                  content: [
                    "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
                    "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
                  ],
                  tag: "pb",
                },
              ],
              tag: "me",
            },
            {
              para_type: "night",
              choice_name: "拒绝回答",
              choice_para: [
                {
                  para_type: "normal",
                  speaker: "我",
                  content: [
                    "2饿了想吃饭，不想上班，想打王国之泪。",
                    "饿了想吃饭，不想上班，想打王国之泪。",
                    "饿了想吃饭，不想上班，想打王国之泪。",
                  ],
                  tag: "me",
                },
                {
                  para_type: "normal",
                  speaker: "查理苏",
                  content: [
                    "完美的男人，完美的男人",
                    "完美的男人，完美的男人。",
                    "完美的男人，完美的男人,完美的男人，完美的男人。",
                  ],
                  tag: "charlie",
                },
                {
                  para_type: "normal",
                  speaker: "旁白",
                  content: [
                    "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
                    "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
                  ],
                  tag: "pb",
                },
              ],
              tag: "me",
            },
            
          ],
        },
        {
          para_type: "normal",
          speaker: "我",
          content: [
            "饿了想吃饭，不想上班，想打王国之泪。",
            "饿了想吃饭，不想上班，想打王国之泪。",
            "饿了想吃饭，不想上班，想打王国之泪。",
          ],
          tag: "me",
        },
        {
          para_type: "normal",
          speaker: "查理苏",
          content: [
            "完美的男人，完美的男人",
            "完美的男人，完美的男人。",
            "完美的男人，完美的男人,完美的男人，完美的男人。",
          ],
          tag: "charlie",
        },
        {
          para_type: "normal",
          speaker: "旁白",
          content: [
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
            "你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富，你会暴富。",
          ],
          tag: "pb",
        }
      ],
      diaBtnImg :[
        {bgimg: require("../../assets/diabtnl.png")},
        {bgimg: require("../../assets/diabtnn.png")},
      ]
    };
  },
  components: { charlieDialog },
  methods: {
    getContent(chap, data) {
      getDNMenu({chap: chap, subchap: data}).then((res) => {
        this.diaTitle = res.chap_title
        this.diaContent = res.para
        this.videoUrl = res.videoUrl
      })
    },
    getMenuList () {
      getDNMenu().then((res) => {
        this.menuData = res
      })
    }
  },
  activated () {
    this.getMenuList()
    this.getContent(6, '6-8')
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
</style>
