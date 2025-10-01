let startTime, updatedTime, difference, tInterval;
let running = false;

function start() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    tInterval = setInterval(updateTime, 1000);
    running = true;
  }
}

function stop() {
  clearInterval(tInterval);
  running = false;
}

function reset() {
  clearInterval(tInterval);
  running = false;
  difference = 0;
  document.getElementById("stopwatch").textContent = "00:00:00";
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((difference / (1000 * 60)) % 60);
  let seconds = Math.floor((difference / 1000) % 60);

if (hours < 10) {
  hours = "0" + hours;
}

if (minutes < 10) {
  minutes = "0" + minutes;
}

if (seconds < 10) {
  seconds = "0" + seconds;
}



  document.getElementById("stopwatch").textContent =
    hours + ":" + minutes + ":" + seconds;
}
