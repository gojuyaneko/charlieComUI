<template>
  <div class="charlie-dialog-arti">
    <div v-for="(item, index) in diaContent" :key="index" class="com-dia-div">
      <div class="com-dia-main" v-if="item.para_type === 'normal'">
        <span class="com-dia-span">
          <span v-if="item.speaker !== '我'" :data-speaker="item.speaker">
            {{ item.speaker }}</span
          >
        </span>
        <div class="com-dia-text">
          <p
            class="com-dia-p"
            :data-speaker-p="item.speaker"
            v-for="(cnt, iindex) in item.content"
            :key="'cnt3'+iindex"
          >
            {{ cnt }}
          </p>
        </div>
        <span class="com-dia-span">
          <span v-if="item.speaker === 'me'" :data-speaker="item.speaker">
            {{ item.speaker }}
          </span>
        </span>
      </div>
      <div class="com-dia-choose" v-if="item.para_type !== 'normal'">
        <charlie-dia-btn
          v-bind="$attrs"
          :diaBtnData="item.xuanxiang"
          :btnIndex="index"
          class="com-dia-btn"
          @getYoN="chooseCnt"
        ></charlie-dia-btn>
        <br />
        <div v-if="item.xuanxiang[0].para_type === choice[index] && fresh">
          <div
            class="com-dia-main"
            v-for="(chooseItem, cindex) in item.xuanxiang[0].choice_para"
            :key="'c'+cindex"
          >
            <span class="com-dia-span">
              <span v-if="chooseItem.speaker !== '我'" :data-speaker="chooseItem.speaker">
                {{ chooseItem.speaker }}</span
              >
            </span>
            <div class="com-dia-text">
              <p
                class="com-dia-p"
                :data-speaker-p="chooseItem.speaker"
                v-for="(cnt, cntindex) in chooseItem.content"
                :key="'cnt'+cntindex"
              >
                {{ cnt }}
              </p>
            </div>
            <span class="com-dia-span">
              <span v-if="chooseItem.speaker === '我'" :data-speaker="chooseItem.speaker">
                {{ chooseItem.speaker }}
              </span>
            </span>
          </div>
        </div>
        <div v-if="item.xuanxiang[1].para_type === choice[index] && fresh">
          <div
            class="com-dia-main"
            v-for="(chooseItem, csindex) in item.xuanxiang[1].choice_para"
            :key="'choose'+csindex"
          >
            <span class="com-dia-span">
              <span v-if="chooseItem.speaker !== '我'" :data-speaker="chooseItem.speaker">
                {{ chooseItem.speaker }}</span
              >
            </span>
            <div class="com-dia-text">
              <p
                class="com-dia-p"
                :data-speaker-p="chooseItem.speaker"
                v-for="(cnt, cntindex) in chooseItem.content"
                :key="'cnt2' +cntindex"
              >
                {{ cnt }}
              </p>
            </div>
            <span class="com-dia-span">
              <span v-if="chooseItem.speaker === '我'" :data-speaker="chooseItem.speaker">
                {{ chooseItem.speaker }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import charlieDiaBtn from "@/components/charlieDialog/charlieDiaBtn";
export default {
  components: { charlieDiaBtn },
  props:{
    diaContent:Array
    },
  data() {
    return {
      diaTitle: "",
      choice:['light','light','light','light','light','light','light'],
      fresh: 1
    };
  },
  mounted() {
  },
  methods: {
    chooseCnt(choice, index) {
      this.fresh++
      this.choice[index] = choice
    }
  },
  watch: {
    diaContent() {
    }
  }
};
</script>
    
<style scoped lang="scss">
.com-dia-div {
  margin-left: 60px;
  font-size: 20px;
  padding-right: 60px;
  color: white;
  font-family: 'nansongshuju';
}
.com-dia-main {
  display: flex;
  flex-direction: row;
}
.com-dia-text {
  width: 550px;
  margin-bottom: 30px;
}
.com-dia-p {
  font-size: 20px;
  margin-bottom: 8px;
}
.com-dia-span {
  width: 105px;
  color: rgb(214, 179, 103);
}
span[data-speaker="我"] {
  color: #eb4982;
  margin-left: 55px;
}
span[data-speaker="查理苏"] {
  color: #674d97;
  margin-right: 35px;
}
span[data-speaker="旁白"] {
  display: none;
}
p[data-speaker-p="旁白"] {
  color: #848484;
}
p[data-speaker-p="我"] {
  text-align: right;
}
.com-dia-btn {
  margin-left: 180px;
  margin-top: 4%;
}
</style>
    