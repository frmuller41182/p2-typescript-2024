/*
Fields I want to keep from the Pokemon API for my TS Class:

1. species.name
2. sprites.other.showdown.front_default
3. cries.latest
*/

export class Pokemon {
  public species: string;
  public sprite: string;
  public cry: string;
  constructor(species: string, sprite: string, cry: string) {
    this.species = species;
    this.sprite = sprite;
    this.cry = cry;
  }
}

export const getPokemon = async () => {
  const pokemonId = Math.floor(Math.random() * 100 + 1);
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  const result = await response.json();
  const pokemon = new Pokemon(
    result.species.name,
    result.sprites.other.showdown.front_default,
    result.cries.latest
  );
  console.log(pokemon);
  return pokemon;
};

getPokemon();
