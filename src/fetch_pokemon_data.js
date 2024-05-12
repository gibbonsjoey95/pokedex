import processPokemonData from './process_pokemon_data';

async function fetchPokemonData(input) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`, {
    mode: 'cors',
  });
  const pokemonData = await response.json();

  const processedPokemonData = processPokemonData(pokemonData);

  //   console.log(processedPokemonData);
  return processedPokemonData;
}

export default fetchPokemonData;
