<template>
  <div class="com-dialog-menu">
    <button class="dia-menu-catalog">目录</button>
    <el-collapse v-model="activeChap" accordion class="dia-menu-col" v-if="show">
      <el-collapse-item class="dia-menu-col-item" :title="item.name" :name="item.chap" v-for="(item, index) in menuData " :key="index">
        <a href="#" rel="nofollow" v-for="(seItem, index) in item.subChap" :key="index">
          <br>
          {{ seItem.name }}
        </a>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
    
<script>
export default {
  components: {},
  props: { diaBtnData: Array },
  data() {
    return {
      menuData: [
        {
          chap: 6,
          name: '第六章',
          subChap: [
            {
              session: 18,
              name: '6-18'
            }
          ]
        },
        {
          chap: 7,
          name: '第七章',
          subChap: [
            {
              session: 12,
              name: '7-12'
            },
            {
              session: 13,
              name: '7-13'
            },
            {
              session: 14,
              name: '7-14'
            },
            {
              session: 15,
              name: '7-15'
            }
          ]
        }
      ],
      activeChap: 6,
      show: true
    };
  },
  mounted() {
  },
  methods: {

  },
};
</script>
    
<style scoped lang="scss">
.com-dialog-menu {
  position: absolute;
  bottom: 10%;
  right: 50px;
  width: 115px;
}

.dia-menu-catalog {
  width: 115px;
  height: 30px;
  background: url('../../assets/diacata.png') no-repeat;
  background-size: 100% 100%;
  outline: 0;
  border: 0;
  cursor: pointer;
}

.dia-menu-col {
  position: absolute;
  top: 0;
  transform: translateY(-100%);
  left: 0;
}
// .dia-menu-col-item {
//   width: 115px;
//   height: 30px;
// }
 ::v-deep {
  .el-collapse {
    border: 0;
  }
  .el-collapse-item__header {
    width: 115px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.1);
  }
}</style>
    