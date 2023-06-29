<template>
  <div class="volume">
    <div class="guide"></div>
    <div class="next" @click="change()" :class="{active:index}"></div>
    <volumeDream v-show="index===1"></volumeDream>
    <volumeControl v-show="index===2"></volumeControl>
    <volumeGarden v-show="index===3"></volumeGarden>


  </div>
</template>

<script>
import volumeDream from "@/pages/MemoryCollect/listen/volume/volumeDream.vue";
import volumeControl from "@/pages/MemoryCollect/listen/volume/volumeControl.vue";
import volumeGarden from "@/pages/MemoryCollect/listen/volume/volumeGarden.vue";

export default {
  components: {volumeDream,volumeControl,volumeGarden},
  data() {
    return {
      index: 1,
    }
  },
  methods: {
    change () {
      if(this.index >= 3 ) {
        this.index = 1
      } else{
        this.index ++
      }
      console.log(this.index)
    },
  },
}
</script>

<style scoped lang="scss">
.volume {
  text-align: center;
  width: 100%;
  height: 100%;
  background: url('./余音1/bg.png') no-repeat;
  background-size: cover;
  background-position: center;
}

.guide {
  background: url("./余音1/guide.png");
  background-size: 100% 100% ;
  position: relative;
  top:165px;
  left:190px;
  height: 31px;
  width: 208px;
}

.next {
   background: url('./余音1/next.png') no-repeat;
  background-size: 100% 100%;
  height: 35px;
  width: 35px;
  position: relative;
  float: right;
  right:160px;
  display: inline-block;
  top: 250px;
  cursor: pointer;
}

</style>