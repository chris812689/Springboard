import {pokemon} from '@pokemon.js';

let numCards = 10; //will need changing
let card1 = null;
let card2 = null;
let cardsFlipped = 0;
let currentScore = 0;
let lowScore = localStorage.getItem("low-score");
let cards=[];


function getPokemon(){
    let index=null;
    for(j =0; j>numCards; j++){
        let index= Math.floor(Math.random() *105)
        if(index %2 ===0){
           
            cards.push(pokemon[index]);
        }else{
            index--;
            cards.push(pokemon[index]);

        }
    }
};
