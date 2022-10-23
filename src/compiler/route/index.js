import { createRouter, createWebHistory } from 'vue-router';


let routes = [
    {
        path: './',
        component: () => import('../src/App.vue')
    }
]

let route = createRouter({
    history: createWebHistory(null),
    routes
})


export default route;