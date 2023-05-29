<template>
  <div class="com-charlie-dia">
    <div class="ln-dialog-box">
      <div class="ln-dialog-left">
        <div class="ln-dia-l-box">
          <span class="ln-dia-wavideo"></span>
          <img :src="charliePhoto" alt="" class="ln-dia-charlie">
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      charliePhoto: require('../assets/charlie/c-6-allback.png'),
      chapter: 6
    }
  },
  components: {}
}
</script>
  
<style scoped lang="scss">
.com-charlie-dia {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.ln-dialog-box {
  position: relative;
  background: url('../assets/dialogbg1.png') no-repeat;
  background-size: 100% 100%;
  margin-top: 168px;
  margin-left: 202px;
  width: 1510px;
  height: 72.22%;
}
.ln-dialog-left {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 576px;
  height:100%;
}
.ln-dia-l-box {
  position: relative;
  top: 0;
  left: 0;
  width: 576px;
  height:100%;
}
.ln-dia-charlie {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 576px;
  height: 615.57px;
}
</style>
  