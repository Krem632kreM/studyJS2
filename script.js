
'use strict';
    let MyDate = new Date(),
    str = '',
    MyHours = MyDate.getHours();
    switch (true){
        case (MyHours >= 5) && (MyHours < 11): str ='Доброе утро';
        break;
        case (MyHours >= 11) && (MyHours < 16): str ='Добрый день';
        break;
        case (MyHours >= 16) && (MyHours <= 23): str ='Добрый вечер';
        break;
        case (MyHours >= 0) && (MyHours < 5): str = 'Доброй ночи';
        break;
    }

    function getWeekDay(date) {
        date = date || new Date();
        var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        var day = date.getDay();
    
        return days[day];
    }

    

let time = new Date();
function counterTimer() {
document.body.innerHTML = document.body.innerHTML = str + "<br/>Сегодня " + getWeekDay(MyDate) + "<br/>Текущее время: " + new Date().toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit'}) + "<br/> До нового года осталось " + daysLag +" дней";
};

let dateNewYear = new Date('01-01-2022');
let daysLag = Math.ceil(Math.abs(dateNewYear.getTime() - time.getTime()) / (1000 * 3600 * 24));

setInterval(counterTimer, 1000);