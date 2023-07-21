<template>
  <div class="bgArea">
    <div class="photoArea" v-if="photoList.length">
      <div class="photoTitle">灵犀相册</div>
      <div class="photoList">
        <div v-for="(item, index) in photoList" :key="index">
          <div class="starList">
            <img
              class="star"
              v-for="(it, idx) in item.level"
              :key="idx"
              src="@/assets/photoAlbum/star.png"
              alt=""
            />
          </div>
          <div class="listArea">
            <div
              class="photoItem"
              v-for="(it, idx) in item.list"
              :key="idx"
              @click="toDetail(it)"
            >
              <img :src="it.file_path" class="itemImg" />
              <div class="itemInfo">
                <div class="itemIcons">
                  <div class="itemDotSmall"></div>
                  <div class="itemDotBig"></div>
                  <div class="itemLineLeft"></div>
                </div>
                <div class="itemName">{{ it.name }}</div>
                <div class="itemIcons">
                  <div class="itemLineRight"></div>
                  <div class="itemDotBig"></div>
                  <div class="itemDotSmall"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="leftLine"></div>
          <div class="thanks">
            特此感谢 @Charlie_完美未婚夫手册 的部分素材授权。
          </div>
          <div class="rightLine"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMemoriesAlbum } from "@/request/api";
export default {
  name: "photoAlbum",
  data() {
    return {
      photoList: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    toDetail(data) {
      this.$router.push({
        path: "/photoAlbum/detail",
        query: { name: data.name },
      });
    },
    getList() {
      getMemoriesAlbum({type:'default'}).then((res) => {
        let arr = [
          { level: 6, list: [] },
          { level: 5, list: [] },
          { level: 4, list: [] },
          { level: 3, list: [] },
          { level: 2, list: [] },
          { level: 1, list: [] },
        ];
        res?.map((item) => {
          if (item.start_level == "6") {
            arr[0]["list"].push(item);
          }
          if (item.start_level == "5") {
            arr[1]["list"].push(item);
          }
          if (item.start_level == "4") {
            arr[2]["list"].push(item);
          }
          if (item.start_level == "3") {
            arr[3]["list"].push(item);
          }
          if (item.start_level == "2") {
            arr[4]["list"].push(item);
          }
          if (item.start_level == "1") {
            arr[5]["list"].push(item);
          }
        });
        this.photoList = arr;
      });
    },
  },
};
</script>

<style scoped>
.bgArea {
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: url("../../assets/HomePage/首页2l.jpg") 100% 100%;
}

.photoArea {
  width: 1534px;
  margin: auto;
  padding: 140px 0 200px 0;
}

.photoTitle {
  font-size: 30px;
  font-family: nansongshuju;
  color: #decb9b;
  margin: 0 0 30px 10px;
}

.photoList {
  padding: 0 30px;
  width: 100%;
  height: auto;
  background: url("../../assets/photoAlbum/GradientTop.png"),
    url("../../assets/photoAlbum/GradientBottom.png");
  background-repeat: no-repeat, no-repeat;
  background-size: 100% auto, 100% auto;
  background-position: left top, left bottom;
}

.starList {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.star {
  width: 40px;
  height: 40px;
}

.listArea {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: wrap;
}

.photoItem {
  cursor: pointer;
  width: 274px;
  height: 462px;
  margin-bottom: 60px;
  margin-right: 40px;
  background: url("../../assets/photoAlbum/bgItem.png");
  background-size: cover;
}

.photoItem:nth-child(5n) {
  margin-right: 0;
}

.itemImg {
  margin: 20px 15px 0 15px;
  width: 244px;
  height: 375px;
}

.itemInfo {
  width: calc(100% - 30px);
  margin: 15px 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.itemName {
  font-size: 20px;
  font-family: nansongshuju;
  color: #f2dba9;
  width: 40%;
  text-align: center;
}
.itemIcons {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.itemDotSmall {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #d0c087;
}

.itemDotBig {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #d0c087;
}

.itemLineLeft {
  width: 60%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(208, 192, 135, 0.49),
    rgba(155, 123, 61, 0)
  );
}

.itemLineRight {
  width: 60%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(155, 123, 61, 0),
    rgba(208, 192, 135, 0.49)
  );
}

.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 32px;
}

.leftLine {
  width: 309px;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(208, 192, 135, 0.49),
    rgba(155, 123, 61, 0)
  );
}

.rightLine {
  width: 309px;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(155, 123, 61, 0),
    rgba(208, 192, 135, 0.49)
  );
}

.thanks {
  font-size: 24px;
  font-family: nansongshuju;
  color: #d6b367;
}
</style>
