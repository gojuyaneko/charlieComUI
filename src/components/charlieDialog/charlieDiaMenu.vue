<template>
  <div class="com-dialog-menu">
    <button class="dia-menu-catalog" @click="controlShow">目录</button>
    <transition name="el-fade-in-linear" >
    <el-collapse v-model="activeChap" accordion class="dia-menu-col" v-show="show">
      <el-collapse-item class="hover-color" :title="item.chap_name" :name="item.chap_num" v-for="(item, index) in menuData " :key="index">
        <div class='dia-menu-div' :class="{'isActive':activeIndex === seItem}" v-for="(seItem, index) in item.subchap" :key="index" @click="comitIndex(item.chap_num, seItem)">
          {{ seItem}}
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
      show: false,
      activeIndex: '6-8'
    };
  },
  activated(){
    this.activeIndex='6-8'
  },
  methods: {
    controlShow(){
      this.show=!this.show
    },
    comitIndex(chap, data){
      this.activeIndex = data
      this.$emit('getContent',chap, data)
      this.show = false
    }
  },
  watch:{
    activeIndex(){
      this.$emit('changeChap')
    }
  }
};
</script>
    
<style scoped lang="scss">
.com-dialog-menu {
  position: absolute;
  bottom: 3%;
  right: 50px;
  width: 115px;
}

.dia-menu-catalog {
  width: 115px;
  height: 40px;
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
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  cursor: pointer;
}
.dia-menu-div:hover{
  background-color: rgba(255, 255, 255, 0.6);
}
 ::v-deep {

  .el-collapse {
    border: 0;
    padding: 0;
    margin: 0;
  }

  .el-collapse-item__header {
    width: 115px;
    height: 40px;
    color: #674d97;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.55);
    border: 0;
  }
  .el-collapse-item__header:hover{
  background-color: #949494bd!important;
}
  .el-collapse-item__wrap {
    background-color: rgba(255, 255, 255, 0.4);
    border: 0;
  }
  .isActive {
    background-color: rgba(230, 230, 230, 0.5);
  }
  .el-collapse-item__content  {
    padding-bottom: 0;
    color: #464646;
    font-weight: 500;
    text-align: center;
  }
}
</style>
    