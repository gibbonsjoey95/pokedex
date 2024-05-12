import pokeballIcon from './pokeball_icon.png';

const navbar = () => {
  const navbar = document.querySelector('#navbar');

  const pokeball = new Image();
  pokeball.src = pokeballIcon;
  pokeball.classList.add('pokeball-icon');

  const pokemonName = document.createElement('h1');
  pokemonName.textContent = 'Pokemon Name';
  pokemonName.classList.add('pokemon-name-container');

  pokemonName.prepend(pokeball);

  const searchContainer = document.createElement('div');

  const searchInput = document.createElement('input');

  const searchButton = document.createElement('button');
  searchButton.textContent = 'Search';

  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);

  navbar.appendChild(pokemonName);
  navbar.appendChild(searchContainer);

  return navbar;
};

export default navbar;
