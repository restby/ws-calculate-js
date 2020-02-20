'use strict';
const startButton = document.querySelector('.start-button'),
  firstScreen = document.querySelector('.first-screen'),
  mainForm = document.querySelector('.main-form'),
  formCalculate = document.querySelector('.form-calculate'),
  endButton = document.querySelector('.end-button'),
  total = document.querySelector('.total'),
  fastRange = document.querySelector('.fast-range');

function showElement(elem) {
  elem.style.display = 'block';
}

function hideElement(elem) {
  elem.style.display = 'none';
}

function handlerCallBackForm(event) {
  const target = event.target;
  if (target.classList.contains('want-faster')) {
    if (target.checked) {
      showElement(fastRange);
    } else {
      hideElement(fastRange);
    }
    // target.checked ? showElement(fastRange) : hideElement(fastRange);
  }
}

startButton.addEventListener('click', function () {
  showElement(mainForm);
  hideElement(firstScreen);
});

endButton.addEventListener('click', function () {
  /**цикл по коллекции "formCalculate", для каждого елемента
   * FIELDSET - обязательно боьлшими буквами (так браузер хранит названия тегов)
   */
  for (const elem of formCalculate.elements) {
    if (elem.tagName === 'FIELDSET') {
      hideElement(elem);
    }
  }

  showElement(total);
});

formCalculate.addEventListener('change', handlerCallBackForm);