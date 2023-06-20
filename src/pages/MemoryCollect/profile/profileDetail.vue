<template>
  <div class="profileDetail">
    <div class="guide"></div>
    <div class="line"></div>
    <div class="next" @click="change()" :class="{active:index}"></div>
    <profileNight v-show="index===1"></profileNight>
    <profileAttract v-show="index===2"></profileAttract>
  </div>
</template>

<script>
import profileAttract from "@/pages/MemoryCollect/profile/profileAttract";
import profileNight from "@/pages/MemoryCollect/profile/profileNight";

export default {
  components: {profileAttract,profileNight},
  data() {
    return {
      index: 1,
    }
  },
  methods: {
    change () {
      if(this.index >= 2 ) {
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
.profileDetail {
  text-align: center;
  width: 100%;
  height: 100%;
  background: url('./侧影1/bg.png') no-repeat;
  background-size: cover;
  background-position: center;
}

.guide {
  background: url("./侧影1/guide.png");
  background-size: 100% 100% ;
  position: relative;
  top:165px;
  left:190px;
  height: 31px;
  width: 207px;
}



.next {
  background: url('./侧影1/next.png') no-repeat;
  background-size: 100% 100%;
  height: 40px;
  width: 40px;
  position: relative;
  display: inline-block;
  left:-440px;
  top: 780px;
  cursor: pointer;
}

.line {
  background-image: url("./侧影1/line.png");
  background-size: 100% 100%;
  position: relative;
  top: 480px;
  left: 560px;
  width: 166px;
  height: 25px;
}
</style>