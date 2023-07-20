<template>
  <div class="charlie-dialog-arti">
    <div v-for="(item, index) in diaContent" :key="index" class="com-dia-div">
      <div class="com-dia-main" v-if="item.para_type === 'normal'">
        <span class="com-dia-span">
          <span v-if="item.tag !== 'me'" :data-tag="item.tag">
            {{ item.speaker }}</span
          >
        </span>
        <div class="com-dia-text">
          <p
            class="com-dia-p"
            :data-tag-p="item.tag"
            v-for="(cnt, index) in item.content"
            :key="index"
          >
            {{ cnt }}
          </p>
        </div>
        <span class="com-dia-span">
          <span v-if="item.tag === 'me'" :data-tag="item.tag">
            {{ item.speaker }}
          </span>
        </span>
      </div>
      <div class="com-dia-choose" v-if="item.para_type !== 'normal'">
        <charlie-dia-btn
          v-bind="$attrs"
          :diaBtnData="item.xuanxiang"
          class="com-dia-btn"
          @getYoN="chooseCnt"
        ></charlie-dia-btn>
        <br />
        <div v-if="item.xuanxiang[0].para_type === choice">
          <div
            class="com-dia-main"
            v-for="(chooseItem, index) in item.xuanxiang[0].choice_para"
            :key="index"
          >
            <span class="com-dia-span">
              <span v-if="chooseItem.tag !== 'me'" :data-tag="chooseItem.tag">
                {{ chooseItem.speaker }}</span
              >
            </span>
            <div class="com-dia-text">
              <p
                class="com-dia-p"
                :data-tag-p="chooseItem.tag"
                v-for="(cnt, index) in chooseItem.content"
                :key="index"
              >
                {{ cnt }}
              </p>
            </div>
            <span class="com-dia-span">
              <span v-if="chooseItem.tag === 'me'" :data-tag="chooseItem.tag">
                {{ chooseItem.speaker }}
              </span>
            </span>
          </div>
        </div>
        <div v-if="item.xuanxiang[1].para_type === choice">
          <div
            class="com-dia-main"
            v-for="(chooseItem, index) in item.xuanxiang[1].choice_para"
            :key="index"
          >
            <span class="com-dia-span">
              <span v-if="chooseItem.tag !== 'me'" :data-tag="chooseItem.tag">
                {{ chooseItem.speaker }}</span
              >
            </span>
            <div class="com-dia-text">
              <p
                class="com-dia-p"
                :data-tag-p="chooseItem.tag"
                v-for="(cnt, index) in chooseItem.content"
                :key="index"
              >
                {{ cnt }}
              </p>
            </div>
            <span class="com-dia-span">
              <span v-if="chooseItem.tag === 'me'" :data-tag="chooseItem.tag">
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
      choice:''
    };
  },
  mounted() {

  },
  methods: {
    chooseCnt(choice) {
      this.choice = choice
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
}
.com-dia-span {
  width: 105px;
  color: rgb(214, 179, 103);
}
span[data-tag="me"] {
  color: #eb4982;
  margin-left: 55px;
}
span[data-tag="charlie"] {
  color: #674d97;
  margin-right: 35px;
}
span[data-tag="pb"] {
  display: none;
}
p[data-tag-p="pb"] {
  color: #848484;
}
p[data-tag-p="me"] {
  text-align: right;
}
.com-dia-btn {
  margin-left: 180px;
  margin-top: 4%;
}
</style>
    