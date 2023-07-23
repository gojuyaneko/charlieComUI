<template>
  <div class="charlie-furniture">
    <div class="furniture-nav">
      <span>工作室</span>
      <span>></span>
      <span>家具</span>
    </div>
    <div class="furniture-title bkg"></div>
    <div class="furnitre-body bkg">
      <div class="record bkg" @click="showDeatil('record')"></div>
      <div class="btn bkg" v-for="item in btnList" :key="item.key" :style="item.style" @click="showDeatil(item.key, item.name)">
        {{ item.name }}</div>
    </div>
    <record-detail v-if="isRecordDeatilV" :isVisible.sync="isRecordDeatilV" :playerList="playerList"></record-detail>
    <furniture-detail v-if="isFurnitureDetailV" :isVisible.sync="isFurnitureDetailV" :type="chosenType" :name="detailName"></furniture-detail>
  </div>
</template>

<script>
import btnList from './components/btnList'
import RecordDetail from './components/RecordDetail.vue'
import FurnitureDetail from './components/FurnitureDetail.vue'

export default {
  components: {
    RecordDetail,
    FurnitureDetail
  },
  mixins: [btnList],
  data() {
    return {
      chosenType: 'woodenFrame',
      detailName: '画板',
      playerList: [
        {
          url: '',
          name: '生而有翼'
        },
        {
          url: '',
          name: '与你出逃'
        },
        {
          url: '',
          name: '沐野拾趣'
        },
        {
          url: '',
          name: '异乡风景'
        },
        {
          url: '',
          name: 'Summer Delight'
        },
      ],
      isRecordDeatilV: false,
      isFurnitureDetailV: false
    }
  },
  methods: {
    showDeatil(e, name) {
      this.detailName = name
      if (e === 'record') {
        this.isRecordDeatilV = true
      } else {
        this.chosenType = e
        this.isFurnitureDetailV = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.charlie-furniture {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-image: url('./image/furniture-bkg.png');

  .furniture-nav {
    top: 160px;
    left: 150px;
    font-size: 18px;
    font-size: 18px;
    position: absolute;
    font-family: nansongshuju;
    color: rgb(206, 172, 99);

    span {
      margin-left: 10px;

      &:first-child {
        cursor: pointer;
      }
    }
  }

  .furniture-title {
    left: 150px;
    width: 430px;
    height: 79px;
    bottom: 350px;
    position: absolute;
    background-image: url('./image/title.png');

    &::after {
      content: "";
      top: 50px;
      width: 517px;
      height: 53px;
      position: absolute;
      background: url('./image/dark-title.png') no-repeat center/100%;
      background-size: 100% 100%;
    }
  }

  .furnitre-body {
    bottom: 0;
    right: 100px;
    width: 810px;
    height: 770px;
    position: absolute;
    background-image: url('./image/furnitures.png');

    .record {
      top: 280px;
      left: 145px;
      width: 38px;
      height: 153px;
      cursor: pointer;
      position: absolute;
      background-image: url('./image/record.png');
    }

    .btn {
      width: 120px;
      height: 38px;
      font-size: 20px;
      cursor: pointer;
      font-weight: 500;
      line-height: 38px;
      text-align: center;
      position: absolute;
      font-family: nansongshuju;
      color: rgb(206, 172, 99);
      background-image: url('./image/btn-bkg.png');
    }
  }
}

.bkg {
  background-size: 100% 100%;
}</style>

