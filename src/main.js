import Vue from "vue";
import App from "./App.vue";
import store from "./store"; //vuex
import router from "./router"; //router
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import navBar from "./components/navBar.vue";
import 'lib-flexible'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.config.productionTip = false;


Vue.use(ElementUI);
Vue.component("myNavbar", navBar);

zhLocale.el.pagination = {
  pagesize: '期',
  goto: '前往',
  pageClassifier: '期'
}

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
