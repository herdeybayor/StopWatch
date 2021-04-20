var m = 0, s = 0, ms = 0;
var timer;

var counter = document.getElementById("counter");
var button = document.getElementById("btn");
var lapsDisplay = document.getElementById("laps");

function counterOutput() {
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}

function run() {
    counter.innerHTML = counterOutput();
    ms++;

    if (ms == 100) {
        ms = 0;
        s++;
    }

    if (s == 60) {
        s = 0;
        m++;
    }
}

function start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = false;
}

function pause() {
    stopTimer();
}

function stop() {
    stopTimer();
    m = 0, s = 0, ms = 0;
    counter.innerHTML = counterOutput();
}

function restart() {
    stop();
    start();
}

function lap() {
    if (timer) {
        var li = document.createElement("li");
        li.innerText = counterOutput();
        lapsDisplay.appendChild(li);
    }
}

function resetLap() {
    lapsDisplay.innerHTML = "";
}