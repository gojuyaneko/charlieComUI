<template>
  <div>
    <!-- <div class="pc-picBorder">
      <img src="@/assets/HomePage/picBorder.png" />
    </div> -->
    <div class="carousel">
      <div class="carousel-item">
        <div
          v-for="(item, index) in imageData"
          :key="index"
          :class="['carousel-item', { active: index === currentIndex }]"
        >
          <router-link
            :to="{
              path: './lightandnight',
              query: { chap: item.chap, subchap: item.subchap },
            }"
          >
            <img :src="item.url" alt="" />
          </router-link>
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
        @click="changeActiveIndex(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexCarousel",
  data() {
    return {
      currentIndex: 0,
      imageUrl: [
        require("@/assets/HomePage/7章.png"),
        require("@/assets/HomePage/10章.png"),
        require("@/assets/HomePage/14章.png"),
        require("@/assets/HomePage/新生3.png"),
      ],
      imageData: [
        {
          url: require("@/assets/HomePage/7章.png"),
          chap: 7,
          subchap: "7-1",
        },
        {
          url: require("@/assets/HomePage/10章.png"),
          chap: 10,
          subchap: "10-8",
        },
        {
          url: require("@/assets/HomePage/14章.png"),
          chap: 14,
          subchap: "14-1",
        },
        {
          url: require("@/assets/HomePage/新生3.png"),
          chap: 21,
          subchap: "3-2",
        },
      ],
    };
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.imageUrl.length;
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.imageUrl.length) % this.imageUrl.length;
    },
    changeActiveIndex(index) {
      this.currentIndex = index;
    },
    getItemStyle(index) {
      const activeIndex = this.currentIndex;
      const len = this.imageList.length;
      const deg = 360 / len;

      let transform = `translateZ(translateZpx)scale({translateZ}px) scale(translateZpx)scale({scale})`;
      if (index < activeIndex) {
        transform += ` rotateY(${deg * (index - activeIndex)}deg)`;
      } else if (index > activeIndex) {
        transform += ` rotateY(${deg * (index - activeIndex)}deg)`;
      }
      return { transform };
    },
    goTo(index) {
      this.currentIndex = index;
      if (this.currentIndex < 0) {
        this.currentIndex = this.imageUrl.length - 1;
      } else if (this.currentIndex > this.imageUrl.length - 1) {
        this.currentIndex = 0;
      }
    },
  },
};
</script>

<style scoped>
.carousel {
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
}

.carousel-item {
  width: 960px;
  height: 450px;
  position: relative;
}

.carousel-item div {
  position: absolute;
  width: 960px;
  height: 450px;
  margin-top: 50px;
  transition: all 0.6s;
}
.carousel-item img {
  height: 100%;
  width: 100%;
}

.carousel-item:nth-child(1) {
  transform: translateX(0px) translateZ(0);
  z-index: 3;
}

.carousel-item:nth-child(2) {
  transform: translateX(0px) translateZ(-90px);
  z-index: 2;
}

.carousel-item:nth-child(3) {
  transform: translateX(0px) translateZ(-100px);
  z-index: 1;
}

.carousel-item:nth-child(4) {
  transform: translateX(0px) translateZ(-50px);
  z-index: 2;
}

.carousel-item:nth-child(5) {
  transform: translateX(0px) translateZ(-100px);
  z-index: 1;
}

.carousel-item.active {
  z-index: 4;
  transform: translateZ(0);
}

.carousel-item.active + .carousel-item {
  transform: translateX(40px) translateZ(-50px);
  z-index: 3;
}

.carousel-item.active + .carousel-item + .carousel-item {
  transform: translateX(80px) translateZ(-100px);
  z-index: 2;
}

.carousel-item.active + .carousel-item + .carousel-item + .carousel-item {
  transform: translateX(0) translateZ(-50px);
  z-index: 3;
}

.carousel-item.active
  .carousel-item
  .carousel-item
  .carousel-item
  .carousel-item {
  transform: translateX(40px);
  z-index: 2;
}

/* 图片轮播的时候，可以通过修改 left 属性的值来实现平移效果 */

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
  position: relative;
  background-color: #563d84;
  width: 30px;
  height: 30px;
  bottom: 7px;
}

.carousel-arrows {
  position: absolute;
  z-index: 3;
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
  top: 60px;
  left: 20px;
}
.carousel-arrow.next {
  position: relative;
  left: 860px;
  top: 60px;
}
.pc-picBorder img {
  z-index: 2;
  position: absolute;
  width: 980px;
  height: 470px;
  bottom: -65px;
  right: 5px;
}
</style>
