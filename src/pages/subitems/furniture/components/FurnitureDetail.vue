<template>
  <div class="furniture-detail">
    <div class="close" @click="$emit('update:isVisible', false)">×</div>
    <div class="img" :style="{ backgroundImage: `url(${list[index].img || defaultImg})` }">
      <div v-if="index < list.length - 1" class="next-btn" @click="next"></div>
    </div>
    <div class="detail-body">
      <div class="title" :style="{ backgroundImage: `url(${titleImg})` }"></div>
      <div class="chapter" v-for="item in chapters" :key="item.key">
        <div class="chapter-text">{{ item.label }}</div>
        <div class="chapter-text">{{ list[index][item.key] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFurniture } from '@/request/api';
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
    name: {
      type: String,
      default: '画板'
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
        { key: 'goodDetail', label: '物品详情:' },
        { key: 'memories', label: '专属回忆:' },
        { key: 'material', label: '制作材料:' },
      ],
      titleImg: require('../image/woodenFrame.png'),
      defaultImg: require('../image/furniture-default.png'),
      list: [
        {
          img: '',
          goodDetail: '色调厚重的画架，拥有与外表相称的高度稳定性，能够自由调节高度，以为画家提供舒适体验为追求。',
          memories: '调试画架的时候过于用心，没听到查理苏的呼唤，对上倚在旁边的他无奈眼神，忍俊不禁用了一个亲吻来告饶。',
          material: '松香木刻图纸*1（羁梦镜影活动获取），心形七彩椒*6，五彩甜椒*32，裟罗木*15'
        },
        {
          img: '',
          goodDetail: '11111色调厚重的画架，拥有与外表相称的高度稳定性，能够自由调节高度，以为画家提供舒适体验为追求。',
          memories: '1111调试画架的时候过于用心，没听到查理苏的呼唤，对上倚在旁边的他无奈眼神，忍俊不禁用了一个亲吻来告饶。',
          material: '111松香木刻图纸*1（羁梦镜影活动获取），心形七彩椒*6，五彩甜椒*32，裟罗木*15'
        },
      ]
    }
  },
  mounted() {
    console.log("------tpe", this.type);
    this.titleImg = require(`../image/${this.type}.png`)
    this.getFurnitureDetail()
  },
  activated() {
  },
  methods: {
    next() {
      if (this.index < this.list.length - 1) {
        this.index++
      }
    },
    getFurnitureDetail() {
      this.list = []
      getFurniture({ type_name: this.name }).then((res) => {
        for( let i in res) {
          let item = {
            img: res[i].file_path,
            goodDetail: res[i].detail,
            memories: res[i].memory ? res[i].memory : '无',
            material: res[i].materials
          }
          this.list.push(item)
        }
        
      })
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
    background: url('../image/furniture-default.png') no-repeat;

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
    width: 60%;
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
        font-size: 16px;
      }
    }
  }
}</style>