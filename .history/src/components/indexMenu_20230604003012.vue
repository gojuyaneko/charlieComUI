<template>
  <div data-device="pc">
    <div>
      <ul class="pc-menu">
        <li
          v-for="(section, index) in sections"
          :key="section.ref"
          @mouseover="changeColor"
          :style="{ paddingBottom: boxPadding(index) }"
        >
          <a @click="jump(section)">{{ section.name }}</a>
        </li>
        <img src="@/assets/HomePage/star.png" />
      </ul>
    </div>
  </div>

  <!-- <div data-device='mobile' style="display:none;">移动端标题适配暂时搁置</div> -->
</template>

<script>
export default {
  name: "indexMenu",
  components: {},
  props: {
    sections: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isHover: false,
    };
  },
  mounted() {},
  methods: {
    jump(section) {
      this.$parent.$refs[section.ref].scrollIntoView({
        behavior: "smooth",
      });
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
  cursor: pointer;
}
ul img {
  position: absolute;
  width: 35px;
  height: 30px;
  top: 42%;
  left: 345px;
}
</style>
