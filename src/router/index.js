import Vue from 'vue';
import Router from 'vue-router';
import charlieIndex from '../pages/charlieIndex'
import charlieArchive from '@/pages/navItems/charlieArchive'
import activitiesReview from '@/pages/navItems/activitiesReview'
import sweetInteraction from '@/pages/navItems/sweetInteraction'
import charlieStudio from '@/pages/navItems/charlieStudio'
import mainLine from '@/pages/asideItems/mainLine'
import tacitAlbum from '@/pages/asideItems/tacitAlbum'
import officialGoods from '@/pages/asideItems/officialGoods'

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
            path: '/archive',
            name: 'archive',
            component: charlieArchive
        },
        {
            path: '/review',
            name: 'review',
            component: activitiesReview
        },
        {
            path: '/interaction',
            name: 'interaction',
            component: sweetInteraction
        },
        {
            path: '/studio',
            name: 'studio',
            component: charlieStudio
        },
        {
            path: '/mainline',
            name: 'mainline',
            component: mainLine
        },
        {
            path: '/album',
            name: 'album',
            component: tacitAlbum
        },
        {
            path: '/goods',
            name: 'goods',
            component: officialGoods
        }

    ]
})