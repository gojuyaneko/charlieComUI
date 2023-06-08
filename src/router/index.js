import Vue from 'vue';
import Router from 'vue-router';
const charlieIndex = () => import('../pages/charlieIndex')
const truthOrDare = () => import('../pages/subitems/sweet/truthOrDare/truthOrDare.vue')
const DreamWeaving = () => import('../pages/subitems/sweet/dreamWeaving/DreamWeaving.vue')
const lightAndNight = () => import('../pages/lightAndNight/lightAndNight.vue')
const allGoods = () => import('../pages/subitems/goods/allGoods.vue')
const badge = () => import('../pages/subitems/goods/badge.vue')
const rescueTrip = () => import('../pages/MemoryCollect/encounter/rescueTrip.vue')
const unknownErosion = () => import('../pages/MemoryCollect/encounter/unknownErosion.vue')
const truthCameout = () => import('../pages/MemoryCollect/encounter/truthCameout.vue')
const wechatMoments = () => import('../pages/subitems/sweet/wechatMoments/wechatMoments.vue')
const charlieFurniture = () => import('../pages/subitems/furniture/charlieFurniture.vue')
const wmDetail = () => import('../pages/subitems/sweet/wechatMoments/pages/wmDetail.vue')
const chatHistory = () => import('../pages/subitems/sweet/chatHistory/chatHistory.vue')
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: charlieIndex
    },
    {
      path: '/index.html',
      redirect: '/'
    },
    {
      path: '/truthordare',
      name: 'truthordare',
      component: truthOrDare
    },
    {
      path: '/dream_weaving',
      name: 'dream_weaving',
      component: DreamWeaving
    },
    {
      path: '/lightandnight',
      name: 'lightandnight',
      component: lightAndNight
    },
    {
      path: '/allGoods',
      name: 'allGoods',
      component: allGoods
    },
    {
      path: '/badge',
      name: 'allGoods',
      component: badge
    },
    {
      path: '/rescueTrip',
      name: 'rescueTrip',
      component: rescueTrip
    },
    {
      path: '/unknownErosion',
      name: 'unknownErosion',
      component: unknownErosion
    },
    {
      path: '/truthCameout',
      name: 'truthCameout',
      component: truthCameout
    },
    {
      path: '/wechatmoments',
      name: 'wechatmoments',
      component: wechatMoments,
    },
    {
      path:'/wechatmoments/wmdetail',
      name:'wmdetail',
      component:wmDetail
    },
    {
      path: '/studio/furniture',
      name: 'charlieFurniture',
      component: charlieFurniture
    },
    {
        path: '/chathistory',
        name: 'chathistory',
        component: chatHistory
    }
  ]
})