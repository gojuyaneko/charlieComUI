<template>
  <div class="record-detail">
    <div class="icon"></div>
    <div class="close" @click="close">×</div>
    <div class="sub-title">
      <h4 class="sub-title-h4">{{ musicDetail.name }}</h4>
      <div class="sub-title-p" v-for="(detail, dindex) in musicDetail.details" :key="'de'+dindex">
        {{ detail }}
      </div>
    </div>
    <div class="record-body">
      <div class="title"></div>
      <div class="players">
        <div class="item" v-for="(item, index) in playerList" :key="item.name">
          <div class="item-icon" :class="active === item.name ? 'item-active' : ''" @click="change(item)"></div>
          <div class="item-index">{{index | numFilter}}</div>
          <div class="item-name">{{item.name}}</div>
          <audio class="item-music" :src="item.music" :ref="`audio${item.num}`">
          </audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getVinyl } from '@/request/api'

export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  filters: {
    numFilter(n) {
      return n+1 < 10 ? `EP0${n+1}.` : `EP${n+1}.`
    }
  },
  data() {
    return {
      active: '',
      playerList: [
      ],
      musicDetail: {
        name: '',
        details: []
      }
    }
  },
  mounted () {
    this.getMusicList()
  },
  methods: {
    change(e) {
      for( let i in this.playerList) {
        this.$refs[`audio${this.playerList[i].num}`][0].pause()
      }
      if(this.active === e.name) {
        this.active = ''
        this.$refs[`audio${e.num}`][0].pause()
      } else {
        this.active = e.name
        this.musicDetail.name = e.name
        this.musicDetail.details = e.details
        this.$refs[`audio${e.num}`][0].play()
      }
      // 这里做音频播放
    },
    close() {
      // 暂停播放器先
      this.$emit('update:isVisible', false)
    },
    getMusicList() {
      this.playerList = []
      getVinyl().then((res) => {
        console.log(res)
        this.playerList = res
        this.musicDetail.name = res[0].name
        this.musicDetail.details = res[0].details
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.record-detail {
  top: 50%;
  left: 50%;
  height: 649px;
  width: 1486px;
  position: absolute;
  background-size: 100%;
  transform: translate(-70%, 50%);
  -webkit-transform: translate(-50%, -50%);
  background-image: url('../image/record-detail-bkg.png');
  .icon {
    top: -20px;
    left: -88px;
    width: 699px;
    height: 689px;
    position: absolute;
    background-size: 100%;
    background-image: url('../image/record-icon.png');
  }
  .close {
    top: 0;
    right: 0;
    padding: 0 5px;
    font-size: 35px;
    position: absolute;
    color: rgb(218, 190, 131);
    &:hover {
      cursor: pointer;
      background-color: rgb(32, 25, 48);
    }
  }
  .sub-title {
    left: 650px;
    bottom: 90px;
    width: 249px;
    height: 151px;
    position: absolute;
    font-family: 'nansongshuju';
    &-h4 {
      font-size: 30px;
      background-image:-webkit-linear-gradient( left, rgb(235, 219, 183) 20% ,rgb(103,87,50)  60%);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      margin-bottom: 20px;
    }
    &-p {
      font-size: 18px;
      color: rgb(214, 179, 103);
      margin-bottom: 8px;
    }
  }
  .record-body {
    top: 70px;
    right: 120px;
    position: absolute;
    .title {
      height: 48px;
      width: 271px;
      background-size: 100%;
      background-image: url('../image/record-title.png');
    }
    .players {
      margin-top: 60px;
    }
    .item {
      height: 40px;
      margin-bottom: 30px;
      position: relative;
      font-family: nansongshuju;
      &-index, &-name {
        font-size: 18px;
        font-weight: 500;
        text-align: right;
        color: rgb(153, 153, 153);
      }
      &-name {
        color: rgb(214, 179, 103);
        margin-top: 3px;
        font-weight: 500;
      }
      &-music {
        width: 100%;
        height: 20px;
      }
      &-icon {
        top: 8px;
        width: 39px;
        height: 39px;
        left: 90px;
        cursor: pointer;
        position: absolute;
        background-size: 100%;
        background-image: url('../image/stop.png');
      }
      &-active {
        background-image: url('../image/play.png');
      }
    }
  }
}
</style>