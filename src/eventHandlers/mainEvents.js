import { updateCurrentDate, showFields, setupFormListeners, setupSignalColor } from '../form.js';
import { gerarOcorrencia, limparForm, copiarForm } from '../components/modules/buttonForm.js';
import { gerarRBXHTML } from '../components/modules/buttonForm.js'; 

export function handleDOMContentLoaded() {
  updateCurrentDate();
  showFields();
  setupFormListeners();
  setupSignalColor();

  document.getElementById("serviceType").addEventListener("change", showFields);
  document.getElementById("gerarOcorrencia").addEventListener("click", gerarOcorrencia);
  document.getElementById("limpaForm").addEventListener("click", limparForm);
  document.getElementById("copiaForm").addEventListener("click", copiarForm);

  var rbxButton = document.getElementById("rbxhtml");
  if (rbxButton) {
    rbxButton.addEventListener("click", function () {
      gerarRBXHTML();
    });
  }
}




document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);