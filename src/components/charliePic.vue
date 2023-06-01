<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div
        v-for="(item, index) in list"
        :key="index"
        :class="['carousel-item', { active: index === currentIndex }]"
      >
        <img :src="item" alt="" />
      </div>
    </div>
    <a class="carousel-control-prev" href="#" role="button" @click="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only"><img src="@/assets/HomePage/pre.png" /> </span>
    </a>
    <a class="carousel-control-next" href="#" role="button" @click="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only"><img src="@/assets/HomePage/next.png" /> </span>
    </a>
    <div class="carousel-indicators">
      <span
        v-for="(item, index) in list"
        :key="index"
        :class="['carousel-indicator', { active: index === currentIndex }]"
        @click="goTo(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexCarousel",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  mounted() {
    this.startAutoPlay();
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
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.list.length;
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.list.length) % this.list.length;
    },
    goTo(index) {
      this.currentIndex = index;
    },
  },
  watch: {
    currentIndex() {
      this.stopAutoPlay();
      this.startAutoPlay();
    },
  },
};
</script>

<style>
.carousel {
  position: relative;
  left: 100px;
  top: 100px;
  width: 1000px;
  height: 500px;
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-item {
  position: absolute;
  background: transparent;
  top: 0;
  left: 0;
  width: 960px;
  height: 450px;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel-item.active {
  opacity: 1;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 40%;
  /* transform: translateX(60%); */
}

.carousel-indicator {
  display: inline-block;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: #d6b367;
  margin-right: 40px;
  cursor: pointer;
}

.carousel-indicator.active {
  background-color: #563d84;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: none;
  /* background-color: red; */
  color: #d6b367;
  /* text-align: center; */
  line-height: 40px;
  cursor: pointer;
}

.carousel-control-prev {
  left: 20px;
}

.carousel-control-next {
  right: 20px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

/* .carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath d='M6 0L2 4l4 4H4v-.5L0 4l4-4v.5h2z'/%3E%3C/svg%3E");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath d='M2 0h2.5v4.5h-.5L2 3.21 1.5 3.7l2.15 2.15-.7.71L.79 3.5l2.15-2.15L2 1.79V0z'/%3E%3C/svg%3E");
} */

.sr-only {
  font-size: 80px;
}
</style>
