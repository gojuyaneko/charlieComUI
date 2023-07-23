<template>
  <div class="encounter">
    <!-- <div class="next" @click="change()" :class="{active:Index}"></div> -->
    <rescueTrip v-show="Index===0"></rescueTrip>
    <unknownErosion v-show="Index===1"></unknownErosion>
    <truthCameout v-show="Index===2"></truthCameout>
  </div>
</template>

<script>
///import rescueTrip from "@/pages/MemoryCollect/encounter/components/rescueTrip"
// import unknownErosion from "@/pages/MemoryCollect/encounter/components/unknownErosion";
// import truthCameout from "@/pages/MemoryCollect/encounter/components/truthCameout";


export default {
  ///components: {rescueTrip,unknownErosion,truthCameout},

  data() {
    return {
      Index:0
    }
  },
  mounted () {
    this.getIndex()
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
    getIndex () {
      this.Index = parseInt(this.$route.query.encounterIndex)
      console.log(this.$route.query.encounterIndex)
    }
  },

}
</script>

<style scoped lang="scss">
.encounter {
  text-align: center;
  width: 100%;
  height: 100%;
  background: url('./邂逅1/bg1.png') no-repeat;
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