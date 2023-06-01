import Vue from "vue";
import App from "./App.vue";
import store from "./store"; //vuex
import router from "./router"; //router
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import navBar from "./components/navBar.vue";
import charlieMenu from "./components/charlieMenu.vue";
import indexMenu from "./components/indexMenu.vue";
import indexCarousel from "./components/charliePic.vue";

import "lib-flexible";
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.component("myNavbar", navBar);
Vue.component("myMenu", charlieMenu);
Vue.component("myIndex", indexMenu);
Vue.component("myPic", indexCarousel);

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
