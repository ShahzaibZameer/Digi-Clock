let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;

function updateStopwatch() {
  seconds++;
  if (seconds === 60) { seconds = 0; minutes++; }
  if (minutes === 60) { minutes = 0; hours++; }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("stopwatch").textContent = `${h}:${m}:${s}`;
}

function startStopwatch() {
  if (!timer) timer = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
  clearInterval(timer);
  timer = null;
}

function resetStopwatch() {
  clearInterval(timer);
  timer = null;
  hours = 0; minutes = 0; seconds = 0;
  document.getElementById("stopwatch").textContent = "00:00:00";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("startBtn").addEventListener("click", startStopwatch);
  document.getElementById("stopBtn").addEventListener("click", stopStopwatch);
  document.getElementById("resetBtn").addEventListener("click", resetStopwatch);
});
