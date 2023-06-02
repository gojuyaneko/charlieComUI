<template>
  <div>
    <div class="Swiper">
      <div class="Swiper-content">
        <div
          v-for="(item, index) in imageUrl"
          :key="index"
          :class="['Swiper-item', { active: index === currentIndex }]"
        >
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
    <div class="carousel-arrows">
      <span class="carousel-arrow prev" @click="prev">
        <img src="@/assets/HomePage/pre.png" />
      </span>
      <span class="carousel-arrow next" @click="next">
        <img src="@/assets/HomePage/next.png" />
      </span>
    </div>
    <div class="carousel-dots">
      <span
        v-for="(item, index) in imageUrl"
        :key="index"
        :class="['carousel-dot', { active: index === currentIndex }]"
        @click="goTo(index)"
      ></span>
    </div>
  </div>
</template>

<script>
import { Swiper } from "../swiper/swiper";
export default {
  name: "indexCarousel",
  data() {
    return {
      currentIndex: 0,
      imageUrl: [
        require("@/assets/HomePage/222.png"),
        require("@/assets/HomePage/222.png"),
        require("@/assets/HomePage/222.png"),
        require("@/assets/HomePage/111.png"),
        require("@/assets/HomePage/111.png"),
      ],
      classList: ["one", "two", "three", "four", "five"],
    };
  },
  methods: {
    startAutoPlay() {
      this.timer = setInterval(() => {
        this.next();
      }, 3000);
    },
    stopAutoPlay() {
      clearInterval(this.timer);
    },
    swiper() {
      new Swiper({
        classList: this.classList,
        SwiperContent: ".Swiper-content",
      });
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.imageUrl.length;
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.imageUrl.length) % this.imageUrl.length;
    },
    goTo(index) {
      this.currentIndex = index;
    },
  },

  mounted() {
    this.swiper();
    this.startAutoPlay();
  },
};
</script>

<style scoped>
.Swiper {
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
}

.Swiper-content {
  width: 960px;
  height: 450px;
  position: relative;
}

.Swiper-content div {
  position: absolute;
  width: 960px;
  height: 450px;
  margin-top: 50px;
  transition: all 0.6s;
}
.Swiper-content img {
  height: 100%;
  width: 100%;
}
.one {
  z-index: 1;
  transform: scale(0.8);
  left: 200px;
}
.two {
  z-index: 2;
  transform: scale(0.9);
  left: 100px;
}

.three {
  z-index: 9;
  transform: scale(1);
}
.four {
  z-index: 2;
  transform: scale(0.9);
}

.five {
  z-index: 1;
  transform: scale(0.8);
}

/* 圆点 */
.carousel-dots {
  position: absolute;
  top: 530px;
  right: 150px;
  display: flex;
}
.carousel-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 70px;
  background-color: #d6b367;
  cursor: pointer;
}
.carousel-dot.active {
  background-color: #563d84;
}

.carousel-arrows {
  position: absolute;
  z-index: 6;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
}
.carousel-arrow {
  width: 30px;
  height: 30px;
  background-size: 100% 100%;
  cursor: pointer;
}
.carousel-arrow.prev {
  position: relative;
  top: 80px;
  left: 20px;
}
.carousel-arrow.next {
  position: relative;
  left: 860px;
  top: 80px;
}
</style>
