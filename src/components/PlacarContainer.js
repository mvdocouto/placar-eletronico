import React from 'react';
import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends React.Component {
   
    render(){
        return (
           <div>
               <div>
                   <h2>Time da Casa</h2>
                   <Time/>
               </div>
               <div>
                   <Partida/>
               </div>
               <div>
                    <h2>Time Visitante</h2>
                    <Time/>
               </div>
           </div>
        )
    }
}