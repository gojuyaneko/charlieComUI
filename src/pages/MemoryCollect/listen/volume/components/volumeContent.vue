<template>
<div>
  <div v-for="(item,index) in sendName" :key="index" class="text-div">
    <p class="dialog-p" :datatype="item.type">{{ item.content }}</p>
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
  width: 795px;
  margin-bottom: 20px;
  position:relative;
  left:20px;
}

p[datatype="content"] {
  color: white;
  text-align: left;
  left:30px;
  position: relative;
  line-height: 30px;
}

p[datatype="title"] {
  text-align: left;
  color: #848484;
  line-height: 35px;
  left:30px;
}

</style>