import './styles.css';
import displayPokemonInfoPage from './display_pokemon_info_page';
import pokeballIcon from './pokeball_icon.png';
import fetchPokemonData from './fetch_pokemon_data';

const pokeballIconImage = document.querySelector('#pokeballIcon');
const pokemonName = document.querySelector('#pokemonName');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const content = document.querySelector('#content');

function component() {
  pokeballIconImage.src = pokeballIcon;

  searchButton.addEventListener('click', () => {
    content.textContent = '';

    fetchPokemonData(searchInput.value).then((data) => {
      pokemonName.textContent = data.name;
      console.log(data);
      content.appendChild(displayPokemonInfoPage(data.front_default));
    });
  });
}

component();
