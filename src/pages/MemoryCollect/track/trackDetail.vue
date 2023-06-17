<template>
  <div class="track_detail">
    <div class="guide"></div>
    <div class="text-bg">
      <div class="next" @click="change()" :class="{active:index}"></div>
      <trackPartner v-show="index===1"></trackPartner>
      <trackLanding v-show="index===2"></trackLanding>
    </div>
  </div>


</template>

<script>
import trackPartner from "@/pages/MemoryCollect/track/trackPartner.vue";
import trackLanding from "@/pages/MemoryCollect/track/trackLanding.vue";
export default {
  components: {trackPartner,trackLanding},
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
.track_detail {
  text-align: center;
  width: 100%;
  height: 100%;
  background: url('./轨迹1/bg.png') no-repeat;
  background-size: cover;
  background-position: center;
}

.guide {
  background: url("./轨迹1/guide.png");
  background-size: 100% 100% ;
  position: relative;
  top:165px;
  left:190px;
  height: 31px;
  width: 207px;
}

.text-bg {
  background: url('./轨迹1/text-bg.png') no-repeat;
  background-size: 100% 100%;
  height: 661px;
  width: 1522px;
  position: relative;
  top:210px;
  left:190px;
}

.next {
  background: url('./轨迹1/next.png') no-repeat;
  background-size: 100% 100%;
  height: 35px;
  width: 35px;
  position: relative;
  float: right;
  right:20px;
  display: inline-block;
  top: 70px;
  cursor: pointer;
}

</style>