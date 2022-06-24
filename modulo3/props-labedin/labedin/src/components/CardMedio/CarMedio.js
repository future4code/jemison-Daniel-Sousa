import React from "react";
import './CardMedio.css';


function CardMedio (props){
    return(
        <div className="card-medio">
            <img src={props.imagem} />
            <p> { props.descricao }</p>
            

        </div>



    )
}


export default CardMedio