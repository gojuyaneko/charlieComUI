<template>
  <div data-device="pc">
    <div>
      <ul class="pc-menu">
        <li
          v-for="(item, index) in navItems"
          :key="index"
          @click="goTo(item.nextUrl)"
          :style="{ paddingBottom: boxPadding1(index) }"
        >
          <span class="menu-icon">
            <img src="@/assets/HomePage/star.png" />
          </span>
          <span>{{ item.name }}</span>

          <ul class="pc-submenu">
            <li
              v-for="(childitem, index) in item.childItems"
              :key="index"
              @click="($event) => goTo(childitem.nextUrl, item.name, index)"
              :style="{
                paddingBottom:
                  index === item.childItems.length - 1 ? boxPadding : '40px',
              }"
            >
              <span class="submenu-icon">
                <img src="@/assets/HomePage/star.png" />
              </span>
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
          name: "< 邂逅",
          childItems: [
            {
              name: '第一章/ "援塞"之行',
              nextUrl: "/encounter",
            },
            {
              name: "第二章/ 无名侵蚀",
              nextUrl: "/encounter",
            },
            {
              name: "第三章/ 真相大白",
              nextUrl: "/encounter",
            },
          ],
        },
        {
          name: "< 记忆",
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
              nextUrl: "/trackDetail",
            },
            {
              name: "侧影",
              nextUrl: "/profileDetail",
            },
          ],
        },
        {
          name: "< 倾听",
          childItems: [
            {
              name: "余音",
              nextUrl: "/volumePage",
            },
            {
              name: "倒带",
              nextUrl: "/rewindPage",
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  methods: {
    goTo(url, n, i) {
      let name = n === undefined ? "others" : n;
      let index = i === undefined ? -1 : i;
      if (name === "< 邂逅") {
        this.$router.push({
          path: url,
          query: { encounterIndex: index },
        });
      } else {
        this.$router.push(url);
      }
    },
    boxPadding1(index) {
      if (index === 2) {
        return "0px";
      } else {
        return "30px";
      }
    },

    boxPadding() {
      return "0px";
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
  cursor: pointer;
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
  right: 60%;
  transform: translate(0, -60%);
  // background-color: orange;
  width: max-content;
  border-right: #d6b367 solid 3px;
  padding-right: 35px;
  color: #d6b367;
  font-size: 35px;
  font-family: "nansongshuju";
  text-align: right;
}
.pc-submenu img {
  position: absolute;
  width: 30px;
  height: 25px;
  top: 43%;
  right: -15%;
}
.pc-menu span img {
  position: absolute;
  width: 35px;
  height: 30px;
  top: 40%;
  right: -5%;
}
.pc-submenu ul img {
  position: absolute;
  width: 35px;
  height: 30px;
  top: 40%;
  right: -5%;
}
.menu-icon {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px; /* 根据需要调整图片与文字之间的间距 */
}

.submenu-icon {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px; /* 根据需要调整图片与文字之间的间距 */
}
.pc-submenu .submenu-icon img {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px; /* 根据需要调整图片与文字之间的间距 */
  position: absolute; /* 添加绝对定位 */
  top: 50%; /* 垂直居中 */
  right: -27px; /* 调整距离右侧的位置 */
  transform: translateY(-50%); /* 垂直居中 */
}

.pc-submenu .submenu-icon img {
  width: 35px;
  height: 30px;
}
</style>
