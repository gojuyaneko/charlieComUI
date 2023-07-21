<template>
<div>
  <el-pagination
    :hide-on-single-page="hide"
    class="dw-pagi"
    layout="prev, pager, next"
    :page-count=4
    @current-change="curChange"
    prev-text="<"
    next-text=">">
  </el-pagination>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  mounted () {},
  methods: {
    curChange (currentPage) {
      this.$emit('changeCurPa',currentPage)
    }
  }
}
</script>

<style scoped lang="scss">
.dw-pagi {
  width: 750px;
  height: 40px;
  overflow: hidden;
}
::v-deep {
  .el-pager li {
    font-size: 18px;
    background: transparent;
    font-weight: 400;
    min-width: 32px;
    color: grey;
    font-family: "nansongshuju";
    z-index: 2;
  }
  .el-pager li:hover {
    color:#7C69A1;
    transform: scale(1.25);
  }
  .el-pager li.active {
    color:#7C69A1;
    transform: scale(1.25);
  }

  .el-pagination button:hover {
    color:#7C69A1;
    transform: scale(1.25);
  }
  .el-pagination .btn-next, .el-pagination .btn-prev {
    background: transparent;
    color:#7C69A1;
    display: inline-block;
    font-family: "nansongshuju";
  }
  .el-pagination span:not([class*=suffix])  {
    font-size: 20px;
  }

  .el-pagination .btn-next {
    padding-left: 35px;
  }

  .el-pagination .btn-prev {
    padding-right: 35px;
  }

}
</style>
