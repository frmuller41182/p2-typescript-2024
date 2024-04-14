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
import { topBarQuestionPage } from "./html_components/topBar";
import { footerAll } from "./html_components/footer";
import { getPokemon } from "./pokemon";

const renderPokemonDiv = async () => {
  //function to return a div that contains the pokemon species, sprite and a button that when clicked plays the cry sound
  let html = "";
  let pokemon = await getPokemon();
  html += `<div class="pokemonDiv">`;
  html += `<div id="timer"></div>`;
  html += `<h3>${pokemon.species}</h3>`;
  html += `<img src="${pokemon.sprite}">`;
  html += `<audio id= "pokemonCry" src="${pokemon.cry}" ></audio>`;
  html += `<button class="cryButton" onclick="playCry()">Battle Cry</button>`;
  html += `<script>function playCry() {
    const audio = document.getElementById('pokemonCry');
    if (audio) {
      audio.play();
    }
  }
  </script>`;
  html += `</div>`;
  return html;
};

//Function to render an invidual HTML page for each of the questions.
const renderQuestionPage = async (
  question: Question,
  questionCounter: any,
  numQuestions: any
) => {
  let html = "";
  let header = headerQuestionPage();
  let top = topBarQuestionPage();
  let pokemonDiv = await renderPokemonDiv();
  html += header;
  html += top;
  html += `<section id = "mainContent">`;
  // add all fields of the question object to the html as p tags
  html += `<div id="goBackLink"><p><a href='../index.html'>Go Back </a></p></div>`;
  html += `<div id="questionTitle"><h1>${question.question}</h1></div>`;
  html += `<div id="questionMetaData"><p>${question.category}</p><p>${question.difficulty}</p></div>`;
  //We'll combine correct answers with incorrect ones, so then we can shuffle the buttons in the page.
  let allAnswers = [question.answer, ...question.incorrect_answers];
  //Shuffle the allAnswersArray
  allAnswers.sort(() => Math.random() - 0.5);
  //Add an image to the html, with the image being influenced by the category of the question.
  html += `  <div id="questionImage"><image
  class="imageQuestion"
  src="https://source.unsplash.com/featured/?${question.category}"
/></div>`;
  html += `<div id = "questionAnswers">`;
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
  html += `</div>`;
  html += pokemonDiv;
  html += `<script src="../scripts/answerButton.js"></script>`;
  html += `<script src="../scripts/timer.js"></script>`;
  //Add a div to the html that has two buttons, one to go to the previous page and one to go to the next page. Maku sure the buttons won't be redirecting the user to a questionx.html page that doesn't exist.

  let previousPage = "";
  let nextPage = "";
  if (questionCounter > 1) {
    previousPage = `<a href="./question${
      questionCounter - 1
    }.html"><button class="togglePageButton">Previous Question</button></a>`;
  }
  if (questionCounter < numQuestions) {
    nextPage = `<a href="./question${
      questionCounter + 1
    }.html"><button class="togglePageButton">Next Question</button></a>`;
  }
  html += `<div id="questionNavButtons">${previousPage}${nextPage}</div>
  </section>`;
  html += footerAll();
  return html;
};

//Function to render the main index.html page with all the questions and their subpages as well.

export const mainContent = async (questions: Array<Question>) => {
  let questionCounter = 1;
  let numQuestions = questions.length;
  let topics: Array<String> = [];
  for (const question of questions) {
    let questionTopic = " " + question.category + " ";
    if (!topics.includes(questionTopic)) {
      topics.push(questionTopic);
    }
  }
  let html = `
  <div id = "examTitle">
  <h1> Welcome to VSA's Entrance Exam</h1>
  </div>
  <div id = "examDescription">
  <h3> The exam consists of ${numQuestions} questions, and covers the following topics: ${topics}. </h3>
  <p>Below you will see a list of all the questions. Feel free to click on any of them to get redirected to that question page. On question pages you will have buttons to move to the previous and next question , if applicable, to improve your experience. You will also see a suprirse compainion on question pages who can cheer you up. Good luck you got this!</p>
  </div> 
  <div id= "examQuestions">`;
  html += `<ol>`;
  for (const question of questions) {
    console.log("We're doing some debugging!");
    console.log(question);
    let fileName = `./question_pages/question${questionCounter}.html`;
    questionCounter += 1;
    await writeFile(
      `${fileName}`,
      await renderQuestionPage(question, questionCounter - 1, numQuestions)
    );
    html += `<div class="questionInstance"><li><p><a href=./${fileName}>${question.question}</a></p></li></div>`;
  }
  html += `</ol>
  </div>`;
  return html;
};

//Work in progress
export const renderMainPage = async (questions: Array<Question>) => {
  return `
  <html>
    ${headerMainPage()}
    <body>
        ${topBar()}
        <section id = "mainContent">
        ${await mainContent(questions)}
        </section>
        ${footerAll()}
    </body>
  </html>`;
};
