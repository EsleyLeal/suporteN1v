export function getElementById(id) {
    return document.getElementById(id);
  }
  
  export function addClass(element, className) {
    element.classList.add(className);
  }
  
  export function removeClass(element, className) {
    element.classList.remove(className);
  }
  
  export function createElement(tagName) {
    return document.createElement(tagName);
  }
  
  export function appendToDOM(parentElement, childElement) {
    parentElement.appendChild(childElement);
  }
  
  export function removeFromDOM(element) {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
  
  