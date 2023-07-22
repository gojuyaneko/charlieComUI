<template>
  <div class='date-all' v-loading="loaging">
      <div class="date-box">
          <i class="font-arrow el-icon-d-arrow-left" @click="changePage(-1)"></i>
        <ImgGroup :classIndex="index" class="data-imggroup"  v-for="(item, index) in imgGroup.slice((currentPage)*pagesize,(currentPage+1)*pagesize)" :key="'ig'+index"></ImgGroup>
          <i class="back-arrow el-icon-d-arrow-right" @click="changePage(1)"></i>
      </div>
    
  </div>
</template>

<script>
import ImgGroup from './component/ImgGroup'
export default {
  components: {ImgGroup},
  data() {
    return {
      imgGroup: [
      [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]
      ],
      currentPage:0,
      pagesize:2,
      tolNum: 17,
      loaging: true
    };
  },
//方法集合
  methods: {
    changePage (dir) {
      let pages = Math.ceil(this.tolNum / 2)
      this.currentPage = (this.currentPage + dir + pages) % pages
      console.log(this.currentPage)
    }
  },
  mounted() {
    this.$nextTick(() => {
    this.loaging =false
})
  },
  activated() {},
}
</script>

<style lang="scss" scoped>
.date-all {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: url('../../../assets/detailbg.png');
  padding: 6% 102px  0 102px;
  .date-box {
    height: 765px;
    display: flex;
    position: relative;
    .font-arrow {
      opacity: 0.2;
      font-family: element-icons!important;
      font-size: 50px;
      color: #674d9796;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-100%, -50%);
      cursor: pointer;
    }
    .back-arrow {
      opacity: 0.2;
      font-family: element-icons!important;
      font-size: 50px;
      color: #674d9796;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(100%, -50%);
      cursor: pointer;
    }
    .data-imggroup {
      width: 49.5%;
    }
    .data-imggroup:first-child{
      margin-right: 1%;
    }
   }
   .date-box:hover{
    .font-arrow {
      opacity: 1;
      transition: opacity 0.2s;
    }
    .back-arrow {
      opacity: 1;
      transition: opacity 0.2s;
    }
   }
 
}
</style>