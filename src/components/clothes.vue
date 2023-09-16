<template>
  <div>
    <div class="slider" ref="slider">
      <div
        class="slider-inner"
        :class="['slider-inner', { 'slider-offset': offset !== 0 }]"
        :style="{ transform: transformOffset }"
      >
        <div class="slider-item" v-for="(item, index) in items" :key="index">
          <img :src="item" alt="slider-img" />
        </div>
      </div>
    </div>
    <button class="slider-btn slider-btn-prev" @click="prev">
      <img src="@/assets/HomePage/pre.png" />
    </button>
    <button class="slider-btn slider-btn-next" @click="next">
      <img src="@/assets/HomePage/next.png" />
    </button>
  </div>
</template>

<script>
export default {
  name: "clothesSlider",
  data() {
    return {
      items: [
        require("./../assets/aboutCharlie/男人衣柜/组1.png"),
        require("./../assets/aboutCharlie/男人衣柜/组2.png"),
        require("./../assets/aboutCharlie/男人衣柜/组3.png"),
        require("./../assets/aboutCharlie/男人衣柜/组4.png"),
        require("./../assets/aboutCharlie/男人衣柜/组5.png"),
        require("./../assets/aboutCharlie/男人衣柜/组6.png"),
        require("./../assets/aboutCharlie/男人衣柜/组7.png"),
        require("./../assets/aboutCharlie/男人衣柜/组8.png"),
      ],
      currentIndex: 0,
      itemWidth: 1655,
      sliderWidth: 0,
    };
  },
  computed: {
    offset() {
      return -this.currentIndex * (this.sliderWidth / this.visibleItems);
    },
    visibleItems() {
      return Math.floor(this.sliderWidth / this.itemWidth) || 1;
    },
    transformOffset() {
      return `translate3d(${this.offset}px, 0, 0)`;
    },
  },
  methods: {
    prev() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.items.length - 1;
      }
    },
    next() {
      this.currentIndex++;
      if (this.currentIndex >= this.items.length) {
        this.currentIndex = 0;
      }
    },
  },
  mounted() {
    this.sliderWidth = this.$refs.slider.offsetWidth;
  },
};
</script>

<style scoped>
.slider {
  position: relative;
  left: 40px;
  overflow: hidden;
}
.slider-inner {
  display: flex;
  width: 1680px;
  transition: transform 0.3s ease-in-out;
  -moz-transition: -moz-transform 0.3s ease-in-out;
  -ms-transition: -ms-transform 0.3s ease-in-out;
}
.slider-offset {
  transform: translate3d(-100%, 0, 0);
  -moz-transform: translate3d(-100%, 0, 0);
  -ms-transform: translate3d(-100%, 0, 0);
}
.slider-item {
  flex: 0 0 auto;
  width: 1655px;
  height: 407px;
  margin-right: 30px;
  overflow: hidden;
}
.slider-item:last-child {
  margin-right: 0;
}
.slider img {
  width: 1655px;
  height: 407px;
  object-fit: cover;
}
.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  z-index: 10;
}
.slider-btn img {
  width: 68px;
  height: 53px;
}
.slider-btn-prev {
  left: -55px;
}
.slider-btn-next {
  right: -125px;
}
</style>
