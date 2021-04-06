// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('if stringyPokedex exists, return parsedPokedex. If not, return an empty array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const stringyPokedex = localStorage.getItem('POKEDEX');
    const expected = stringyPokedex;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
