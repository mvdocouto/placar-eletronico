import React from 'react';
import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends React.Component {
       
    render(){
        return (
           <div>
               <div style={{ float: "left", width: "250px", marginRight: "10px", border: "1px solid #ccc", padding: "5px 5x", textAlign: "center", borderRadius: "5px"}}>
                   <h3>Casa</h3>
                   <Time/>
               </div>
               <div style={{ float: "left", width: "150px", marginRight: "10px" , padding: "10px 10px", textAlign: "center"}}>
                   <Partida/>
               </div>
               <div style={{ float: "left", width: "250px", marginRight: "10px", border: "1px solid #ccc", padding: "5px 5px", textAlign: "center", borderRadius: "5px"}}>
                    <h3>Visitante</h3>
                    <Time/>
               </div>
               <div style={{ clear: "both"}}></div>
           </div>
        )
    }
}