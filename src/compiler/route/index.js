import { createRouter, createWebHashHistory } from 'vue-router';
import Doc from '../src/views/Doc.vue';
import Home from '../src/views/Home.vue'


let routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/doc',
    component: Doc
  }
]

let router = createRouter({
  history: createWebHashHistory(null),
  routes
})


export default router;