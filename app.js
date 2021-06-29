var countDownDate = new Date(2021, 09, 19, 21, 10, 00).getTime();

var days = document.querySelector("[days]");
var hours = document.querySelector("[hours]");
var minutes = document.querySelector("[minutes]");
var seconds = document.querySelector("[seconds]");

var interval = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);

    days.innerHTML = d < 0 ? "-" : d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    hours.innerHTML = h < 0 ? "-" : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    minutes.innerHTML = m < 0 ? "-" : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
    seconds.innerHTML = s < 0 ? "-" : s;

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".end").innerHTML = "Edukacija za Frontend developera je završila! <br> Čestitamo!";
    }

}, 1000);

