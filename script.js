let sec = 0;
let min = 0;
let hour = 0;

let interval;

let isRunning = false;

function twoDigits(digit){
    if (digit < 10){
        return "0" + digit;
    } else{
        return digit;
    }
}

function comecar(){
    if (isRunning === false){
        watch();
        interval = setInterval(watch, 10);
    }
    isRunning = true;
}
function pausar(){
    clearInterval(interval);
    isRunning = false;
}
function resetar(){
    clearInterval(interval);
    sec = 0;
    min = 0;
    hour = 0;
    document.getElementById('watch').innerText = "00:00:00";
    isRunning = false;
}
function watch(){
    sec++;
    if (sec == 60){
        min++;
        sec = 0;
        if (min == 60){
            hour++;
            min = 0;
        }
    }
    document.getElementById('watch').innerText = 
        twoDigits(hour) + ":" + twoDigits(min) + ":" + twoDigits(sec);
}