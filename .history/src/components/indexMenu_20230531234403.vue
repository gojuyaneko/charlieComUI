<template>
  <div data-device="pc">
    <div>
      <ul class="pc-menu">
        <li
          v-for="(item, index) in navItems"
          :key="index"
          @click="goTo(item.nextUrl)"
          @mouseover="changeColor"
          :style="{ paddingBottom: boxPadding(index) }"
        >
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- <div data-device='mobile' style="display:none;">移动端标题适配暂时搁置</div> -->
</template>

<script>
export default {
  name: "indexMenu",
  components: {},
  props: {},
  data() {
    return {
      isHover: false,
      navItems: [
        {
          name: "光夜变奏",
          nextUrl: "/lightandnight",
        },
        {
          name: "灵犀相册",
          nextUrl: "/memory",
        },
        {
          name: "记忆收藏",
          nextUrl: "/listen",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    goTo(url) {
      this.$router.push(url);
    },
    changeColor() {
      const lis = document.querySelectorAll("li");
      for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener("mouseover", function () {
          this.classList.add("active");
          this.style.color = " #af9356";
        });
        lis[i].addEventListener("mouseout", function () {
          this.classList.remove("active");
          this.style.color = "#d6b367";
        });
      }
    },
    boxPadding(index) {
      if (index === 2) {
        return "0px";
      } else {
        return "30px";
      }
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  margin: 0px;
  padding: 0px;
}

.pc-menu {
  position: relative;
  top: 100px;
  left: 300px;
  width: 180px;
  padding-left: 150px;
  padding-right: 30px;
  border-right: #d6b367 solid 3px;
  font-size: 35px;
  font-family: "nansongshuju";
  text-align: left;
  color: #d6b367;
  font-weight: 400;
}
</style>
