import pokeballIcon from './pokeball_icon.png';

const displayPokemonInfoPage = () => {
  const content = document.querySelector('#content');
  content.classList.add('content');

  const h1 = document.createElement('h1');
  h1.textContent = 'teest';

  const pokemonImageContainer = document.createElement('div');
  pokemonImageContainer.classList.add('pokemon-image-container');

  const pokemonImage = new Image();
  pokemonImage.src = pokeballIcon;

  pokemonImageContainer.appendChild(pokemonImage);

  const pokemonInfoContainer = document.createElement('div');
  pokemonInfoContainer.classList.add('pokemon-info-container');

  content.appendChild(pokemonImageContainer);
  content.appendChild(pokemonInfoContainer);

  return content;
};

export default displayPokemonInfoPage;
