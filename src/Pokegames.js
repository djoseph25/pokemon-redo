import React, { Component } from 'react';
import Pokedex from './pokedex';

class Pokegame extends Component {
    static defaultProps = { 
        Pokemon:[
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
        
    };
    render() { 
        //give random card to each hands
        let hand1= [];
        let hand2= [...this.props.Pokemon];
        while(hand1.length < hand2.length){
        let RandomIdx= Math.floor(Math.random() * hand2.length)
        let randomPokemon = hand2.splice(RandomIdx,1)[0];
        hand1.push(randomPokemon);
        }
        
        // Add up the total experience to find who is a winner
        //I will use reduce method to find the total Base_EXP
        let Base_Exp1 = hand1.reduce((exp, Pokemon) => exp + 
        Pokemon.base_experience,0);
        let Base_Exp2 = hand2.reduce((exp, Pokemon) => exp + 
        Pokemon.base_experience,0);


        return ( 
            <div>
            <Pokedex Pokemon={hand1} exp={Base_Exp1}
             isWinner={Base_Exp1 > Base_Exp2}
            
            />
            <Pokedex Pokemon={hand2} exp={Base_Exp2}
            isWinner={Base_Exp2 > Base_Exp1}
            />
            </div>

         );
    }
}
 
export default Pokegame;