/*This file will contain the functions to render the objects (questions) of my program.
We will be rendering different HTML Pages. 
Shuffle the JS Array: https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
1. First of all we will be rendering the main page. 
 */

import { Question } from "./questions";
import { writeFile } from "fs/promises";
import { headerMainPage } from "./html_components/header";
import { headerQuestionPage } from "./html_components/header";
import { topBar } from "./html_components/topBar";

//Function to render an invidual HTML page for each of the questions.

const renderQuestionPage = (question: Question) => {
  let html = "";
  let header = headerQuestionPage();
  let top = topBar();
  html += header;
  html += top;
  // add all fields of the question object to the html as p tags
  html += `<p><a href='../index.html'>Go Back </a></p>`;
  html += `<h1>${question.question}</h1>`;
  html += `<p>${question.category}</p>`;
  html += `<p>${question.difficulty}</p>`;
  //We'll combine correct answers with incorrect ones, so then we can shuffle the buttons in the page.
  let allAnswers = [question.answer, ...question.incorrect_answers];
  //Shuffle the allAnswersArray
  allAnswers.sort(() => Math.random() - 0.5);
  //Add the shuffled answers to the html
  for (const answer of allAnswers) {
    let buttonClass = "";
    if (answer === question.answer) {
      buttonClass = "answerButton correctAnswer";
    } else {
      buttonClass = "answerButton";
    }
    html += `<button class ="${buttonClass}">${answer}</button>`;
  }
  html += `<div id="timer"></div>`;
  html += `<script src="../scripts/answerButton.js"></script>`;
  html += `<script src="../scripts/timer.js"></script>`;

  return html;
};

//Function to render the main index.html page with all the questions and their subpages as well.

export const mainContent = async (questions: Array<Question>) => {
  let questionCounter = 1;
  let html = ``;
  for (const question of questions) {
    console.log("We're doing some debugging!");
    console.log(question);
    let fileName = `./question_pages/question${questionCounter}.html`;
    questionCounter += 1;
    await writeFile(`${fileName}`, renderQuestionPage(question));
    html += `<p> <a href=./${fileName}>${question.question}</a></p>`;
  }
  return html;
};

//Work in progress
export const renderMainPage = async (questions: Array<Question>) => {
  return `
  <html>
    ${headerMainPage()}
    <body>
        ${topBar()}
        ${await mainContent(questions)}
    </body>
  </html>`;
};
