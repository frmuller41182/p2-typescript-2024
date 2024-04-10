/*This file will contain the functions to render the objects (questions) of my program.
We will be rendering different HTML Pages. 

1. First of all we will be rendering the main page. 
 */

import { Question } from "./questions";
import { writeFile } from "fs/promises";
import { headerMainPage } from "./html_components/header";
import { headerQuestionPage } from "./html_components/header";

//Function to render an invidual HTML page for each of the questions.

const renderQuestionPage = (question: Question) => {
  let html = "";
  let header = headerQuestionPage();
  html += header;
  // add all fields of the question object to the html as p tags
  html += `<h1>${question.question}</h1>`;
  html += `<p>${question.category}</p>`;
  html += `<p>${question.difficulty}</p>`;
  html += `<button>${question.answer}</button>`;
  //Add button HTML tags to html variable for each of the incorrect answers. Use a foor loop to iterate over string values in an array.
  for (const incorrectAnswer of question.incorrect_answers) {
    html += `<button>${incorrectAnswer}</button>`;
  }
  return html;
};

//Function to render the main index.html page with all the questions and their subpages as well.

export const draftPage = async (questions: Array<Question>) => {
  let html = headerMainPage();
  let questionCounter = 1;
  for (const question of questions) {
    console.log("We're doing some debugging!");
    console.log(question);
    let fileName = `question${questionCounter}.html`;
    questionCounter += 1;
    await writeFile(`${fileName}`, renderQuestionPage(question));
    html += `<p> <a href=./${fileName}>${question.question}</a></p>`;
  }
  html += "</body>";

  return html;
};
