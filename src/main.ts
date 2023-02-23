import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import './assets/main.css'
import { piniaPlugin } from './plugins/pinia'
import { vuetifyPlugin } from './plugins/vuetify'

const app = createApp(App);

app.use(piniaPlugin);
app.use(vuetifyPlugin);

app.mount('#app');
