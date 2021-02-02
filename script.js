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

   console.log(typeof money);
   console.log(typeof income);
   console.log(typeof deposit);
   console.log(addExpenses.length);
   console.log("За период ",period, "месяцев цель заработать", mission, "рублей");
   console.log(addExpenses.toLowerCase().split(',').join(', '));
   console.log(addExpenses.toLowerCase().split(','));
   

   

   let budgetMonth = money - amount1 - amount2;
   console.log("Бюджет на месяц: " + budgetMonth);



   console.log("Цель",mission, "будет достигнута за", Math.ceil(mission/budgetMonth), "месяцев");
  
   let budgetDay = budgetMonth/30;
   console.log(budgetDay);

   
if (budgetDay >= 1200) {
   console.log('У вас высокий уровень дохода');
   } else if (budgetDay >= 600 && budgetDay < 1200) {
   console.log('У вас средний уровень дохода');
   } else if (budgetDay >= 0 && budgetDay < 600) {
   console.log('К сожалению у вас уровень дохода ниже среднего');
   } else {
   console.log('Что-то пошло не так');
   }

   



