<template>
  <el-collapse v-model="activeName" accordion class="weMoments-collapse" @change="freshPage">
    <el-collapse-item
      :name="'id'+index"
      v-for="(item, index) in collapseData.data"
      :key="index"
      style="position:relative;"
    >
      <span slot="title" class="collapse-title">
        <i  :class="['el-icon-d-arrow-right wm-title-icon ' ,{'wm-title-icon-active':'id'+index===activeName}]"></i>{{item.className}}
      </span>
      <el-table
        :ref="'id'+index"
        height="300px"
        :stripe="true"
        :data="item.items.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        style="width: 100%"
        empty-text="暂无数据，请刷新重试"
        :header-row-class-name="tableHeaderStyle"
        :header-cell-style="{background:'rgb(225, 220, 235)',color:'#000',fontSize:'16px',fontWeight:'400',height:'20px'}"
        @row-click="goToNext"
        >
        <el-table-column prop="name" label="获取途径"> </el-table-column>
        <el-table-column prop="content" label="内容"> </el-table-column>
      </el-table>
      <charlie-pagination class="wm-table-pagi" :currenPage='currentPage' :pagesize='pagesize' :itemCnt='item.items.length' @changeCurPa='changeCurPage'></charlie-pagination>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
import charliePagination from '@/components/charliePagination.vue';
export default {
  components: {charliePagination},
  props: { collapseData: Object },
  data() {
    return {
      activeName:['id0'],
      mactive: -1,
      currentPage:1,
      pagesize:6,
      
    };
  },
  mounted() {},
  methods: {
    tableHeaderStyle() {
      return "wm-table-header";
    },
    changeCurPage(currentPage) {
      this.currentPage = currentPage
    },
    freshPage(){
      this.currentPage =1
    },
    goToNext(row) {
      this.$router.push(
        {
          path:'/wechatmoments/wmdetail',
          query:{
            type:this.collapseData.type,
            rowD:row
          }
        }
      )
    }
  },
};
</script>

<style scoped lang="scss">
.weMoments-collapse {
  height: 730px;
  overflow: scroll;
  border-bottom: 0;
  .marg {
    margin-left: 10px;
  }
  .wm-table-pagi {
    position: relative;
    height: 100%;
    bottom: 0px;
    display: flex;
    justify-content: flex-end;
  }
}
::v-deep {
    .el-collapse-item__header {
      font-size: 32px;
      font-family: "nansongshuju";
      height: 70px;
      background-color: rgba(184, 171, 206, 0.7);
    }
    .el-collapse-item__header.focusing:focus:not(:hover) {
      color: white;
    }
    .el-collapse-item__content {
      padding-bottom: 0;
    }
    .el-table .el-table__cell {
      padding:8px 0;
      padding-left: 90px;
    }
    .el-collapse-item__arrow {
      display: none;
    }
    .wm-title-icon {
      width: 25px;
      height: 26px;
      margin: 0 10px 0 40px;
      color: #d6b367;
      font-weight: 700;
      transition: 0.2s linear;
    }
    .wm-title-icon-active {
      color: white;
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
    .wm-table-header {
      color: black;
    }
    .el-table--enable-row-transition .el-table__body td.el-table__cell {
      cursor: pointer;
    }
  }
</style>
