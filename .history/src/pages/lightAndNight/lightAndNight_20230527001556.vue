<template>
  <div class="light-and-night">
    <div class="ln-dialog-mask">
      <div class="ln-dialog-box">

      </div>
    </div>
  </div>
</template>
  
<script>
export default {
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
  margin-top: 168px;
  margin-left: 46px;
  width: 1510px;
  height: 770px;
  background-color: rgba(255, 192, 203, 0.418);
}
</style>
