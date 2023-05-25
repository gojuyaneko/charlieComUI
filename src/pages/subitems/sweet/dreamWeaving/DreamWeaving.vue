<template>
  <div class="dream_weaving">
    <div class="titles">
      <ul class="btns">
          <li class="angle-btn" @click="angelVisible=true"><img src="./image/btn.png" alt="button" height="37.5" width="110"></li>
          <li class="evil-btn" @click="evilVisible=true"><img src="./image/btn.png" alt="button" height="37.5" width="110"></li>
      </ul>
    </div>

    <div class="dialog">

    </div>

  </div>

</template>

<script>
export default {
  data(){
    return {
      angelVisible:false,
      evilVisible:false
    }

  }
}
</script>

<style scoped lang="scss">
.dream_weaving {
  width: 100%;
  height: 100%;
  background: url('./image/背景.png') no-repeat;
  background-size: 100% 100%;
}

.titles {
  height: 100%;
  background: url('./image/2.png') no-repeat;
  background-size: 100% 100%;
}

.btns {
  display: flex;
  position: absolute;
  bottom:0.775rem;
  left:3rem;
}

.angle-btn {
  cursor: pointer;
  margin-right: 3.73rem;
}
.angle-btn:hover {
  transform: scale(1.05);
}
.evil-btn {
    cursor: pointer;
}
.evil-btn:hover {
  transform: scale(1.05);
}
</style>