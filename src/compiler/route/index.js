import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Doc from '../src/views/Doc.vue';
import Home from '../src/views/Home.vue';
import Content from '../src/components/Content.vue';

let routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/doc',
    component: Doc,
    children: [
      {
        path: '/:title',
        props: true,
        component: Content
      }
    ]
  }
]

let router = createRouter({
  history: createWebHashHistory(null),
  routes
})


export default router;