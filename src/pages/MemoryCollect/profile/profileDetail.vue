<template>
  <div class="profileDetail">
    <div class="guide"></div>
    <div class="line"></div>
    <div class="next" @click="change()" :class="{active:Index}"></div>
    <ul>
        <li v-for="(item,index) in ChapList" :key="index" v-show="Index===item.sessionIndex">
          <profileNight v-if="item.chap ==='night'"></profileNight>
          <profileAttract v-if="item.chap ==='attract'"></profileAttract>
        </li>
    </ul>
  </div>
</template>

<script>
import profileAttract from "@/pages/MemoryCollect/profile/profileAttract";
import profileNight from "@/pages/MemoryCollect/profile/profileNight";

export default {
  components: {profileAttract,profileNight},
  data() {
    return {
      Index: 0,
      ChapList:[
        {
          chap:'night',
          sessionIndex:0,
        },
        {
          chap:'attract',
          sessionIndex:1,
        },
      ]
    }
  },
  methods: {
    change () {
      if(this.Index >= 1 ) {
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