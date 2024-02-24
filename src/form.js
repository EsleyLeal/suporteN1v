import { getElementById, addClass, removeClass } from './components/modules/domManipulation.js';

export function updateCurrentDate() {
  var currentDateElement = getElementById("currentDate");
  var currentDate = new Date();
  var formattedDate = currentDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  currentDateElement.value = formattedDate;
}

export function showFields() {
  var serviceType = getElementById('serviceType').value;
  var allFields = document.querySelectorAll('.customFields');

  allFields.forEach(function (field) {
    addClass(field, 'hidden');
  });

  var specificFields = getElementById(serviceType + 'Fields');
  if (specificFields) {
    removeClass(specificFields, 'hidden');
  }
}

export function setupFormListeners() {
  var clienteInput = getElementById("cliente");
  var patrimonioInput = getElementById("PATRIMONIO");

  clienteInput.addEventListener("input", function () {

    getElementById("PPPOE").value = '';
  });

  patrimonioInput.addEventListener("input", function () {

    updatePPPOE();
  });
}

export function updatePPPOE() {
  var clienteInput = getElementById("cliente");
  var patrimonioInput = getElementById("PATRIMONIO");
  var pppoeInput = getElementById("PPPOE");

  var clienteValue = clienteInput.value.trim();
  var patrimonioValue = patrimonioInput.value.trim();


  clienteValue = removePrefix(clienteValue);

  if (clienteValue !== '' && patrimonioValue !== '') {

    var nomeCompleto = clienteValue.split(/\s+/);

    var primeiroNome = nomeCompleto[0]; 
    var segundoNome = nomeCompleto[1];

    var pppoeValue = `${primeiroNome.toLowerCase()}.${segundoNome.toLowerCase()}\t${primeiroNome.toLowerCase()}${patrimonioValue}`;

    pppoeInput.value = pppoeValue;
  }
}

function removePrefix(cliente) {

  var index = cliente.lastIndexOf('-');

  if (index !== -1) {
    return cliente.slice(index + 1);
  }

  return cliente;
}


export function setupSignalColor() {
  var sinalOnuInput = getElementById("SINAL_ONU");

  // Função para aplicar a lógica de cores
  function applyColorLogic() {
      var sinalText = sinalOnuInput.value.trim();

      // Ajuste da expressão regular para tratar espaços entre o sinal de menos e o número
      var match = sinalText.match(/([-+]?\d*\.\d+|\d+|-\s*\d*\.\d+|-\d+)/);

      if (match) {
          var sinalValue = parseFloat(match[0]);

          // Atualização da condição para considerar -27 como vermelho
          if (sinalValue <= -27.0) {
              addClass(sinalOnuInput, 'red');
              removeClass(sinalOnuInput, 'green');
          } else {
              addClass(sinalOnuInput, 'green');
              removeClass(sinalOnuInput, 'red');
          }
      } else {
          removeClass(sinalOnuInput, 'green');
          removeClass(sinalOnuInput, 'red');
      }
  }

  // Adiciona o evento input para lidar com alterações em tempo real
  sinalOnuInput.addEventListener("input", applyColorLogic);

  // Também chama a lógica de cores no carregamento da página
  applyColorLogic();
}