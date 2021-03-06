
import pokeData from './pokemon-list.js';

export function findById(array, id) {
    return array.find(item => id === item.id);
}

export function findByPokemonName(name) {
    return pokeData.find(poke => name === poke.pokemon);
}

