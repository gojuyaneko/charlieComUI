<template>
  <div class="chat-history-layout">
    <div>
      <ul class="ch-layout-ul">
        <li class="ch-layout-li" v-for="(item, index) in layoutData.data.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index" @click="goToNext(item.indexCode)">
          <div class="ch-layout-name" :data-icon="item.dtype">{{item.name}}</div>
          <div class="ch-layout-content">{{ item.intro}}</div>
        </li>
      </ul>
      <div class="ch-layout-box">
        <charlie-pagination  class="ch-layout-pagi" :currenPage='currentPage' :pagesize='pagesize' :itemCnt='layoutData.data.length' @changeCurPa='changeCurPage'></charlie-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import charliePagination from '@/components/charliePagination.vue';
export default {
  components: {charliePagination},
  props: { layoutData: Object },
  data() {
    return {
      currentPage:1,
      pagesize:6,
    };
  },
  mounted() {
  },
  methods: {
    changeCurPage(currentPage) {
      this.currentPage = currentPage
    },
    freshPage(){
      this.currentPage =1
    },
    goToNext(name){
      this.$router.push(
        {
          path:'/chathistory/chatdetail',
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
.chat-history-layout {
  
  .ch-layout-ul {
    display: grid;
    grid-template-columns: 750px 750px;
    grid-template-rows: 200px 200px 200px;
    .ch-layout-li {
      box-sizing: border-box;
      width: 730px;
      height: 165px;
      padding: 30px 4px 6px 60px;
      background-image: linear-gradient(rgba(181,168,205,.89),rgba(219,206,233,.89)) ;
      box-shadow: 0.35em .35em .5em rgba(0, 0, 0, 0.1);
      cursor: pointer;
      .ch-layout-name {
        position: relative;
        font-size: 36px;
        width: 640px;
      }
      .ch-layout-name::after{
        content: ' ';
        position: absolute;
        bottom: 0;
        right: 0;
        display: inline-block;
    }
      .ch-layout-name[data-icon="call"]::after {
        background-image: url('../../../../../assets/vediocalls.png');
        background-size: 100% 100%;
        height: 18px;
        width: 47px;
      }
      .ch-layout-name[data-icon="voicemessage"]::after {
        background-image: url('../../../../../assets/voicemessage.png');
        background-size: 100% 100%;
        width: 31px;
        height: 35px;
      }
      .ch-layout-name[data-icon="redenvelope"]::after {
        background-image: url('../../../../../assets/redenvelope.png');
        background-size: 100% 100%;
        width: 33px;
        height: 39px;
      }
    }
  }
  .ch-layout-box {
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0.35em .35em .5em rgba(0, 0, 0, 0.1);
    width: 500px;
  }
  .ch-layout-pagi {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    z-index: 3;
  }
  .ch-layout-content {
    margin-left: 40px;
    margin-top: 10px;
    color: rgb(122,122,122);
  }
}
</style>
