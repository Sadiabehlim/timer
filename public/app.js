var sec = 60;
var miliSec = 10;
var displayMin = document.getElementById("displayMin");
var displaySec = document.getElementById("displaySec");
var displayMiliSec = document.getElementById("displayMilliSec");
var inpMin = document.getElementById("inpMin");
var min = +inpMin.value;
var inpHrs = document.getElementById("inpHrs");
var hrs = +inpHrs.value;
var interval;
function timer() {
    miliSec--;
    if (miliSec == 0) {
        miliSec = 10;
        sec--;
        if(sec == 0) {
            sec = 60;
            min--;
            if(min == 0) {
                min = 60
                hrs--;
                
                if(hrs == 0 && sec == 0 && miliSec == 0) {
                    clearInterval(interval);
                }
               
            }
        }
    }
displayMiliSec.innerHTML = miliSec;
displayMin.innerHTML = min;
displaySec.innerHTML = sec;

}
function startTimer () {
    interval =setInterval (function() {
        timer();
},100);
}
function pauseTimer() {
    clearInterval(interval);  
}
function resetTimer() {
    min = 0;
    sec = 0;
    miliSec = 0;
    displayMiliSec.innerHTML = miliSec;
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;
}
