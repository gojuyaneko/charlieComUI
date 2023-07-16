import Vue from "vue";
import Router from "vue-router";
const charlieIndex = () => import("../pages/charlieIndex");
const truthOrDare = () =>
  import("../pages/subitems/sweet/truthOrDare/truthOrDare.vue");
const DreamWeaving = () =>
  import("../pages/subitems/sweet/dreamWeaving/DreamWeaving.vue");
const lightAndNight = () => import("../pages/lightAndNight/lightAndNight.vue");
const allGoods = () => import("../pages/subitems/goods/allGoods.vue");
const badge = () => import("../pages/subitems/goods/badge.vue");
const encounter = () =>
  import("../pages/MemoryCollect/encounter/encounter");
const wechatMoments = () =>
  import("../pages/subitems/sweet/wechatMoments/wechatMoments.vue");
const charlieFurniture = () =>
  import("../pages/subitems/furniture/charlieFurniture.vue");
const wmDetail = () =>
  import("../pages/subitems/sweet/wechatMoments/pages/wmDetail.vue");
const chatHistory = () =>
  import("../pages/subitems/sweet/chatHistory/chatHistory.vue");
const chatDetail = () =>
  import("../pages/subitems/sweet/chatHistory/pages/chatDetail.vue");
const trackDetail = () =>
  import("../pages/MemoryCollect/track/trackDetail.vue");
const profileDetail = () =>
  import("../pages/MemoryCollect/profile/profileDetail.vue");
const videocallCollection = () =>
  import("../pages/subitems/sweet/videocallCollection/videocallCollection.vue");
const aboutCharlie = () => import("../pages/aboutCharlie.vue");
const charaDetail = () => import("../pages/aboutCharlie/charaDetail.vue");
const relationship = () => import("../pages/aboutCharlie/relationship.vue");
const rewindPage = () => import("../pages/MemoryCollect/listen/rewind/rewindPage.vue");
const volumePage = () => import("../pages/MemoryCollect/listen/volume/volumePage.vue");
const photoAlbum = () => import("../pages/photoAlbum/index.vue"); // 灵犀相册
const photoAlbumDetail = () => import("../pages/photoAlbum/detail.vue")

charaDetail;
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: charlieIndex,
    },
    {
      path: "/index.html",
      redirect: "/",
    },
    {
      path: "/truthordare",
      name: "truthordare",
      component: truthOrDare,
    },
    {
      path: "/dream_weaving",
      name: "dream_weaving",
      component: DreamWeaving,
    },
    {
      path: "/lightandnight",
      name: "lightandnight",
      component: lightAndNight,
    },
    {
      path: "/allGoods",
      name: "allGoods",
      component: allGoods,
    },
    {
      path: "/badge",
      name: "allGoods",
      component: badge,
    },
    {
      path: "/encounter",
      name: "encounter",
      component: encounter,
    },
    {
      path: "/wechatmoments",
      name: "wechatmoments",
      component: wechatMoments,
    },
    {
      path: "/wechatmoments/wmdetail",
      name: "wmdetail",
      component: wmDetail,
    },
    {
      path: "/studio/furniture",
      name: "charlieFurniture",
      component: charlieFurniture,
    },
    {
      path: "/chathistory",
      name: "chathistory",
      component: chatHistory,
    },
    {
      path: "/chathistory/chatdetail",
      name: "chatdetail",
      component: chatDetail,
    },
    {
      path: "/videocallcollection",
      name: "videocallcollection",
      component: videocallCollection,
    },
    {
      path: "/trackDetail",
      name: "trackDetail",
      component: trackDetail,
    },
    {
      path: "/profileDetail",
      name: "profileDetail",
      component: profileDetail,
    },

    {
      path: "/aboutCharlie",
      name: "aboutCharlie",
      component: aboutCharlie,
    },

    {
      path: "/charaDetail",
      name: "charaDetail",
      component: charaDetail,
    },
    {
      path: "/relationship",
      name: "relationship",
      component: relationship,
    },
    {
      path: "/rewindPage",
      name: "rewindPage",
      component: rewindPage,
    },
    {
      path: "/volumePage",
      name: "volumePage",
      component: volumePage,
    },
    {
      path: "/photoAlbum",
      name: "photoAlbum",
      component: photoAlbum,
    },
    {
      path: '/photoAlbum/detail',
      name: 'photoAlbumDetail',
      component: photoAlbumDetail,
    },
  ],
});
