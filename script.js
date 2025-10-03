// Clock Function
function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

// 🔥 Show/Hide sections
function showSection(sectionId) {
  document.getElementById("clockSection").style.display = "none";
  document.getElementById("stopwatchSection").style.display = "none";
  document.getElementById(sectionId).style.display = "block";
}

// Stopwatch
let stopwatchInterval;
let seconds = 0, minutes = 0, hours = 0;

function updateStopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  const formattedTime =
    (hours < 10 ? "0" : "") + hours + ":" +
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds;

  document.getElementById("stopwatch").textContent = formattedTime;
}

document.getElementById("startBtn").addEventListener("click", function() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(updateStopwatch, 1000);
});

document.getElementById("stopBtn").addEventListener("click", function() {
  clearInterval(stopwatchInterval);
});

document.getElementById("resetBtn").addEventListener("click", function() {
  clearInterval(stopwatchInterval);
  seconds = 0; minutes = 0; hours = 0;
  document.getElementById("stopwatch").textContent = "00:00:00";
});