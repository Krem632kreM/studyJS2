
window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    function counterTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');
        
        function getTimerRemaining () {
            let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining,
            seconds,
            minutes,
            hours;

        if ((dateStop - dateNow)<=0) {
            timeRemaining = 0;
            seconds = ('0' + 0);
            minutes = ('0' + 0);
            hours = ('0' + 0); 
            clearInterval(key);   
        } else {
            timeRemaining =(dateStop - dateNow) /1000;

            let s = Math.floor(timeRemaining % 60),
            m = Math.floor((timeRemaining / 60)%60),
            h = Math.floor(timeRemaining / 60 / 60 );

            seconds = (s > 9 && s <= 60) ? s : ('0' + s);
            minutes = (m > 9 && m <= 60) ? m : ('0' + m);
            hours = (h > 9 && h <= 60) ? h : ('0' + h);
        } 
        
        return {timeRemaining, hours, minutes, seconds};

        }
    
        function updateClock() {

            let timer = getTimerRemaining();
            console.log("timer");

            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;   
        }
        
        const key = setInterval(updateClock, 1000);
        
    }

    counterTimer('18 march 2021');

    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector(".close-btn"),
        menuItems = menu.querySelectorAll('ul>li');
        
        const handlerMenu = () => {
           menu.classList.toggle("active-menu");
           /*if(!menu.style.transform || menu.style.transform === `translate(-100%)`){
            menu.style.transform = `translate(0)`;
        } else {
            menu.style.transform = `translate(-100%)`;
        }*/

        };
    
        //btnMenu.addEventListener('click', handlerMenu);

        btnMenu.addEventListener('click', () => {
            if (event.target.matches('.menu')) {
                return;
            }
            handlerMenu(event);
        });

        //closeBtn.addEventListener('click', handlerMenu);
    
        //menuItems.forEach((elem)=>elem.addEventListener('click', handlerMenu));

        menu.addEventListener('click', () => {
            if (event.target.tagName !== 'A') {
                return;
            }
            handlerMenu(event);
        });
    
    };
        toggleMenu();
    
        const togglePopUp = () => {
            const popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popUpClose = document.querySelector('.popup-close');
            let count = 0;
    
            let popupActive = function() {
                count++;
                popupContent.style.top = count + 'px';
                if(count <= 100) {
                    setTimeout(popupActive,1);
                }
            };
    
            popupBtn.forEach((elem)=> {
                elem.addEventListener('click', () => {
                    popup.style.display = 'block';
                    if (window.screen.width >= 768) {
                        popupActive();
                    }        
                });
            
                popUpClose.addEventListener('click', () => {
                    popup.style.display = 'none';
                    count = 0;
                });
            });
        };
    
        togglePopUp();

        const tabs =() => {
            const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
    
            const toggleTabContend = (index) => {
                for(let i = 0; i<tabContent.length; i++) {
                    if(index === i) {
                        tab[i].classList.add("active");
                        tabContent[i].classList.remove('d-none');
                    } else {
                        tab[i].classList.remove("active");
                        tabContent[i].classList.add('d-none');
                    }
                }
            };
    
            tabHeader.addEventListener('click', (event) => {
                let target = event.target;
                target = target.closest(".service-header-tab");
                if(target){
                    tab.forEach((item, i) => {
                        if (item === target) {
                            toggleTabContend(i);
                        }
                    });
                }
            });
    
    };
    
        tabs();
    });



