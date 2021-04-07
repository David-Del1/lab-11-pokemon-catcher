import { getPokedex } from '../local-storage-utils.js';

const pokedex = getPokedex();
const resetButton = document.getElementById('reset');

//console.log(pokedex);


var ctx = document.getElementById('myChart').getContext('2d');

// we have array of objects with id, captured, and encountered

//We want: an array of integers (captured), and an array of the names

const names = [];
const captured = [];
const encountered = [];

for (let pokemon of pokedex) {
    names.push(pokemon.id);
    captured.push(pokemon.captured);
    encountered.push(pokemon.encountered);
}

resetButton.addEventListener('click', () => {
    console.log('hello!');
    window.location = '../index.html';

    localStorage.clear();
});


var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: 'Pokemon Captured',
                data: captured,
                backgroundColor: 'lightblue',
                borderColor: 'steelblue',
                borderWidth: 3
            },
            {
                label: 'Pokemon Encountered',
                data: encountered,
                backgroundColor: 'pink',
                borderColor: 'magenta',
                borderWidth: 3
            },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
