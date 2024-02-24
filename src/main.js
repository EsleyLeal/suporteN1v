// main.js
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { handleDOMContentLoaded } from '../src/eventHandlers/mainEvents.js';

document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
document.body.style.zoom = "87%"




createApp(App).mount('#app');
