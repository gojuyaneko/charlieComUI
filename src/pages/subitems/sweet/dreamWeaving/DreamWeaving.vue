<template>
  <div class="dream_weaving">
    <div class="titles">
      <ul class="btns">
          <li class="angle-btn"><img src="./image/btn.png" alt="button"></li>
          <li class="evil-btn"><img src="./image/btn.png" alt="button"></li>
      </ul>
    </div>

    <div class="dialog">

    </div>

  </div>

</template>

<script>
export default {
  name: "dream_weaving",
  angelVisible:false,
  evilVisible:false
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
  bottom:0.725rem;
  left:2.75rem;
}

.angle-btn {
  cursor: pointer;
  margin-right: 3.525rem;
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