import './styles.css';
import pokeballIcon from './pokeball_icon.png';

function component() {
  const content = document.createElement('div');
  content.classList.add('content');

  const pokeball = new Image();
  pokeball.src = pokeballIcon;
  pokeball.classList.add('pokeball-icon');

  const pokemonName = document.createElement('h1');
  pokemonName.textContent = 'Pokemon Name';
  pokemonName.classList.add('pokemon-name-container');

  pokemonName.prepend(pokeball);

  content.appendChild(pokemonName);

  return content;
}

document.body.appendChild(component());
