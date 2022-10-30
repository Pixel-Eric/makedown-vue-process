import { createApp } from 'vue';
import App from './src/App.vue';
import Card from './src/components/Card.vue';
import router from './route';
import './style/tailwind.css';
import './style/style.less';
let app = createApp(App);
app.use(router);

app.component('card', Card);

app.mount("#app");