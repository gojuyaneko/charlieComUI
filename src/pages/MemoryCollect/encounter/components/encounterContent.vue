<template>
<div>
  <div v-for="(item,index) in sendName" :key="index">
    <div  v-for="(subitem,index) in item.content" :key="'sub' +index" class="text-div">
      <span class="dialog-span">
        <span v-if="item.speaker !== '我' && item.speaker !== '查理苏'" :data-person="item.speaker" style="color:#b99e63;margin-right: 25px;">{{item.speaker }}</span>
        <span v-if="item.speaker === '查理苏'" :data-person="item.speaker">{{item.speaker }}</span>
      </span>
      <p class="dialog-p" :data-person-p="item.speaker" v-if="item.speaker !== '我' && item.speaker!=='旁白'" style="text-align: left">{{ subitem}}</p>
      <p class="dialog-p" :data-person-p="item.speaker" v-if="item.speaker === '我' || item.speaker==='旁白'">{{ subitem}}</p>
      <span class="dialog-span"><span v-if="item.speaker === '我'" :data-person="item.speaker">{{ item.speaker }}</span></span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props:["sendName"],
  data() {
    return {
    }
  },
  mounted() {
  },
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
  width: 600px;
  margin-bottom: 20px;
}
.dialog-span {
  width: 110px;
}

span[data-person="我"] {
  color: #f38aaf;
  margin-left: 18px;
}
span[data-person="查理苏"] {
  color: #bea7d5;
  margin-right: 35px;
}
span[data-person="旁白"] {
  display: none;
}
p[data-person-p="旁白"] {
  color: #848484;
  text-indent: 2em;
}

p[data-person-p="查理苏"] {
  text-align: left;
}
p[data-person-p="我"] {
  text-align: right;
}

</style>