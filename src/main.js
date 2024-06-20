// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './FirebaseConfig'; // Importar la configuración de Firebase

createApp(App).use(router).mount('#app');
