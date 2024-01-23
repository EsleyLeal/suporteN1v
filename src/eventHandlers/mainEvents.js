// eventHandlers.js
import { updateCurrentDate, showFields } from '../form.js';
import { gerarOcorrencia, limparForm, copiarForm } from '../components/modules/buttonForm.js';
import { gerarRBXHTML } from '../components/modules/buttonForm.js'; // Importe a função gerarRBXHTML

export function handleDOMContentLoaded() {
  updateCurrentDate();

  document.getElementById("serviceType").addEventListener("change", showFields);
  document.getElementById("gerarOcorrencia").addEventListener("click", gerarOcorrencia);
  document.getElementById("limpaForm").addEventListener("click", limparForm);
  document.getElementById("copiaForm").addEventListener("click", copiarForm);
}

document.addEventListener("DOMContentLoaded", function () {
  handleDOMContentLoaded();

  // Adicione o evento de clique para o botão "rbxhtml"
  var rbxButton = document.getElementById("rbxhtml");
  if (rbxButton) {
    rbxButton.addEventListener("click", function () {
      gerarRBXHTML();
    });
  }
});



