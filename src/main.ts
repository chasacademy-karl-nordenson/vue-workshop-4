// main.ts

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // Import Pinia
import { router } from './router';

const pinia = createPinia(); // Create Pinia instance
const app = createApp(App);

app.use(pinia); // Use Pinia
app.use(router);
app.mount('#app');
