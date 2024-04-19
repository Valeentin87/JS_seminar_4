// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const array = [1, 2, 3, 4, 5, 6, 7];
const firstPart = array.slice(0,3);
const secondPart = array.slice(5)
const resultArray = firstPart.concat(secondPart);
console.log(resultArray);