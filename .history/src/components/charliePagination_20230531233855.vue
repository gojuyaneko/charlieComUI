<template>
    <div>
        <el-pagination :hide-on-single-page="hide" class="td-pagi" layout="prev, pager, next, jumper" :page-count="itemCnt"
            @current-change="curChange" prev-text="上一期" next-text="下一期">
        </el-pagination>
    </div>
</template>
    
<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            itemCnt: 20,
            hide: this.itemCnt - 1 == 0 ? false : true,
        }
    },
    mounted() { },
    methods: {
        curChange(currentPage) {
            this.$emit('changeCurPa', currentPage)
        }
    }
}
</script>
    
<style scoped lang="scss">
.td-pagi {
    width: 750px;
    height: 40px;
    overflow: hidden;
}

::v-deep {
    .el-pager li {
        font-size: 16px;
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
        font-size: 18px;
    }

    .el-pagination button:hover {
        color: #674d97;
    }

    .el-pagination .btn-next,
    .el-pagination .btn-prev {
        background: transparent;
    }

    .el-pagination span:not([class*=suffix]) {
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
}</style>
    