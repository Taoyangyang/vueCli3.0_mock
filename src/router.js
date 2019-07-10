import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        { path: '/login', name: 'login', component: () => import('./views/login.vue') },
        { path: '/vue-draggable', name: 'vue-draggable', component: () => import('./views/vue-draggable.vue') },
        { path: '/vue-draggable-twoList', name: 'vue-draggable-twoList', component: () => import('./views/vue-draggable-twoList.vue') },
        { path: '/div-dragEagle', name: 'div-dragEagle', component: () => import('./views/div-dragEagle.vue') },
        { path: '/attrs_listeners', name: 'attrs_listeners', component: () => import('./views/attrs_listeners/parent.vue') },
    ]
})
