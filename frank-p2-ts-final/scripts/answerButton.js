const buttons = document.getElementsByClassName("answerButton");
const buttonsArray = Array.from(buttons);
for (const button of buttonsArray) {
  button.addEventListener("click", () => {
    console.log("button clicked");
    if (button.classList.contains("correctAnswer")) {
      console.log("correct answer");
    } else {
      console.log("incorrect answer");
    }
  });
}
