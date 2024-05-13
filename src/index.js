import './styles.css';
import display_pokemon_info_page from './display_pokemon_info_page';
import pokeballIcon from './pokeball_icon.png';

const pokeballIconImage = document.querySelector('#pokeballIcon');

function component() {
  pokeballIconImage.src = pokeballIcon;

  display_pokemon_info_page();
}

component();
