import { createRouter, createWebHashHistory } from 'vue-router';
import Doc from '../src/views/Doc.vue';


let routes = [
    {
        path: '/',
        component: Doc
    }
]

let router = createRouter({
    history: createWebHashHistory(null),
    routes
})


export default router;