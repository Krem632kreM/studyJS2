
'use strict';
    let myDate = new Date(),
    str = '',
    myHours = myDate.getHours();
    switch (true){
        case (myHours >= 5) && (myHours < 11): str ='Доброе утро';
        break;
        case (myHours >= 11) && (myHours < 16): str ='Добрый день';
        break;
        case (myHours >= 16) && (myHours <= 23): str ='Добрый вечер';
        break;
        case (myHours >= 0) && (myHours < 5): str = 'Доброй ночи';
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
        document.body.innerHTML = str + "<br/>Сегодня " + getWeekDay(myDate) + "<br/>Текущее время: " + new Date().toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit'}) + "<br/> До нового года осталось " + daysLag +" дней";
    };

    let dateNewYear = new Date('01-01-2022');
    let daysLag = Math.ceil(Math.abs(dateNewYear.getTime() - time.getTime()) / (1000 * 3600 * 24));

    setInterval(counterTimer, 1000);