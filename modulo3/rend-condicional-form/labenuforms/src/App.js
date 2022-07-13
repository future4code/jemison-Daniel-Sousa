import React from "react";
import { useState } from "react";
import {Etapa1} from "./Components/Etapa1/Etapa1"
import {Etapa2} from "./Components/Etapa2/Etapa2"
import {Etapa3} from "./Components/Etapa3/Etapa3"
import {Final} from "./Components/Final/Final"
import styled from "styled-components"

export const ConteinerPrinipal = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: 2rem;

    input{
      margin-top: 10px;
      margin-bottom: 10px;
      width:15vw;
      height: 5vh;
    }

    li{
      font-size: 20px;
    }

    select{
      margin-top:10px;
      width:16vw;
      height: 5vh;
    }

    button{
      width: 16vw;
      height: 5vh;
      background: black;
      color: white;
      font-size: 1.2rem;
    }


    p{
      font-size:1.8rem;
    }
`

function App() {
  const [etapa, setEtapa] = useState(1)

  const proximaEtapa = () => {
    setEtapa(etapa + 1)
  }
  const renderProxima =() =>{
    switch(etapa){
      case 1:
        return <Etapa1/>
        break;
      case 2:
        return <Etapa2/>
        break;
      case 3:
          return <Etapa3/>
          break;
      case 4:
          return <Final/>
          break;
      default:
        break
    }
  }

  
 
  return (
    <ConteinerPrinipal>
      {renderProxima()}
      <button  onClick={proximaEtapa}> Proxima Etapa</button>
     </ConteinerPrinipal>
  );
}

export default App;
