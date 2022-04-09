import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import steupPlugin from './plugins/index';
import './assets/css/base.css';
import './assets/scss/global.scss';
import './utils/permission';

const app = createApp(App);
steupPlugin(app);
app.use(store).use(router).mount('#app');
