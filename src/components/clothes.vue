<template>
  <div>
    <div class="slider">
      <div
        class="slider-inner"
        :style="{ transform: 'translateX(' + offset + 'px)' }"
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
      // 图片列表
      items: [
        require("./../assets/aboutCharlie/cloth.png"),
        require("./../assets/aboutCharlie/cloth2.png"),
        require("./../assets/aboutCharlie/cloth.png"),
        require("./../assets/aboutCharlie/cloth2.png"),
        require("./../assets/aboutCharlie/cloth.png"),
        require("./../assets/aboutCharlie/cloth2.png"),
        require("./../assets/aboutCharlie/cloth.png"),
        require("./../assets/aboutCharlie/cloth2.png"),
        require("./../assets/aboutCharlie/cloth.png"),
        require("./../assets/aboutCharlie/cloth2.png"),
      ],
      // 当前偏移量
      offset: 0,
      // 每个图片的宽度
      itemWidth: 400,
      // 可见图片数量
      visibleItems: 6,
    };
  },
  methods: {
    // 向左滑动
    prev() {
      this.offset += this.itemWidth;
      if (this.offset > 0) {
        this.offset = -(this.items.length - this.visibleItems) * this.itemWidth;
      }
    },
    // 向右滑动
    next() {
      this.offset -= this.itemWidth;
      if (
        this.offset <
        -(this.items.length - this.visibleItems) * this.itemWidth
      ) {
        this.offset = 0;
      }
    },
  },
};
</script>

<style scoped>
.slider {
  position: relative;
  overflow: hidden;
}
.slider-inner {
  display: flex;
  width: 1700px;
  transition: transform 0.3s ease-in-out;
}
.slider-item {
  flex: 0 0 auto;
  width: 257px;
  height: 399px;
  margin-right: 30px;
  overflow: hidden;
}
.slider-item:last-child {
  margin-right: 0;
}
.slider img {
  width: 257px;
  height: 399px;
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
  left: -85px;
}
.slider-btn-next {
  right: -85px;
}
</style>
