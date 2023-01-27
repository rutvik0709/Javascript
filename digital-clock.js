const clock = new Date()
day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
document.getElementsByClassName("day")[0].innerHTML = day[clock.getDay()]
document.getElementsByClassName("date")[0].innerHTML = clock.getDate()
document.getElementsByClassName("time")[0].innerHTML = clock.toLocaleTimeString()

setInterval(function() {
    location.reload();
},1000)
