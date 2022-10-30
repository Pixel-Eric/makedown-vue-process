import { createApp } from 'vue';
import App from './src/App.vue';
import router from './route';
import './style/tailwind.css';
import './style/style.less';

import Card from './src/components/Card.vue';
import TreeList from './src/components/TreeList.vue';
let app = createApp(App);
app.use(router);

app.component('card', Card);
app.component('tree-list', TreeList);

app.mount("#app");