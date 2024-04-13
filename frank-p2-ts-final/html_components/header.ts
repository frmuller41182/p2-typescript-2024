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
      }
      .user {
        font-family: sans-serif;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: .4rem;
        border-bottom: 1px solid #ddd;
      }
      .user img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        margin-right: 0.7rem;
      }
      .user .name {
        font-weight: bold;
      }
      .user .email {
        font-family: monospace;
      }
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
        font-size: 2rem;
        max-height: 7vh;
        margin-top: 0;
        width: auto;
        flex: 1;
      }
      
      #TopBarTitle h1 {
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
      
      #TopBarTitle {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
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
        }
        .user {
          font-family: sans-serif;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: .4rem;
          border-bottom: 1px solid #ddd;
        }
        .user img {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          margin-right: 0.7rem;
        }
        .user .name {
          font-weight: bold;
        }
        .user .email {
          font-family: monospace;
        }
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
            font-size: 2rem;
            max-height: 7vh;
            margin-top: 0;
            width: auto;
            flex: 1;
          }
          
          #TopBarTitle h1 {
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
          
          #TopBarTitle {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .imageQuestion {
            size: 2vh;
            height: 30vh;
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
