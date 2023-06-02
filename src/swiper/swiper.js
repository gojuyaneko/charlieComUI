export class Swiper {
  constructor(options) {
    this.$options = options;
    this.__init();
    this.__timers();
  }

  __init() {
    this.SwiperContent = document.querySelector(
      this.$options.SwiperContent
    ).children;
    this.classList = this.$options.classList;
    this.__move(this.classList);
  }

  __move(list) {
    [...this.SwiperContent].forEach((item, index) => {
      item.setAttribute("class", list[index]);
    });
  }

  __leftMove() {
    this.a = this.classList.pop();
    this.classList.unshift(this.a);
    this.__move(this.classList);
  }

  __timers() {
    setInterval(() => {
      this.__leftMove();
    }, 3000);
  }
}
