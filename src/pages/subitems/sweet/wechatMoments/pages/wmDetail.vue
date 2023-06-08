<template>
  <div class="wechat-moments-detail">
    <div class="wm-detail-bg"> 

    </div>
  </div>
</template>
  
<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  mounted() { },
  methods: {}
};
</script>
  
<style scoped lang="scss">
.wechat-moments-detail {
  width: 100%;
  height: 100%;
  background: url("../../../../../assets/charlieCretsBG/tdbg-min.jpg") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  user-select: none;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
  .wm-detail-bg {
    width: 100%;
    height: 100%;
    background: url("../../../../../assets/charlieCretsBG/tdbg.png") no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;    
  }
}
</style>
  