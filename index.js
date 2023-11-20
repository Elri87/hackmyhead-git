import alienPlanets from "./alienPlanets.js";

//function to display
function displayAlienPlanets() {
  const container = document.querySelector(".alien-planets-container");

  alienPlanets.alienPlanets.forEach((planet) => {
    const planetElement = document.createElement("div");
    planetElement.classList.add("planet-container");

    // Create separate elements for name and emoji
    const nameElement = document.createElement("h2");
    nameElement.textContent = planet.name;

    const emojiElement = document.createElement("p");
    emojiElement.textContent = planet.emoji;

    // Append name and emoji elements to the planet container
    planetElement.appendChild(nameElement);
    planetElement.appendChild(emojiElement);

    // Append the planet container to the main container
    container.appendChild(planetElement);
  });
}

// Call the function to display the planets
displayAlienPlanets();
