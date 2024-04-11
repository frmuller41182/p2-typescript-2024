export const topBar = () => {
  return `<header>
    <section id="topBar">
      <div class="topBarEl">
        <div id="topLogo">
          <img src="/images/VSA_Logo_Top_bar.png" alt="VSA Academy Logo" />
        </div>
        <div id="TopBarTitle">
          <h1 id="h1topbar">Virtus Scientia Academy</h1>
        </div>
        <div id="ButtonContainer">
          <button type="button" id="buttoncolorchange">Change Theme</button>
          <script>
            const buttonselected = document.getElementById('buttoncolorchange');
            buttonselected.addEventListener('click', () => {
              console.log("I have been clicked!")
              document.documentElement.style.setProperty('--primary-color', '#3B2F1F');
              document.documentElement.style.setProperty('--secondary-color', '#7F4E00');
            });
          </script>
        </div>
      </div>
    </section>
  </header>`;
};
