<template>
  <div class="volume">
    <div class="guide"></div>
    <div class="next" @click="change()" :class="{active:Index}"></div>
    <ul>
        <li class="pages" v-for="(item,index) in ChapList" :key="index" v-show="Index===item.sessionIndex">
           <volumeDream v-if="item.chap==='dream'"></volumeDream>
          <volumeControl v-if="item.chap==='control'"></volumeControl>
          <volumeGarden v-if="item.chap==='garden'"></volumeGarden>
        </li>
    </ul>



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
      Index: 0,
      ChapList:[
        {
          chap:'dream',//章节名称
          sessionIndex:0,//章节标志
        },
        {
          chap:'control',
          sessionIndex:1,
        },
        {
          chap:'garden',
          sessionIndex:2,
        },
      ]
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
.volume {
  text-align: center;
  width: 100%;
  height: 100%;
  background: url('./余音1/bg.png') no-repeat;
  background-size: auto ;
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