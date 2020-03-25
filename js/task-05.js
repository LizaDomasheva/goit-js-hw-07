// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой, 
// в спане должна отображаться строка 'незнакомец'.

const inputName = document.querySelector('#name-input');
const spanStranger = document.querySelector('#name-output');


function yourName(e) {

    spanStranger.textContent = inputName.value;

    if (inputName.value === '') {
        spanStranger.textContent = "незнакомец"
    }
}

inputName.addEventListener('input', yourName);