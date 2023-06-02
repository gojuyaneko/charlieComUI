<template>
  <div class="light-and-night">
    <charlieDialog :videoUrl="videoUrl">
    </charlieDialog>
  </div>
</template>
  
<script>
import charlieDialog from '@/components/charlieDialog/charlieDialog.vue';
export default {
  data(){
    return {
      charliePhoto:require('../../assets/charlie/c-6-allback.png'),
      chapter:6,
      videoUrl:'www.bilibili.com'
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
  overflow: hidden;
}
</style>
