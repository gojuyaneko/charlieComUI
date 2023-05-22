<template>
  <div class="truth-or-dare">
    <ul>
      <li v-for="item in tdItems" :key="item">
        <img :src="item.bgImg" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        tdItems: [
          {
            type:'truth',
            person:'charlie',
            bgImg:require('./img/charlietruth.png')
          },
          {
            type:'truth',
            person:'me',
            bgImg:require('./img/metruth.png')
          },
          {
            type:'dare',
            person:'charlie',
            bgImg:require('./img/charliedare.png')
          },
          {
            type:'dare',
            person:'me',
            bgImg:require('./img/medare.png')
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
.truth-or-dare {
  width: 100%;
  height: 100%;
  background-color: pink;
}
</style>