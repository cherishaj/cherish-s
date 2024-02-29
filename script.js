var countDownDate = new Date("Mar 15,2024").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var Days = Math.floor(distance/ (1000 * 60 * 60 * 24));
    var Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var Seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("Days").innerHTML = Days;
    document.getElementById("Hours").innerHTML = Hours;
    document.getElementById("Minutes").innerHTML = Minutes;
    document.getElementById("Seconds").innerHTML = Seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById("Days").innerHTML = "00";
        document.getElementById("Hours").innerHTML = "00";
        document.getElementById("Minutes").innerHTML = "00";
        document.getElementById("Seconds").innerHTML = "00";
    }

},1000);
 