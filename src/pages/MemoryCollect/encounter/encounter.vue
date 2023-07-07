<template>
  <div class="encounter">
    <div class="next" @click="change()" :class="{active:Index}"></div>
    <rescueTrip v-show="Index===1"></rescueTrip>
    <unknownErosion v-show="Index===2"></unknownErosion>
    <truthCameout v-show="Index===3"></truthCameout>
  </div>
</template>

<script>
import rescueTrip from "@/pages/MemoryCollect/encounter/components/rescueTrip"
import unknownErosion from "@/pages/MemoryCollect/encounter/components/unknownErosion";
import truthCameout from "@/pages/MemoryCollect/encounter/components/truthCameout";


export default {
  components: {rescueTrip,unknownErosion,truthCameout},

  data() {
    return {
      Index:1
    }
  },
  methods: {
    change () {
      if(this.Index >= 3 ) {
        this.Index = 1
      } else{
        this.Index ++
      }
      console.log(this.Index)
    },
  },
}
</script>

<style scoped lang="scss">
.encounter {
  text-align: center;
  width: 100%;
  height: 100%;
  background: url('./邂逅1/bg.png') no-repeat;
  background-size: cover;
  background-position: center;
}

.next {
  background: url('./邂逅1/next.png') no-repeat;
  background-size: 100% 100%;
  height: 40px;
  width: 40px;
  top:180px;
  left:480px;
  position: absolute;
  display: inline-block;
  z-index:2;

  cursor: pointer;
}

</style>