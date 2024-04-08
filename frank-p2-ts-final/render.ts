/*this file will contain the function to render the objects (questions) of my program.
 */
import { Question } from "./questions";
import { writeFile } from "fs/promises";

export const header = () => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="A diverse, merit-based educational institution, Virtus Scientia Academy is dedicated to fostering excellence and 
      virtue in the pursuit of knowledge. Offering unparalleled education with a focus on innovation, 
      leadership, and philosophy, we empower students to achieve their highest potential in a global society."
    />
    <meta
      name="keywords"
      content="educational, academy, leadership, stoicism, global, innovation, wisdom, college, technology, economics, politics, "
    />
    <link
      rel="icon"
      type="image/ico"
      href="https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico"
    />
    <link rel="stylesheet" href="VSA.css" />
    <title>Virtus Scientia Academy (VSA) | Home Page</title>
  </head>`;
};

export const draftPage = async (questions: Array<Question>) => {
  let html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="A diverse, merit-based educational institution, Virtus Scientia Academy is dedicated to fostering excellence and 
        virtue in the pursuit of knowledge. Offering unparalleled education with a focus on innovation, 
        leadership, and philosophy, we empower students to achieve their highest potential in a global society."
      />
      <meta
        name="keywords"
        content="educational, academy, leadership, stoicism, global, innovation, wisdom, college, technology, economics, politics, "
      />
      <link
        rel="icon"
        type="image/ico"
        href="https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico"
      />
      <link rel="stylesheet" href="VSA.css" />
      <title>Virtus Scientia Academy (VSA) | Home Page</title>
    </head>
    <body>`;
  let questionCounter = 1;
  for (const question of questions) {
    let fileName = `question${questionCounter}.html`;
    questionCounter += 1;
    await writeFile(`${fileName}`, header());
    html += `<p> <a href=./${fileName}>${question.question}</a></p>`;
  }
  html += "</body>";

  return html;
};
