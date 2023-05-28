<template>
  <div data-device="pc">
    <div>
      <ul class="pc-menu">
        <li
          v-for="(item, index) in navItems"
          :key="item"
          @click="goTo(item.nextUrl)"
          @mouseover="hover"
          :style="{ paddingBottom: boxPadding(index) }"
        >
          <span>{{ item.name }}</span>
          <ul class="pc-submenu">
            <li
              v-for="childitem in item.childItems"
              :key="childitem"
              @click="goTo(childitem.nextUrl)"
            >
              <span>{{ childitem.name }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  <!-- <div data-device='mobile' style="display:none;">移动端标题适配暂时搁置</div> -->
</template>

<script>
export default {
  name: "charlieMenu",
  components: {},
  props: {},
  data() {
    return {
      navItems: [
        {
          id:'0',
          name: "< 邂逅",
          nextUrl: "/encounter",
          childItems: [
            {
              name: '第一章/ "援塞"之行',
              nextUrl: "",
            },
            {
              name: "第二章/ 无名侵蚀",
              nextUrl: "",
            },
            {
              name: "第三章/ 真相大白",
              nextUrl: "",
            },
          ],
        },
        {
          id:'1',
          name: "< 记忆",
          nextUrl: "/memory",
          childItems: [
            {
              name: "约会",
              nextUrl: "/date",
            },
            {
              name: "胶片",
              nextUrl: "film",
            },
            {
              name: "轨迹",
              nextUrl: "/track",
            },
            {
              name: "侧影",
              nextUrl: "/profile",
            },
          ],
        },
        {
          id:'2',
          name: "< 倾听",
          nextUrl: "/listen",
          childItems: [
            {
              name: "余音",
              nextUrl: "",
            },
            {
              name: "倒带",
              nextUrl: "rewind",
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  methods: {
    goTo(url) {
      this.$router.push(url);
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
  padding-right: 50px;
  border-right: #d6b367 solid 3px;
  font-size: 35px;
  font-family: "nansongshuju";
  text-align: right;
  color: #d6b367;
}

.pc-menu li .pc-submenu {
  display: none;
  position: absolute;
}

.pc-menu li span:hover {
  color: #af9356;
}

.pc-menu li .pc-submenu {
  display: none; /*或者 visibility:hidden;*/
}

.pc-menu li:hover .pc-submenu {
  display: block; /*或者 visibility:visible;*/
  position: absolute;
  // background-color: orange;
  width: max-content;
  border-right: #d6b367 solid 3px;
  padding-right: 30px;
  color: #d6b367;
  font-size: 35px;
  font-family: "nansongshuju";
  text-align: right;
}
</style>
