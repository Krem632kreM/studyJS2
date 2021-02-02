'use strict'
let income = '50000';
let mission = 500000;
let period = 6;



let money = prompt('Ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');


let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = prompt('Во сколько это обойдется?');



//LESSON04
let showTypeOf = function(data) {
    console.log(data, typeof(data));
}

showTypeOf(money);

/*1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц*/

function getExpensesMonth (amount1 , amount2) {
    return Number(amount1)+ Number(amount2);
}

console.log( "Расходы за месяц: " + getExpensesMonth(amount1,amount2) );

console.log( addExpenses.toLowerCase().split(',') );

/*2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)*/
function getAccumulatedMonth (money, amount1, amount2) {
    return Number(money)-getExpensesMonth(amount1, amount2);
}

/*3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth*/
let accumulatedMonth  = getAccumulatedMonth(money, amount1, amount2);

/*4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, 
зная результат месячного накопления (accumulatedMonth) и возвращает результат*/
function getTargetMonth (mission, accumulatedMonth) {
    return Math.ceil(mission/accumulatedMonth);
}

console.log("Цель будет достигнута за " + getTargetMonth(mission, accumulatedMonth) + " месяцев" );

/*5) Удалить из кода переменную budgetMonth
6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)*/
let budgetDay = accumulatedMonth/30;
console.log("Бюджет на день: " + budgetDay);


let getStatusIncom = function(){
if (budgetDay >= 1200) {
   console.log('У вас высокий уровень дохода');
   } else if (budgetDay>=600 && budgetDay<1200) {
   console.log('У вас средний уровень дохода');
   } else if (budgetDay>=0 && budgetDay<600) {
   console.log('К сожалению у вас уровень дохода ниже среднего');
   } else {
   console.log('Что-то пошло не так');
   }
}

getStatusIncom();