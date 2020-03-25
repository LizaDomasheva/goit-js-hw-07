const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().


const needUl = document.querySelector('#ingredients');
//   console.log(needUl);

function fn1(arrayItems) {
    // console.log(arrayItems);
    const allLi = arrayItems.map(items => makeEl(items));

    needUl.append(...allLi);

}


fn1(ingredients);

function makeEl(item) {
    console.log(item)
    const ingredientsli = document.createElement('li');
    ingredientsli.textContent = item;

    return ingredientsli;
}