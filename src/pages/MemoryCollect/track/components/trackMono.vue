<template>
<div>
  <div v-for="(item,index) in sendName" :key="index" class="text-div">
    <span class="dialog-span">
      <span v-if="item.name === '查理苏'" :data-person="item.name" style="text-align: left">{{item.name }}</span>
    </span>
    <p class="dialog-p" :data-person-p="item.name">{{ item.content }}</p>
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
  color: white;
  font-family: "nansongshuju";
}
.dialog-p {
  width: 1000px;
  margin-bottom: 20px;
}
.dialog-span {
  width: 100px;
}

span[data-person="查理苏"] {
  color: #bea7d5;
  position: fixed;
  left: 260px;
}

p[data-person-p="查理苏"] {
  text-align: left;
}

</style>