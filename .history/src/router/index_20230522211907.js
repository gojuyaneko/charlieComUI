import Vue from 'vue';
import Router from 'vue-router';
import charlieIndex from '../pages/charlieIndex'

Vue.use(Router);
export default new Router({
    mode:'history',
    routes:[
        {
            path: '/',
            name: 'index',
            component: charlieIndex
        }
    ]
})