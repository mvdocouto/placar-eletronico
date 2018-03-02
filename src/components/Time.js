import React from 'react';
import BotaoGol from './BotaoGol'

export default class Contador extends React.Component {
    constructor(){
        super();       
    }


    render(){
        return (
            <div>
                <h1>{this.props.nome}</h1>
                <h2>{this.props.gols}</h2>
                <BotaoGol  marcarGol={}/>
            </div>
        )
    }
}