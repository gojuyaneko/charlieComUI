import Vue from 'vue';
import Router from 'vue-router';
import charlieIndex from '../pages/charlieIndex'
import truthOrDare from '../pages/subitems/sweet/truthOrDare/truthOrDare.vue'
import DreamWeaving from '../pages/subitems/sweet/dreamWeaving/DreamWeaving.vue'
import lightAndNight from '../pages/lightAndNight/lightAndNight.vue'
import allGoods from '../pages/subitems/goods/allGoods.vue'
import badge from '../pages/subitems/goods/badge.vue'

Vue.use(Router);
export default new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes:[
        {
            path: '/home',
            name: 'home',
            component: charlieIndex
        },
        {
            path: '/',
            redirect:'/home'
        },
        {
            path: '/index.html',
            redirect:'/home'
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