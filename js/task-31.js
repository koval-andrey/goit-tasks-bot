/*
Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

возвращала первое число от start до end, которое делится на divisor без остатка;
не использовала оператор break;
не использовала переменную number.*/

function findNumber(start, end, divisor) {
    // Пиши код ниже этой строки
   
    for (let i = start; i < end; i++) {
      if (i % divisor === 0) { return i;
      }
     
    }
   
    // Пиши код выше этой строки
  }

findNumber(2, 6, 5);
findNumber(8, 17, 3);
findNumber(6, 9, 4);
findNumber(16, 35, 7);
findNumber();
