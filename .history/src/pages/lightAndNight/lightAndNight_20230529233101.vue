<template>
  <div class="light-and-night">
    <charlieDialog></charlieDialog>
  </div>
</template>
  
<script>
import charlieDialog from '@/components/charlieDialog.vue';
export default {
  data(){
    return {
      charliePhoto:require('../../assets/charlie/c-6-allback.png'),
      chapter:6
    }
  },
  components: {charlieDialog}
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
