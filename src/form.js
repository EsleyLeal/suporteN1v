// form.js

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



