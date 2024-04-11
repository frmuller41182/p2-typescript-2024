//We first import the function that fetches the data from the trivia API
import { getQuestions } from "./questions";
import { writeFile } from "fs/promises";
import { renderMainPage } from "./render";

//Main program which leverages the functions and scripts we created in seperate files and are importing here.
const questions = await getQuestions(10);
const html = await renderMainPage(questions);

await writeFile("index.html", html);
