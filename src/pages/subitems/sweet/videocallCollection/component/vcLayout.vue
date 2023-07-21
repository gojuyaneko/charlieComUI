<template>
  <div class="video-call-layout">
    <div>
      <ul class="vc-layout-ul">
        <li class="vc-layout-li" v-for="(item, index) in layoutData.data.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index" @click="goToNext(item.entry)">
          <div class="vc-layout-name">{{item.name}}</div>
          <div class="vc-layout-content">{{ item.content[0] }}</div>
        </li>
      </ul>
      <div class="vc-layout-box">
        <charlie-pagination  class="vc-layout-pagi" :currenPage='currentPage' :pagesize='pagesize' :itemCnt='layoutData.data.length' @changeCurPa='changeCurPage'></charlie-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import charliePagination from '@/components/charliePagination.vue';
export default {
  components: {charliePagination},
  props: { layoutData: {
    type: Object
  } },
  data() {
    return {
      currentPage:1,
      pagesize:8,
    };
  },
  mounted() {},
  methods: {
    changeCurPage(currentPage) {
      this.currentPage = currentPage
    },
    freshPage(){
      this.currentPage =1
    },
    goToNext(name){
      console.log(name)
      this.$router.push(
        {
          path:'/videocallcollection/vcdetail',
          query: {
            name:name
          }
        }
      )
    }
  },
};
</script>

<style scoped lang="scss">
.video-call-layout {
  font-family: 'nansongshuju';
  .vc-layout-ul {
    display: grid;
    grid-template-columns: 750px 750px;
    grid-template-rows: 130px 130px 130px 130px;
    .vc-layout-li {
      box-sizing: border-box;
      width: 730px;
      height: 105px;
      padding: 15px 4px 6px 60px;
      background-image: linear-gradient(rgba(181,168,205,.89),rgba(219,206,233,.89)) ;
      box-shadow: 0.35em .35em .5em rgba(0, 0, 0, 0.1);
      cursor: pointer;
      .vc-layout-name {
        position: relative;
        font-size: 30px;
        width: 640px;
      }
      .vc-layout-name::after{
        content: ' ';
        position: absolute;
        bottom: 0;
        right: 0;
        display: inline-block;
    }
      .vc-layout-name[data-icon="vediocalls"]::after {
        background-image: url('../../../../../assets/vediocalls.png');
        background-size: 100% 100%;
        height: 18px;
        width: 47px;
      }
      .vc-layout-name[data-icon="voicemessage"]::after {
        background-image: url('../../../../../assets/voicemessage.png');
        background-size: 100% 100%;
        width: 31px;
        height: 35px;
      }
      .vc-layout-name[data-icon="redenvelope"]::after {
        background-image: url('../../../../../assets/redenvelope.png');
        background-size: 100% 100%;
        width: 33px;
        height: 39px;
      }
    }
  }
  .vc-layout-box {
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0.35em .35em .5em rgba(0, 0, 0, 0.1);
    width: 500px;
  }
  .vc-layout-pagi {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    z-index: 3;
  }
  .vc-layout-content {
    font-size: 16px;
    margin-left: 40px;
    margin-top: 10px;
    color: rgb(122,122,122);
  }
}
</style>
