<template>
  <el-col :span="12" class="com-dialog-menu">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" hide-on-click="false">
        <el-dropdown-item >  
          <el-collapse v-model="activeChap" accordion>
            <el-collapse-item :title="item.name" :name="item.chap" v-for="(item, index) in menuData " :key="index">
              <div v-for="(seItem, index) in item.subChap" :key="index">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
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
          name:'第六章',
          subChap:[
            {
              session:18,
              name:'6-18'
            }
          ]
        },
        {
          chap: 7,
          name:'第七章',
          subChap:[
            {
              session:12,
              name:'7-12'
            },
            {
              session:13,
              name:'7-13'
            },
            {
              session:14,
              name:'7-14'
            },
            {
              session:15,
              name:'7-15'
            }
          ]
        }
      ],
      activeChap:6
    };
  },
  mounted() {
  },
  methods: {

  },
};
</script>
    
<style scoped lang="scss">
.com-dialog-menu {}

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
    