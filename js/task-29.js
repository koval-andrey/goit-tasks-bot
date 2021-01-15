/*Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. 
Чётным считается число которое делится на 2 без остатка.*/

function getEvenNumbers(start, end) {
  // Пиши код ниже этой строки
  const array = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      array.push(i);
      console.log(array);
    }
  }
  return array;
  // Пиши код выше этой строки
}

getEvenNumbers(2, 5);
getEvenNumbers(3, 11);
getEvenNumbers(6, 12);
getEvenNumbers(8, 8);
getEvenNumbers(7, 7);
getEvenNumbers();
/*
Вызов функции getEvenNumbers(2, 5) возвращает [2, 4].
Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10].
Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12].
Вызов функции getEvenNumbers(8, 8) возвращает [8].
Вызов функции getEvenNumbers(7, 7) возвращает [].
Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив.*/
