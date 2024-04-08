//We first import the function that fetches the data from the
import { getQuestions } from "./questions";

//Main program which leverages the functions and scripts we created in seperate files and are importing here.
const questions = await getQuestions(10);
