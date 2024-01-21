import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { updateCurrentDate, showFields, gerarOcorrencia, limparForm, copiarForm } from './form.js';

document.addEventListener("DOMContentLoaded", function () {

    updateCurrentDate();
  
    document.getElementById("serviceType").addEventListener("change", showFields);
  
    document.getElementById("gerarOcorrencia").addEventListener("click", function () {
      gerarOcorrencia();
    });
  
    document.getElementById("limpaForm").addEventListener("click", function () {
      limparForm();
    });
  
    document.getElementById("copiaForm").addEventListener("click", function () {
      copiarForm();
    });
  });
  
createApp(App).mount('#app')

