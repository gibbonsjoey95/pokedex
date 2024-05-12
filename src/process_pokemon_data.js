const processPokemonData = (data) => {
  const { name, id, height, weight, sprites } = data;
  const { front_default } = sprites;

  return { name, id, height, weight, front_default };
};

export default processPokemonData;
