<template>
  <div class="com-dialog-menu">
    <button class="dia-menu-catalog" >目录</button>
    <el-collapse v-model="activeChap" accordion class="dia-menu-col" v-if="show"> 
      <el-collapse-item :title="item.name" :name="item.chap" v-for="(item, index) in menuData " :key="index">
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
      show:false
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
  background-color: rgba(255, 255, 255, 0.1);
  outline: 0;
  border: 0;
}
.dia-menu-col {
  position: absolute;
  top: 0;
  left: 0;
}
.el-radio-button__inner,
.el-radio-group {
  display: flex;
  flex-direction: row;
}

.el-radio-button {
  height: 28px;
  display: flex;
  align-items: center;
  margin-right: 60px;

}

.el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled) {
  -webkit-box-shadow: none;
  box-shadow: none;
}

::v-deep {
  .el-radio-button .el-radio-button__inner {
    font-size: 18px;
    border: 0;
    background: transparent;
    width: 220px;
    color: #b99950;
    padding: 8px 0;
  }

  .is-active {
    scale: calc(1.08);
    border: 0;
    background-image: linear-gradient(to left, transparent, #674d97);
    border-radius: 28px;
  }

  .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}

.dia-btn-bg {
  position: absolute;
  top: 0;
  left: -2px;
  height: 0;
  width: 100%;
  height: 100%;
}
</style>
    