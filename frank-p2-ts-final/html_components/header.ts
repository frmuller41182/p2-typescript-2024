export const headerMainPage = () => {
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
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
      <style>
      :root {
        --primary-color: #000000;
        --secondary-color: #8b0000;
        --article-background-color: white;
        --font-color-primary-background: antiquewhite;
        --font-color-secondary-background: #000000;
        /* As we saw in class we declare a few options in case the user's browser doesn't support the first one. */
        --primary-font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        /* Using the best practices values and*/
        --font-size-small: 0.8rem;
        --font-size-regular: 1rem;
        --font-size-large: 1.5rem;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      #mainContent {
        margin-right: 5vw;
        margin-left: 5vw;
        flex: 1;
      }
      /* TopBar CSS */
      header {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        box-sizing: border-box;
        flex: 0.5;
        max-height: 10vh;
      }

      #topBar {
        background-color: var(--secondary-color);
        max-height: 100%;
      }

      .topBarEl {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
        max-height: 100%;
        width: 100%;
      }

      #topLogo {
        max-height: 90%;
        flex: 0.5;
      }

      #topLogo img {
        height: 10vh;
        max-height: 40vh;
      }

      #TopBarTitle {
        font-size: 1.5rem;
        max-height: 7vh;
        margin-top: 0;
        width: auto;
        flex: 1;
      }

      #TopBarTitle h1 {
        font-size: calc(1rem + 1vw); /* Adjust the scaling as needed */
        max-height: 90%;
        margin-top: 0;
        color: var(--font-color-secondary-background);
      }

      #ButtonContainer {
        flex: 0.5;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #buttoncolorchange {
        padding: 0.5rem 1rem; /* More clickable area */
        background-color: #fff; /* Make it stand out */
        border: 1px solid var(--secondary-color); /* Tie it to your color scheme */
        border-radius: 0.3rem; /* Modern rounded corners */
        transition: background-color 0.3s; /* Smooth transition for background color */
      }

      #buttoncolorchange:hover {
        background-color: var(
          --font-color-secondary-background
        ); /* Slight effect on hover */
        color: var(--secondary-color); /* Change text color for contrast */
      }

      #TopBarTitle {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    footer {
      flex: 0.3;
    }

    .FooterEl {
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      background-color: var(--secondary-color);
    }

    .FooterEl div p {
      color: var(--font-color-secondary-background);
    }

    </style>
      <title>Virtus Scientia Academy (VSA) | Home Page</title>
    </head>`;
};

export const headerQuestionPage = () => {
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
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
        <style>
        /* Variable declaration and high level styling */
        :root {
          --primary-color: #000000;
          --secondary-color: #8b0000;
          --article-background-color: white;
          --font-color-primary-background: antiquewhite;
          --font-color-secondary-background: #000000;
          /* As we saw in class we declare a few options in case the user's browser doesn't support the first one. */
          --primary-font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
  
        body {
          margin: 0;
          padding: 0;
          font-family: "Roboto", sans-serif;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        /* TopBar CSS */
        header {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          box-sizing: border-box;
          flex: 0.5;
          max-height: 10vh;
        }
  
        #topBar {
          background-color: var(--secondary-color);
          max-height: 100%;
        }
  
        .topBarEl {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          box-sizing: border-box;
          max-height: 100%;
          width: 100%;
        }
  
        #topLogo {
          max-height: 90%;
          flex: 0.5;
        }
  
        #topLogo img {
          height: 10vh;
          max-height: 40vh;
        }
  
        #TopBarTitle {
          font-size: 1.5rem;
          max-height: 7vh;
          margin-top: 0;
          width: auto;
          flex: 1;
        }
  
        #TopBarTitle h1 {
          font-size: calc(1rem + 1vw); /* Adjust the scaling as needed */
          max-height: 90%;
          margin-top: 0;
          color: var(--font-color-secondary-background);
        }
  
        #ButtonContainer {
          flex: 0.5;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
  
        #buttoncolorchange {
          padding: 0.5rem 1rem; /* More clickable area */
          background-color: #fff; /* Make it stand out */
          border: 1px solid var(--secondary-color); /* Tie it to your color scheme */
          border-radius: 0.3rem; /* Modern rounded corners */
          transition: background-color 0.3s; /* Smooth transition for background color */
        }
  
        #buttoncolorchange:hover {
          background-color: var(
            --font-color-secondary-background
          ); /* Slight effect on hover */
          color: var(--secondary-color); /* Change text color for contrast */
        }
  
        #TopBarTitle {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
  
        /* BIG SECTION
    
                            Question Contents CSS
    
                            */
  
        #mainContent {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 12vw;
          margin-left: 12vw;
          flex: 1;
        }
  
        /* Styling the Go Back Button */
  
        .goBackButton {
          display: inline-block; /* Allows setting padding and margins */
          padding: 10px 20px; /* Spacing inside the button */
          margin: 10px 0; /* Spacing outside the button */
          background-color: var(
            --secondary-color
          ); /* Background color matching the theme */
          color: #fff; /* Text color */
          border-radius: 5px; /* Rounded corners */
          text-decoration: none; /* Removes underline from link */
          font-weight: bold; /* Makes text bold */
          transition: background-color 0.3s, box-shadow 0.3s; /* Smooth transition for hover effects */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Drop shadow for depth */
        }
  
        .goBackButton:hover {
          background-color: #a30000; /* Slightly darker background on hover */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Larger shadow on hover for a lifting effect */
        }
  
        /* Question Title */
  
        #questionTitle h1 {
          font-size: 2rem;
        }
  
        /* Question Metadata */
  
        #questionMetaData {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-bottom: 3vh;
        }
  
        #questionMetaData p {
          margin: 0 5vw;
          text-align: center;
        }
  
        #questionCategory {
          font-weight: bold;
          font-style: italic;
          background-color: #f0f0f0;
          padding: 5px 10px;
        }
  
        #questionDifficulty {
          text-transform: uppercase;
          font-weight: bold;
        }
  
        #questionDifficulty[data-difficulty="easy"] {
          color: #4caf50;
        }
  
        #questionDifficulty[data-difficulty="medium"] {
          color: #ffa500;
        }
  
        #questionDifficulty[data-difficulty="hard"] {
          color: #8b0000;
        }
  
        /* Image Question CSS */
        .imageQuestion {
          size: 2vh;
          height: 35vh;
          margin-bottom: 3vh;
        }
        /* Answer Button Stying */
        #questionAnswers {
          margin-bottom: 3vh;
        }
        .answerButton {
          background-color: #f8f8f8;
          color: #333;
          border: 2px solid #ccc;
          border-radius: 5px;
          padding: 10px 20px;
          margin: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: transform 0.1s ease, background-color 0.2s, box-shadow 0.2s;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
  
        .answerButton:hover {
          background-color: #e0e0e0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
        }
  
        .answerButton:active {
          transform: translateY(2px);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
  
        /* Correct answer */
        .answerButton.correctAnswer {
          background-color: #4caf50;
          color: white;
        }
  
        /* Incorrect answer */
        .answerButton.incorrectAnswer {
          background-color: #f44336;
          color: white;
        }
  
        /* POKEMON DIV STYLING */
  
        .pokemonDiv {
          display: flex;
          flex-direction: column;
          align-items: center; /* Center items instead of aligning them to the end */
          position: absolute;
          right: 5vw;
          top: 50vh;
          transform: translateY(
            -50%
          ); /* Adjust the position to center it vertically */
          background-color: #f8f8f8; /* White background */
          border-radius: 15px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
          padding: 20px;
          width: 300px; /* Set a specific width */
          text-align: center; /* Center text and content */
          margin: 0; /* Reset margin */
        }
        #pokeName {
          color: #333; /* Dark gray color for the Pokémon's name */
          margin: 10px 0; /* Space above and below the name */
        }
  
        #pokeGif {
          max-width: 100%; /* Ensure the image is not too big */
          height: auto; /* Maintain aspect ratio */
          border-radius: 10px; /* Slightly round the corners of the image */
        }
  
        .cryButton {
          background-color: var(--secondary-color); /* Theme color */
          color: #fff; /* White text */
          border: none; /* No border */
          border-radius: 5px; /* Rounded corners */
          padding: 10px 20px; /* Padding for spacing */
          margin-top: 10px; /* Space above the button */
          cursor: pointer; /* Cursor indicates clickable */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Shadow for depth */
          transition: background-color 0.3s, transform 0.3s; /* Smooth transitions */
        }
  
        .cryButton:hover {
          background-color: #a30000; /* Darker shade on hover */
          transform: translateY(-2px); /* Lift button slightly */
        }
  
        #timer {
          background-color: #e0e0e0; /* Light grey background */
          padding: 5px 10px; /* Padding inside the timer */
          border-radius: 5px; /* Rounded corners */
          margin-bottom: 10px; /* Space below the timer */
        }
  
        #timer.active {
          background-color: #4caf50; /* Active state color */
        }
  
        #warning {
          font-size: 0.8em; /* Smaller text size */
          color: #555; /* Lighter text color */
        }
  
        #warning span {
          font-weight: bold; /* Make 'loud' bold for emphasis */
        }
  
        /* Quesiton Nav Button Styling */
  
        #questionNavButtons {
          margin-top: 1vh;
          margin-bottom: 1vh;
        }
  
        #questionNavButtons {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
  
        #questionNavButtons a {
          margin: 0 2vw;
          text-align: center;
        }
  
        #questionNavButtons button {
          background-color: #fff; /* White background */
          color: #333; /* Dark text color for contrast */
          border: 2px solid var(--secondary-color); /* Solid border with theme color */
          border-radius: 20px; /* Rounded corners for a modern look */
          padding: 10px 20px; /* Padding for spacing */
          font-size: 16px; /* Readable font size */
          cursor: pointer; /* Cursor indicates button */
          transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s; /* Smooth transitions for interactivity */
          margin: 0 10px; /* Margin for spacing between buttons */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for depth */
        }
  
        #questionNavButtons button:hover {
          background-color: var(--secondary-color); /* Theme color on hover */
          color: #fff; /* White text color on hover */
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Larger shadow for lifting effect */
        }
  
        #questionNavButtons button:active {
          transform: scale(0.95); /* Button scales down when clicked */
        }
  
        /* Footer Styling */
  
        footer {
          flex: 0.3;
        }
  
        .FooterEl {
          display: flex;
          flex-direction: row;
          box-sizing: border-box;
          align-items: center;
          justify-content: center;
          background-color: var(--secondary-color);
        }
  
        .FooterEl div p {
          color: var(--font-color-secondary-background);
        }
        </style>
              <title>Virtus Scientia Academy (VSA) | Home Page</title>
      </head>`;
};
