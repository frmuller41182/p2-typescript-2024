let time = 30;
const timerDiv = document.getElementById("timer");
timerDiv.textContent = `Time remaining: ${time} seconds`;
timerDiv.classList.add("active");
const countdown = setInterval(() => {
  time = time - 1;
  timerDiv.textContent = `Time remaining: ${time} seconds`;
  if (time <= 0) {
    clearInterval(countdown);
    timerDiv.classList.remove("active");
  }
}, 1000);
