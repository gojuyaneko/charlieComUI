<template>
  <div class="com-charlie-dia">
    <div class="ln-dialog-box">
      <div class="ln-dialog-left">
        <img :src="charliePhoto" alt="" class="ln-dia-charlie">
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
  margin-top: 168px;
  margin-left: 202px;
  width: 1510px;
  height: 70%;
  background-color: rgba(255, 192, 203, 0.418);
}

.ln-dia-charlie {
  width: 590px;
  height: 650px;
}
</style>
  