import React from "react";
import './CardMedio.css';


function CardMedio (props){
    return(
        <div className="card-medio">
            <img src={ props.imagem } />
            <p> { props.titulo }</p>
            <span>{ props.descricao}</span>
        </div>
    )
}


export default CardMedio