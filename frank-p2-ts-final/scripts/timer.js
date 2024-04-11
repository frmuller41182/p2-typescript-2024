let time = 30;
const timerDiv = document.getElementById("timer");
timerDiv.textContent = `Time remaining: ${time} seconds`;
const countdown = setInterval(() => {
  time = time - 1;
  timerDiv.textContent = `Time remaining: ${time} seconds`;
  if (time <= 0) {
    clearInterval(countdown);
  }
}, 1000);
