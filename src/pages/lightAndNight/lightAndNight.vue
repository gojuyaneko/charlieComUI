<template>
  <div class="light-and-night">
    <div class="ln-dialog-mask">
      <div class="ln-dialog-box">
        <div class="ln-dialog-left">
          <img :src="charliePhoto" alt="" class="ln-dia-charlie">
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data(){
    return {
      charliePhoto:require('../../assets/charlie/c-6-allback.png'),
      chapter:6
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
.light-and-night {
  background: url("./img/mlbackground.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.ln-dialog-mask {
  background: url("./img/dialogbg.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.ln-dialog-box {
  background: url("./img/dialogbg1.png") no-repeat;
  background-size: 100% 100%;
  margin-top: 149px;
  margin-left: 191px;
  width: 1533px;
  height: 781px;
}
.ln-dia-charlie {
  width: 590px;
  height: 650px;
}
</style>
