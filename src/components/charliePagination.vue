<template>
  <div>
    <el-pagination
      :hide-on-single-page="hide"
      class="td-pagi"
      layout="prev, pager, next"
      :total="itemCnt"
      :current-page="currenPage"
      :page-size="pagesize"
      @current-change="curChange"
    >
    </el-pagination>
  </div>
</template>
    
<script>
export default {
  components: {},
  props: {
    currenPage: Number,
    pagesize: Number,
    itemCnt:Number
  },
  data() {
    return {
      hide: this.itemCnt - 1 == 0 ? false : true,
    };
  },
  mounted() {},
  methods: {
    curChange(currentPage) {
      this.$emit("changeCurPa", currentPage);
    }
  },
};
</script>
    
<style scoped lang="scss">
.td-pagi {
  height: 36px;
  overflow: hidden;
}

::v-deep {
  .el-pager li {
    font-size: 20px;
    background: transparent;
    font-weight: 400;
    min-width: 32px;
  }

  .el-pager li:hover {
    color: #674d97;
  }

  .el-pager li.active {
    color: #674d97;
  }

  .el-pagination .btn-next .el-icon,
  .el-pagination .btn-prev .el-icon {
    font-size: 20px;
  }

  .el-pagination button:hover {
    color: #674d97;
  }

  .el-pagination .btn-next,
  .el-pagination .btn-prev {
    background: transparent;
  }

  .el-pagination span:not([class*="suffix"]) {
    font-size: 18px;
  }

  .el-pagination__jump {
    color: black;
  }

  .el-input__inner:focus {
    border-color: #674d97;
  }

  .el-pagination__editor.el-input .el-input__inner {
    height: 24px;
  }
}
</style>
    