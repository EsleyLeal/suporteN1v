// main.js
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { handleDOMContentLoaded } from '../src/eventHandlers/mainEvents.js';

document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

createApp(App).mount('#app');
