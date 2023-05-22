import Vue from 'vue';
import Router from 'vue-router';
import charlieIndex from '../pages/charlieIndex'
import truthOrDare from '../pages/subitems/sweet/truthOrDare/truthOrDare.vue'

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
            path:'truthordare',
            name:'truthordare',
            component: truthOrDare
        }
    ]
})