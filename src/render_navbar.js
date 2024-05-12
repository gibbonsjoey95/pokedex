import pokeballIcon from './pokeball_icon.png';
import fetchPokemonData from './fetch_pokemon_data';

const renderNavbar = () => {
  const navbar = document.querySelector('#navbar');

  const pokeball = new Image();
  pokeball.src = pokeballIcon;
  pokeball.classList.add('pokeball-icon');

  const pokemonName = document.createElement('h1');
  pokemonName.classList.add('pokemon-name-container');
  pokemonName.prepend(pokeball);

  const searchContainer = document.createElement('div');

  const searchInput = document.createElement('input');

  const searchButton = document.createElement('button');
  searchButton.textContent = 'Search';
  searchButton.addEventListener('click', () => {
    fetchPokemonData(searchInput.value).then((data) => {
      pokemonName.textContent = data.name;
      pokemonName.prepend(pokeball);
    });
  });

  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);

  navbar.appendChild(pokemonName);
  navbar.appendChild(searchContainer);
};

export default renderNavbar;
