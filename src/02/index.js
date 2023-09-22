const {BuscarPokemon}=require ('./pokemon')
const pokemonId = 4;
BuscarPokemon(pokemonId)
  .then((nombre) => {
    console.log(`Nombre del Pokémon: ${nombre}`);
  })
  .catch((error) => {
    console.error('Error al buscar el Pokémon:', error.message);
  });