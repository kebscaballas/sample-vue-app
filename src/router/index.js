import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Routertest from '@/Routertest'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
        	path: '/routertest',
        	name: 'Routertest',
        	component: Routertest
        }
    ]
})
