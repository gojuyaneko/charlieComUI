<template>
  <div class="pc-nav-theme">
    <span class="nav-theme">流星大道888号</span>
    <img
      src="../assets/HomePage/Page1/multipolygon.png"
      alt=""
      class="nav-multipolygon"
    />
    <el-menu
      text-color="#d6b367 "
      active-text-color="#af9356"
      class="el-menu-demo"
      mode="horizontal"
      style="float: right"
      :default-active="$router.path"
      router
    >
      <el-submenu
        v-for="item in navItems"
        :index="item.nextUrl"
        :key="item.name"
        @click.native="gotoUrl(item.nextUrl)"
        popper-class="pclass"
        :show-timeout=100
        :hide-timeout=100
      >
        <template slot="title">
          <span>
            {{ item.name }}
          </span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="childItems.nextUrl"
            v-for="childItems in item.childItems"
            :key="childItems.name"
          >
            <span>
              {{ childItems.name }}
            </span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "navBar",
  components: {},
  props: {},
  data() {
    return {
      navItems: [
        {
          name: "首页",
          nextUrl: "/",
          childItems: [],
        },
        {
          name: "活动回顾",
          nextUrl: "/review",
          childItems: [
            {
              name: "个人活动",
              nextUrl: "/review/1",
            },
            {
              name: "全体活动",
              nextUrl: "",
            },
          ],
        },
        {
          name: "工作室",
          nextUrl: "/studio",
          childItems: [
            {
              name: "外出",
              nextUrl: "/studio/goout",
            },
            {
              name: "家具",
              nextUrl: "/studio/furniture",
            },
            {
              name: "陪伴",
              nextUrl: "/studio/accompany",
            },
            {
              name: "闲聊",
              nextUrl: "/studio/chat",
            },
            {
              name: "唱片",
              nextUrl: "/studio/record",
            },
          ],
        },
        {
          name: "甜蜜互动",
          nextUrl: "/interaction",
          childItems: [
            {
              name: "朋友圈",
              nextUrl: "",
            },
            {
              name: "聊天记录",
              nextUrl: "/",
            },
            {
              name: "真话冒险",
              nextUrl: "/truthordare",
            },
            {
              name: "织梦迷境",
              nextUrl: "/dream_weaving",
            },
          ],
        },
        {
          name: "官方周边",
          nextUrl: "/goods",
          childItems: [
            {
              name: "徽章类",
              nextUrl: "",
            },
            {
              name: "亚克力类",
              nextUrl: "",
            },
            {
              name: "卡片类",
              nextUrl: "",
            },
            {
              name: "生活用品",
              nextUrl: "",
            },
            {
              name: "套装",
              nextUrl: "",
            },
          ],
        },
        {
          name: "联系我们",
          nextUrl: "/",
          childItems: [],
        },
      ],
    };
  },
  mounted() {},
  methods: {
    gotoUrl(url) {
      if(this.$router.path !=='/'){
        if(url === '/') {
          this.$router.push(url)
        }
      }
    }
  },
};
</script>

<style scope>
/* 导航栏组件及其背景  */
.pc-nav-theme {
  background: url("./../assets/HomePage/Page1/导航.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 65px;
  font-family: "nansongshuju";
}
/* 整体的背景 */
.el-menu {
  background-color: transparent;
  border-bottom: none;
}
/* 导航栏主题跳转至首页 */
.nav-theme {
  height: 65px;
  position: absolute;
  top: 0;
  left: 65px;
  text-align: center;
  line-height: 65px;
  letter-spacing: 10px;
  color: #d6b367;
  font-size: 41px;
  font-family: "nansongshuju";
}

.nav-multipolygon {
  width: 469px;
  height: 70px;
  position: absolute;
  top: 0;
  left: 444px;
}
/* 整体的下划线进行隐藏 */
.el-menu.el-menu--horizontal {
  border-bottom: none;
  background-color: transparent !important;
  display: flex;
  align-items: center;
  height: 100%;
}
/* 点击二级菜单的下划线进行隐藏 */
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: none;
}
/* 首页+联系我们的样式 */
.el-menu-item {
  padding: 0px;
  background-color: transparent;
  text-align: center;
}

.el-menu--collapse .el-submenu,
.el-menu-item {
  margin: 0px !important;
}
/* 首页+联系我们点击时候的效果颜色加深*/
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: transparent;
}
/* 中间部分的样式 */
.el-submenu__title {
  padding: 0px 30px;
  background-color: transparent !important;
  text-align: center;
  font-size: 25px;
}

/* hove和active */
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  width: 135px;
  background: transparent;
  border-bottom: transparent;
  box-shadow: none;
}

.el-menu--popup {
  position: absolute;
  padding: 0px;
  margin: 0px;
  border-radius: 0px;
  left: 15px;
  min-width: 125px;
}

/* 二级菜单 */
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  display: flex;
  padding: 0px !important;
  margin: 0px !important;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 65px;
  background-color: rgb(103, 77, 151, 0.3) !important;
  font-size: 18px;
  font-family: "nansongshuju";
  position: static;
}

/* 二级菜单 展开*/
.el-menu-item-group__title {
  padding: 1.5px !important;
}
/* 消除下拉三角 */
.el-icon-arrow-down:before {
  content: none;
}

.pclass {
  padding: 0px;
  border: none;
  margin: 0px;
  color: #af9356 !important;
  min-width: 65px !important;
}
</style>
