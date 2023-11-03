let pokeList;

const displayPokemon = (pokemon) => {
  pokemon.forEach((mon) => {
    let article = document.createElement("article");

    let h3 = document.createElement("h3");
    h3.textContent = mon.name;

    let h4 = document.createElement("h4");
    h4.textContent = mon.type;

    let img = document.createElement("img");
    img.setAttribute("src", mon.sprite);
    img.setAttribute("alt", mon.name);

    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(img);

    document.querySelector("#pokemon").appendChild(article);
  });
};

const getPokemon = async () => {
  const response = await fetch("scripts/pokemon.json");
  pokeList = await response.json();
  displayPokemon(pokeList);
};

const reset = () => {
  document.querySelector("#pokemon").innerHTML = "";
};

const filterAndSort = () => {
  reset();

  let filter = document.querySelector("#typeFilter").value;
  let sortBy = document.querySelector("#sortBy").value;

  let filteredPokemon;

  if (filter !== "All") {
    filteredPokemon = pokeList.filter((pokemon) => {
      return pokemon.type.some((type) => type.toLowerCase() === filter.toLowerCase());
    });
  } else {
    filteredPokemon = pokeList;
  }

  switch (sortBy) {
    case "number":
      break;
    case "name (a to z)":
      filteredPokemon.sort((pokemon1, pokemon2) =>
        pokemon1.name.toLowerCase() > pokemon2.name.toLowerCase() ? 1 : -1
      );
      break;
    case "name (z to a)":
      filteredPokemon.sort((pokemon1, pokemon2) =>
        pokemon1.name.toLowerCase() > pokemon2.name.toLowerCase() ? -1 : 1
      );
      break;
    default:
      break;
  }

  displayPokemon(filteredPokemon);
};

document.querySelector("#typeFilter").addEventListener("change", filterAndSort);
document.querySelector("#sortBy").addEventListener("change", filterAndSort);

getPokemon();
