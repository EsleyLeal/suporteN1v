import { getElementById, createElement, appendToDOM, removeFromDOM } from './domManipulation.js';


window.gerarSenhaAleatoria = function () {
  var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=";
  var senhaGerada = '';

  for (var i = 0; i < 11; i++) {
      var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      senhaGerada += caracteres.charAt(indiceAleatorio);
  }

  document.getElementById("senha SIPulse").value = senhaGerada;
};


export function gerarOcorrencia() {
  var currentDate = getElementById("currentDate").value;
  var serviceType = getElementById("serviceType").value;

  var specificFields = getElementById(serviceType + "Fields");
  var specificFieldInputs = specificFields.querySelectorAll("input, textarea");

  var occurrenceInfo = "DATA ATUAL: " + currentDate + "\n \n" +
                       serviceType + " REALIZADA COM SUCESSO!" + "\n \n";

  specificFieldInputs.forEach(function (input) {
    var label = input.id.toUpperCase() + " - ";
    var labelWithSpaces = label + " ".repeat(Math.max(0, 20 - label.length));
    
    if (input.tagName.toLowerCase() === 'textarea') {
      occurrenceInfo += labelWithSpaces + "\n" + input.value.trim().replace(/\n/g, '\n' + ' '.repeat(0)) + "\n";
    } else {
      occurrenceInfo += labelWithSpaces + input.value + "\n";
    }
  });

  var ocorrenciaDiv = getElementById("ocorrenciaDiv");
  ocorrenciaDiv.textContent = occurrenceInfo;
}


export function limparForm() {
  var confirmacao = confirm("Tem certeza que deseja limpar os campos?");

  if (confirmacao) {
    var allFields = document.querySelectorAll('.customFields input');
    allFields.forEach(function (input) {
      input.value = '';
    });

    var ocorrenciaDiv = getElementById("ocorrenciaDiv");
    ocorrenciaDiv.textContent = '';
  }
}

export function copiarForm() {
  var ocorrenciaDiv = getElementById("ocorrenciaDiv");
  var occurrenceText = ocorrenciaDiv.textContent;

  var textarea = createElement('textarea');
  textarea.value = occurrenceText;
  appendToDOM(document.body, textarea);


  textarea.select();
  textarea.setSelectionRange(0, 99999);

  try {

    document.execCommand('copy');
    console.log('Texto copiado para a área de transferência');
  } catch (err) {
    console.error('Erro ao copiar o texto para a área de transferência', err);
  }

  removeFromDOM(textarea);
}

export function gerarRBXHTML() {
  
  gerarOcorrencia();

  
  var occurrenceText = document.getElementById("ocorrenciaDiv").textContent;

  
  var occurrenceInfo = `<p>${occurrenceText.trim().replace(/\n/g, '</p><p>')}</p>\n`;

 
  copyTextToClipboard(occurrenceInfo);
}

function copyTextToClipboard(text) {
  var textarea = createElement('textarea');
  textarea.value = text;
  appendToDOM(document.body, textarea);
  textarea.select();
  document.execCommand('copy');
  removeFromDOM(textarea);
}