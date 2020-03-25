// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. При нажатии на кнопку Очистить, 
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const collectionAmount = document.querySelector('#controls>input');
console.log(collectionAmount)

const boxesDiv = document.querySelector('#boxes');
let amount;

const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');


collectionAmount.addEventListener('input', (e) => {
amount = event.currentTarget.value;
console.log(amount);
}
)

renderBtn.addEventListener('click', (e) => {


const myDiv = document.createElement('div');
    boxesDiv.append(myDiv);
      

    }
)

// function createBoxes(amount) {
        // return ingredientsli;
    

//     const allDiv = amount.map(items => makeEl(items));

//     boxesDiv.append(...allDiv);
// }

// createBoxes(amount);

// function makeEl(item) {
//     console.log(item)
//     const ingredientsli = document.createElement('li');
//     ingredientsli.textContent = item;

//     return ingredientsli;
// }



// function random(number) {
//     return Math.floor(Math.random()*(number+1));
//   }

// btn.onclick = function() {
//     var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     document.body.style.backgroundColor = rndCol;
// }
