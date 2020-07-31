import React, { Component } from 'react';
import './pokemon.css'
// const links = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const links ='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (number)=>(number <= 999? `00${number}`.slice(-3):number)

class Poke extends Component {

    render() { 
        let imgSrc = `${links}${padToThree(this.props.id)}.png`
        console.log(imgSrc)
        return ( 
            <div className='container'>
            
                <div className='box'>
            <h1>{this.props.name}</h1>
            <img src={imgSrc}/>
        <div>Type: {this.props.type}</div>
        <div>Base_Exp: {this.props.exp}</div>
                </div>
            </div>
         );
    }
}
 
export default Poke;