<template>
  <div class='' >
    <ul class="img-group-grid" >
      <li :class="`img-group-li${classIndex}`" :data-index="index" v-for="(item, index) in imgList" :key="index" >
        <img class="img-group-img" :src="item.img" alt="" @click="displayDetail(item.index)" >
        <div class="img-group-text">{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getDate } from '@/request/api'; 
import { watch } from 'vue';
export default {
  components: {},
  props: {
    classIndex: Number,
    currentPage: Number
  },
  data() {
    return {
      imgList: [],
    }
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
    },
    getDateAll() {
      this.imgList = []
      getDate().then((res) => {
        let i = this.currentPage * 2 +this.classIndex
        this.imgList = res[0].data.imgGroup[i]
      })
    }
  },
  mounted() {
    console.log(this.currentPage * 2 +this.classIndex)
    this.getDateAll()
  },
  watch: {
    currentPage() {
      this.getDateAll()
    }
  }
}
</script>

<style scoped lang="scss">
.img-group-grid {
  display: grid;
  grid-template-rows: 250px 250px 250px;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 5px;
  column-gap: 5px;
  .img-group-li0 {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    margin-right: 5px;
  }
  .img-group-li1 {
    position: relative;
    cursor: pointer;
    overflow: hidden;
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
    background-size: cover;
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
    background: linear-gradient(#e6646400, rgb(45, 38, 52)90%);
  }
}
</style>