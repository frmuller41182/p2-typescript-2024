const buttons = document.getElementsByClassName("answerButton");
const buttonsArray = Array.from(buttons);
for (const button of buttonsArray) {
  button.addEventListener("click", () => {
    console.log("button clicked");
    if (button.classList.contains("correct")) {
      console.log("correct answer");
      button.classList.add("correctAnswer");
    } else {
      console.log("incorrect answer");
      button.classList.add("incorrectAnswer");
    }
  });
}
