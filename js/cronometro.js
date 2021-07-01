function startTimer(duration,display){
    var timer = duration,minutes,seconds;

    setInterval(function(){

        minutes=parseInt(timer/60,10)
        seconds=parseInt(timer%60,10)

        minutes=minutes < 10 ? "0"+minutes:minutes;
        seconds=seconds < 10 ? "0"+seconds:seconds;

        display.textContent=minutes+":"+seconds

        if(--timer<0){
            timer=0;
        }


    },1000)
}

window.onload=function(){
    var duration=60*5;
    var display=document.querySelector("#timer1");
    startTimer(duration,display);

    var duration=15;
    var display=document.querySelector("#timer2");
    startTimer(duration,display);

    var duration=30;
    var display=document.querySelector("#timer3");
    startTimer(duration,display);

    var duration=10;
    var display=document.querySelector("#timer4");
    startTimer(duration,display);
}