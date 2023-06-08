<template>
  <div class="furniture-detail">
    <div class="close" @click="$emit('update:isVisible', false)">×</div>
    <div class="img" :style="{ backgroundImage: `url(${list[index].img || defaultImg})`}">
      <div v-if="index < list.length-1" class="next-btn" @click="next"></div>
    </div>
    <div class="detail-body">
      <div class="title" :style="{ backgroundImage: `url(${titleImg})`}"></div>
      <div class="chapter" v-for="item in chapters" :key="item.key">
        <div class="chapter-text">{{item.label}}</div>
        <div class="chapter-text">{{list[index][item.key]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'woodenFrame'
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  // watch: {
  //   type(n, o) {
  //     console.log("----type",n);
  //     this.titleImg = require(`../image/${n}.png`)
  //   }
  // },
  data() {
    return {
      index: 0,
      chapters: [
        { key: 'goodDetail', label: '物品详情:'},
        { key: 'memories', label: '专属回忆:'},
        { key: 'material', label: '制作材料:'},
      ],
      titleImg: require('../image/woodenFrame.png'),
      defaultImg: require('../image/furniture-default.png'),
    }
  },
  mounted() {
    console.log("------tpe",this.type);
    this.titleImg = require(`../image/${this.type}.png`)
  },
  methods: {
    next() {
      if(this.index < this.list.length - 1) {
        this.index++
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.furniture-detail {
  top: 50%;
  left: 50%;
  height: 649px;
  width: 1486px;
  position: absolute;
  background-size: 100%;
  transform: translate(-70%, 50%);
  -webkit-transform: translate(-50%, -50%);
  background-image: url('../image/record-detail-bkg.png');
  .close {
    top: 0;
    right: 0;
    padding: 0 5px;
    font-size: 35px;
    position: absolute;
    color: rgb(218, 190, 131);
    &:hover {
      cursor: pointer;
      background-color: rgb(32, 25, 48);
    }
  }
  .img {
    width: 334px;
    height: 511px;
    margin-top: 60px;
    margin-left: 80px;
    position: relative;
    display: inline-block;
    background-size: 100%;
    background-image: url('../image/furniture-default.png');
    .next-btn {
      bottom: 45px;
      width: 80px;
      height: 20px;
      left: 100px;
      cursor: pointer;
      position: absolute;
      background-size: 100%;
      background-image: url('../image/next-btn.png');
    }
  }
  .detail-body {
    height: 511px;
    display: inline-block;
    vertical-align: bottom;
    .title {
      width: 225px;
      height: 47px;
      margin-top: 70px;
      margin-left: 70px;
      background-size: 100%;
    }
    .chapter {
      margin-left: 70px;
      margin-top: 60px;
      font-size: 500;
      font-style: 18px;
      font-family: nansongshuju;
      color: rgb(214, 179, 103);
      &-text {
        margin-bottom: 3px;
      }
    }
  }
}
</style>