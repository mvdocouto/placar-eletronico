import React from 'react';
import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Maracana/RJ",
        data: "28/02/2017",
        horario: "22:00"
    },
    casa: {
        nome: "Flamengo"
    },
    visitante: {
        nome: "River Plate"
    }
}


export default class App extends React.Component {
    render(){
        return (
        <div>
            <PlacarContainer partida={dados.partida}
                casa={dados.casa}
                visitante={dados.visitante}/>
        </div>
        )
    }
}