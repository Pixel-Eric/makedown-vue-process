import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

let routes = [
  {
    path: '/',
    component: () => import('../src/views/Home.vue'),
  },
  {
    path: '/:title',
    component: () => import('../src/views/Page.vue'),
    props: true
  },
]

let router = createRouter({
  history: createWebHashHistory(null),
  routes
})


export default router;