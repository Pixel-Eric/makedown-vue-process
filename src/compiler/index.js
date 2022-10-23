import { createApp } from 'vue';
import App from './src/App.vue';
import router from './route';
import './style/tailwind.css';

createApp(App).use(router).mount("#app");