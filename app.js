import { generateThreePokemon } from './data-utils.js';
import { capturePokemon } from './local-storage-utils.js';
import { findByPokemonName } from './utils.js'; 
// import functions and grab DOM elements

const button = document.querySelector('button');


let totalCaptures = 0;

function createPokemonDom() {

    const pokeRadio1 = document.querySelector('#poke1-radio');
    const pokeRadio2 = document.querySelector('#poke2-radio');
    const pokeRadio3 = document.querySelector('#poke3-radio');

    const pokeLabel2 = document.querySelector('#poke2-label');
    const pokeLabel3 = document.querySelector('#poke3-label');
    const pokeLabel1 = document.querySelector('#poke1-label');

    const pokeImage1 = document.querySelector('#poke1-img');
    const pokeImage2 = document.querySelector('#poke2-img');
    const pokeImage3 = document.querySelector('#poke3-img');


    const threePokemon = generateThreePokemon();

    

    pokeImage1.src = threePokemon[0].url_image;
    pokeLabel1.append(pokeImage1);
    pokeRadio1.value = threePokemon[0].pokemon;

    

    pokeImage2.src = threePokemon[1].url_image;
    pokeLabel2.append(pokeImage2);
    pokeRadio2.value = threePokemon[1].pokemon;

    

    pokeImage3.src = threePokemon[2].url_image;
    pokeLabel3.append(pokeImage3);
    pokeRadio3.value = threePokemon[2].pokemon;
}

createPokemonDom();

button.addEventListener('click', () => {
    totalCaptures++;
    const selectedRadio = document.querySelector('input:checked');
    console.log(selectedRadio);

    const pokeObject = findByPokemonName(selectedRadio.value);
    console.log(pokeObject);

    // find the pokemon that's selected
    capturePokemon(pokeObject);
    if (totalCaptures > 9) {
        window.location = './pokedex/index.html';
    }
    createPokemonDom();
    
});








// initialize state

// set event listeners to update state and DOM