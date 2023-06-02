import Vue from 'vue';
import Router from 'vue-router';
const charlieIndex = () => import('../pages/charlieIndex') 
const truthOrDare = () => import('../pages/subitems/sweet/truthOrDare/truthOrDare.vue')
const DreamWeaving = () => import('../pages/subitems/sweet/dreamWeaving/DreamWeaving.vue')
const lightAndNight = () => import('../pages/lightAndNight/lightAndNight.vue')
const allGoods = () => import('../pages/subitems/goods/allGoods.vue')
const badge = () => import('../pages/subitems/goods/badge.vue')

Vue.use(Router);
export default new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'home',
            component: charlieIndex
        },
        {
            path: '/index.html',
            redirect:'/'
        },
        {
            path:'/truthordare',
            name:'truthordare',
            component: truthOrDare
        },
        {
            path:'/dream_weaving',
            name:'dream_weaving',
            component: DreamWeaving
        },
        {
            path:'/lightandnight',
            name:'lightandnight',
            component: lightAndNight
        },
        {
            path:'/allGoods',
            name:'allGoods',
            component: allGoods
        },
        {
            path:'/badge',
            name:'allGoods',
            component: badge
        },
    ]
})