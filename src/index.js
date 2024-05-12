import './styles.css';
import navbar from './navbar';

function component() {
  return navbar();
  // const navbar = document.querySelector('#navbar');
  // const pokeball = new Image();
  // pokeball.src = pokeballIcon;
  // pokeball.classList.add('pokeball-icon');
  // const pokemonName = document.createElement('h1');
  // pokemonName.textContent = 'Pokemon Name';
  // pokemonName.classList.add('pokemon-name-container');
  // pokemonName.prepend(pokeball);
  // navbar.appendChild(pokemonName);
  // return navbar;
}

document.body.appendChild(component());
