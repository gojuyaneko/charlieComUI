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
import clothesSlider from "./components/clothes.vue";
import moreRelation from "./pages/aboutCharlie/chara.vue";
import relationShip from "./pages/aboutCharlie/relationship.vue";
import indexFooter from "./components/footer.vue";

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
  Select,
  Option,
  OptionGroup,
  Breadcrumb,
  BreadcrumbItem,
  Loading,
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
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Loading.directive);
// Vue.use(ElementUI);
Vue.prototype.$loading = Loading.service;
Vue.component("myNavbar", navBar);
Vue.component("myMenu", charlieMenu);
Vue.component("myIndex", indexMenu);
Vue.component("myPic", indexCarousel);
Vue.component("mySlider", clothesSlider);
Vue.component("myRelation", moreRelation);
Vue.component("myShip", relationShip);
Vue.component("myFooter", indexFooter);

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
