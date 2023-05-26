import Vue from 'vue';
import Router from 'vue-router';
const charlieIndex = () => import('../pages/charlieIndex') 
const truthOrDare = () => import('../pages/subitems/sweet/truthOrDare/truthOrDare.vue')
const DreamWeaving = () => import('../pages/subitems/sweet/dreamWeaving/DreamWeaving.vue')
const lightAndNight = () => import('../pages/lightAndNight/lightAndNight.vue')

Vue.use(Router);
export default new Router({
    mode:'history',
    routes:[
        {
            path: '/',
            name: 'index',
            component: charlieIndex
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
        }
    ]
})