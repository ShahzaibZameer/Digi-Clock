function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros
  if (hours < 10) {
  hours = "0" + hours;
} else {
  hours = hours;
}

if (minutes < 10) {
  minutes = "0" + minutes;
} else {
  minutes = minutes;
}

if (seconds < 10) {
  seconds = "0" + seconds;
} else {
  seconds = seconds;
}

  const timeString = hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock").textContent = timeString;

}


setInterval(updateClock, 1000);


updateClock();
