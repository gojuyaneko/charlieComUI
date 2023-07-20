<template>
<div>
  <div v-for="(item,index) in sendName" :key="index" class="text-div">
    <span class="dialog-span">
      <span v-if="item.name !== '我' && item.name !== '查理苏'" :data-person="item.name" style="color:#b99e63;margin-right: 30px;">{{item.name }}</span>
      <span v-if="item.name === '查理苏'" :data-person="item.name">{{item.name }}</span>
    </span>
    <p class="dialog-p" :data-person-p="item.name" v-if="item.name !== '我' && item.name!=='旁白'" style="text-align: left">{{ item.content }}</p>
    <p class="dialog-p" :data-person-p="item.name" v-if="item.name === '我' || item.name==='旁白'">{{ item.content }}</p>
    <span class="dialog-span"><span v-if="item.name === '我'" :data-person="item.name">{{ item.name }}</span></span>
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
  width: 140px;
  position: relative;
  left:8px;
}

span[data-person="我"] {
  color: #f38aaf;
  margin-left: -30px;
}
span[data-person="查理苏"] {
  color: #bea7d5;
  margin-right: 40px;
}
span[data-person="旁白"] {
  display: none;
}
p[data-person-p="旁白"] {
  color: #848484;
  text-align: left;
}

p[data-person-p="查理苏"] {
  text-align: left;
}
p[data-person-p="我"] {
  text-align: right;
}

</style>