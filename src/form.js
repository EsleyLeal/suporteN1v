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
    updatePPPOE(); // Chamando a função de atualização do PPPOE ao inserir dados no cliente
  });

  patrimonioInput.addEventListener("input", function () {
    updatePPPOE(); // Chamando a função de atualização do PPPOE ao inserir dados no patrimônio
  });
}

export function updatePPPOE() {
  var clienteInput = getElementById("cliente");
  var patrimonioInput = getElementById("PATRIMONIO");
  var pppoeInput = getElementById("PPPOE");

  var clienteValue = clienteInput.value.trim();
  var patrimonioValue = patrimonioInput.value.trim();

  // Remover acentos e caracteres especiais do nome do cliente
  clienteValue = removeSpecialChars(clienteValue);

  if (clienteValue !== '' && patrimonioValue !== '') {
    // Ajustar regex para remover números antes do nome
    var nomeCompleto = clienteValue.replace(/^\d+\s*/, '');

    // Verificar se há "DE", "DO", "DA", etc., e pegar o próximo nome após eles
    var nomeSplit = nomeCompleto.split(/\s+/);
    var primeiroNome = '';
    var segundoNome = '';

    for (var i = 0; i < nomeSplit.length; i++) {
      if (!['DE', 'DO', 'DA', 'DOS', 'DAS'].includes(nomeSplit[i].toUpperCase())) {
        if (primeiroNome === '') {
          primeiroNome = nomeSplit[i];
        } else {
          segundoNome = nomeSplit[i];
          break;
        }
      }
    }

    var pppoeValue = `${primeiroNome.toLowerCase()}.${segundoNome.toLowerCase()}\t${primeiroNome.toLowerCase()}${patrimonioValue}`;

    pppoeInput.value = pppoeValue;
  } else {
    // Se o cliente ou o patrimônio estiverem vazios, limpar o valor do PPPOE
    pppoeInput.value = '';
  }
}


  
// Função para remover acentos e caracteres especiais
function removeSpecialChars(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9\s]/g, '');
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
      if (sinalValue <= -27 || sinalValue >= 27) {
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
