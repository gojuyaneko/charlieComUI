<template>
  <el-collapse v-model="activeName" accordion class="weMoments-collapse">
    <el-collapse-item
      :name="index"
      v-for="(item, index) in collapseData"
      :key="index"
    >
      <span slot="title" class="collapse-title">
        <i  :class="['el-icon-d-arrow-right wm-title-icon ' ,{'wm-title-icon-active':index===activeName}]"></i>{{item.className}}
      </span>
      <el-table
        :ref="'id'+index"
        fit="true"
        height="300px"
        stripe="true"
        :data="item.items"
        style="width: 100%"
        empty-text="暂无数据，请刷新重试"
        :header-row-class-name="tableHeaderStyle"
        :header-cell-style="{background:'rgb(225, 220, 235)',color:'#000',fontSize:'16px',fontWeight:'400',height:'20px'}"
      >
        <el-table-column prop="name" label="获取途径"> </el-table-column>
        <el-table-column prop="content" label="内容"> </el-table-column>
      </el-table>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  components: {},
  props: { collapseData: Array },
  data() {
    return {
      activeName:'1',
      mactive: -1
    };
  },

  mounted() {},
  methods: {
    tableHeaderStyle() {
      return "wm-table-header";
    }
  },
};
</script>

<style scoped lang="scss">
.weMoments-collapse {
  height: 700px;
  overflow: scroll;
  border-bottom: 0;
  .marg {
    margin-left: 10px;
  }
}
::v-deep {
    .el-collapse-item__header {
      font-size: 32px;
      font-family: "nansongshuju";
      height: 80px;
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
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
    .wm-table-header {
      color: black;
    }
  }
</style>
