'use strict'
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль 
// текст заголовка элемента (тега h2) и количество элементов в категории 
// (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// *Version 1

const categoriesList = document.querySelector('#categories');
// console.log(categoriesUl);

console.log(`В списке ${categoriesList.childElementCount} категории.`);

// *Version 2
// const categoriesUl  = document.getElementById('categories').children; 
// console.dir(categoriesUl);

// console.log(`В списке ${categoriesUl.length} категории.`);

// *Version 3

// const categoriesItem = document.querySelectorAll('.item');

// console.log(`В списке ${categoriesItem.length} категории.`);


// *Part 2


const categoriesItem = categoriesList.querySelectorAll('.item');
// console.log(categoriesItem);


function result(allItems) {
    allItems.forEach(item => {
        const title = item.querySelector('h2').textContent;
        // console.log(title);
        const itemsLength = item.querySelectorAll('li').length;
        console.log(`Категория: ${title} 
    Количество элементов: ${itemsLength}`)
    })

}

result(categoriesItem);