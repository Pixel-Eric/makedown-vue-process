import { createRouter, createWebHashHistory } from 'vue-router';
import Doc from '../src/views/Doc.vue';


let routes = [
    {
        path:'/',
        redirect: 'Doc'
    },
    {
        path: '/Doc',
        redirect: '/'
        component: Doc,
        children: [
            $children
        ]
    }
]

let router = createRouter({
    history: createWebHashHistory(null),
    routes
})


export default router;