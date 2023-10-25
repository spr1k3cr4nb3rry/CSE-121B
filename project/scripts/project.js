/* Declare and initialize global variables */
const pokemonElement = document.querySelector('#pokemon');
let pokemonList = [];

// Function to display Pokémon
const displayPokemon = () => {
    reset();

    pokemonList.results.forEach(pokemon => {
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = pokemon.name;

        const url = pokemon.url;
        getPokemonData(url, article);

        article.appendChild(h3);
        pokemonElement.appendChild(article);
    });
};

// Function to get individual Pokémon data
const getPokemonData = async (url, article) => {
    const response = await fetch(url);
    if (response.ok) {
        const currentPokemon = await response.json();
        
        const img = document.createElement('img');
        img.src = currentPokemon.sprites.front_default;
        img.alt = currentPokemon.name;

        article.appendChild(img);
    } else {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
};

// Function to fetch a list of Pokémon
const getPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292');

    if (response.ok) {
        pokemonList = await response.json();
        displayPokemon();
    } else {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
};

/* reset Function */
const reset = function () {
    while (pokemonElement.firstChild) {
        pokemonElement.removeChild(pokemonElement.firstChild);
    }
};

/* Event Listener */
document.querySelector('#typeFilter').addEventListener('change', () => {
    sortBy(pokemonList);
});

getPokemon();