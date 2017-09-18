$(document).ready(function(){
    function displayTime(){
        var currentTime = new Date();

        var hours = currentTime.getHours();
        if(hours < 10){
            hours = "0" + hours;
        }
        var minutes = currentTime.getMinutes();
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        var seconds = currentTime.getSeconds();
        if(seconds < 10){
            seconds = "0" + seconds;
        }

        $("#clock").text(hours + ":" + minutes + ":" + seconds);
    }
    displayTime();
    setInterval(displayTime, 1000);

    });