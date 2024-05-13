import './styles.css';
import display_pokemon_info_page from './display_pokemon_info_page';
import pokeballIcon from './pokeball_icon.png';
import fetchPokemonData from './fetch_pokemon_data';

const pokeballIconImage = document.querySelector('#pokeballIcon');
const pokemonName = document.querySelector('#pokemonName');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');

function component() {
  pokeballIconImage.src = pokeballIcon;

  searchButton.addEventListener('click', () => {
    fetchPokemonData(searchInput.value).then((data) => {
      pokemonName.textContent = data.name;
    });
  });

  display_pokemon_info_page();
}

component();
