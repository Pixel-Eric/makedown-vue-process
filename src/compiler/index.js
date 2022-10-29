import { createApp } from 'vue';
import App from './src/App.vue';
import router from './route';
import './style/tailwind.css';
import { config } from '../package/coverts/init';

console.log(config);
createApp(App).use(router).mount("#app");