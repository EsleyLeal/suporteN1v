// eventHandlers.js
import { updateCurrentDate, showFields } from '../form.js';
import { gerarOcorrencia, limparForm, copiarForm } from '../components/modules/buttonForm.js';
import { gerarRBXHTML } from '../components/modules/buttonForm.js'; 

export function handleDOMContentLoaded() {
  updateCurrentDate();
  showFields();

  document.getElementById("serviceType").addEventListener("change", showFields);
  document.getElementById("gerarOcorrencia").addEventListener("click", gerarOcorrencia);
  document.getElementById("limpaForm").addEventListener("click", limparForm);
  document.getElementById("copiaForm").addEventListener("click", copiarForm);
}

document.addEventListener("DOMContentLoaded", function () {
  handleDOMContentLoaded();

  var rbxButton = document.getElementById("rbxhtml");
  if (rbxButton) {
    rbxButton.addEventListener("click", function () {
      gerarRBXHTML();
    });
  }
});
