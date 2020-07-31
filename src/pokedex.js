import React, { Component } from 'react';
import Poke from './poke';
import './pokedeck.css'

class Pokedex extends Component {
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
        return (
        <div className='Pokemon'>
            <h1>Pokedex!</h1>
            <div className='Pokemon-card'>
            {this.props.Pokemon.map((pkmon) => (
                <Poke id={pkmon.id} name={pkmon.name} type={pkmon.type} exp={pkmon.base_experience}/>
            ) )}
        </div>
         </div> 
        );
    }
}
 
export default Pokedex;