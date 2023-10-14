const timeContainer = document.querySelector('.js-time');
const buttonStart = document.querySelector('.button-start');
const buttonStop = document.querySelector('.button-stop');

const timer = {
    seconds: 0,
    minutes: 0,
    hours: 0
}
const timerText = {
    textSec: '',
    textMin: '',
    textHour: ''
}
let timerInterval;
let isStarted = false;
buttonStart.addEventListener('click', () => {
    if(!isStarted)
    {
        buttonColor("white", "green", "black", "white")

        buttonStart.innerHTML = "Started";
        buttonStop.innerHTML = "Stop";
        
        isStarted = true;
        timerInterval = setInterval(() => StopwatchCounter(), 1000);
    }
});
buttonStop.addEventListener('click', () => {
    clearInterval(timerInterval)
    
    buttonColor("black", "white", "white", "red")
    
    buttonStart.innerHTML = "Start";
    buttonStop.innerHTML = "Stopped";

    timeContainer.innerHTML = '00:00:00';
    timer.seconds = timer.minutes = timer.hours = 0;    
    isStarted = false;
});
function buttonColor(bnStartColor, btnStartBgColor, btnStopColor, btnStopBgColor)
{
    buttonStart.style.color = bnStartColor;
    buttonStart.style.backgroundColor = btnStartBgColor;

    buttonStop.style.color = btnStopColor;
    buttonStop.style.backgroundColor = btnStopBgColor;
}
function StopwatchCounter()
{
    timer.seconds++;
    if(timer.seconds > 59)
    {
        timer.seconds = 0;        
        timer.minutes++;        
        if(timer.minutes > 59)
        {
            timer.minutes = 0;            
            timer.hours++;            
        }
    }
    timerText.textSec = fixAppearance(timer.seconds);
    timerText.textMin = fixAppearance(timer.minutes);
    timerText.textHour = fixAppearance(timer.hours);

    if(timer.minutes > 0 && timer.hours > 0)
        timeContainer.innerHTML = `${timerText.textHour}:${timerText.textMin}:${timerText.textSec}`;
    else if(timer.minutes > 0 && timer.hours < 1)
        timeContainer.innerHTML = `00:${timerText.textMin}:${timerText.textSec}`;    
    else if(timer.minutes < 1 && timer.hours < 1)
        timeContainer.innerHTML = `00:00:${timerText.textSec}`;
}
function fixAppearance(val)
{
    if(val < 10)
        return `0${val}`;
    else
        return `${val}`;
}
