/*
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/

const array = [];
for (let i = 0; i < 5; i++) {
    array.push(Math.trunc(Math.random()*10));
    
}
console.log(array);

let summa = 0;
for (let i = 0; i < array.length; i++) {
    summa += array[i];
}
console.log('сумма элементов массива равна: ', summa);

let min = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
}
console.log('минимальный элемент массива равен: ', min);

if (array.indexOf(3) === -1) {
    console.log('значение 3 в массиве отсутствует');
}
else {
    console.log('значение 3 в массиве есть');
}