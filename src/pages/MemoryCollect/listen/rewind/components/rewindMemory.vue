<template>
<div>
  <div v-for="(item,index) in sendName" :key="index" class="text-div">
    <p class="dialog-p" :data-person-p="item.name" v-if="item.name === '我' || item.name==='查理苏' || item.name==='旁白'">{{ item.content }}</p>
  </div>
</div>
</template>

<script>
export default {
  props:["sendName"],
  methods: {
  }
}
</script>

<style scoped>

.text-div {
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-family: "nansongshuju";
}
.dialog-p {
  width: 1000px;
  margin-bottom: 20px;
  position:relative;
  left:20px;
  line-height: 30px;
}

p[data-person-p="旁白"] {
  color: white;
  text-align: left;
  left:30px;
  position: relative;
}

p[data-person-p="查理苏"] {
  text-align: left;
  color: white;
}
p[data-person-p="我"] {
  text-align: left;
  color: #b99e63;
}

</style>