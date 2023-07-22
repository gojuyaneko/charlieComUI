<template>
  <div class=''>
    <ul class="img-group-grid">
      <li :class="`img-group-li${classIndex}`" :data-index="index" v-for="(item, index) in imgList" :key="index">
        <img class="img-group-img" :src="item.img" alt="" @click="displayDetail(item.index)" >
        <div class="img-group-text">{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
    classIndex: Number
  },
  data() {
    return {
      imgList: []
    };
  },
  //方法集合
  methods: {
    displayDetail (index) {
      this.$router.push({
        path: '/date/datedetail',
        query:{
          index: index
        }
      })
    }
  },
  mounted() {
    let img1 = require('../../../../assets/meme/shock.png')
    let img2 = require('../../../../assets/meme/shock.png')
    let img3 = require('../../../../assets/meme/shock.png')
    let img4 = require('../../../../assets/meme/shock.png')
    let img5 = require('../../../../assets/meme/shock.png')
    let img6 = require('../../../../assets/meme/shock.png')
    this.imgList = [
      {
        name: '铂金风度',
        img: img1,
        index: 1
      },
      {
        name: '缠绵游戏',
        img: img2,
        index: 2
      },
      {
        name: '蝴蝶效应',
        img: img3,
        index: 3
      },
      {
        name: '蝴蝶效应',
        img: img4,
        index: 4
      },
      {
        name: '蝴蝶效应',
        img: img5,
        index: 5
      },
      {
        name: '蝴蝶效应',
        img: img6,
        index: 6
      }
    ]
  },
  activated() { },
}
</script>

<style scoped lang="scss">
.img-group-grid {
  display: grid;
  grid-template-rows: 250px 250px 250px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  .img-group-li0 {
    position: relative;
    cursor: pointer;
  }
  .img-group-li1 {
    position: relative;
    cursor: pointer;
  }
  .img-group-li0[data-index="3"] {
    grid-row: 2 / 4;
    grid-column: 1 / 3;
  }
  .img-group-li1[data-index="0"] {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
  }
  .img-group-img {
    width: 100%;
    height: 100%;
    background-size: contain;
  }
  .img-group-text {
    width: 100%;
    font-size: 18px;
    font-family: 'nansongshuju';
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    background-color: blue;
  }
}
</style>