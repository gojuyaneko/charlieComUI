<template>
  <div class="bgArea">
    <div class="photoArea">
      <div class="flex">
        <div
          class="left"
          @mouseenter="changeImg(true)"
          @mouseleave="changeImg(false)"
        >
          <div :class="isUp ? 'border' : 'border-cover'">
            <img :src="info.file_path2" class="itemImg" />
          </div>
          <div :class="!isUp ? 'border' : 'border-cover'">
            <img :src="info.file_path" class="itemImg" />
          </div>
        </div>
        <div class="right">
          <div class="title">{{ info.name }}</div>
          <div class="border">
            <div class="attr">
              <div class="main-attr">
                <div class="attr-info">
                  <span>主属性：</span>
                  <div class="attr-info-right">
                    <img class="icon-style" :src="mainAttribute.icon" />
                    <span>{{ mainAttribute.name }}</span>
                    <span>{{ mainAttribute.value }}</span>
                  </div>
                </div>
                <div class="attr-info">
                  <span>星级：</span>
                  <div class="starList">
                    <img
                      class="star"
                      v-for="(it, idx) in +info.start_level"
                      :key="idx"
                      src="@/assets/photoAlbum/star.png"
                      alt
                    />
                  </div>
                </div>
                <div class="attr-info">
                  <span>等级上限：</span>
                  <span>{{ info.level }}级</span>
                </div>
                <div class="attr-info">
                  <span>铭迹技能：</span>
                  <span>[{{ info.skill }}]</span>
                </div>
              </div>
              <div class="detail-attr">
                <div>基础属性：</div>
                <div class="attr-list">
                  <div
                    class="attr-info-right"
                    v-for="(item, index) in attributeList"
                    :key="index"
                  >
                    <img class="icon-style" :src="item.icon" />
                    <span class="space">{{ item.name }}</span>
                    <span>{{ info.value }}</span>
                  </div>
                </div>
                <div>相关内容：</div>
                <div class="attr-list">
                  <div
                    class="attr-words"
                    v-for="item in info.detailList"
                    :key="item.id"
                  >
                    {{ item.detail }}
                  </div>
                </div>
              </div>
            </div>
            <div class="des">
              <div>获取途径：</div>
              <div class="attr-words">{{ info.source }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMemoriesAlbum } from "@/request/api";
export default {
  name: "photoAlbumDetail",
  data() {
    return {
      // icon1: require("@/assets/photoAlbum/icon01.png")
      info: {},
      isUp: false,
      mainAttribute: {},
      attributeList: [
        { name: "果决", field: "risoluto", value: "", icon: require("@/assets/photoAlbum/icon01.png") },
        { name: "专注", field: "concentration", value: "", icon: require("@/assets/photoAlbum/icon02.png") },
        { name: "信任", field: "trust", value: "", icon: require("@/assets/photoAlbum/icon03.png") },
        { name: "无畏", field: "fearless", value: "", icon: require("@/assets/photoAlbum/icon04.png") },
        { name: "真挚", field: "earnest", value: "", icon: require("@/assets/photoAlbum/icon05.png") },
        { name: "快乐", field: "happiness", value: "", icon: require("@/assets/photoAlbum/icon06.png") },
      ],
    };
  },
  activated() {
    this.getInfo(this.$route.query.name);
  },
  methods: {
    changeImg(flag) {
      this.isUp = flag;
    },
    getInfo(name) {
      getMemoriesAlbum({ name }).then((res) => {
        let obj = res?.[0] || {};
        // 二段图
        if (res?.[0]?.file_path != res?.[1]?.file_path) {
          obj.file_path2 = res?.[1]?.file_path;
        }
        let arr = [];
        this.attributeList.map((item) => {
          // 主属性
          if (item.name == obj.attribute) {
            this.mainAttribute = {
              ...item,
              value: obj[item.field],
            };
          }
          // 其他属性
          if (obj[item.field]) {
            arr.push({
              ...item,
              value: obj[item.field],
            });
          }
        });
        this.attributeList = arr;
        this.info = obj;
      });
    },
  },
};
</script>

<style scoped>
.bgArea * {
  box-sizing: border-box;
}
.bgArea {
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: url("../../assets/HomePage/首页2l.jpg") 100% 100%;
}

.photoArea {
  width: 1534px;
  margin: auto;
  /* padding: 140px 0 200px 0; */
  display: flex;
  align-items: center;
  height: 100vh;
}
.flex {
  display: flex;
  margin-top: 85px;
  width: 100%;
  justify-content: space-around;
}
.flex .left {
  width: 540px;
  height: 650px;
  background: url("../../assets/photoAlbum/imgBg.png") no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
}
.left .border {
  width: 432px;
  height: 611px;
  border-radius: 3px;
  border: 2px solid #ccaa61;
  position: absolute;
  z-index: 2;
  top: -22px;
  left: 36px;
  transition: width 0.01s;
  overflow: hidden;
}
.left .border-cover {
  width: 429px;
  height: 608px;
  border-radius: 3px;
  border: 2px solid #ccaa61;
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 62px;
  overflow: hidden;
  filter: contrast(0.5);
}
.left:hover .border-cover {
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
.flex .right {
  position: relative;
}
.right .title {
  font-size: 82px;
  font-family: nansongshuju;
  /* color: #decb9b; */
  margin-bottom: 18px;
  text-align: right;
  background: linear-gradient(
    -2deg,
    rgba(255, 252, 224, 0.93) 0%,
    rgba(196, 169, 108, 0.93) 52.5146484375%,
    rgba(255, 248, 220, 0.93) 98.876953125%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.right .border {
  box-sizing: border-box;
  width: 837px;
  height: 543px;
  background: url("../../assets/photoAlbum/border.png") no-repeat center center;
  background-size: 100% 100%;
  padding: 60px 70px 90px 50px;
}
.right .attr {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right .attr .main-attr {
  width: 238px;
  height: 265px;
  background: linear-gradient(
    90deg,
    rgba(104, 78, 151, 0.5),
    rgba(105, 79, 153, 0)
  );
  border-radius: 10px;
  padding: 23px 0 23px 12px;
}
.right .attr .detail-attr {
  font-size: 22px;
  font-family: nansongshuju;
  font-weight: 400;
  line-height: 45px;
  color: #ead098;
  flex: 1;
  margin-left: 80px;
}

.right .des {
  font-size: 22px;
  font-family: nansongshuju;
  font-weight: 400;
  line-height: 55px;
  color: #ead098;
}

.right .des .attr-words {
  width: 717px;
  height: 42px;
  background: linear-gradient(
    90deg,
    rgba(104, 78, 151, 0.5),
    rgba(105, 79, 153, 0.1)
  );
  line-height: 42px;
  border-radius: 21px;
  padding: 0 15px;
}

.attr-list {
  display: flex;
  flex-wrap: wrap;
}
.attr-list .attr-info-right {
  width: 50%;
}

.attr-list .attr-words {
  width: 186px;
  height: 42px;
  background: linear-gradient(
    90deg,
    rgba(104, 78, 151, 0.5),
    rgba(105, 79, 153, 0.1)
  );
  border-radius: 21px;
  text-align: center;
  margin-bottom: 15px;
}
.attr-list .attr-words:nth-child(1) {
  margin-bottom: 15px;
}
.attr-list .attr-words:nth-child(2) {
  margin-bottom: 15px;
}
.attr-list .attr-words:nth-child(odd) {
  margin-right: 25px;
}

.space {
  margin-left: 54px;
  margin-right: 20px;
}

.attr-info {
  font-size: 22px;
  font-family: nansongshuju;
  font-weight: 400;
  color: #ead098;
  line-height: 55px;
  display: flex;
  align-items: center;
}

.attr-info .attr-info-right {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.starList {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.star {
  width: 26px;
  height: 26px;
}
.icon-style {
  width: 21px;
  height: 29px;
  vertical-align: text-bottom;
}
</style>
