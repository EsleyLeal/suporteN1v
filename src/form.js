export function updateCurrentDate() {
    var currentDateElement = document.getElementById("currentDate");
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    currentDateElement.value = formattedDate;
  }
  
  export function showFields() {
    var serviceType = document.getElementById('serviceType').value;
    var allFields = document.querySelectorAll('.customFields');
  
    allFields.forEach(function (field) {
      field.classList.add('hidden');
    });
  
    var specificFields = document.getElementById(serviceType + 'Fields');
    if (specificFields) {
      specificFields.classList.remove('hidden');
    }
  }
  

  export function gerarOcorrencia() {

  var currentDate = document.getElementById("currentDate").value;
  var serviceType = document.getElementById("serviceType").value;


  var specificFields = document.getElementById(serviceType + "Fields");
  var specificFieldInputs = specificFields.querySelectorAll("input");


  var occurrenceInfo = "Data Atual: " + currentDate + "\n \n" +
                       serviceType + " REALIZADA COM SUCESSO!" + "\n \n";

  specificFieldInputs.forEach(function (input) {

    var label = input.id.toUpperCase() + " - ";
    var labelWithSpaces = label + " ".repeat(Math.max(0, 20 - label.length)); // Ajuste para um comprimento desejado (por exemplo, 20)
    
    occurrenceInfo += labelWithSpaces + input.value + "\n";
  });

  var ocorrenciaDiv = document.getElementById("ocorrenciaDiv");
  ocorrenciaDiv.textContent = occurrenceInfo;

}

window.gerarSenhaAleatoria = function () {
  var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=";
  var senhaGerada = '';

  for (var i = 0; i < 11; i++) {
      var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      senhaGerada += caracteres.charAt(indiceAleatorio);
  }

  // Atualiza o valor do campo de senha SIPulse
  document.getElementById("senha SIPulse").value = senhaGerada;
};


export function limparForm() {
  var confirmacao = confirm("Tem certeza que deseja limpar os campos?");

  if (confirmacao) {
    var allFields = document.querySelectorAll('.customFields input');
    allFields.forEach(function (input) {
      input.value = '';
    });

    var ocorrenciaDiv = document.getElementById("ocorrenciaDiv");
    ocorrenciaDiv.textContent = '';


  }
}


export function copiarForm() {
  var ocorrenciaDiv = document.getElementById("ocorrenciaDiv");
  var occurrenceText = ocorrenciaDiv.textContent;


  var textarea = document.createElement('textarea');

  textarea.value = occurrenceText;

  document.body.appendChild(textarea);

  textarea.select();

  document.execCommand('copy');

  document.body.removeChild(textarea);

}


  
  

  