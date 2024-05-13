import pokeballIcon from './pokeball_icon.png';

const displayPokemonInfoPage = (image) => {
  const pokemonContent = document.createElement('div');
  pokemonContent.classList.add('pokemon-content');

  const h1 = document.createElement('h1');
  h1.textContent = 'teest';

  const pokemonImageContainer = document.createElement('div');
  pokemonImageContainer.classList.add('pokemon-image-container');

  const pokemonImage = new Image();
  pokemonImage.src = image;
  pokemonImage.classList.add('pokemon-image');

  pokemonImageContainer.appendChild(pokemonImage);

  const pokemonInfoContainer = document.createElement('div');
  pokemonInfoContainer.classList.add('pokemon-info-container');

  pokemonContent.appendChild(pokemonImageContainer);
  pokemonContent.appendChild(pokemonInfoContainer);

  return pokemonContent;
};

export default displayPokemonInfoPage;
