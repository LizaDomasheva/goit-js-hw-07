// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const validationInput = document.querySelector('#validation-input');
console.log(validationInput);


const handlerValidation = () => {
    if (validationInput.value.length === Number(validationInput.dataset.length)) {
        validationInput.classList.add('valid')
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
}


validationInput.addEventListener('blur', (handlerValidation));