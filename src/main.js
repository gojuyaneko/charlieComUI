import Vue from "vue";
import App from "./App.vue";
import store from "./store"; //vuex
import router from "./router"; //router
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import navBar from "./components/navBar.vue";
import charlieMenu from "./components/charlieMenu.vue";
import indexMenu from "./components/indexMenu.vue";
import indexCarousel from "./components/charliePic.vue";

import "lib-flexible";
Vue.config.productionTip = false;

import {
  Pagination,
  Dialog,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Button,
  ButtonGroup,
  Collapse,
  CollapseItem,
  Image,
  Table,
  TableColumn,
} from "element-ui";

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Image);
Vue.use(Table);
Vue.use(TableColumn);

// Vue.use(ElementUI);
Vue.component("myNavbar", navBar);
Vue.component("myMenu", charlieMenu);
Vue.component("myIndex", indexMenu);
Vue.component("myPic", indexCarousel);

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
