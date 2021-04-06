import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';

// get pokedex
export function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);

    if (!stringyPokedex) return [];

    const parsedPokedex = JSON.parse(stringyPokedex);

    return parsedPokedex;
}

export function setPokedex(parsedPokedex) {
    const stringyPokedex = JSON.stringify(parsedPokedex);

    localStorage.setItem(POKEDEX, stringyPokedex);
}



// encounter pokemon
export function encounterPokemon(pokemon) {
    const pokedex = getPokedex();
    // is this pokemon already in here?
    const matchPokedexPokemon = findById(pokedex, pokemon.pokemon);

    //if so, increment the encountered counter
    if (matchPokedexPokemon) {
        matchPokedexPokemon.encountered++;
    } else {
        //else initialize a new pokedex object
        const newPokedexItem = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1
        };

        pokedex.push(newPokedexItem);
    }

    setPokedex(pokedex);

    return pokedex;
}

export function capturePokemon(pokemon) {
    const pokedex = getPokedex();
    // is this pokemon already in here?
    const matchPokedexPokemon = findById(pokedex, pokemon.pokemon);

    //if so, increment the encountered counter
    matchPokedexPokemon.captured++;

    setPokedex(pokedex);

    return pokedex;
}