<template>
  <div class="pc-nav-theme">
    <span class="nav-theme">
      <img src="./../assets/HomePage/CharlieLove2.png" />
    </span>
    <img
      src="../assets/HomePage/Page1/多边形1拷贝.png"
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
        v-for="(item, index) in navItems"
        :index="item.nextUrl"
        :key="index"
        @click.native="gotoUrl(item.nextUrl)"
        popper-class="pclass"
        :show-timeout="100"
        :hide-timeout="100"
      >
        <template slot="title">
          <span> {{ item.name }} </span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="childItems in item.childItems"
            :index="childItems.nextUrl"
            :key="childItems.name"
            :route="{path:childItems.nextUrl, query: childItems.query}"
            @click="gotoUrl(childItems.nextUrl, childItems.ref)"
          >
            <span> {{ childItems.name }} </span>
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
          childItems: [
            {
              name: "光夜变奏",
              nextUrl: "/lightandnight",
            },
            {
              name: "灵犀相册",
              nextUrl: "/photoAlbum",
            },
            {
              name: "记忆收藏",
              nextUrl: "/",
              ref: "pcBg4",
            },
          ],
        },
        {
          name: "工作室",
          nextUrl: "/studio/furniture",
          childItems: [
            {
              name: "家具",
              nextUrl: "/studio/furniture",
            },

            {
              name: "闲聊",
              nextUrl: "/studio/chat",
            },
          ],
        },
        {
          name: "甜蜜互动",
          nextUrl: "/wechatmoments",
          childItems: [
            {
              name: "朋友圈",
              nextUrl: "/wechatmoments",
            },
            {
              name: "聊天记录",
              nextUrl: "/chathistory",
            },
            {
              name: "视频通话",
              nextUrl: "/videocallcollection",
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
          nextUrl: "/allGoods",
          childItems: [
            {
              name: "总览",
              nextUrl: "/allGoods",
            },
            {
              name: "徽章类",
              nextUrl: "/badge",
              query: {
                type: "徽章",
              },
            },
            {
              name: "亚克力类",
              nextUrl: "/badge",
              query: {
                type: "亚克力类",
              },
            },
            {
              name: "卡片类",
              nextUrl: "/badge",
              query: {
                type: "纸片类",
              },
            },
            {
              name: "生活用品",
              nextUrl: "/badge",
              query: {
                type: "生活用品类",
              },
            },
            {
              name: "套装",
              nextUrl: "/badge",
              query: {
                type: "礼盒",
              },
            },
          ],
        },
        {
          name: "联系我们",
          nextUrl: "/us",
        },
      ],
    };
  },

  methods: {
    gotoUrl(url, ref) {
      if (ref) {
        this.$router.push({ path: url, query: { ref } });
      } else {
        this.$router.push({ path: url });
      }
    },
  },
};
</script>

<style lang="scss">
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
  position: absolute;
  top: 20px;
  left: 70px;
}
.nav-theme img {
  width: 197px;
  height: 20px;
}

.nav-multipolygon {
  width: 790px;
  height: 33px;
  position: absolute;
  top: 15px;
  left: 300px;
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
  color: #d6b367 !important;
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
  background-color: rgb(103, 77, 151, 0.5) !important;
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

.el-menu--popup {
  position: absolute;
  padding: 0px;
  border-radius: 0px;
  left: 8px;
  min-width: 125px;
  -webkit-box-shadow: 0 0px 0px 0 white !important;
  box-shadow: 0 0px 0px 0 white !important;
}
</style>
