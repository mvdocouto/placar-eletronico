import React from 'react';
import BotaoGol from './BotaoGol'

export default class Contador extends React.Component {
    constructor(){
        super();       
    }


    render(){
        return (
            <div>
                <h1>Nome do Time</h1>
                <h2>0</h2>
                <BotaoGol />
            </div>
        )
    }
}