## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps


# Broad Objective
- Create Pokemon catcher web app. The app will display 3 Pokemon at a time. 
- The user can select any of the three
and click a button to "capture" the pokemon. 
- The pokedex is our cart. The pokedex will display all Pokemon
encountered as well as Pokemon captured. 
- A results page will display Single-session results. 
- Allow user to clear local storage and try again.

#State
- Creat an array called "pokedex". The array will have 3 key-value pairs: `name`, `captured`, and `encountered`.
    - ```const pokedex = [
        {
            name: string,
            captured: number,
            encountered: number
        },
    ];```
    - Initial state: captures = 0 and encountered = 1. 


#Events
- on click
    - send selected pokemon to pokedex
    - Which pokemon is selected? 
        - Create function that takes in the selected pokemon and matches it to the right one.
            - ```capturePokemon(selectedPokemon)```
        - Increment capture state
        - Check whether capture state is at or below 10.
            - redirect if caputre state is at 10.
            - if not, `generateThreePokemon`.
    - onLoad
        - generateThreePokemon

# Functions
- generateThreePokemon
    - Math.random() to get 3 random indexes
        - Use a while loop to ensure uniqueness
            - `while` they're not unique, generate three random numbers.
    - Use the three indexes to get three pokemon
    increment the encountered property for all pokemon. Is it in th epokedex yet? if not, `{ pokemon: 'name', captured: 0, encountered: 1}`. If it is in the pokedex, increment the encountered property. 
- Local storage utils
    - getPokedex
    - encoounterPokemon
    - capturePokemon


## What do I need? 
- Set up inital design using hard-coded HTML/CSS. 
    - Display 3 images
    - make 3 radio buttons
        - `<label><input type='radio' name='pokemon'></label>`
    - Create "capture" button

- Create a function that will generate random pokemon

- capturePokemon(selectedPokemon)
    i. grab pokedex from localStorage
    ii. increment the captured property for just this pokemon

