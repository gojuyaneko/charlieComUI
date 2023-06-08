<template>
  <div class="chat-history-layout">
    <div>
      <ul class="ch-layout-ul">
        <li class="ch-layout-li" v-for="(item, index) in layoutData.data" :key="index">

          {{item.name}}
        </li>
      </ul>
      <charlie-pagination class="ch-layout-pagi" :currenPage='currentPage' :pagesize='pagesize' :itemCnt='layoutData.data.length' @changeCurPa='changeCurPage'></charlie-pagination>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: { layoutData: Array },
  data() {
    return {
      currentPage:1,
      pagesize:6,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.chat-history-layout {
  
  .ch-layout-ul {
    display: grid;
    grid-template-columns: 750px 750px;
    grid-template-rows: 200px 200px 200px;
    .ch-layout-li {
      width: 730px;
      height: 165px;
      background-color: pink;
      border: 1px white solid;
    }
  }
  .ch-layout-pagi {
    position: relative;
    width: 200px;
    height: 200px;
    top: 0px;
    left: 80%;
  }
  
}
</style>
