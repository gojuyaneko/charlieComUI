<template>
  <div class="truth-or-dare">
    <ul class="td-items">
      <li v-for="item in tdItems" :key="item" class="td-item-li">
        <img :src="item.bgImg" alt="" class="td-item-img">
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
.td-items {
  display: flex;
  position: absolute;
  top: 278px;
  left: 207px;
}
.td-item-li {
  margin-right: 60px;
}
.td-item-img {
  width:337px ;
  height: 513px;
}
</style>