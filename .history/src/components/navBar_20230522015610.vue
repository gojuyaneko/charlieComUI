<template>
  <div>
   <span class="nav-theme">
    <svg 
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     width="321px" height="47px">
    <defs>
    <linearGradient id="PSgrad_0" x1="3.49%" x2="0%" y1="99.939%" y2="0%">
      <stop offset="0%" stop-color="rgb(255,252,224)" stop-opacity="0.93" />
      <stop offset="23%" stop-color="rgb(226,211,166)" stop-opacity="0.93" />
      <stop offset="53%" stop-color="rgb(196,169,108)" stop-opacity="0.93" />
      <stop offset="99%" stop-color="rgb(255,248,220)" stop-opacity="0.93" />
    </linearGradient>

    </defs>
    <text kerning="auto" font-family="Adobe Heiti Std" fill="rgb(0, 0, 0)" transform="matrix( 1.56760990619659, -3.48079322297988e-16, 3.48079322297988e-16, 1.56760990619659,-7.40042661309241, 4.29207581937318)" font-size="30.811px"><tspan font-size="30.811px" font-family="nansongshuju" fill="#D5B265">&#27969;&#26143;&#22823;</tspan><tspan font-size="30.811px" font-family="nansongshuju" fill="#D5B265">&#36947;&#32;&#56;</tspan><tspan font-size="30.811px" font-family="nansongshuju" fill="#D5B265">&#56;</tspan><tspan font-size="30.811px" font-family="nansongshuju" fill="#D5B265">&#56;&#21495;</tspan></text>
    <text kerning="auto" font-family="Adobe Heiti Std" fill="url(#PSgrad_0)" transform="matrix( 1.56760990619659, -3.48079322297988e-16, 3.48079322297988e-16, 1.56760990619659,-7.40042661309241, 4.29207581937318)" font-size="30.811px"><tspan font-size="30.811px" font-family="nansongshuju" fill="#D5B265">&#27969;&#26143;&#22823;</tspan><tspan font-size="30.811px" font-family="nansongshuju" fill="#D5B265">&#36947;&#32;&#56;</tspan><tspan font-size="30.811px" font-family="nansongshuju" fill="#D5B265">&#56;</tspan><tspan font-size="30.811px" font-family="nansongshuju" fill="#D5B265">&#56;&#21495;</tspan></text>
    </svg>
   </span>
    <el-menu
      text-color="#d6b367 "
      active-text-color="#af9356"
      class="el-menu-demo"
      mode="horizontal"
      style="float: right"
      :default-active="path"
      router
    >
      <el-submenu
        v-for="item in navItems"
        :index="`/${item.nextUrl}`"
        :key="item.name"
        popper-class="pclass"
        show-timeout="100"
        hide-timeout="100"
      >
        <template slot="title">
          <span>{{ item.name }} </span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="`/${childItems.nextUrl}`"
            v-for="childItems in item.childItems"
            :key="childItems.name"
          >
            <span> {{ childItems.name }}</span>
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
              nextUrl: "/1",
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
              nextUrl: "",
            },
            {
              name: "家具",
              nextUrl: "",
            },
            {
              name: "陪伴",
              nextUrl: "",
            },
            {
              name: "闲聊",
              nextUrl: "",
            },
            {
              name: "唱片",
              nextUrl: "",
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
              nextUrl: "",
            },
            {
              name: "真话冒险",
              nextUrl: "",
            },
            {
              name: "织梦迷境",
              nextUrl: "",
            },
          ],
        },
        {
          name: "官方周边",
          nextUrl: "/1",
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
  methods: {},
};
</script>

<style scope>
/* 整体的背景 */
.el-menu {
  background-color: transparent;
  border-bottom: none;
}
/* 导航栏主题跳转至首页 */
.nav-theme {
  height: 65px;
  position:absolute;
  top: 0;
  left: 10px;
  text-align: center;
  color: #d6b367;
  padding: 0px 30px;
  font-size: 31px;
  font-family: "nansongshuju";
}

/* 整体的下划线进行隐藏 */
.el-menu.el-menu--horizontal {
  border-bottom: none;
  background-color: transparent !important;
}
/* 点击二级菜单的下划线进行隐藏 */
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: none;
}
/* 首页+联系我们的样式 */
.el-menu-item {
  padding: 0px 30px;
  background-color: transparent;
  text-align: center;
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
}


/* hove和active */
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  width: 120px;
  background: transparent !important ;
  border-bottom: transparent;
}

/* 二级菜单 */
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 65px;
  background-color: rgb(103, 77, 151, 0.3) !important;
}
/* 消除下拉三角 */
.el-icon-arrow-down:before {
  content: none;
}

.pclass {
  padding: 0px;
  background: transparent !important;
  color: #af9356 !important;
}
</style>
