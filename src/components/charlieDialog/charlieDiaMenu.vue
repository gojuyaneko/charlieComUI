<template>
  <div class="com-dialog-menu">
    <button class="dia-menu-catalog" @click="controlShow">目录</button>
    <transition name="dia-menu-transition" >
    <el-collapse v-model="activeChap" accordion class="dia-menu-col" v-show="show">
      <el-collapse-item :title="item.name" :name="item.chap" v-for="(item, index) in menuData " :key="index">
        <div class="dia-menu-div" v-for="(seItem, index) in item.subChap" :key="index" @click="comitIndex(seItem.name)">
          {{ seItem.name }}
        </div>
      </el-collapse-item>
    </el-collapse>
    </transition>
  </div>
</template>
    
<script>
export default {
  components: {},
  props: { 
    diaBtnData: Array,
    menuData:Array
  },
  data() {
    return {
      activeChap:-1,
      show: false
    };
  },
  mounted() {
  },
  methods: {
    controlShow(){
      this.show=!this.show
    },
    comitIndex(data){
      this.$emit('getContent',data)
    }
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
  color: #959595;
  cursor: pointer;
}

.dia-menu-col {
  padding-bottom: 5px;
  position: absolute;
  top: 0;
  transform: translateY(-100%);
  left: 0;
}
.dia-menu-transition-enter-active {
  transition: all .5s ease;
}
.dia-menu-transition-leave-active {
  transition: all .2s ease;
}
.dia-menu-transition-enter,.dia-menu-transition-leave-to {
  opacity: 0;
}
.dia-menu-div {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
}
 ::v-deep {

  .el-collapse {
    border: 0;
    padding: 0;
    margin: 0;
  }

  .el-collapse-item__header {
    width: 115px;
    height: 30px;
    color: #674d97;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.2);
    border: 0;
  }
  .el-collapse-item__wrap {
    background-color: rgba(255, 255, 255, 0.01);
    border: 0;
  }
  .el-collapse-item__content  {
    padding-bottom: 0;
    color: #858585;
    font-weight: 500;
    text-align: center;
  }
}</style>
    