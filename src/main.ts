import { createApp } from 'vue';

import App from './App.vue';

import './assets/main.css';
import { piniaPlugin } from './plugins/pinia';
import { vuetifyPlugin } from './plugins/vuetify';
import { routerPlugin } from './plugins/router';

const app = createApp(App);

app.use(piniaPlugin);
app.use(vuetifyPlugin);
app.use(routerPlugin);

app.mount('#app');
