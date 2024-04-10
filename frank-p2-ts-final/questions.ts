/*
In this file we will:

1. Create the class to store the different objects (trivia questions)
2. Create the function to fetch the data from the API
*/

console.log("Hello! We are starting the program");

//Creating the TS Class to store the questions. We define the fields and the constructor.
export class Question {
  public question: string;
  public category: string;
  public answer: string;
  public incorrect_answers: string[];
  public difficulty: string;

  constructor(
    question: string,
    answer: string,
    incorrect_answers: string[],
    category: string,
    difficulty: string
  ) {
    this.question = question;
    this.answer = answer;
    this.category = category;
    this.incorrect_answers = incorrect_answers;
    this.difficulty = difficulty;
  }
}

export const getQuestions = async (n: number) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=${n}`);
  const { results } = (await response.json()) as { results: any[] };
  console.log(results);
  const questions: Array<Question> = [];
  for (const {
    question,
    correct_answer,
    incorrect_answers,
    category,
    difficulty,
  } of results) {
    questions.push(
      new Question(
        question,
        correct_answer,
        incorrect_answers,
        category,
        difficulty
      )
    );
  }
  console.log(questions);
  return questions;
};
