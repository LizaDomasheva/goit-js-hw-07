// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение 
// счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let clickCount = 0;

const incrementButton = document.querySelector('button[data-action=increment]');
const decrementButton = document.querySelector('button[data-action=decrement]');
const spanContent = document.querySelector('#value');

function counterIncrement(e) {
    spanContent.textContent = clickCount += 1;
}

function counterDecrement(e) {
    spanContent.textContent = clickCount -= 1;
}

incrementButton.addEventListener('click', counterIncrement)


decrementButton.addEventListener('click', counterDecrement)