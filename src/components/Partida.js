import React from 'react';


export default class Partida extends React.Component {
    constructor(){
        super();   
    }


    render(){
        return (
            <div>
                <h2>Estadio</h2>
                <div>
                    <span>Dia</span>
                    <span> - </span>
                    <span>Hora</span>
                </div>
            </div>
        )
    }
}