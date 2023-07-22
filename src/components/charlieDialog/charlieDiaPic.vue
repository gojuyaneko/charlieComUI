<template>
  <div class=''>
    123
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
  </div>
</template>

<script>
import { getMemoriesAlbum } from "@/request/api";

export default {
  components: {},
  data() {
    return {
      isUp: false
    };
  },
//方法集合
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
      });
    }
  },
  mounted() {
    
  },
  activated() {
    this.getInfo('时与玫瑰');
  },
}
</script>

<style lang='scss' scoped>
.left {
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
</style>