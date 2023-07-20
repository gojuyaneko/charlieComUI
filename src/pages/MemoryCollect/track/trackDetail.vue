<template>
  <div class="track_detail">
    <div class="guide"></div>
    <div class="text-bg">
      <div class="next" @click="change()" :class="{active:Index}"></div>
      <ul>
        <li v-for="(item,index) in ChapList" :key="index" v-show="Index===item.sessionIndex">
          <trackPartner v-if="item.chap ==='partner'"></trackPartner>
          <trackLanding v-if="item.chap ==='landing'"></trackLanding>
          <trackBack v-if="item.chap ==='back'"></trackBack>
        </li>

      </ul>

    </div>
  </div>


</template>

<script>
import trackPartner from "@/pages/MemoryCollect/track/trackPartner.vue";
import trackLanding from "@/pages/MemoryCollect/track/trackLanding.vue";
import trackBack from "@/pages/MemoryCollect/track/trackBack.vue";
export default {
  components: {trackPartner,trackLanding,trackBack},
  data() {
    return {
      Index: 0,
      ChapList:[
        {
          chap:'partner',
          sessionIndex:0,
        },
        {
          chap:'landing',
          sessionIndex:1,
        },
        {
          chap:'back',
          sessionIndex:2,
        }
      ],
    }
  },
  methods: {
    change () {
      if(this.Index >= 2 ) {
        this.Index = 0
      } else{
        this.Index ++
      }
      console.log(this.Index)
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
  position: fixed;
  top:260px;
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